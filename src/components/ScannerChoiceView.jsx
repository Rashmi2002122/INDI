import React from 'react';
import { QrCode, Camera, Sparkles, ChevronRight, Target } from 'lucide-react';
import { FOOD_GOALS_META, getGoalMeta } from '../data/foodGoalsMeta.js';

export default function ScannerChoiceView({ onSelectMode, onOpenGoalSetup, selectedGoals = [] }) {
  // Deduplicate and resolve canonical goal IDs
  const canonicalGoals = Array.from(new Set(selectedGoals.map(gId => {
    const meta = FOOD_GOALS_META[gId];
    return meta ? meta.id : gId;
  })));

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-md mx-auto px-4 py-6 space-y-6">
      
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl border border-slate-700/60 relative overflow-hidden space-y-3">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
            INDI Integrative Health
          </span>
          <span className="text-xl">🥗</span>
        </div>

        <h2 className="text-xl font-extrabold text-white leading-tight">
          How would you like to scan your food?
        </h2>
        
        <p className="text-xs text-slate-300 font-medium leading-relaxed">
          Scan packaged barcodes or take a camera photo of fresh, unpackaged foods (fruits, vegetables, eggs, paneer, meat).
        </p>
      </div>

      {/* Active User Goals Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Target className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Active Health Goals ({canonicalGoals.length})
            </h3>
          </div>
          <button
            onClick={onOpenGoalSetup}
            className="text-[11px] font-bold text-emerald-600 hover:underline"
          >
            Configure
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {canonicalGoals.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No food goals selected yet. Tap Configure to set your preferences.</p>
          ) : (
            canonicalGoals.map(gId => {
              const meta = getGoalMeta(gId);
              return (
                <span key={gId} className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-extrabold flex items-center gap-1">
                  <span>{meta.icon}</span> {meta.title}
                </span>
              );
            })
          )}
        </div>
      </div>

      {/* Dual Scanner Option Cards */}
      <div className="space-y-4">
        
        {/* Option 1: Packaged Food Barcode Scanner */}
        <div
          onClick={() => onSelectMode('packaged')}
          className="bg-white hover:bg-slate-50/80 rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/80 transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
              <QrCode className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
              Instant EAN / UPC
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
              Packaged Food Scanner
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Scan packaged food barcodes to check ingredients, additives, allergens, and goal suitability.
            </p>
          </div>
        </div>

        {/* Option 2: Fresh Unpackaged Food AI Scanner */}
        <div
          onClick={() => onSelectMode('fresh')}
          className="bg-white hover:bg-slate-50/80 rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-500/80 transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold shadow-sm">
              <Camera className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full border border-teal-200">
              Fresh Food & Vision AI
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors flex items-center justify-between">
              Fresh Food Scanner
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Scan fresh foods (egg, chicken, rice, banana, paneer, apple) to get verified USDA nutrition & cooking advice.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
