import React, { useState, useEffect } from 'react';
import { X, Check, ShieldAlert, Sparkles } from 'lucide-react';
import { ALL_GOALS, FOOD_GOALS_META } from '../data/foodGoalsMeta.js';

export default function GoalSetupModal({ isOpen, onClose, selectedGoals = [], onSaveGoals }) {
  const [currentGoals, setCurrentGoals] = useState([]);

  useEffect(() => {
    if (selectedGoals && Array.isArray(selectedGoals)) {
      const canonicalGoals = Array.from(new Set(selectedGoals.map(gId => {
        const meta = FOOD_GOALS_META[gId];
        return meta ? meta.id : gId;
      })));
      setCurrentGoals(canonicalGoals);
    } else {
      setCurrentGoals([]);
    }
  }, [selectedGoals, isOpen]);

  if (!isOpen) return null;

  const toggleGoal = (goalId) => {
    const meta = FOOD_GOALS_META[goalId];
    const canonicalId = meta ? meta.id : goalId;

    if (currentGoals.includes(canonicalId)) {
      setCurrentGoals(currentGoals.filter(g => g !== canonicalId));
    } else {
      setCurrentGoals([...currentGoals, canonicalId]);
    }
  };

  const handleSave = () => {
    const uniqueGoals = Array.from(new Set(currentGoals));
    onSaveGoals(uniqueGoals);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom duration-200">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">What's Your Food Goal?</h3>
              <p className="text-[11px] text-slate-500">Select one or more goals to customize your scan analysis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="px-4 py-3 bg-amber-50 border-b border-amber-200/80 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-900 font-semibold leading-snug">
            Notice: HealthScan provides general nutritional guidance based on available product database entries and does not replace medical advice from a doctor or registered dietitian.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          {ALL_GOALS.map((goal) => {
            const isSelected = currentGoals.includes(goal.id);
            return (
              <div
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-emerald-50/90 border-emerald-500 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{goal.icon}</span>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                      {goal.title}
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-1.5 py-0.2 rounded-md">
                        {goal.category}
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                      {goal.description}
                    </p>
                  </div>
                </div>

                <div className={`w-6 h-6 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                  isSelected ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-transparent border border-slate-300'
                }`}>
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-600">
            {currentGoals.length} Goal{currentGoals.length === 1 ? '' : 's'} Selected
          </span>
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md shadow-emerald-600/20 transition-all"
          >
            Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
}
