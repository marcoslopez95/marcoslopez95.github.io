import React from 'react';
import { Language, TabId, Theme } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
  theme: Theme;
  onSelectTab: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, theme, onSelectTab }) => {
  const t = translations[lang].footer;

  return (
    <footer
      className={`w-full py-8 px-4 md:px-8 border-t transition-colors duration-200 mt-16 ${
        theme === 'dark'
          ? 'bg-[#0b0f10] border-[#45464d]/30 text-[#e0e3e5]'
          : 'bg-[#eff5ef] border-[#bccac0]/40 text-[#171d19]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-code">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#4ae176] animate-pulse"></span>
          <span className="font-bold opacity-90">{t.copyright}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[#909097] dark:text-[#c6c6cd]">
          <a
            href="https://github.com/marcoslopez1895"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4ae176] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/marcoslopez1895"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4ae176] transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={() => onSelectTab('experience')}
            className="hover:text-[#4ae176] transition-colors"
          >
            Architecture Blog
          </button>
          <button
            onClick={() => onSelectTab('connect')}
            className="hover:text-[#4ae176] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};
