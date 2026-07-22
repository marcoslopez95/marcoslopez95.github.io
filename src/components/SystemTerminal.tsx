import React, { useState } from 'react';
import { TerminalLog } from '../types';

interface SystemTerminalProps {
  logs: TerminalLog[];
  onClearLogs: () => void;
  onAddLog: (log: TerminalLog) => void;
}

export const SystemTerminal: React.FC<SystemTerminalProps> = ({
  logs,
  onClearLogs,
  onAddLog,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    onAddLog({
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type: 'info',
      text: `$ ${inputVal}`,
    });

    if (cmd === 'clear') {
      onClearLogs();
      setInputVal('');
      return;
    }

    if (cmd === 'help') {
      onAddLog({
        id: (Date.now() + 1).toString(),
        timestamp: new Date().toLocaleTimeString(),
        type: 'system',
        text: 'Available CLI commands: status, stack, experience, contact, clear',
      });
    } else if (cmd === 'status') {
      onAddLog({
        id: (Date.now() + 1).toString(),
        timestamp: new Date().toLocaleTimeString(),
        type: 'success',
        text: 'SYS_STATUS: OPTIMAL | UPTIME: 99.9% | LATENCY: 18ms | REGION: GMT-4',
      });
    } else if (cmd === 'stack') {
      onAddLog({
        id: (Date.now() + 1).toString(),
        timestamp: new Date().toLocaleTimeString(),
        type: 'info',
        text: 'STACK: PHP 8.3, Laravel 13, Vue 3, React, TypeScript, Go, AWS, Docker, Postgres',
      });
    } else if (cmd === 'experience') {
      onAddLog({
        id: (Date.now() + 1).toString(),
        timestamp: new Date().toLocaleTimeString(),
        type: 'info',
        text: 'PROJECTS: 01 Maketicket (10k+ concurrent), 02 Hotel Dubai (45ms sync), 03 Zippytech (2.4M records)',
      });
    } else {
      onAddLog({
        id: (Date.now() + 1).toString(),
        timestamp: new Date().toLocaleTimeString(),
        type: 'warn',
        text: `Command not recognized: '${cmd}'. Type 'help' for available options.`,
      });
    }

    setInputVal('');
  };

  return (
    <div className="fixed bottom-0 right-4 sm:right-8 z-40 max-w-lg w-full font-mono-code text-xs">
      {/* Toggle Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#101415] border border-[#45464d] border-b-0 rounded-t-xl px-4 py-2 flex items-center justify-between text-gray-300 hover:text-[#4ae176] transition-colors shadow-lg"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ae176] animate-pulse"></span>
          <span className="font-bold">SYSTEM CONSOLE // CLI</span>
        </div>
        <span className="material-symbols-outlined text-sm">
          {isOpen ? 'expand_more' : 'terminal'}
        </span>
      </button>

      {/* Terminal Drawer Body */}
      {isOpen && (
        <div className="bg-[#101415]/95 border border-[#45464d] border-t-0 rounded-b-none p-4 space-y-3 max-h-60 overflow-y-auto backdrop-blur-md text-gray-200">
          <div className="space-y-1.5">
            {logs.map((log) => (
              <div key={log.id} className="flex space-x-2">
                <span className="opacity-40 select-none">[{log.timestamp}]</span>
                <span
                  className={
                    log.type === 'success'
                      ? 'text-[#4ae176]'
                      : log.type === 'warn'
                      ? 'text-amber-400'
                      : log.type === 'system'
                      ? 'text-cyan-400'
                      : 'text-gray-300'
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-2 border-t border-[#45464d]/40">
            <span className="text-[#4ae176] font-bold">$</span>
            <input
              type="text"
              placeholder="Type command (e.g. status, stack, help)..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-full bg-transparent outline-none text-white font-mono-code text-xs"
            />
          </form>
        </div>
      )}
    </div>
  );
};
