import React, { useEffect } from 'react';
import { X, Calendar, Tag, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { UI_STRINGS } from '../constants/portfolioConstants';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl glass-panel p-6 sm:p-8 shadow-2xl border theme-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg glass-panel theme-text-muted hover:theme-text-heading hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono theme-accent-soft-bg theme-accent-color border theme-accent-soft-border font-semibold">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs theme-text-muted font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {project.duration}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold theme-text-heading mb-1.5">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium theme-accent-color">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-[11px] uppercase tracking-wider theme-text-muted font-mono mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 theme-accent-color" />
            {UI_STRINGS.projects.modalTechTitle}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tools?.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono theme-text-main"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider theme-text-muted font-mono mb-2">
            {UI_STRINGS.projects.modalOverviewTitle}
          </h4>
          <p className="theme-text-main text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider theme-text-muted font-mono mb-3">
            {UI_STRINGS.projects.modalHighlightsTitle}
          </h4>
          <div className="space-y-2">
            {project.highlights?.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border theme-border">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs theme-text-main leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t theme-border">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg glass-panel theme-text-main font-medium text-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
          >
            {UI_STRINGS.projects.modalCloseBtn}
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-accent px-4 py-2 rounded-lg font-semibold text-xs shadow-md flex items-center gap-1.5"
          >
            <span>{UI_STRINGS.projects.modalInquireBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
