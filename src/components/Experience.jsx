import React from 'react';
import { UI_STRINGS, EXPERIENCE_DATA } from '../constants/portfolioConstants';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Bot, Database, Cloud, Users } from 'lucide-react';

const responsibilityIcons = {
  "Frontend & Backend Architecture": Layers,
  "AI & GenAI Integration": Bot,
  "Database & Performance": Database,
  "DevOps & Infrastructure": Cloud,
  "Team Leadership": Users
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.experience.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.experience.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.experience.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.experience.subheading}
          </p>
        </div>

        {/* Timeline Hub */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl glass-panel p-6 sm:p-8 shadow-xl border theme-border"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b theme-border">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono theme-accent-soft-bg theme-accent-color border theme-accent-soft-border mb-2 font-semibold">
                    <span>{exp.role}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold theme-text-heading">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono theme-text-muted">
                  <span className="flex items-center gap-1.5 theme-accent-color font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs uppercase tracking-wider theme-text-muted font-mono">
                    {UI_STRINGS.experience.responsibilitiesHeader}
                  </h5>
                  <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Leadership
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => {
                    const colonIdx = resp.indexOf(':');
                    const title = colonIdx > -1 ? resp.substring(0, colonIdx) : null;
                    const desc = colonIdx > -1 ? resp.substring(colonIdx + 1).trim() : resp;
                    const Icon = (title && responsibilityIcons[title]) || CheckCircle2;

                    return (
                      <div
                        key={rIdx}
                        className="p-3.5 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border theme-border flex items-start gap-3 transition-colors hover:border-slate-400 dark:hover:border-slate-700"
                      >
                        <div className="w-6 h-6 rounded-md theme-accent-soft-bg flex items-center justify-center theme-accent-color shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-xs sm:text-sm leading-relaxed">
                          {title && (
                            <span className="font-bold theme-text-heading mr-1.5">
                              {title}:
                            </span>
                          )}
                          <span className="theme-text-main">{desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
