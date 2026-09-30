import React from 'react';
import { X, ChefHat, Clock, Sparkles } from 'lucide-react';

export default function RecipeModal({ isOpen, onClose, foodName, recipes = [] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-xl">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">What Can I Make With {foodName}?</h3>
              <p className="text-[11px] text-slate-500">Healthy, goal-aligned recipe ideas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recipes List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {recipes.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-8">No recipes found for this item.</p>
          ) : (
            recipes.map((rec, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {rec.name}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {rec.time}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {rec.desc}
                </p>

                <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg inline-block">
                  Estimated Calories: {rec.calories}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Disclaimer Note */}
        <div className="p-3 bg-slate-100 text-[10px] text-slate-500 text-center font-medium border-t border-slate-200">
          Recipe suggestions adapt to your active food goals. Cook with minimal added oil for best nutritional results.
        </div>

      </div>
    </div>
  );
}
