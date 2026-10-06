import React from 'react';
import { X, Scale, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CompareModal({ isOpen, onClose, scannedProduct, alternatives = [], onSelectAlternative }) {
  if (!isOpen || !scannedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">Compare Healthier Alternatives</h3>
              <p className="text-[11px] text-slate-500">Database products tailored for your active food goals</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {alternatives.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Sparkles className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-bold text-slate-700">No Alternative Products Found</p>
              <p className="text-[11px] text-slate-400 max-w-[240px] mx-auto">
                No alternative product matching your exact nutritional thresholds is currently indexed in local cache.
              </p>
            </div>
          ) : (
            alternatives.map((altItem, idx) => {
              const alt = altItem.product;
              const evalRes = altItem.evaluation;

              return (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={alt.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80'}
                        alt={alt.name}
                        className="w-10 h-10 rounded-xl object-cover bg-white border border-slate-200 flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900">{alt.name}</h4>
                        <p className="text-[11px] text-slate-500">{alt.brand}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onSelectAlternative(alt.barcode);
                        onClose();
                      }}
                      className="text-xs font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-xl transition-colors"
                    >
                      Select
                    </button>
                  </div>

                  {/* Side-by-side comparison table */}
                  <div className="bg-white rounded-xl p-3 border border-slate-200/80 text-xs space-y-1.5">
                    <div className="grid grid-cols-3 font-extrabold text-slate-400 text-[10px] uppercase border-b border-slate-100 pb-1">
                      <span>Nutrient</span>
                      <span>Scanned Item</span>
                      <span className="text-emerald-700">Alternative</span>
                    </div>

                    <div className="grid grid-cols-3 font-semibold text-slate-700">
                      <span>Calories</span>
                      <span className="text-slate-900">{scannedProduct.nutriments?.energyServing || scannedProduct.nutriments?.energy100g || 'N/A'} kcal</span>
                      <span className="font-bold text-emerald-700">{alt.nutriments?.energyServing || alt.nutriments?.energy100g || 'N/A'} kcal</span>
                    </div>

                    <div className="grid grid-cols-3 font-semibold text-slate-700">
                      <span>Total Sugar</span>
                      <span className="text-slate-900">{scannedProduct.nutriments?.sugarsServing || scannedProduct.nutriments?.sugars100g || 'N/A'} g</span>
                      <span className="font-bold text-emerald-700">{alt.nutriments?.sugarsServing || alt.nutriments?.sugars100g || 'N/A'} g</span>
                    </div>

                    <div className="grid grid-cols-3 font-semibold text-slate-700">
                      <span>Protein</span>
                      <span className="text-slate-900">{scannedProduct.nutriments?.proteinServing || scannedProduct.nutriments?.protein100g || 'N/A'} g</span>
                      <span className="font-bold text-emerald-700">{alt.nutriments?.proteinServing || alt.nutriments?.protein100g || 'N/A'} g</span>
                    </div>

                    <div className="grid grid-cols-3 font-semibold text-slate-700">
                      <span>Fiber</span>
                      <span className="text-slate-900">{scannedProduct.nutriments?.fiberServing || scannedProduct.nutriments?.fiber100g || 'N/A'} g</span>
                      <span className="font-bold text-emerald-700">{alt.nutriments?.fiberServing || alt.nutriments?.fiber100g || 'N/A'} g</span>
                    </div>
                  </div>

                  {evalRes && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      {evalRes.recommendation}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
