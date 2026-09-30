import React from 'react';
import { QrCode, Search, Target, Activity, Apple } from 'lucide-react';

export default function Header({ scannerMode, setScannerMode, activeTab, setActiveTab, onOpenSearch, onOpenGoalSetup, goalsCount = 0 }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => {
            setScannerMode('choice');
            setActiveTab('scanner');
          }} 
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center overflow-hidden shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform p-0.5">
            <img src="/logo.svg" alt="INDI Emblem Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="font-black text-lg leading-none tracking-tight flex items-center gap-1.5 text-white">
              INDI <span className="text-emerald-400 font-semibold text-xs tracking-wider uppercase">Integrative Health</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
              {scannerMode === 'fresh' ? 'Fresh Food Scanner' : 'Barcode & Food Analyzer'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center"
            title="Search food by name"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Goal Setup Button */}
          <button
            onClick={onOpenGoalSetup}
            className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            title="Food Goals & Profile"
          >
            <Target className="w-5 h-5" />
            {goalsCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 text-slate-950 font-black text-[9px] rounded-full flex items-center justify-center shadow-sm">
                {goalsCount}
              </span>
            )}
          </button>

          {/* Mode Switcher Pills */}
          <div className="bg-slate-800 p-1 rounded-xl flex items-center gap-1 border border-slate-700/60 ml-1">
            <button
              onClick={() => {
                setScannerMode('packaged');
                setActiveTab('scanner');
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                scannerMode === 'packaged' && activeTab === 'scanner'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Packaged Barcode Scanner"
            >
              <QrCode className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setScannerMode('fresh');
                setActiveTab('scanner');
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                scannerMode === 'fresh' && activeTab === 'scanner'
                  ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Fresh Food Camera Scanner"
            >
              <Apple className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
