import React, { useEffect, useRef, useState } from 'react';
import { Camera, Upload, Search, Sparkles, ChevronRight, AlertCircle, RefreshCw, ArrowLeft, Flashlight, SwitchCamera } from 'lucide-react';
import { FRESH_FOOD_DATABASE, searchFreshFoodDatabase } from '../data/freshFoodDatabase.js';

export default function FreshFoodScanner({ onSelectFreshFood, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);

  const [recognitionResult, setRecognitionResult] = useState(null);
  const [lowConfidenceMode, setLowConfidenceMode] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Initialize live video stream for Fresh Food Camera
  useEffect(() => {
    let isMounted = true;

    async function startCameraStream() {
      // Check for secure origin / getUserMedia support
      if (!navigator?.mediaDevices?.getUserMedia) {
        if (isMounted) {
          const isHttpIp = typeof window !== 'undefined' && location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1';
          if (isHttpIp) {
            setCameraError('HTTPS Required: Browsers block camera access on unsecure HTTP IP addresses (e.g. http://192.168.x.x). Test via localhost, HTTPS, or Chrome flags.');
          } else {
            setCameraError('Camera API is not supported or is blocked in this browser context.');
          }
          setCameraActive(false);
        }
        return;
      }

      try {
        setCameraError(null);
        let stream;
        try {
          // 1. Try rear camera (mobile standard)
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
          });
        } catch (e1) {
          try {
            // 2. Try front camera (mobile/laptop)
            stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: 'user' }
            });
          } catch (e2) {
            // 3. Fall back to any available video stream
            stream = await navigator.mediaDevices.getUserMedia({
              video: true
            });
          }
        }

        if (isMounted && videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
          try {
            await videoRef.current.play();
          } catch (pErr) {
            console.warn('Video play auto-start error:', pErr);
          }
          setCameraActive(true);
        }
      } catch (err) {
        if (isMounted) {
          console.warn('Live camera stream not available:', err);
          const errName = err?.name || '';
          const errMsg = err?.message || String(err);
          const isDenied = errName === 'NotAllowedError' || errName === 'PermissionDeniedError' || errMsg.includes('Permission') || errMsg.includes('denied');
          const isHttpIp = typeof window !== 'undefined' && location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1';

          if (isDenied) {
            setCameraError(`Camera permission is BLOCKED (${errName}). To unblock: tap the 🔒/tune icon next to the URL address bar ➔ Site settings ➔ set Camera to ALLOW ➔ refresh page.`);
          } else if (isHttpIp) {
            setCameraError('HTTPS Required: Mobile browsers block camera on HTTP IP addresses. Use HTTPS or localhost.');
          } else {
            setCameraError(`Camera error (${errName || 'Failed'}): ${errMsg}. Try photo upload below or check phone browser camera permissions.`);
          }
          setCameraActive(false);
        }
      }
    }

    startCameraStream();

    return () => {
      isMounted = false;
      stopCameraStream();
    };
  }, []);

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Capture frame from live video or uploaded file and analyze with AI
  const handleCaptureFrame = async () => {
    setLoading(true);
    setLowConfidenceMode(false);

    try {
      // Simulate taking frame from camera or file
      const res = await fetch('/api/fresh-food/recognize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: 'captured_frame.jpg' })
      });

      if (res.ok) {
        const data = await res.json();
        setRecognitionResult(data);

        if (data.confidence < 0.70) {
          setLowConfidenceMode(true);
        } else {
          onSelectFreshFood(data.foodId);
        }
      }
    } catch (err) {
      console.error('Recognition error', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    setLoading(true);
    setLowConfidenceMode(false);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Data = reader.result;

        // Check if filename is a clean food name (e.g. "carrot.jpg" -> "carrot", ignore "media_1234", "IMG_5678")
        const rawName = file.name.split('.')[0].toLowerCase().trim();
        const isGenericFilename = /^(img|image|media|dsc|photo|pic|_|\d)+/i.test(rawName);
        const queryHint = isGenericFilename ? null : rawName;

        try {
          const res = await fetch('/api/fresh-food/recognize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: base64Data, queryHint })
          });

          if (res.ok) {
            const data = await res.json();
            setRecognitionResult(data);

            if (data.matched && data.foodId) {
              if (data.confidence < 0.70) {
                setLowConfidenceMode(true);
              } else {
                onSelectFreshFood(data.foodId, 'raw', base64Data);
              }
            } else {
              setLowConfidenceMode(true);
            }
          }
        } catch (err) {
          console.error('Recognition network error', err);
        } finally {
          setLoading(false);
        }
      };

      reader.readAsDataURL(file);
    } catch (err) {
      console.error('File reading error', err);
      setLoading(false);
    }
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // First show instant client-side results
    const localMatches = searchFreshFoodDatabase(searchQuery);
    setSearchResults(localMatches);

    // Then query backend (which has OpenAI fallback for unknown foods)
    try {
      const res = await fetch(`/api/fresh-food/search?query=${encodeURIComponent(searchQuery)}`);
      if (res.ok) {
        const backendResults = await res.json();
        if (backendResults && backendResults.length > 0) {
          // Merge: backend results first, then local-only results
          const backendIds = new Set(backendResults.map(r => (r.slug || r.name || '').toLowerCase()));
          const uniqueLocal = localMatches.filter(l => !backendIds.has((l.slug || l.id || '').toLowerCase()));

          const merged = backendResults.map(r => ({
            id: r.slug || r.id?.toString() || r.name?.toLowerCase().replace(/\s+/g, '-'),
            name: r.name,
            slug: r.slug,
            emoji: r.emoji || '🍽️',
            category: r.category || 'Food',
            servingSize: r.servingSize || '100g',
            source: r.source || 'Database',
          })).concat(uniqueLocal);

          setSearchResults(merged);
        }
      }
    } catch (err) {
      console.warn('Backend search unavailable, using client-side results only', err);
    }
  };

  // Live search as user types
  const handleSearchInputChange = async (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim()) {
      setIsSearching(true);
      // Instant local results
      const localMatches = searchFreshFoodDatabase(value);
      setSearchResults(localMatches);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-md mx-auto px-4 py-4 space-y-4">

      {/* Top Back Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Scanner Choice
        </button>

        <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
          🥬 Fresh Food Scanner
        </span>
      </div>

      {/* Main Camera Stream & Capture Card */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col items-center justify-center min-h-[320px]">
        
        {/* Video Viewfinder Box */}
        <div className="relative w-full h-[280px] bg-slate-950 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover ${cameraActive ? 'opacity-100' : 'opacity-0'}`}
          ></video>

          {!cameraActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 p-6 text-center z-10 bg-slate-950/90">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center text-2xl border border-teal-500/20">
                📷
              </div>
              <p className="text-xs font-medium text-slate-300 max-w-[260px] leading-relaxed">
                {cameraError || 'Tap button below to allow camera permission.'}
              </p>
              <button
                onClick={startCameraStream}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-md shadow-teal-400/20"
              >
                <Camera className="w-4 h-4" /> Allow Camera Permission
              </button>
            </div>
          )}

          {/* Viewfinder Target Reticle */}
          {cameraActive && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
              <div className="relative w-[220px] h-[220px] rounded-3xl border-2 border-teal-400/80 shadow-[0_0_0_9999px_rgba(15,23,42,0.65)] overflow-hidden">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-teal-400 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-teal-400 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-teal-400 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-teal-400 rounded-br-xl"></div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-teal-500/30">
                    Center Fresh Food
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Loading Overlay */}
          {loading && (
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-2 z-30">
              <RefreshCw className="w-8 h-8 text-teal-400 animate-spin" />
              <p className="text-xs font-extrabold text-white">AI Recognizing Fresh Food...</p>
            </div>
          )}
        </div>

        {/* Bottom Control Bar */}
        <div className="w-full p-3 bg-slate-950/90 backdrop-blur-md flex items-center justify-between gap-2 border-t border-slate-800">
          {cameraActive ? (
            <button
              onClick={handleCaptureFrame}
              disabled={loading}
              className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition-all active:scale-95"
            >
              <Camera className="w-4 h-4" />
              Capture & Identify Food
            </button>
          ) : (
            <label className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition-all active:scale-95 cursor-pointer">
              <Camera className="w-4 h-4" />
              Take Photo with Camera
              <input type="file" accept="image/*" capture="environment" onChange={handleFileUpload} className="hidden" />
            </label>
          )}

          <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold p-2.5 rounded-xl border border-slate-700 cursor-pointer transition-colors flex items-center gap-1.5 text-xs" title="Upload Photo from Gallery">
            <Upload className="w-4 h-4" />
            <span>Upload</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Low Confidence Match Resolution Box */}
      {lowConfidenceMode && recognitionResult && (
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-extrabold text-amber-900">Food Could Not Be Identified Confidently</h4>
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                AI recognition returned low confidence. Please select the correct food item from the possible matches below:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-1">
            {(recognitionResult.possibleMatches || []).map((pm) => (
              <button
                key={pm.id}
                onClick={() => onSelectFreshFood(pm.id)}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-amber-200 hover:border-teal-500 hover:bg-teal-50/50 transition-all text-left font-bold text-xs text-slate-800"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{pm.emoji || '🥬'}</span>
                  {pm.name}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-amber-200/60">
            <button
              onClick={() => setLowConfidenceMode(false)}
              className="flex-1 text-center py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded-xl text-xs transition-colors"
            >
              Retake Photo
            </button>
            <button
              onClick={() => setIsSearching(true)}
              className="flex-1 text-center py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
            >
              Search Food Manually
            </button>
          </div>
        </div>
      )}

      {/* Manual Search Fallback Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-4 h-4 text-teal-600" />
            Search Fresh Food Manually
          </h3>
          <span className="text-[11px] text-slate-400 font-medium">Verified Database</span>
        </div>

        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Type any food (e.g. mango, paneer, quinoa...)"
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
          />
          <button
            type="submit"
            disabled={!searchQuery.trim()}
            className="bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 transition-all shadow-md shadow-teal-600/20"
          >
            Find
          </button>
        </form>

        {/* Live Search Results List */}
        {isSearching && searchResults.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-slate-100 max-h-48 overflow-y-auto">
            {searchResults.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectFreshFood(item.id)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200/60 hover:border-teal-400 text-left transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{item.category} • {item.servingSize}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick Sample Fresh Foods Grid */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-md border border-slate-700/60 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Browse Common Fresh Foods
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {FRESH_FOOD_DATABASE.slice(0, 9).map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectFreshFood(item.id)}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-800/90 hover:bg-teal-950/80 border border-slate-700 hover:border-teal-500/50 text-center transition-all group space-y-1"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{item.emoji}</span>
              <span className="text-xs font-bold text-slate-200 truncate w-full group-hover:text-teal-300">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
