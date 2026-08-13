import React from 'react';
import { UI_STRINGS, EXPERIENCE_DATA } from '../constants/portfolioConstants';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest theme-accent-color font-mono mb-3">
            {UI_STRINGS.experience.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.experience.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.experience.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.experience.subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl glass-panel shadow-2xl transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b theme-border">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                  <h4 className="text-2xl font-extrabold theme-text-heading">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono theme-text-muted space-y-1">
                  <span className="flex items-center gap-1 theme-accent-color font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h5 className="text-xs uppercase tracking-wider theme-text-muted font-mono flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 theme-accent-color" />
                  {UI_STRINGS.experience.responsibilitiesHeader}
                </h5>

                <div className="grid grid-cols-1 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-xl glass-panel flex items-start gap-3 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 theme-accent-color shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm theme-text-main leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
