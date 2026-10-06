import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, AlertTriangle, CheckCircle2, Info, Sparkles, Scale, Heart, Calendar, Share2, CornerDownRight, ChevronDown, ChevronUp, Layers, Award, Leaf } from 'lucide-react';
import { evaluateNutrientFlags, extractAllergens } from '../utils/healthAnalyzer';
import { getProductImage, getCategoryFallbackImage } from '../utils/productImages';
import ProvenanceBadge from './ProvenanceBadge';

export default function ProductDetail({ product, evaluation, onBack, onOpenCompare }) {
  const [viewServing, setViewServing] = useState(false);
  const [expandedGoal, setExpandedGoal] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-500">No product details available.</p>
        <button onClick={onBack} className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl text-sm">
          Back to Scanner
        </button>
      </div>
    );
  }

  const formatNutrient = (val, unit = 'g') => {
    if (val === null || val === undefined || isNaN(val)) return 'Not available';
    return `${val} ${unit}`;
  };

  const evalGoals = evaluation ? evaluation.goals || [] : [];
  const overallStatus = evaluation ? evaluation.overallStatus : 'GOOD MATCH';

  // Badge styles
  const statusStyles = {
    'GOOD MATCH': { bg: 'bg-emerald-600', lightBg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700', label: '✓ GOOD MATCH FOR YOUR GOALS' },
    'CAUTION': { bg: 'bg-amber-500', lightBg: 'bg-amber-50 border-amber-200', text: 'text-amber-700', label: '⚠️ CAUTION — MODERATE FIT' },
    'NOT A GOOD MATCH': { bg: 'bg-red-600', lightBg: 'bg-red-50 border-red-200', text: 'text-red-700', label: '⚠️ MAY NOT BE A GOOD MATCH' },
    'PARTIAL_DATA': { bg: 'bg-slate-700', lightBg: 'bg-slate-50 border-slate-200', text: 'text-slate-700', label: '⚪ UNABLE TO FULLY EVALUATE' }
  };

  const currentStatusStyle = statusStyles[overallStatus] || statusStyles['GOOD MATCH'];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `HealthScan — ${product.name}`,
        text: `${product.name} (${product.brand}) Suitability: ${overallStatus}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${product.name} - Suitability: ${overallStatus}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-md mx-auto px-4 py-4 space-y-4 pb-12">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Scan Another Item
        </button>

        <div className="flex items-center gap-2">
          {onOpenCompare && (
            <button
              onClick={onOpenCompare}
              className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 hover:bg-emerald-200 transition-colors"
            >
              <Scale className="w-4 h-4" /> Compare
            </button>
          )}
          <button
            onClick={handleShare}
            className="p-2 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {copied && (
        <div className="bg-slate-900 text-white text-xs text-center py-2 rounded-xl shadow font-semibold">
          Copied health report summary to clipboard!
        </div>
      )}

      {/* Hero Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4 relative overflow-hidden">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-200 flex-shrink-0 overflow-hidden flex items-center justify-center p-0.5 bg-white shadow-inner">
            <img
              src={getProductImage(product)}
              alt={product.name || 'Product'}
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getCategoryFallbackImage(product);
              }}
            />
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/60 inline-block">
              {product.category || 'Packaged Snack'}
            </span>
            <h2 className="text-base font-extrabold text-slate-900 leading-snug line-clamp-2">
              {product.name}
            </h2>
            <p className="text-xs text-slate-500 font-medium truncate">
              {product.brand} • <span className="font-mono text-[11px] text-slate-400">{product.barcode}</span>
            </p>
            
            {/* Badges strip (NOVA, Nutri-score, Veg, Source Provenance) */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <ProvenanceBadge source={product.source || "Open Food Facts DB"} compact />
              {product.nutriScore && (
                <span className="text-[10px] font-black text-white bg-emerald-600 px-2 py-0.2 rounded-md uppercase">
                  Nutri-Score {product.nutriScore}
                </span>
              )}
              {product.novaGroup && (
                <span className="text-[10px] font-bold text-slate-700 bg-amber-100 px-2 py-0.2 rounded-md">
                  NOVA {product.novaGroup}
                </span>
              )}
              {product.isVegetarian === true && (
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded-md flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-emerald-600" /> Veg
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Suitability Banner */}
        <div className={`rounded-2xl p-4 border space-y-1.5 ${currentStatusStyle.lightBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-black uppercase tracking-wider ${currentStatusStyle.text}`}>
              {currentStatusStyle.label}
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-800 leading-relaxed">
            {evaluation?.recommendation || 'Evaluated against your active goals.'}
          </p>

          {evaluation?.mainConcern && (
            <p className="text-[11px] text-red-700 font-semibold bg-red-100/60 p-2 rounded-xl border border-red-200/60 mt-1">
              {evaluation.mainConcern}
            </p>
          )}
        </div>
      </div>

      {/* Non-medical Disclaimer */}
      <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200/80 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-900 font-semibold leading-relaxed">
          {evaluation?.disclaimer || 'Notice: HealthScan provides general nutritional guidance and does not replace medical advice from a physician or registered dietitian.'}
        </p>
      </div>

      {/* Per-Goal Evaluation Breakdown */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          Personalized Goal Evaluations ({evalGoals.length})
        </h3>

        <div className="space-y-2">
          {evalGoals.map((g, idx) => {
            const isExpanded = expandedGoal === idx;
            const isWarning = g.severity === 'WARNING';
            const isCaution = g.severity === 'CAUTION';
            const isGood = g.severity === 'GOOD';

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

                {/* Primary Reason */}
                <p className="px-3.5 pb-3 text-xs text-slate-800 font-semibold leading-relaxed">
                  {g.reasons[0]}
                </p>

                {/* Expandable Why Details */}
                {isExpanded && (
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-200/60 space-y-2">
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Evaluation Details:</p>
                    <ul className="space-y-1 text-xs text-slate-700 font-medium pl-1">
                      {g.reasons.slice(1).map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <CornerDownRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    {g.unavailableData && g.unavailableData.length > 0 && (
                      <div className="text-[11px] text-slate-500 bg-white/70 p-2 rounded-xl border border-slate-200/50">
                        <span className="font-bold text-slate-700">Missing from database: </span>
                        {g.unavailableData.join(', ')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Available Product Information Table */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Available Nutrition Facts
          </h3>

          <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold">
            <button
              onClick={() => setViewServing(false)}
              className={`px-3 py-1 rounded-lg transition-all ${
                !viewServing ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-500'
              }`}
            >
              Per 100g
            </button>
            <button
              onClick={() => setViewServing(true)}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewServing ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-500'
              }`}
            >
              Per Serving ({product.servingSize || '30g'})
            </button>
          </div>
        </div>

        {/* Grid Summary */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Energy</span>
            <span className="text-base font-extrabold text-slate-900">
              {formatNutrient(viewServing ? product.nutriments?.energyServing : product.nutriments?.energy100g, 'kcal')}
            </span>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Protein</span>
            <span className="text-base font-extrabold text-emerald-700">
              {formatNutrient(viewServing ? product.nutriments?.proteinServing : product.nutriments?.protein100g, 'g')}
            </span>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-0.5">Fiber</span>
            <span className="text-base font-extrabold text-emerald-700">
              {formatNutrient(viewServing ? product.nutriments?.fiberServing : product.nutriments?.fiber100g, 'g')}
            </span>
          </div>
        </div>

        {/* Detailed Rows */}
        <div className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Carbohydrates</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.carbohydratesServing : product.nutriments?.carbohydrates100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between pl-3 border-l-2 border-amber-300 my-1">
            <span className="text-slate-600">— Total Sugars</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.sugarsServing : product.nutriments?.sugars100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between pl-3 border-l-2 border-amber-400 my-1">
            <span className="text-slate-600">— Added Sugars</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.addedSugarsServing : product.nutriments?.addedSugars100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Total Fat</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.fatServing : product.nutriments?.fat100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between pl-3 border-l-2 border-red-300 my-1">
            <span className="text-slate-600">— Saturated Fat</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.saturatedFatServing : product.nutriments?.saturatedFat100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between pl-3 border-l-2 border-red-400 my-1">
            <span className="text-slate-600">— Trans Fat</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.transFatServing : product.nutriments?.transFat100g)}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Sodium</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.sodiumServing : product.nutriments?.sodium100g, 'mg')}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-slate-500">Salt Equivalent</span>
            <span className="font-bold text-slate-800">{formatNutrient(viewServing ? product.nutriments?.saltServing : product.nutriments?.salt100g)}</span>
          </div>
        </div>
      </div>

      {/* Ingredient List */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
          Ingredient List
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
          {product.ingredientsText || 'Not available'}
        </p>
      </div>

    </div>
  );
}
