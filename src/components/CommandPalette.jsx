import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ArrowRight, User, Layers, Code2, FolderGit2, MessageSquare,
  Sparkles, Briefcase, Award, GraduationCap, Mail, Sun, Moon, Download,
  Copy, ExternalLink
} from 'lucide-react';
import { SECTION_FLAGS, PERSONAL_DATA, UI_STRINGS } from '../constants/portfolioConstants';
import { useTheme } from '../context/theme-context';

const SECTION_ITEMS = [
  { flagKey: 'about', id: 'about', label: 'About', icon: User },
  { flagKey: 'skills', id: 'skills', label: 'Skills', icon: Layers },
  { flagKey: 'techWall', id: 'stack', label: 'Tech Stack', icon: Code2 },
  { flagKey: 'projects', id: 'projects', label: 'Projects', icon: FolderGit2 },
  { flagKey: 'caseStudy', id: 'case-study', label: 'Case Study', icon: MessageSquare },
  { flagKey: 'aiAssistant', id: 'ai-assistant', label: 'AI Assistant', icon: Sparkles },
  { flagKey: 'experience', id: 'experience', label: 'Experience', icon: Briefcase },
  { flagKey: 'achievements', id: 'achievements', label: 'Achievements', icon: Award },
  { flagKey: 'education', id: 'education', label: 'Education', icon: GraduationCap },
  { flagKey: 'contact', id: 'contact', label: 'Contact', icon: Mail },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const { mode, toggleMode } = useTheme();

  const openPalette = useCallback(() => {
    setQuery('');
    setActiveIndex(0);
    setOpen(true);
  }, []);

  // Global listeners: ⌘K / Ctrl+K toggle + custom event from navbar button
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) {
            setQuery('');
            setActiveIndex(0);
          }
          return !prev;
        });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-command-palette', openPalette);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-command-palette', openPalette);
    };
  }, [openPalette]);

  // Focus input whenever the palette opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  const actions = useMemo(() => [
    {
      key: 'theme',
      label: mode === 'dark' ? UI_STRINGS.dayModeLabel : UI_STRINGS.nightModeLabel,
      icon: mode === 'dark' ? Sun : Moon,
      run: () => toggleMode(),
    },
    {
      key: 'resume',
      label: UI_STRINGS.downloadResumeFull,
      icon: Download,
      run: () => window.open(PERSONAL_DATA.resumeLink, '_blank'),
    },
    {
      key: 'email',
      label: `Copy email — ${PERSONAL_DATA.email}`,
      icon: Copy,
      run: () => navigator.clipboard?.writeText(PERSONAL_DATA.email),
    },
    {
      key: 'github',
      label: 'Open GitHub',
      icon: ExternalLink,
      run: () => window.open(PERSONAL_DATA.socials.github, '_blank'),
    },
    {
      key: 'linkedin',
      label: 'Open LinkedIn',
      icon: ExternalLink,
      run: () => window.open(PERSONAL_DATA.socials.linkedin, '_blank'),
    },
  ], [mode, toggleMode]);

  const sections = useMemo(
    () => SECTION_ITEMS.filter((s) => SECTION_FLAGS[s.flagKey]),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (label) => label.toLowerCase().includes(q);
    return {
      sections: sections.filter((s) => match(s.label)),
      actions: actions.filter((a) => match(a.label)),
    };
  }, [query, sections, actions]);

  const flatItems = useMemo(
    () => [...filtered.sections, ...filtered.actions],
    [filtered]
  );

  const execute = useCallback((item) => {
    setOpen(false);
    if (item.run) {
      item.run();
    } else if (item.id) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Arrow-key navigation while open
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => (flatItems.length ? (i + 1) % flatItems.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => (flatItems.length ? (i - 1 + flatItems.length) % flatItems.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = flatItems[activeIndex];
        if (item) execute(item);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, flatItems, activeIndex, execute]);

  const renderItem = (item, idx) => {
    const Icon = item.icon;
    const active = idx === activeIndex;
    return (
      <button
        key={item.key || item.id}
        type="button"
        onMouseEnter={() => setActiveIndex(idx)}
        onClick={() => execute(item)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
          active ? 'theme-accent-soft-bg theme-text-heading' : 'theme-text-muted'
        }`}
      >
        <Icon className={`w-4 h-4 shrink-0 ${active ? 'theme-accent-color' : ''}`} />
        <span className="flex-1 truncate">{item.label}</span>
        <ArrowRight className={`w-3.5 h-3.5 ${active ? 'theme-accent-color opacity-100' : 'opacity-0'}`} />
      </button>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b theme-border">
              <Search className="w-4 h-4 theme-text-dim shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Jump to a section or action…"
                className="flex-1 bg-transparent outline-none font-mono text-sm theme-text-main placeholder:theme-text-dim"
              />
              <kbd className="font-mono text-[10px] theme-text-dim border theme-border rounded px-1.5 py-0.5">esc</kbd>
            </div>

            {/* Results */}
            <div className="max-h-[320px] overflow-y-auto p-2">
              {filtered.sections.length === 0 && filtered.actions.length === 0 && (
                <p className="px-3 py-6 text-center font-mono text-xs theme-text-dim">No matches.</p>
              )}

              {filtered.sections.length > 0 && (
                <>
                  <p className="px-3 pt-2 pb-1 font-mono text-[10px] uppercase tracking-widest theme-text-dim">Navigate</p>
                  {filtered.sections.map((item, i) => renderItem(item, i))}
                </>
              )}
              {filtered.actions.length > 0 && (
                <>
                  <p className="px-3 pt-3 pb-1 font-mono text-[10px] uppercase tracking-widest theme-text-dim">Actions</p>
                  {filtered.actions.map((item, i) => renderItem(item, filtered.sections.length + i))}
                </>
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center gap-4 px-4 py-2.5 border-t theme-border font-mono text-[10px] theme-text-dim">
              <span>↑↓ navigate</span>
              <span>↵ open</span>
              <span>⌘K toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
