import React from 'react';
import { ExternalLink, CheckCircle2, Database, Sparkles } from 'lucide-react';

/**
 * Source Provenance Badge Component
 * Displays clear provenance indicators for food nutrition data:
 * - USDA Verified Data (Government/Lab Data)
 * - Open Food Facts DB (Verified Packaged Database)
 * - AI Estimated Reference (GPT-4o / Nutritional Reference Engine)
 */
export default function ProvenanceBadge({ source, sourceUrl, compact = false }) {
  const s = (source || '').toLowerCase();

  let badgeConfig = {
    label: 'Nutritional Database',
    bg: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400',
    icon: <Database className="w-3.5 h-3.5 text-slate-500" />,
    type: 'DB'
  };

  if (s.includes('usda')) {
    badgeConfig = {
      label: 'USDA Lab Verified',
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dot: 'bg-emerald-500',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      type: 'USDA'
    };
  } else if (s.includes('open food facts') || s.includes('off') || s.includes('openfoodfacts')) {
    badgeConfig = {
      label: 'Open Food Facts DB',
      bg: 'bg-blue-50 text-blue-800 border-blue-200',
      dot: 'bg-blue-500',
      icon: <Database className="w-3.5 h-3.5 text-blue-600" />,
      type: 'OFF'
    };
  } else if (s.includes('openai') || s.includes('ai') || s.includes('estimate') || s.includes('nutritional reference engine')) {
    badgeConfig = {
      label: 'AI Estimated Reference',
      bg: 'bg-purple-50 text-purple-800 border-purple-200',
      dot: 'bg-purple-500',
      icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
      type: 'AI'
    };
  }

  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${badgeConfig.bg}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${badgeConfig.dot}`}></span>
        {badgeConfig.label}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-xl border shadow-2xs ${badgeConfig.bg}`}>
      {badgeConfig.icon}
      <span>{badgeConfig.label}</span>
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-slate-400 hover:text-slate-700 transition-colors"
          title="View raw source reference"
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}
