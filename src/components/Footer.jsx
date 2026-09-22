import React from 'react';
import { UI_STRINGS, PERSONAL_DATA, SECTION_FLAGS } from '../constants/portfolioConstants';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { key: 'about', name: UI_STRINGS.nav.about, href: '#about' },
    { key: 'skills', name: UI_STRINGS.nav.skills, href: '#skills' },
    { key: 'projects', name: UI_STRINGS.nav.projects, href: '#projects' },
    { key: 'aiAssistant', name: UI_STRINGS.nav.aiAssistant, href: '#ai-assistant' },
    { key: 'experience', name: UI_STRINGS.nav.experience, href: '#experience' },
    { key: 'contact', name: UI_STRINGS.nav.contact, href: '#contact' },
  ].filter(item => SECTION_FLAGS[item.key]);

  return (
    <footer className="theme-bg-primary border-t theme-border py-12 theme-text-muted text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b theme-border">
          
          {/* Left brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl btn-accent flex items-center justify-center font-bold text-white text-sm">
              {UI_STRINGS.brandInitials}
            </div>
            <div>
              <h4 className="font-bold theme-text-heading text-sm tracking-tight">{PERSONAL_DATA.name}</h4>
              <p className="theme-text-muted text-[11px]">{PERSONAL_DATA.title}</p>
            </div>
          </div>

          {/* Quick links */}
          {navLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 theme-text-main">
              {navLinks.map((link) => (
                <a key={link.key} href={link.href} className="hover:theme-accent-color transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel theme-text-main hover:theme-accent-color transition-all"
          >
            <span>{UI_STRINGS.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4 theme-accent-color" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 theme-text-muted text-[11px]">
          <p>© {new Date().getFullYear()} {UI_STRINGS.footer.rightsReserved}</p>
          <p className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <kbd className="border theme-border rounded px-1.5 py-0.5 text-[10px]">⌘K</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              {UI_STRINGS.footer.builtWith}
              <span className="theme-accent-color font-semibold">{UI_STRINGS.footer.techStackName}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
