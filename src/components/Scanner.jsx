import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import {
  Camera,
  Flashlight,
  SwitchCamera,
  Barcode,
  Search,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Target,
  Plus,
} from 'lucide-react';
import { FALLBACK_PRODUCTS } from '../data/fallbackProducts';
import { FOOD_GOALS_META } from '../data/foodGoalsMeta.js';

/* -------------------------------------------------------------------------- */
/* Constants (module scope: created once, never re-allocated per render)      */
/* -------------------------------------------------------------------------- */

const READER_ID = 'reader';

// Food packaging is EAN/UPC; dropping QR_CODE speeds up each decode pass.
// Add it back here if you need QR support.
const SCAN_FORMATS = [
  Html5QrcodeSupportedFormats.EAN_13,
  Html5QrcodeSupportedFormats.EAN_8,
  Html5QrcodeSupportedFormats.UPC_A,
  Html5QrcodeSupportedFormats.UPC_E,
  Html5QrcodeSupportedFormats.CODE_128,
];

// One source of truth for the decode region AND the visual overlay.
const QR_BOX = { width: 260, height: 160 };

const SCAN_CONFIG = {
  fps: 10,
  qrbox: QR_BOX,
  disableFlip: true, // barcodes are never mirrored; halves decode work
};

const DEFAULT_CAMERA = { facingMode: 'environment' };
const FALLBACK_CAMERA = { facingMode: 'user' };
const EMPTY_GOALS = [];
const DEMO_PRODUCTS = FALLBACK_PRODUCTS.slice(0, 6);

const CAMERA_ERRORS = {
  secure_origin: {
    title: 'HTTPS Connection Required',
    message:
      'Camera access requires HTTPS or localhost. Browsers block video streams over unsecure HTTP IP addresses.',
  },
  denied: {
    title: 'Camera Access Required',
    message:
      'Camera permission was blocked. Tap "How to Unblock Camera" below to grant permission in site settings.',
  },
  not_found: {
    title: 'No Camera Found',
    message: 'No active camera hardware detected on this device.',
  },
  in_use: {
    title: 'Camera Unavailable',
    message: 'The camera is being used by another app or tab. Close it and try again.',
  },
  unknown: {
    title: 'Camera Access Required',
    message: 'Unable to start the camera. Please check permissions and try again.',
  },
};

const isSecureOrigin = () =>
  typeof window !== 'undefined' &&
  (window.isSecureContext ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    Boolean(navigator?.mediaDevices?.getUserMedia));

// html5-qrcode rejects with either Error objects or plain strings.
function classifyCameraError(err) {
  const text = `${err?.name ?? ''} ${err?.message ?? err ?? ''}`;
  if (/NotAllowed|Permission|denied/i.test(text)) return 'denied';
  if (/NotFound|DevicesNotFound|device not found/i.test(text)) return 'not_found';
  if (/NotReadable|TrackStart|could not start video|in use/i.test(text)) return 'in_use';
  return 'unknown';
}

/* -------------------------------------------------------------------------- */
/* Camera lifecycle hook                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Owns the Html5Qrcode instance. Key properties:
 *  - Start/stop calls are serialized on a promise queue, so React StrictMode
 *    double-mounts, camera switches and fast taps can never race each other.
 *  - Starts directly with facingMode "environment": one permission prompt,
 *    no separate getCameras()/getUserMedia() round-trip before first frame.
 *  - Camera list is read with enumerateDevices() AFTER start (no second stream).
 *  - Releases the camera when the tab is hidden and resumes when visible.
 *  - Guards against multiple decode callbacks firing for a single scan.
 */
function useBarcodeScanner(onDetected) {
  const [status, setStatus] = useState('starting'); // starting | scanning | stopped | error
  const [error, setError] = useState(null); // { type, title, message } | null
  const [cameras, setCameras] = useState([]);
  const [activeCameraId, setActiveCameraId] = useState(null);
  const [torchOn, setTorchOn] = useState(false);
  const [torchSupported, setTorchSupported] = useState(false);

  const scannerRef = useRef(null);
  const queueRef = useRef(Promise.resolve());
  const mountedRef = useRef(true);
  const handledRef = useRef(false);
  const wantScanRef = useRef(false);
  const sourceRef = useRef(DEFAULT_CAMERA);
  const onDetectedRef = useRef(onDetected);

  // Always call the latest callback without restarting the camera.
  useEffect(() => {
    onDetectedRef.current = onDetected;
  }, [onDetected]);

  const enqueue = useCallback((task) => {
    const next = queueRef.current.catch(() => {}).then(task);
    queueRef.current = next;
    return next;
  }, []);

  const teardown = useCallback(async () => {
    const instance = scannerRef.current;
    scannerRef.current = null;
    if (instance) {
      try {
        if (instance.isScanning) await instance.stop();
        instance.clear();
      } catch (err) {
        console.warn('Error stopping scanner', err);
      }
    }
    if (mountedRef.current) {
      setStatus((s) => (s === 'error' ? s : 'stopped'));
      setTorchOn(false);
      setTorchSupported(false);
    }
  }, []);

  const stop = useCallback(() => enqueue(teardown), [enqueue, teardown]);

  const start = useCallback(
    (source = sourceRef.current) =>
      enqueue(async () => {
        await teardown();
        if (!mountedRef.current) return;

        sourceRef.current = source;
        wantScanRef.current = true;
        handledRef.current = false;
        setError(null);
        setStatus('starting');

        const instance = new Html5Qrcode(READER_ID, {
          formatsToSupport: SCAN_FORMATS,
          useBarCodeDetectorIfSupported: false, // false for maximum reliability across browsers
          verbose: false,
        });
        scannerRef.current = instance;

        try {
          await instance.start(
            source,
            SCAN_CONFIG,
            (decodedText) => {
              if (handledRef.current) return; // ignore repeat hits before stop completes
              handledRef.current = true;
              wantScanRef.current = false;
              navigator.vibrate?.(100);
              stop();
              onDetectedRef.current?.(decodedText);
            },
            () => {} // per-frame "not found" noise
          );
        } catch (err) {
          console.warn('Primary camera start failed:', err);
          const type = classifyCameraError(err);

          try {
            instance.clear();
          } catch {
            /* ignore cleanup error */
          }
          scannerRef.current = null;

          // If primary camera failed and permission was not denied, attempt fallback with a fresh instance
          if (type !== 'denied' && type !== 'secure_origin' && source !== FALLBACK_CAMERA) {
            try {
              console.info('Attempting fallback camera with new instance...');
              const fallbackInstance = new Html5Qrcode(READER_ID, {
                formatsToSupport: SCAN_FORMATS,
                useBarCodeDetectorIfSupported: false,
                verbose: false,
              });
              scannerRef.current = fallbackInstance;

              await fallbackInstance.start(
                FALLBACK_CAMERA,
                SCAN_CONFIG,
                (decodedText) => {
                  if (handledRef.current) return;
                  handledRef.current = true;
                  wantScanRef.current = false;
                  navigator.vibrate?.(100);
                  stop();
                  onDetectedRef.current?.(decodedText);
                },
                () => {}
              );
            } catch (fallbackErr) {
              console.warn('Fallback camera also failed:', fallbackErr);
              scannerRef.current = null;
              wantScanRef.current = false;
              if (mountedRef.current) {
                const finalType = classifyCameraError(fallbackErr);
                setError({ type: finalType, ...CAMERA_ERRORS[finalType] });
                setStatus('error');
              }
              return;
            }
          } else {
            wantScanRef.current = false;
            if (mountedRef.current) {
              setError({ type, ...CAMERA_ERRORS[type] });
              setStatus('error');
            }
            return;
          }
        }

        if (!mountedRef.current) return; // a queued teardown will release the camera
        setStatus('scanning');

        try {
          setTorchSupported(
            instance.getRunningTrackCameraCapabilities().torchFeature().isSupported()
          );
        } catch {
          setTorchSupported(false);
        }

        try {
          const deviceId = instance.getRunningTrackSettings()?.deviceId;
          if (deviceId) setActiveCameraId(deviceId);
          // Labels/ids are available now that permission is granted; this opens no new stream.
          const devices = await navigator.mediaDevices.enumerateDevices();
          if (mountedRef.current) {
            setCameras(
              devices
                .filter((d) => d.kind === 'videoinput')
                .map((d) => ({ id: d.deviceId, label: d.label }))
            );
          }
        } catch {
          /* switching cameras is optional */
        }
      }),
    [enqueue, teardown, stop]
  );

  // Mount: start camera. Unmount: release it. Also pause while tab is hidden.
  useEffect(() => {
    mountedRef.current = true;

    if (!isSecureOrigin()) {
      setError({ type: 'secure_origin', ...CAMERA_ERRORS.secure_origin });
      setStatus('error');
    } else {
      start(DEFAULT_CAMERA);
    }

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (wantScanRef.current) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      mountedRef.current = false;
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
    };
  }, [start, stop]);

  const switchCamera = useCallback(() => {
    if (cameras.length < 2) return;
    const idx = cameras.findIndex((c) => c.id === activeCameraId);
    const next = cameras[(idx + 1) % cameras.length];
    setActiveCameraId(next.id);
    start(next.id);
  }, [cameras, activeCameraId, start]);

  const toggleTorch = useCallback(async () => {
    const instance = scannerRef.current;
    if (!instance || status !== 'scanning') return;
    try {
      const next = !torchOn;
      await instance.getRunningTrackCameraCapabilities().torchFeature().apply(next);
      setTorchOn(next);
    } catch (e) {
      console.warn('Torch not supported on this device', e);
    }
  }, [status, torchOn]);

  return {
    status,
    error,
    canSwitchCamera: cameras.length > 1,
    torchOn,
    torchSupported,
    start,
    switchCamera,
    toggleTorch,
  };
}

/* -------------------------------------------------------------------------- */
/* Presentational subcomponents (memoized so camera state changes don't       */
/* re-render them, and typing in the barcode field doesn't re-render the      */
/* camera UI)                                                                 */
/* -------------------------------------------------------------------------- */

const STATUS_LABELS = {
  starting: 'Starting Camera',
  scanning: 'Scanner Live',
  stopped: 'Scanner Paused',
  error: 'Camera Unavailable',
};

const PermissionGuide = memo(function PermissionGuide() {
  return (
    <ol className="text-left text-xs text-slate-300 font-medium leading-relaxed list-decimal pl-4 space-y-1 max-w-[260px]">
      <li>Tap the lock or settings icon in the address bar.</li>
      <li>Open Site settings and set Camera to Allow.</li>
      <li>On iPhone: Settings, Safari, Camera, then Allow.</li>
      <li>Come back here and tap Grant Camera Permission.</li>
    </ol>
  );
});

const CameraErrorOverlay = memo(function CameraErrorOverlay({
  error,
  showGuide,
  onToggleGuide,
  onRetry,
}) {
  const isSecure = error.type === 'secure_origin';
  return (
    <div
      role="alert"
      className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-5 text-center z-10 space-y-3 overflow-y-auto"
    >
      <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
        {isSecure ? <ShieldAlert className="w-6 h-6" /> : <Camera className="w-6 h-6" />}
      </div>

      <div className="space-y-1 max-w-[260px]">
        <h4 className="text-sm font-extrabold text-white">{error.title}</h4>
        {showGuide ? (
          <PermissionGuide />
        ) : (
          <p className="text-slate-300 text-xs font-medium leading-relaxed">{error.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[220px] pt-1">
        <button
          onClick={onRetry}
          className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-emerald-400/20 active:scale-95"
        >
          <Camera className="w-4 h-4" /> Grant Camera Permission
        </button>
        {error.type === 'denied' && (
          <button
            onClick={onToggleGuide}
            className="w-full text-[11px] font-bold text-slate-400 hover:text-slate-200 underline py-1"
          >
            {showGuide ? 'Hide Guide' : 'How to Unblock Camera'}
          </button>
        )}
      </div>
    </div>
  );
});

const ScanFrame = memo(function ScanFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6">
      <div
        className="relative rounded-2xl border-2 border-emerald-400/80 shadow-[0_0_0_9999px_rgba(15,23,42,0.65)] overflow-hidden"
        style={{ width: QR_BOX.width, height: QR_BOX.height }}
      >
        <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-emerald-400 rounded-tl" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-emerald-400 rounded-tr" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-emerald-400 rounded-bl" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-emerald-400 rounded-br" />

        <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10B981] animate-scan-line motion-reduce:animate-none" />

        <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="text-[11px] font-semibold tracking-wider text-emerald-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
            Align Barcode within Box
          </span>
        </div>
      </div>
    </div>
  );
});

const GoalsBar = memo(function GoalsBar({ goalIds, onEdit }) {
  return (
    <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200/80 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Target className="w-4 h-4 text-emerald-600" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            My Active Food Goals ({goalIds.length})
          </h3>
        </div>
        <button
          onClick={onEdit}
          className="text-[11px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
        >
          Edit Goals <Plus className="w-3 h-3" />
        </button>
      </div>

      {goalIds.length === 0 ? (
        <p className="text-xs text-slate-400 italic">
          No food goals selected yet. Tap "Edit Goals" to choose your health priorities.
        </p>
      ) : (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {goalIds.map((goalId) => {
            const meta = FOOD_GOALS_META[goalId] || { title: goalId, icon: '🟢' };
            return (
              <span
                key={goalId}
                className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-extrabold flex items-center gap-1 shadow-2xs"
              >
                <span>{meta.icon}</span> {meta.title}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
});

const ManualEntry = memo(function ManualEntry({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) onSubmit(value);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor="manual-barcode"
          className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5"
        >
          <Barcode className="w-4 h-4 text-emerald-600" />
          Manual Barcode Entry
        </label>
        <span className="text-[11px] text-slate-400 font-medium">EAN-13 / UPC</span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          id="manual-barcode"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={14}
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/\D/g, ''))}
          placeholder="Type barcode (e.g. 8901058851234)"
          className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow placeholder:text-slate-400 text-slate-800"
        />
        <button
          type="submit"
          disabled={!value}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 transition-colors shadow-md shadow-emerald-600/20"
        >
          Analyze
          <ChevronRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
});

const DemoProducts = memo(function DemoProducts({ onSelect, onOpenSearch }) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-md border border-slate-700/60 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Try Demo Barcodes
          </h3>
        </div>
        <button
          onClick={onOpenSearch}
          className="text-[11px] font-bold text-emerald-400 hover:underline flex items-center gap-1"
        >
          Search by Name <Search className="w-3 h-3" />
        </button>
      </div>

      <p className="text-[11px] text-slate-400">
        Click any product below to test instant health goal evaluation:
      </p>

      <div className="grid grid-cols-2 gap-2 pt-1">
        {DEMO_PRODUCTS.map((item) => (
          <button
            key={item.barcode}
            onClick={() => onSelect(item.barcode)}
            className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/90 hover:bg-emerald-950/80 border border-slate-700 hover:border-emerald-500/50 text-left transition-colors group"
          >
            <img
              src={item.image}
              alt=""
              width={36}
              height={36}
              loading="lazy"
              decoding="async"
              className="w-9 h-9 rounded-lg object-cover bg-slate-700 flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-200 truncate group-hover:text-emerald-300 transition-colors">
                {item.name}
              </p>
              <p className="text-[10px] text-slate-400 truncate">{item.brand}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
});

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function Scanner({
  onScanSuccess,
  onOpenSearch,
  onOpenGoalSetup,
  selectedGoals = EMPTY_GOALS,
}) {
  const [showPermissionGuide, setShowPermissionGuide] = useState(false);

  // Stable identity for memoized children, always calls the latest prop.
  const onScanRef = useRef(onScanSuccess);
  useEffect(() => {
    onScanRef.current = onScanSuccess;
  }, [onScanSuccess]);
  const handleScan = useCallback((code) => onScanRef.current?.(code), []);

  const { status, error, canSwitchCamera, torchOn, torchSupported, start, switchCamera, toggleTorch } =
    useBarcodeScanner(handleScan);

  // Resolve aliases + de-duplicate once, instead of twice on every render.
  const goalIds = useMemo(
    () => Array.from(new Set(selectedGoals.map((id) => FOOD_GOALS_META[id]?.id ?? id))),
    [selectedGoals]
  );

  const retryCamera = useCallback(() => start(DEFAULT_CAMERA), [start]);
  const resumeScan = useCallback(() => start(), [start]);
  const toggleGuide = useCallback(() => setShowPermissionGuide((v) => !v), []);

  const isScanning = status === 'scanning';

  return (
    <div className="flex flex-col min-h-[calc(100dvh-4rem)] max-w-md mx-auto px-4 py-4 space-y-4">
      {/* Main Scanner Box */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col items-center justify-center min-h-[340px]">
        <div className="relative w-full h-[320px] bg-slate-950 flex items-center justify-center overflow-hidden">
          {/* html5-qrcode owns everything inside this node */}
          <div id={READER_ID} className="w-full h-full" />

          {isScanning && !error && <ScanFrame />}

          {status === 'stopped' && !error && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950/70">
              <button
                onClick={resumeScan}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-emerald-400/20"
              >
                <Camera className="w-4 h-4" /> Scan Again
              </button>
            </div>
          )}

          {error && (
            <CameraErrorOverlay
              error={error}
              showGuide={showPermissionGuide}
              onToggleGuide={toggleGuide}
              onRetry={retryCamera}
            />
          )}
        </div>

        {/* Top Controls */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
          <div
            className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/50 flex items-center gap-1.5"
            role="status"
          >
            <span
              className={`w-2 h-2 rounded-full motion-reduce:animate-none ${
                isScanning ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'
              }`}
            />
            <span className="text-[11px] font-bold text-slate-200">{STATUS_LABELS[status]}</span>
          </div>

          <div className="flex items-center gap-2">
            {canSwitchCamera && (
              <button
                onClick={switchCamera}
                className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 backdrop-blur-md transition-colors"
                title="Switch Camera"
                aria-label="Switch camera"
              >
                <SwitchCamera className="w-4 h-4" />
              </button>
            )}
            {isScanning && torchSupported && (
              <button
                onClick={toggleTorch}
                aria-pressed={torchOn}
                className={`p-2 rounded-full border backdrop-blur-md transition-colors ${
                  torchOn
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-900/80 text-slate-200 border-slate-700/60'
                }`}
                title="Toggle Flash"
                aria-label="Toggle flash"
              >
                <Flashlight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <GoalsBar goalIds={goalIds} onEdit={onOpenGoalSetup} />
      <ManualEntry onSubmit={handleScan} />
      <DemoProducts onSelect={handleScan} onOpenSearch={onOpenSearch} />
    </div>
  );
}