import React, { useState } from 'react';
import { X, Search, Loader2, Scale, ChevronRight } from 'lucide-react';
import { searchProductsByName } from '../services/openFoodFacts';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    try {
      const res = await searchProductsByName(query);
      setResults(res);
    } catch (err) {
      console.error('Search error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-200">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
            <Search className="w-4 h-4 text-emerald-600" />
            Search Packaged Foods by Name
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Form */}
        <div className="p-4 bg-slate-50 border-b border-slate-100">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Kurkure, Paneer, Good Day, Lays..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
            </button>
          </form>
        </div>

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2">
          {loading ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-emerald-600" />
              <p className="text-xs font-semibold">Searching Open Food Facts & Local DB...</p>
            </div>
          ) : hasSearched && results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Scale className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-bold text-slate-700">No matching products found</p>
              <p className="text-[11px] text-slate-400">Try searching for generic terms like "Paneer", "Chips", "Milk", or "Biscuits".</p>
            </div>
          ) : (
            results.map((product) => (
              <button
                key={product.barcode || Math.random()}
                onClick={() => {
                  onSelectProduct(product.barcode);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80'}
                    alt={product.name}
                    className="w-10 h-10 rounded-xl object-cover bg-slate-100 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-extrabold text-slate-900 truncate group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {product.brand} • <span className="font-mono text-[10px] text-slate-400">{product.barcode}</span>
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </button>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
