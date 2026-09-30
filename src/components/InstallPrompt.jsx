import React, { useState, useEffect } from 'react';
import { Download, X, Share } from 'lucide-react';

/**
 * PWA Install Prompt Banner
 * - On Android Chrome: captures beforeinstallprompt → shows "Install App" button
 * - On iOS Safari: shows manual "Add to Home Screen" instructions
 * - Hidden if app is already installed (standalone mode)
 * - Dismissible with "not now" (remembers for 7 days)
 */
export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Don't show if already installed as standalone
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      return;
    }

    // Check if dismissed recently
    const dismissed = localStorage.getItem('indi_install_dismissed');
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      if (Date.now() - dismissedAt < 7 * 24 * 60 * 60 * 1000) return; // 7 days
    }

    // Detect iOS
    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isiOS);

    if (isiOS) {
      // iOS doesn't fire beforeinstallprompt, show after a short delay
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    // Android / Desktop Chrome — listen for beforeinstallprompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Hide banner if app gets installed
    const installedHandler = () => {
      setShowBanner(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', installedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('indi_install_dismissed', String(Date.now()));
  };

  if (!showBanner) return null;

  // iOS-specific guidance
  if (isIOS) {
    return (
      <>
        <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-safe-bottom">
          <div className="max-w-md mx-auto mb-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700/60 p-4 space-y-3 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-emerald-500/30 flex items-center justify-center p-1 flex-shrink-0">
                  <img src="/logo.svg" alt="INDI" className="w-full h-full" />
                </div>
                <div>
                  <p className="text-sm font-bold">Install INDI App</p>
                  <p className="text-xs text-slate-400">Add to your Home Screen for the full app experience</p>
                </div>
              </div>
              <button onClick={handleDismiss} className="p-1 text-slate-500 hover:text-slate-300 flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>

            {showIOSGuide ? (
              <div className="bg-slate-800/80 rounded-xl p-3 space-y-2 text-xs">
                <p className="font-semibold text-emerald-400">How to install on iPhone/iPad:</p>
                <ol className="space-y-1.5 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
                    <span>Tap the <Share className="w-3.5 h-3.5 inline -mt-0.5" /> <strong>Share</strong> button in Safari's toolbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
                    <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
                    <span>Tap <strong>"Add"</strong> — INDI will appear on your Home Screen</span>
                  </li>
                </ol>
              </div>
            ) : (
              <button
                onClick={() => setShowIOSGuide(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Show Install Instructions
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

  // Android / Desktop Chrome
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-safe-bottom">
      <div className="max-w-md mx-auto mb-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700/60 p-4 animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-emerald-500/30 flex items-center justify-center p-1 flex-shrink-0">
              <img src="/logo.svg" alt="INDI" className="w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-bold">Install INDI App</p>
              <p className="text-xs text-slate-400">Quick access from your Home Screen</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="text-xs text-slate-500 hover:text-slate-300 font-medium px-2 py-1"
            >
              Not now
            </button>
            <button
              onClick={handleInstall}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
