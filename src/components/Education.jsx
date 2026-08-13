import React from 'react';
import { UI_STRINGS } from '../constants/portfolioConstants';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl btn-accent flex items-center justify-center text-white shadow-lg shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-wider theme-accent-color font-semibold">
                {UI_STRINGS.education.eyebrow}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold theme-text-heading mb-1">
                {UI_STRINGS.education.institution}
              </h4>
              <p className="text-sm theme-text-main font-medium">
                {UI_STRINGS.education.degree}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-col items-center md:items-end gap-2 text-xs font-mono theme-text-muted">
            <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-bold">
              {UI_STRINGS.education.score}
            </span>
            <span className="flex items-center gap-1 theme-text-main">
              <Calendar className="w-3.5 h-3.5 theme-accent-color" />
              {UI_STRINGS.education.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 theme-accent-color" />
              {UI_STRINGS.education.location}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
