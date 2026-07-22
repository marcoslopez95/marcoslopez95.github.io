import React from 'react';
import { Language, TabId, Theme } from '../types';
import { translations } from '../data/translations';

interface HomeViewProps {
  lang: Language;
  theme: Theme;
  onSelectTab: (tab: TabId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ lang, theme, onSelectTab }) => {
  const t = translations[lang].home;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section
        className={`relative min-h-[65vh] flex items-center justify-center overflow-hidden rounded-2xl py-12 px-4 ${
          theme === 'dark' ? 'grid-pattern-dark bg-[#101415]' : 'grid-pattern-light bg-[#f5fbf5]'
        }`}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#006948]/20 dark:border-[#4ae176]/30 bg-[#006948]/10 dark:bg-[#4ae176]/10 text-[#006948] dark:text-[#4ae176] font-mono-code text-xs">
            <span className="w-2 h-2 rounded-full bg-[#006948] dark:bg-[#4ae176] mr-2 animate-pulse"></span>
            {t.status}
          </div>

          {/* Headline */}
          <h1 className="font-sans-geist text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {t.titleStart}{' '}
            <span className={theme === 'dark' ? 'text-[#4ae176]' : 'text-[#006948]'}>
              {t.titleHighlight}
            </span>{' '}
            {t.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto font-sans-geist text-base sm:text-lg opacity-80 leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => onSelectTab('experience')}
              className={`px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 group transition-all shadow-md active:scale-95 ${
                theme === 'dark'
                  ? 'bg-[#4ae176] text-[#003915] hover:bg-[#6bff8f]'
                  : 'bg-[#006948] text-white hover:bg-[#00855d]'
              }`}
            >
              <span>{t.btnBlog}</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <button
              onClick={() => onSelectTab('stack')}
              className={`px-8 py-3.5 rounded-xl font-bold border transition-all ${
                theme === 'dark'
                  ? 'border-[#45464d] hover:bg-[#1d2022] text-[#e0e3e5]'
                  : 'border-[#bccac0] hover:bg-[#e9efe9] text-[#171d19]'
              }`}
            >
              {t.btnStack}
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Metric 1 */}
          <div
            className={`md:col-span-4 p-8 rounded-2xl flex flex-col justify-between border transition-all hover:border-[#4ae176] ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/50 shadow-sm'
            }`}
          >
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 text-[#006948] dark:text-[#4ae176]">
                dns
              </span>
              <h3 className="font-mono-code text-xs uppercase tracking-widest opacity-70 mb-2">
                {t.metrics.healthTitle}
              </h3>
            </div>
            <div className="flex items-end justify-between pt-6">
              <span className="text-4xl sm:text-5xl font-bold">{t.metrics.healthVal}</span>
              <div className="flex flex-col items-end">
                <span className="font-bold text-[#006948] dark:text-[#4ae176]">
                  {t.metrics.healthLabel}
                </span>
                <span className="text-xs opacity-60">{t.metrics.healthSub}</span>
              </div>
            </div>
          </div>

          {/* Metric 2 (Hero Green Card) */}
          <div
            className={`md:col-span-4 p-8 rounded-2xl flex flex-col justify-between overflow-hidden relative shadow-lg ${
              theme === 'dark'
                ? 'bg-[#005137] text-white'
                : 'bg-[#006948] text-white'
            }`}
          >
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[180px]">account_tree</span>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">hub</span>
              <h3 className="font-mono-code text-xs uppercase tracking-widest opacity-80 mb-2">
                {t.metrics.architectedTitle}
              </h3>
            </div>
            <div className="flex items-end justify-between relative z-10 pt-6">
              <span className="text-5xl font-bold">{t.metrics.architectedVal}</span>
              <span className="font-bold text-lg">{t.metrics.architectedSub}</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            className={`md:col-span-4 p-8 rounded-2xl flex flex-col justify-between border transition-all hover:border-[#4ae176] ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/50 shadow-sm'
            }`}
          >
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 text-[#006948] dark:text-[#4ae176]">
                groups
              </span>
              <h3 className="font-mono-code text-xs uppercase tracking-widest opacity-70 mb-2">
                {t.metrics.leadershipTitle}
              </h3>
            </div>
            <div className="flex items-end justify-between pt-6">
              <span className="text-4xl sm:text-5xl font-bold">{t.metrics.leadershipVal}</span>
              <span className="font-bold text-[#006948] dark:text-[#4ae176]">
                {t.metrics.leadershipSub}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Ecosystem Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 border-t border-[#45464d]/20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.ecosystem.title}{' '}
              <span className={theme === 'dark' ? 'text-[#4ae176]' : 'text-[#006948]'}>
                {t.ecosystem.titleHighlight}
              </span>
            </h2>
            <p className="opacity-80 text-base sm:text-lg leading-relaxed">
              {t.ecosystem.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div
                className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  theme === 'dark'
                    ? 'bg-[#191c1e] border-[#45464d]/40'
                    : 'bg-[#eff5ef] border-[#bccac0]/50'
                }`}
              >
                <span className="material-symbols-outlined text-2xl opacity-70">terminal</span>
                <div>
                  <p className="font-mono-code text-xs opacity-60">{t.ecosystem.langLabel}</p>
                  <p className="font-bold text-sm sm:text-base">{t.ecosystem.langVal}</p>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  theme === 'dark'
                    ? 'bg-[#191c1e] border-[#45464d]/40'
                    : 'bg-[#eff5ef] border-[#bccac0]/50'
                }`}
              >
                <span className="material-symbols-outlined text-2xl opacity-70">layers</span>
                <div>
                  <p className="font-mono-code text-xs opacity-60">{t.ecosystem.frameLabel}</p>
                  <p className="font-bold text-sm sm:text-base">{t.ecosystem.frameVal}</p>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  theme === 'dark'
                    ? 'bg-[#191c1e] border-[#45464d]/40'
                    : 'bg-[#eff5ef] border-[#bccac0]/50'
                }`}
              >
                <span className="material-symbols-outlined text-2xl opacity-70">cloud</span>
                <div>
                  <p className="font-mono-code text-xs opacity-60">{t.ecosystem.cloudLabel}</p>
                  <p className="font-bold text-sm sm:text-base">{t.ecosystem.cloudVal}</p>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center space-x-3.5 ${
                  theme === 'dark'
                    ? 'bg-[#191c1e] border-[#45464d]/40'
                    : 'bg-[#eff5ef] border-[#bccac0]/50'
                }`}
              >
                <span className="material-symbols-outlined text-2xl opacity-70">database</span>
                <div>
                  <p className="font-mono-code text-xs opacity-60">{t.ecosystem.engineLabel}</p>
                  <p className="font-bold text-sm sm:text-base">{t.ecosystem.engineVal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Workspace Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-[#45464d]/40 shadow-2xl group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnOA2uteTKw0V4l2yFyu5KISPAaSRtpr922xn5QxQk_8MbFAG5AIDyEV3rz_AR3OVo-bQo-LelVu9YLDda2XFNELH9sS9mTiU9snFSltY8jlv9CKZKNDlVdnQNg4pIh2yfGPJWpZ8a_qMgwMyGj4ZmPB4vQ3baXMYwiHmsi-d1KJ_gn1FIjpbvyv5_dADCDrFqFTe6Mjm0RJ5WfB4n_x26otDxw1EO3KF-czqm4f9D1b5sH5WeUWmRbQ"
                alt="Production Architecture Workspace"
                className="w-full h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101415] via-[#101415]/70 to-transparent p-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4ae176]"></span>
                  <span className="font-mono-code text-xs text-white">
                    {t.ecosystem.imageTag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section
        className={`py-16 px-4 md:px-8 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-[#191c1e] border-[#45464d]/40'
            : 'bg-[#e9efe9] border-[#bccac0]/50'
        }`}
      >
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t.principles.title}
            </h2>
            <p className="opacity-70 text-sm sm:text-base">{t.principles.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <div
              className={`p-8 rounded-2xl border flex gap-6 ${
                theme === 'dark'
                  ? 'bg-[#101415] border-[#45464d]/30'
                  : 'bg-white border-[#bccac0]/50'
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#006948]/10 dark:bg-[#4ae176]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#006948] dark:text-[#4ae176] text-2xl">
                  shield_with_heart
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{t.principles.p1Title}</h3>
                <p className="opacity-80 text-sm sm:text-base leading-relaxed">
                  {t.principles.p1Desc}
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div
              className={`p-8 rounded-2xl border flex gap-6 ${
                theme === 'dark'
                  ? 'bg-[#101415] border-[#45464d]/30'
                  : 'bg-white border-[#bccac0]/50'
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#006948]/10 dark:bg-[#4ae176]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#006948] dark:text-[#4ae176] text-2xl">
                  bolt
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{t.principles.p2Title}</h3>
                <p className="opacity-80 text-sm sm:text-base leading-relaxed">
                  {t.principles.p2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
