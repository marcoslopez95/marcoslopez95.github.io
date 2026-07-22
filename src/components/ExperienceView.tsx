import React, { useState } from 'react';
import { Language, Theme, CaseStudy } from '../types';
import { translations } from '../data/translations';

interface ExperienceViewProps {
  lang: Language;
  theme: Theme;
  onOpenModal: (caseStudy: CaseStudy) => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  lang,
  theme,
  onOpenModal,
}) => {
  const t = translations[lang].experience;
  const [activeTabCase, setActiveTabCase] = useState<string>('maketicket');

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

      {/* Case Studies Stack */}
      <div className="space-y-16">
        {t.caseStudies.map((item) => {
          const isSelected = activeTabCase === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-[#191c1e] border-[#45464d]/40'
                  : 'bg-white border-[#bccac0]/60 shadow-md'
              }`}
            >
              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`font-mono-code text-2xl font-bold ${
                        theme === 'dark' ? 'text-[#4ae176]' : 'text-[#006948]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {item.title}
                    </h2>
                  </div>

                  {/* Challenge */}
                  <div className="space-y-2">
                    <p className="font-mono-code text-xs opacity-60 uppercase tracking-wider">
                      {t.challengeLabel}
                    </p>
                    <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Architecture Tech Chips */}
                  <div className="space-y-2">
                    <p className="font-mono-code text-xs opacity-60 uppercase tracking-wider">
                      {t.architectureLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.architecture.map((tech) => (
                        <span
                          key={tech}
                          className={`font-mono-code text-xs px-2.5 py-1 rounded border ${
                            theme === 'dark'
                              ? 'bg-[#101415] border-[#45464d] text-[#c6c6cd]'
                              : 'bg-[#eff5ef] border-[#bccac0] text-[#171d19]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div
                      className={`p-3.5 rounded-xl border ${
                        theme === 'dark'
                          ? 'bg-[#101415] border-[#45464d]/30'
                          : 'bg-[#f5fbf5] border-[#bccac0]/40'
                      }`}
                    >
                      <p className="font-mono-code text-[11px] opacity-60">
                        {item.metrics.label1}
                      </p>
                      <p className="font-bold text-lg text-[#006948] dark:text-[#4ae176]">
                        {item.metrics.value1}
                      </p>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border ${
                        theme === 'dark'
                          ? 'bg-[#101415] border-[#45464d]/30'
                          : 'bg-[#f5fbf5] border-[#bccac0]/40'
                      }`}
                    >
                      <p className="font-mono-code text-[11px] opacity-60">
                        {item.metrics.label2}
                      </p>
                      <p className="font-bold text-lg text-[#006948] dark:text-[#4ae176]">
                        {item.metrics.value2}
                      </p>
                    </div>
                  </div>

                  {/* Inspect Details Button */}
                  <div className="pt-2">
                    <button
                      onClick={() =>
                        onOpenModal({
                          id: item.id,
                          number: item.number,
                          title: item.title,
                          challenge: item.challenge,
                          architecture: item.architecture,
                          metrics: item.metrics,
                          image: '',
                          imageCaption: item.imageCaption,
                        })
                      }
                      className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all ${
                        theme === 'dark'
                          ? 'border-[#4ae176]/40 text-[#4ae176] hover:bg-[#4ae176]/10'
                          : 'border-[#006948]/40 text-[#006948] hover:bg-[#006948]/10'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">schema</span>
                      <span>{t.viewDiagram}</span>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Visualizer Column */}
                <div className="lg:col-span-7">
                  <div
                    className={`rounded-xl border p-4 sm:p-6 space-y-4 ${
                      theme === 'dark'
                        ? 'bg-[#101415] border-[#45464d]/40'
                        : 'bg-[#f5fbf5] border-[#bccac0]/40'
                    }`}
                  >
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between border-b border-[#45464d]/20 pb-3 font-mono-code text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4ae176] animate-pulse"></span>
                        <span className="font-bold">
                          {item.id === 'hotel-dubai' ? t.grpcStream : t.liveDeployment}
                        </span>
                      </div>
                      <span className="opacity-60">{item.imageCaption}</span>
                    </div>

                    {/* Architecture Node Interactive Visualizer */}
                    {item.id === 'maketicket' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              cloud_sync
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">
                              API Gateway
                            </p>
                            <p className="text-[10px] opacity-60">Nginx Reverse Proxy</p>
                          </div>
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              memory
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">
                              Redis Queue
                            </p>
                            <p className="text-[10px] opacity-60">Burst Throttling</p>
                          </div>
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              payments
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">
                              Stripe Connect
                            </p>
                            <p className="text-[10px] opacity-60">Sub-second Auth</p>
                          </div>
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              database
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">
                              MySQL Cluster
                            </p>
                            <p className="text-[10px] opacity-60">Primary / Replica</p>
                          </div>
                        </div>

                        {/* Simulated Live Analytics Bar */}
                        <div className="p-4 rounded-lg bg-black/30 font-mono-code text-xs space-y-2">
                          <div className="flex justify-between items-center opacity-80">
                            <span>[REAL-TIME TICKETING FLOW]</span>
                            <span className="text-[#4ae176]">10,420 TPS</span>
                          </div>
                          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#4ae176] h-full w-[88%] animate-pulse"></div>
                          </div>
                          <p className="text-[10px] opacity-50">
                            Peak load handled without connection drops or queue overflow.
                          </p>
                        </div>
                      </div>
                    )}

                    {item.id === 'hotel-dubai' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              smartphone
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">Guest App</p>
                          </div>
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              hub
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">gRPC Mesh</p>
                          </div>
                          <div className="p-3 rounded bg-[#006948]/10 dark:bg-[#4ae176]/10 border border-[#006948]/20 dark:border-[#4ae176]/20">
                            <span className="material-symbols-outlined text-lg text-[#006948] dark:text-[#4ae176]">
                              nest_thermostat
                            </span>
                            <p className="font-mono-code text-[11px] font-bold mt-1">Smart IoT</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-black/30 font-mono-code text-xs space-y-2">
                          <div className="flex justify-between text-[11px]">
                            <span className="opacity-70">Stream Protocol:</span>
                            <span className="text-[#4ae176] font-bold">HTTP/2 Bidirectional</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="opacity-70">Average Latency:</span>
                            <span className="text-[#4ae176] font-bold">45 milliseconds</span>
                          </div>
                          <div className="flex justify-between text-[11px]">
                            <span className="opacity-70">Message Broker:</span>
                            <span className="text-[#4ae176] font-bold">Apache Kafka + RabbitMQ</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.id === 'zippytech' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-black/30 font-mono-code text-xs space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[#4ae176] font-bold">[ETL PIPELINE ACTIVE]</span>
                            <span className="opacity-60">2,410,980 / 2,410,980 Records</span>
                          </div>
                          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#4ae176] h-full w-full"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px] opacity-70">
                            <div>• Legacy C++ Bridge: Verified</div>
                            <div>• AWS S3 Archival: Encrypted</div>
                            <div>• Postgres Partitioning: Complete</div>
                            <div>• Compliance Checksum: Passed</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
