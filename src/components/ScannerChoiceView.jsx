import React from 'react';
import { QrCode, ChefHat, Sparkles, ChevronRight, Target } from 'lucide-react';
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
          Food Scanner & Personal Nutrition
        </h2>
        
        <p className="text-xs text-slate-300 font-medium leading-relaxed">
          Scan packaged barcodes for instant health insights, or consult your Personal Food Adviser for meal and recipe recommendations tailored to your goals.
        </p>
      </div>

      {/* Active User Goals Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
              <Target className="w-4 h-4" />
            </div>
            <span className="text-xs font-extrabold text-slate-800">
              Active Health Goals ({canonicalGoals.length})
            </span>
          </div>

          <button
            onClick={onOpenGoalSetup}
            className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg transition-colors border border-emerald-200/60"
          >
            Configure
          </button>
        </div>

        {/* Goals Chips List */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {canonicalGoals.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No food goals selected yet. Tap Configure to set your preferences.</p>
          ) : (
            canonicalGoals.map(gId => {
              const meta = getGoalMeta(gId);
              return (
                <span
                  key={gId}
                  className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-xl flex items-center gap-1 border border-slate-200"
                >
                  <span>{meta.icon || '🎯'}</span>
                  <span>{meta.title}</span>
                </span>
              );
            })
          )}
        </div>
      </div>

      {/* Mode Choice Cards */}
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
              Scan packaged food barcodes to check ingredients, additives, allergens, and personal goal suitability.
            </p>
          </div>
        </div>

        {/* Option 2: Personal Food Adviser */}
        <div
          onClick={() => onSelectMode('adviser')}
          className="bg-white hover:bg-slate-50/80 rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/80 transition-all cursor-pointer group space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-800 flex items-center justify-center font-bold shadow-sm">
              <ChefHat className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
              Personal Food Adviser
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
              What Should I Eat Now?
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Get instant, delicious meal and simple recipe ideas tailored to your diet, health goals, and the current time of day.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
