import React, { useState } from 'react';
import { Language, TabId, Theme } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentTab: TabId;
  onSelectTab: (tab: TabId) => void;
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
}) => {
  const t = translations[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'experience', label: t.experience },
    { id: 'stack', label: t.stack },
    { id: 'leadership', label: t.leadership },
    { id: 'connect', label: t.connect },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-200 h-16 ${
        theme === 'dark'
          ? 'bg-[#101415]/95 backdrop-blur-md border-[#45464d]/40 text-[#e0e3e5]'
          : 'bg-[#f5fbf5]/95 backdrop-blur-md border-[#bccac0]/50 text-[#171d19]'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 group text-left"
        >
          <span
            className={`font-mono-code font-bold text-lg md:text-xl tracking-tight transition-colors ${
              theme === 'dark'
                ? 'text-[#4ae176] group-hover:text-white'
                : 'text-[#006948] group-hover:text-[#002114]'
            }`}
          >
            System.Arch
          </span>
          <span className="hidden sm:inline-block text-xs font-mono-code opacity-50 border-l border-current pl-2">
            MARCOS LÓPEZ
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`font-sans-geist text-sm transition-all duration-200 py-1 border-b-2 ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-[#4ae176] font-bold border-[#4ae176]'
                      : 'text-[#006948] font-bold border-[#006948]'
                    : theme === 'dark'
                    ? 'text-[#c6c6cd] hover:text-[#4ae176] border-transparent'
                    : 'text-[#3d4a42] hover:text-[#006948] border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Utilities: Lang Toggle, Theme Toggle, Connect CTA */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className={`font-mono-code text-xs px-2.5 py-1.5 rounded border transition-colors flex items-center gap-1 ${
              theme === 'dark'
                ? 'border-[#45464d] text-[#c6c6cd] hover:text-[#4ae176] hover:border-[#4ae176]'
                : 'border-[#bccac0] text-[#3d4a42] hover:text-[#006948] hover:border-[#006948]'
            }`}
            title="Toggle Language / Cambiar Idioma"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            <span>{lang === 'EN' ? 'EN / ES' : 'ES / EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              theme === 'dark'
                ? 'hover:bg-[#272a2c] text-[#c6c6cd] hover:text-[#4ae176]'
                : 'hover:bg-[#e9efe9] text-[#3d4a42] hover:text-[#006948]'
            }`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            <span className="material-symbols-outlined text-lg">
              {theme === 'dark' ? 'settings_brightness' : 'contrast'}
            </span>
          </button>

          {/* Connect Button */}
          <button
            onClick={() => onSelectTab('connect')}
            className={`hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-sm ${
              theme === 'dark'
                ? 'bg-[#4ae176] text-[#003915] hover:bg-[#6bff8f]'
                : 'bg-[#006948] text-white hover:bg-[#00855d]'
            }`}
          >
            <span>{t.connect}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 py-4 space-y-3 transition-all ${
            theme === 'dark' ? 'bg-[#191c1e] border-[#45464d]' : 'bg-[#eff5ef] border-[#bccac0]'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 font-sans-geist font-medium text-base ${
                currentTab === item.id
                  ? theme === 'dark'
                    ? 'text-[#4ae176] font-bold'
                    : 'text-[#006948] font-bold'
                  : theme === 'dark'
                  ? 'text-[#c6c6cd]'
                  : 'text-[#3d4a42]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onSelectTab('connect');
                setMobileMenuOpen(false);
              }}
              className={`w-full py-2.5 rounded-lg font-bold text-center text-sm ${
                theme === 'dark'
                  ? 'bg-[#4ae176] text-[#003915]'
                  : 'bg-[#006948] text-white'
              }`}
            >
              {t.connect}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
