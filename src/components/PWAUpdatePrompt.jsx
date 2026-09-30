import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw } from 'lucide-react';

/**
 * PWA Update Prompt
 * Shows a banner when a new version of the app is available.
 * Uses the 'prompt' registration strategy — does not auto-reload.
 */
export default function PWAUpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (r) {
        // 1. Check for update immediately on launch
        r.update().catch(err => console.warn('SW update check failed:', err));

        // 2. Check for update whenever user brings app to foreground
        const handleVisibility = () => {
          if (document.visibilityState === 'visible') {
            r.update().catch(() => {});
          }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        // 3. Periodic check every 15 minutes
        const interval = setInterval(() => {
          r.update().catch(() => {});
        }, 15 * 60 * 1000);

        return () => {
          document.removeEventListener('visibilitychange', handleVisibility);
          clearInterval(interval);
        };
      }
    },
    onRegisterError(error) {
      console.warn('SW registration error:', error);
    },
  });

  if (!needRefresh) return null;

  return (
    <div className="fixed top-20 inset-x-0 z-50 px-4">
      <div className="max-w-md mx-auto bg-emerald-900 text-white rounded-2xl shadow-2xl border border-emerald-700/60 p-4 animate-in slide-in-from-top duration-300">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold">Update Available</p>
            <p className="text-xs text-emerald-300">A new version of INDI is ready</p>
          </div>
          <button
            onClick={() => updateServiceWorker(true)}
            className="bg-white text-emerald-900 font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 hover:bg-emerald-50"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
