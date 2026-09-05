import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { UI_STRINGS, PERSONAL_DATA, SECTION_FLAGS } from '../constants/portfolioConstants';
import ThemeControls from './ThemeControls';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const allNavItems = [
    { key: 'about', name: UI_STRINGS.nav.about, href: '#about' },
    { key: 'skills', name: UI_STRINGS.nav.skills, href: '#skills' },
    { key: 'projects', name: UI_STRINGS.nav.projects, href: '#projects' },
    { key: 'aiAssistant', name: UI_STRINGS.nav.aiAssistant, href: '#ai-assistant' },
    { key: 'experience', name: UI_STRINGS.nav.experience, href: '#experience' },
    { key: 'achievements', name: UI_STRINGS.nav.achievements, href: '#achievements' },
    { key: 'contact', name: UI_STRINGS.nav.contact, href: '#contact' },
  ];

  const navItems = allNavItems.filter(item => SECTION_FLAGS[item.key]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3.5 transition-all duration-300 ${scrolled ? 'glass-nav shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group" aria-label={`${PERSONAL_DATA.name} - Home`}>
            <div className="w-10 h-10 rounded-xl theme-accent-bg p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full theme-bg-primary rounded-[10px] flex items-center justify-center font-bold theme-accent-color text-sm tracking-wider">
                {UI_STRINGS.brandInitials}
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-bold text-base sm:text-lg theme-text-heading tracking-tight group-hover:opacity-80 transition-opacity">
                {PERSONAL_DATA.name}
              </span>
              <span className="text-xs theme-accent-color font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {PERSONAL_DATA.title}
              </span>
            </div>
          </a>

          {/* Center Navigation links */}
          {navItems.length > 0 && (
            <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-xs font-medium theme-text-muted hover:theme-text-heading hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all duration-200 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <ThemeControls />
            
            <a
              href={PERSONAL_DATA.resumeLink}
              download={UI_STRINGS.resumeFileName}
              className="btn-accent flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{UI_STRINGS.downloadResumeText}</span>
            </a>
          </div>

          {/* Mobile Navigation controls */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <ThemeControls />

            {navItems.length > 0 && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && navItems.length > 0 && (
        <div id="mobile-nav-menu" className="lg:hidden glass-nav border-b px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-5 duration-200" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium theme-text-main hover:theme-accent-color hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PERSONAL_DATA.resumeLink}
              download={UI_STRINGS.resumeFileName}
              onClick={() => setIsOpen(false)}
              className="btn-accent flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{UI_STRINGS.downloadResumeFull}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
