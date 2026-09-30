import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, Sparkles, ChefHat, Scale, ChevronDown, ChevronUp, Info, ExternalLink, Flame } from 'lucide-react';
import RecipeModal from './RecipeModal';
import ProvenanceBadge from './ProvenanceBadge';

export default function FreshFoodDetail({ food, evaluation, onBack, onChangePreparation, selectedPrep = 'raw', alternatives = [], recipes = [] }) {
  const [showFullNutrition, setShowFullNutrition] = useState(false);
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [expandedGoal, setExpandedGoal] = useState(null);

  if (!food) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-500">No fresh food item selected.</p>
        <button onClick={onBack} className="px-4 py-2 bg-teal-600 text-white font-bold rounded-xl text-sm">
          Back to Scanner
        </button>
      </div>
    );
  }

  const nut = evaluation ? evaluation.adjustedNutrients || food.nutriments : food.nutriments;
  const overallStatus = evaluation ? evaluation.overallStatus : 'GOOD MATCH';
  const evalGoals = evaluation ? evaluation.goals || [] : [];
  const prepAdvice = evaluation ? evaluation.preparationAdvice : null;

  const formatVal = (val, unit = 'g') => {
    if (val === null || val === undefined || isNaN(val)) return 'Not available';
    return `${val} ${unit}`;
  };

  const statusStyles = {
    'GOOD MATCH': { bg: 'bg-emerald-600', lightBg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700', label: '✓ GOOD MATCH FOR YOUR GOALS' },
    'CAUTION': { bg: 'bg-amber-500', lightBg: 'bg-amber-50 border-amber-200', text: 'text-amber-700', label: '⚠️ CAUTION — USE IN MODERATION' },
    'NOT A GOOD MATCH': { bg: 'bg-red-600', lightBg: 'bg-red-50 border-red-200', text: 'text-red-700', label: '🔴 NOT A GOOD MATCH' }
  };

  const currentStatusStyle = statusStyles[overallStatus] || statusStyles['GOOD MATCH'];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-md mx-auto px-4 py-4 space-y-4 pb-12">
      
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Scan Another Fresh Item
        </button>

        <ProvenanceBadge source={food.source} compact />
      </div>

      {/* Hero Food Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-4xl shadow-sm flex-shrink-0 overflow-hidden p-1 relative">
            {food.userUploadedImage || food.image ? (
              <img
                src={food.userUploadedImage || food.image}
                alt={food.name}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span>{food.emoji || '🥬'}</span>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/60 inline-block">
              {food.category}
            </span>
            <h2 className="text-xl font-black text-slate-900 leading-tight">
              {food.name}
            </h2>
            <p className="text-xs text-slate-500 font-bold pb-1">
              Serving: {food.servingSize}
            </p>

            {/* Provenance Badge */}
            <ProvenanceBadge source={food.source} sourceUrl={food.sourceUrl} />
          </div>
        </div>

        {/* Preparation Method Radio Selector */}
        {food.preparations && food.preparations.length > 0 && (
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 space-y-2">
            <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
              How are you eating it?
            </label>
            <div className="flex flex-wrap gap-1.5">
              {food.preparations.map((p) => {
                const isSelected = selectedPrep === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onChangePreparation(p.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-teal-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>

            {prepAdvice && (
              <p className="text-[11px] text-amber-900 font-semibold bg-amber-50 p-2 rounded-xl border border-amber-200 leading-snug">
                {prepAdvice}
              </p>
            )}
          </div>
        )}

        {/* Suitability Banner */}
        <div className={`rounded-2xl p-4 border space-y-1.5 ${currentStatusStyle.lightBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-black uppercase tracking-wider ${currentStatusStyle.text}`}>
              {currentStatusStyle.label}
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-800 leading-relaxed">
            Personalized against your active health goals.
          </p>
        </div>

        {/* Reference Source Note */}
        <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between border-t border-slate-100 pt-2.5">
          <span>Data Provider: <strong className="text-slate-700 font-bold">{food.source}</strong></span>
          {food.sourceUrl && (
            <a href={food.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline flex items-center gap-0.5">
              Reference <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Non-medical Disclaimer */}
      <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200/80 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-900 font-semibold leading-relaxed">
          {evaluation?.disclaimer || 'Notice: HealthScan provides general nutritional guidance and does not replace medical advice from a doctor or registered dietitian.'}
        </p>
      </div>

      {/* Per-Goal Evaluation Breakdown */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-teal-600" />
          Goal Suitability Breakdown ({evalGoals.length})
        </h3>

        <div className="space-y-2">
          {evalGoals.map((g, idx) => {
            const isExpanded = expandedGoal === idx;
            const isWarning = g.severity === 'WARNING';
            const isCaution = g.severity === 'CAUTION';

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isWarning ? 'bg-red-50/80 border-red-200' : isCaution ? 'bg-amber-50/80 border-amber-200' : 'bg-emerald-50/80 border-emerald-200'
                }`}
              >
                <div
                  onClick={() => setExpandedGoal(isExpanded ? null : idx)}
                  className="p-3.5 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-black uppercase ${
                      isWarning ? 'bg-red-200 text-red-900' : isCaution ? 'bg-amber-200 text-amber-900' : 'bg-emerald-200 text-emerald-900'
                    }`}>
                      {g.severity}
                    </span>
                    <h4 className="text-xs font-extrabold text-slate-900">{g.goalTitle}</h4>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                    <span>Why?</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                <p className="px-3.5 pb-3 text-xs text-slate-800 font-semibold leading-relaxed">
                  {g.reasons[0]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons: Recipes & Alternatives */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => setIsRecipeOpen(true)}
          className="p-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold rounded-2xl shadow-md shadow-amber-500/20 text-xs flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
        >
          <ChefHat className="w-4 h-4" />
          What Can I Make?
        </button>

        <button
          onClick={() => setShowFullNutrition(!showFullNutrition)}
          className="p-3.5 bg-slate-900 text-white font-extrabold rounded-2xl shadow-md text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
        >
          <Info className="w-4 h-4" />
          {showFullNutrition ? 'Hide Nutrition' : 'View Full Nutrition'}
        </button>
      </div>

      {/* Key Nutrients Summary Grid */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
          Key Nutritional Breakdown ({food.servingSize})
        </h3>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Energy</span>
            <span className="text-base font-extrabold text-slate-900">{formatVal(nut?.energyServing, 'kcal')}</span>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Protein</span>
            <span className="text-base font-extrabold text-teal-700">{formatVal(nut?.proteinServing, 'g')}</span>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Fiber</span>
            <span className="text-base font-extrabold text-teal-700">{formatVal(nut?.fiberServing, 'g')}</span>
          </div>
        </div>

        <div className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Carbohydrates</span>
            <span className="font-bold text-slate-800">{formatVal(nut?.carbohydratesServing)}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Total Fat</span>
            <span className="font-bold text-slate-800">{formatVal(nut?.fatServing)}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Saturated Fat</span>
            <span className="font-bold text-slate-800">{formatVal(nut?.saturatedFatServing)}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Sodium</span>
            <span className="font-bold text-slate-800">{formatVal(nut?.sodiumServing, 'mg')}</span>
          </div>
        </div>
      </div>

      {/* Expandable Full Nutrition View (Macronutrients, Minerals, Vitamins) */}
      {showFullNutrition && (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4 animate-in fade-in duration-200">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Full Micro & Micronutrient Breakdown
          </h3>

          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-teal-800 border-b border-teal-100 pb-1">Essential Minerals</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Potassium</span>
                <span className="font-bold">{formatVal(nut?.potassiumServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Calcium</span>
                <span className="font-bold">{formatVal(nut?.calciumServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Iron</span>
                <span className="font-bold">{formatVal(nut?.ironServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Magnesium</span>
                <span className="font-bold">{formatVal(nut?.magnesiumServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Phosphorus</span>
                <span className="font-bold">{formatVal(nut?.phosphorusServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Zinc</span>
                <span className="font-bold">{formatVal(nut?.zincServing, 'mg')}</span>
              </div>
            </div>

            <h4 className="text-xs font-extrabold text-teal-800 border-b border-teal-100 pb-1 pt-2">Vitamins</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Vitamin A</span>
                <span className="font-bold">{formatVal(nut?.vitaminAServing, 'IU')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Vitamin C</span>
                <span className="font-bold">{formatVal(nut?.vitaminCServing, 'mg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Vitamin D</span>
                <span className="font-bold">{formatVal(nut?.vitaminDServing, 'IU')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Vitamin B12</span>
                <span className="font-bold">{formatVal(nut?.vitaminB12Serving, 'mcg')}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl flex justify-between">
                <span className="text-slate-500">Folate</span>
                <span className="font-bold">{formatVal(nut?.folateServing, 'mcg')}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alternatives Section */}
      {alternatives.length > 0 && (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-3">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Recommended Fresh Alternatives
          </h3>

          <div className="grid grid-cols-2 gap-2">
            {alternatives.map((alt) => (
              <div key={alt.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-2.5">
                <span className="text-2xl">{alt.emoji}</span>
                <div className="min-w-0">
                  <h4 className="text-xs font-extrabold text-slate-900 truncate">{alt.name}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold">{alt.servingSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipe Modal */}
      <RecipeModal
        isOpen={isRecipeOpen}
        onClose={() => setIsRecipeOpen(false)}
        foodName={food.name}
        recipes={recipes}
      />

    </div>
  );
}
