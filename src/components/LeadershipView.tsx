import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';

interface LeadershipViewProps {
  lang: Language;
  theme: Theme;
}

export const LeadershipView: React.FC<LeadershipViewProps> = ({ lang, theme }) => {
  const t = translations[lang].leadership;
  const [engineHealth, setEngineHealth] = useState(99.9);
  const [engineActiveNodes, setEngineActiveNodes] = useState(12);

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-block font-mono-code text-xs px-3 py-1 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 text-[#006948] dark:text-[#4ae176] font-bold">
          {t.tag}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg opacity-80 leading-relaxed">
          {t.subtitle}
        </p>

        {/* Stats Pill */}
        <div className="flex flex-wrap gap-4 pt-2">
          {t.stats.map((s, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-xl border flex items-center space-x-3 ${
                theme === 'dark'
                  ? 'bg-[#191c1e] border-[#45464d]/40'
                  : 'bg-white border-[#bccac0]/60'
              }`}
            >
              <span className="font-mono-code text-xs opacity-60">{s.label}:</span>
              <span className="font-bold text-sm text-[#006948] dark:text-[#4ae176]">
                {s.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Visualization Engine v4.2.0 */}
      <section
        className={`p-6 sm:p-8 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-[#101415] border-[#45464d]/40'
            : 'bg-[#f5fbf5] border-[#bccac0]/50'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-[#45464d]/20 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-[#4ae176] animate-pulse"></span>
            <h2 className="font-mono-code text-sm font-bold tracking-wider">
              {t.engineTitle}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 font-mono-code text-xs">
            <span className="opacity-70">
              HEALTH: <strong className="text-[#4ae176]">{engineHealth}%</strong>
            </span>
            <span className="opacity-70">
              NODES: <strong className="text-[#4ae176]">{engineActiveNodes} ACTIVE</strong>
            </span>
            <span className="opacity-70">
              LATENCY: <strong className="text-[#4ae176]">18ms</strong>
            </span>
          </div>
        </div>

        {/* Topology Simulation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              lan
            </span>
            <p className="font-mono-code text-[11px] font-bold">Region US-East</p>
            <p className="text-[10px] opacity-60">Primary Mesh</p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              cloud_queue
            </span>
            <p className="font-mono-code text-[11px] font-bold">Region EU-West</p>
            <p className="text-[10px] opacity-60">Failover Cluster</p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              security
            </span>
            <p className="font-mono-code text-[11px] font-bold">IAM & WAF</p>
            <p className="text-[10px] opacity-60">Shield Active</p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              memory
            </span>
            <p className="font-mono-code text-[11px] font-bold">Worker Queues</p>
            <p className="text-[10px] opacity-60">Laravel Horizon</p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              data_thresholding
            </span>
            <p className="font-mono-code text-[11px] font-bold">Prometheus</p>
            <p className="text-[10px] opacity-60">Grafana Logs</p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/20 border border-[#4ae176]/30 text-center space-y-1">
            <span className="material-symbols-outlined text-lg text-[#4ae176]">
              smart_toy
            </span>
            <p className="font-mono-code text-[11px] font-bold">AI Sentinel</p>
            <p className="text-[10px] opacity-60">Auto Healing</p>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t.strategicTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Area 1: Team Management */}
          <div
            className={`p-8 rounded-2xl border space-y-6 ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-3xl text-[#006948] dark:text-[#4ae176]">
                groups
              </span>
              <h3 className="text-xl font-bold">{t.focusAreas[0].title}</h3>
            </div>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.focusAreas[0].desc}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {t.focusAreas[0].metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-[#101415] border-[#45464d]/30'
                      : 'bg-[#f5fbf5] border-[#bccac0]/40'
                  }`}
                >
                  <p className="font-mono-code text-[10px] opacity-60">{m.label}</p>
                  <p className="font-bold text-base text-[#006948] dark:text-[#4ae176]">
                    {m.val}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Area 2: AI & Mentorship */}
          <div
            className={`p-8 rounded-2xl border space-y-6 ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-3xl text-[#006948] dark:text-[#4ae176]">
                psychology
              </span>
              <h3 className="text-xl font-bold">{t.focusAreas[1].title}</h3>
            </div>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.focusAreas[1].desc}
            </p>

            <div className="space-y-2 pt-2">
              {t.focusAreas[1].points?.map((p, idx) => (
                <div key={idx} className="flex items-center space-x-2 font-mono-code text-xs">
                  <span className="material-symbols-outlined text-base text-[#006948] dark:text-[#4ae176]">
                    check_small
                  </span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Area 3: Legacy Modernization */}
          <div
            className={`p-8 rounded-2xl border space-y-4 ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-3xl text-[#006948] dark:text-[#4ae176]">
                published_with_changes
              </span>
              <h3 className="text-xl font-bold">{t.focusAreas[2].title}</h3>
            </div>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.focusAreas[2].desc}
            </p>
          </div>

          {/* Area 4: Cloud Strategy & DevOps */}
          <div
            className={`p-8 rounded-2xl border space-y-4 ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-3xl text-[#006948] dark:text-[#4ae176]">
                cloud_sync
              </span>
              <h3 className="text-xl font-bold">{t.focusAreas[3].title}</h3>
            </div>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.focusAreas[3].desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {t.focusAreas[3].tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-code text-xs px-2.5 py-1 rounded border bg-[#006948]/10 dark:bg-[#4ae176]/10 border-[#006948]/20 dark:border-[#4ae176]/20 text-[#006948] dark:text-[#4ae176] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Impact Rules */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t.culturalTitle}
          </h2>
          <p className="text-sm sm:text-base opacity-75 mt-1">
            {t.culturalSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.culturalItems.map((c, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border space-y-3 ${
                theme === 'dark'
                  ? 'bg-[#101415] border-[#45464d]/40'
                  : 'bg-[#f5fbf5] border-[#bccac0]/50'
              }`}
            >
              <p className="font-mono-code text-xs font-bold text-[#006948] dark:text-[#4ae176]">
                0{idx + 1}. {c.title}
              </p>
              <p className="text-sm opacity-80 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
