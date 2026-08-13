import React from 'react';
import { X, Calendar, Tag, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { UI_STRINGS } from '../constants/portfolioConstants';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass-panel theme-text-muted hover:theme-text-heading transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono theme-accent-soft-bg theme-accent-color border theme-accent-soft-border">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs theme-text-muted font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {project.duration}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold theme-text-heading mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-medium theme-accent-color">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider theme-text-muted font-mono mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 theme-accent-color" />
            {UI_STRINGS.projects.modalTechTitle}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools?.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg glass-panel text-xs font-mono theme-text-main"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-sm font-bold theme-text-heading mb-2">
            {UI_STRINGS.projects.modalOverviewTitle}
          </h4>
          <p className="theme-text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h4 className="text-sm font-bold theme-text-heading mb-3">
            {UI_STRINGS.projects.modalHighlightsTitle}
          </h4>
          <div className="space-y-2.5">
            {project.highlights?.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl glass-panel">
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
            className="px-5 py-2.5 rounded-xl glass-panel theme-text-main font-medium text-xs transition-colors"
          >
            {UI_STRINGS.projects.modalCloseBtn}
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-accent px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md flex items-center gap-1.5"
          >
            <span>{UI_STRINGS.projects.modalInquireBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
