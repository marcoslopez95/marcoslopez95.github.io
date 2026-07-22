import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';

interface StackViewProps {
  lang: Language;
  theme: Theme;
}

export const StackView: React.FC<StackViewProps> = ({ lang, theme }) => {
  const t = translations[lang].stack;
  const [trafficSimulating, setTrafficSimulating] = useState(true);
  const [activeNode, setActiveNode] = useState<string | null>(null);

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
      </div>

      {/* Languages & Distributed Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Core Languages */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{t.coreLanguages}</h2>
          <div className="space-y-4">
            {t.languages.map((item) => (
              <div
                key={item.name}
                className={`p-6 rounded-2xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#191c1e] border-[#45464d]/40 hover:border-[#4ae176]/50'
                    : 'bg-white border-[#bccac0]/60 shadow-sm hover:border-[#006948]/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span
                    className={`font-mono-code text-[11px] px-2.5 py-0.5 rounded font-bold ${
                      theme === 'dark'
                        ? 'bg-[#006948]/30 text-[#4ae176]'
                        : 'bg-[#006948]/10 text-[#006948]'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="opacity-80 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Distributed Systems Highlight Box */}
        <div className="lg:col-span-5">
          <div
            className={`p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden shadow-xl ${
              theme === 'dark'
                ? 'bg-[#003915] text-white border border-[#4ae176]/30'
                : 'bg-[#005137] text-white'
            }`}
          >
            <div className="space-y-6 relative z-10">
              <span className="material-symbols-outlined text-4xl">device_hub</span>
              <div>
                <h3 className="text-2xl font-bold mb-1">{t.distributedTitle}</h3>
                <p className="font-mono-code text-xs opacity-80 italic">
                  "{t.distributedDesc}"
                </p>
              </div>

              <ul className="space-y-3 font-sans-geist text-sm opacity-90">
                {t.distributedPoints.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="material-symbols-outlined text-base text-[#4ae176] mt-0.5">
                      check_circle
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/20 font-mono-code text-xs flex justify-between items-center opacity-80">
              <span>DESIGNED FOR FAILOVER</span>
              <span>ZERO DOWNTIME</span>
            </div>
          </div>
        </div>
      </div>

      {/* High-Availability Architecture Traffic Simulation */}
      <section
        className={`p-6 sm:p-8 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-[#101415] border-[#45464d]/40'
            : 'bg-[#f5fbf5] border-[#bccac0]/50'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t.haTitle}</h2>
            <p className="text-xs sm:text-sm opacity-70 font-mono-code">{t.haSubtitle}</p>
          </div>
          <button
            onClick={() => setTrafficSimulating(!trafficSimulating)}
            className={`font-mono-code text-xs px-3 py-1.5 rounded border flex items-center gap-1.5 transition-colors ${
              trafficSimulating
                ? 'bg-[#4ae176]/20 border-[#4ae176] text-[#4ae176]'
                : 'bg-gray-800 border-gray-600 text-gray-300'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                trafficSimulating ? 'bg-[#4ae176] animate-ping' : 'bg-gray-500'
              }`}
            ></span>
            <span>{trafficSimulating ? 'PAUSE TRAFFIC SIM' : 'RESUME TRAFFIC SIM'}</span>
          </button>
        </div>

        {/* Live Topology Canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <button
            onClick={() => setActiveNode('Client Requests')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeNode === 'Client Requests'
                ? 'border-[#4ae176] bg-[#4ae176]/10'
                : theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]'
                : 'bg-white border-[#bccac0]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl text-[#006948] dark:text-[#4ae176]">
              language
            </span>
            <p className="font-mono-code text-xs font-bold mt-2">1. Client Edge</p>
            <p className="text-[11px] opacity-60">Cloudflare CDN / TLS 1.3</p>
          </button>

          <button
            onClick={() => setActiveNode('Load Balancer')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeNode === 'Load Balancer'
                ? 'border-[#4ae176] bg-[#4ae176]/10'
                : theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]'
                : 'bg-white border-[#bccac0]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl text-[#006948] dark:text-[#4ae176]">
              router
            </span>
            <p className="font-mono-code text-xs font-bold mt-2">2. ALB Ingress</p>
            <p className="text-[11px] opacity-60">Round-Robin / Health Check</p>
          </button>

          <button
            onClick={() => setActiveNode('API Gateway')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeNode === 'API Gateway'
                ? 'border-[#4ae176] bg-[#4ae176]/10'
                : theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]'
                : 'bg-white border-[#bccac0]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl text-[#006948] dark:text-[#4ae176]">
              shield_lock
            </span>
            <p className="font-mono-code text-xs font-bold mt-2">3. Auth & Rate Limit</p>
            <p className="text-[11px] opacity-60">AWS Cognito / Sanctum</p>
          </button>

          <button
            onClick={() => setActiveNode('Microservices Cluster')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeNode === 'Microservices Cluster'
                ? 'border-[#4ae176] bg-[#4ae176]/10'
                : theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]'
                : 'bg-white border-[#bccac0]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl text-[#006948] dark:text-[#4ae176]">
              apps
            </span>
            <p className="font-mono-code text-xs font-bold mt-2">4. App Micro-Nodes</p>
            <p className="text-[11px] opacity-60">Laravel / Go / Redis</p>
          </button>

          <button
            onClick={() => setActiveNode('Database Cluster')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeNode === 'Database Cluster'
                ? 'border-[#4ae176] bg-[#4ae176]/10'
                : theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]'
                : 'bg-white border-[#bccac0]'
            }`}
          >
            <span className="material-symbols-outlined text-2xl text-[#006948] dark:text-[#4ae176]">
              database
            </span>
            <p className="font-mono-code text-xs font-bold mt-2">5. Persistence Layer</p>
            <p className="text-[11px] opacity-60">Postgres Aurora Cluster</p>
          </button>
        </div>

        {activeNode && (
          <div className="mt-4 p-4 rounded-lg bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/30 dark:border-[#4ae176]/30 font-mono-code text-xs flex justify-between items-center">
            <span>Selected Node: <strong>{activeNode}</strong> — Status: OPTIMAL (0% dropped packets)</span>
            <button
              onClick={() => setActiveNode(null)}
              className="text-xs underline opacity-70 hover:opacity-100"
            >
              Clear selection
            </button>
          </div>
        )}
      </section>

      {/* Data Strategy & Applied AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Data Strategy */}
        <div
          className={`p-8 rounded-2xl border space-y-6 ${
            theme === 'dark'
              ? 'bg-[#191c1e] border-[#45464d]/40'
              : 'bg-white border-[#bccac0]/60 shadow-sm'
          }`}
        >
          <h3 className="text-2xl font-bold tracking-tight">{t.dataStrategyTitle}</h3>
          <div className="grid grid-cols-2 gap-4">
            {t.dataItems.map((d) => (
              <div
                key={d.type}
                className={`p-4 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-[#101415] border-[#45464d]/30'
                    : 'bg-[#f5fbf5] border-[#bccac0]/40'
                }`}
              >
                <p className="font-mono-code text-xs text-[#006948] dark:text-[#4ae176] font-bold">
                  {d.type}
                </p>
                <p className="font-bold text-sm sm:text-base mt-1">{d.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applied AI */}
        <div
          className={`p-8 rounded-2xl border space-y-6 ${
            theme === 'dark'
              ? 'bg-[#191c1e] border-[#45464d]/40'
              : 'bg-white border-[#bccac0]/60 shadow-sm'
          }`}
        >
          <h3 className="text-2xl font-bold tracking-tight">{t.aiTitle}</h3>
          <div className="space-y-4">
            {t.aiItems.map((ai, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border space-y-1.5 ${
                  theme === 'dark'
                    ? 'bg-[#101415] border-[#45464d]/30'
                    : 'bg-[#f5fbf5] border-[#bccac0]/40'
                }`}
              >
                <p className="font-bold text-base flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                    auto_awesome
                  </span>
                  {ai.title}
                </p>
                <p className="opacity-80 text-sm leading-relaxed">{ai.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Banner */}
      <div
        className={`p-8 rounded-2xl border grid grid-cols-1 md:grid-cols-3 gap-6 text-center ${
          theme === 'dark'
            ? 'bg-[#101415] border-[#45464d]/40'
            : 'bg-[#e9efe9] border-[#bccac0]/50'
        }`}
      >
        <div className="space-y-1">
          <p className="text-2xl font-extrabold text-[#006948] dark:text-[#4ae176]">
            {t.banner.uptimeVal}
          </p>
          <p className="text-xs opacity-75">{t.banner.uptimeSub}</p>
        </div>
        <div className="space-y-1 border-y md:border-y-0 md:border-x border-[#45464d]/20 py-4 md:py-0">
          <p className="text-2xl font-extrabold text-[#006948] dark:text-[#4ae176]">
            {t.banner.latencyVal}
          </p>
          <p className="text-xs opacity-75">{t.banner.latencySub}</p>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-extrabold text-[#006948] dark:text-[#4ae176]">
            {t.banner.securityVal}
          </p>
          <p className="text-xs opacity-75">{t.banner.securitySub}</p>
        </div>
      </div>
    </div>
  );
};
