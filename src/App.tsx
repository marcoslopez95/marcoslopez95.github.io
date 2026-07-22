import React, { useState, useEffect } from 'react';
import { TabId, Language, Theme, CaseStudy, TerminalLog } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ExperienceView } from './components/ExperienceView';
import { StackView } from './components/StackView';
import { LeadershipView } from './components/LeadershipView';
import { ConnectView } from './components/ConnectView';
import { ArchitectureModal } from './components/ArchitectureModal';
import { SystemTerminal } from './components/SystemTerminal';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [lang, setLang] = useState<Language>('EN');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    {
      id: '1',
      timestamp: new Date().toLocaleTimeString(),
      type: 'system',
      text: 'System.Arch v4.2.0 initialized. Marcos López Portfolio kernel ready.',
    },
  ]);

  // Sync dark class on html tag when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className =
        'bg-[#101415] text-[#e0e3e5] font-sans antialiased selection:bg-[#4ae176]/30 selection:text-[#4ae176] transition-colors duration-200';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className =
        'bg-[#f5fbf5] text-[#171d19] font-sans antialiased selection:bg-[#006948]/20 selection:text-[#006948] transition-colors duration-200';
    }
  }, [theme]);

  const handleToggleLang = () => {
    const nextLang = lang === 'EN' ? 'ES' : 'EN';
    setLang(nextLang);
    addTerminalLog({
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type: 'info',
      text: `Locale changed to [${nextLang}]`,
    });
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    addTerminalLog({
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type: 'info',
      text: `Theme switched to [${nextTheme.toUpperCase()}]`,
    });
  };

  const handleSelectTab = (tab: TabId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    addTerminalLog({
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type: 'system',
      text: `Routed view: /${tab}`,
    });
  };

  const addTerminalLog = (log: TerminalLog) => {
    setTerminalLogs((prev) => [...prev.slice(-15), log]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        lang={lang}
        onToggleLang={handleToggleLang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 md:px-8 pt-24 pb-16">
        {currentTab === 'home' && (
          <HomeView lang={lang} theme={theme} onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'experience' && (
          <ExperienceView
            lang={lang}
            theme={theme}
            onOpenModal={(cs) => setActiveModalCase(cs)}
          />
        )}

        {currentTab === 'stack' && <StackView lang={lang} theme={theme} />}

        {currentTab === 'leadership' && (
          <LeadershipView lang={lang} theme={theme} />
        )}

        {currentTab === 'connect' && (
          <ConnectView
            lang={lang}
            theme={theme}
            onLogTerminal={(msg) =>
              addTerminalLog({
                id: Date.now().toString(),
                timestamp: new Date().toLocaleTimeString(),
                type: 'info',
                text: msg,
              })
            }
          />
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} theme={theme} onSelectTab={handleSelectTab} />

      {/* Architecture Detail Modal */}
      <ArchitectureModal
        caseStudy={activeModalCase}
        onClose={() => setActiveModalCase(null)}
        lang={lang}
        theme={theme}
      />

      {/* Interactive System Terminal Console */}
      <SystemTerminal
        logs={terminalLogs}
        onClearLogs={() => setTerminalLogs([])}
        onAddLog={addTerminalLog}
      />
    </div>
  );
}

export default App;
