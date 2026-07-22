import React from 'react';
import { CaseStudy, Language, Theme } from '../types';
import { translations } from '../data/translations';

interface ArchitectureModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  lang: Language;
  theme: Theme;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  caseStudy,
  onClose,
  lang,
  theme,
}) => {
  if (!caseStudy) return null;

  const t = translations[lang].modal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          theme === 'dark'
            ? 'bg-[#191c1e] border-[#45464d] text-[#e0e3e5]'
            : 'bg-white border-[#bccac0] text-[#171d19]'
        }`}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-[#45464d]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono-code font-bold text-xl text-[#006948] dark:text-[#4ae176]">
              {caseStudy.number}
            </span>
            <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-500/20 transition-colors"
            title={t.close}
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Challenge & Context */}
          <div className="space-y-2">
            <h3 className="font-mono-code text-xs font-bold text-[#006948] dark:text-[#4ae176] uppercase tracking-wider">
              {t.specs}
            </h3>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Architecture Stack */}
          <div className="space-y-3">
            <p className="font-mono-code text-xs opacity-60 uppercase">
              DEPLOYS & STACK MODULES
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.architecture.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-code text-xs px-3 py-1 rounded border bg-[#006948]/10 dark:bg-[#4ae176]/10 border-[#006948]/30 dark:border-[#4ae176]/30 text-[#006948] dark:text-[#4ae176] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Telemetry Log Box */}
          <div className="p-4 rounded-xl bg-black/40 border border-[#45464d]/40 font-mono-code text-xs space-y-2 text-gray-200">
            <div className="flex justify-between items-center text-[#4ae176]">
              <span>[LIVE TELEMETRY STREAM]</span>
              <span>200 OK — STATUS HEALTHY</span>
            </div>
            <p className="opacity-70 text-[11px]">
              • Circuit Breaker: CLOSED (0 failures in last 10,000 requests)
            </p>
            <p className="opacity-70 text-[11px]">
              • Primary Read Replica Lag: &lt; 2ms
            </p>
            <p className="opacity-70 text-[11px]">
              • Auto-Scaling Range: 4 to 32 EC2 Nodes on AWS
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#45464d]/30 bg-black/10 flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs font-mono-code ${
              theme === 'dark'
                ? 'bg-[#4ae176] text-[#003915]'
                : 'bg-[#006948] text-white'
            }`}
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
