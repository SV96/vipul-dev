import React from 'react';
import { UI_STRINGS } from '../constants/portfolioConstants';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-xl glass-panel p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg border theme-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl btn-accent flex items-center justify-center text-white shadow-md shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono theme-accent-color uppercase font-semibold mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>{UI_STRINGS.education.eyebrow}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold theme-text-heading">
                {UI_STRINGS.education.institution}
              </h4>
              <p className="text-xs sm:text-sm theme-text-main font-medium mt-0.5">
                {UI_STRINGS.education.degree}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono theme-text-muted">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-bold">
              {UI_STRINGS.education.score}
            </span>
            <span className="flex items-center gap-1.5 theme-text-main">
              <Calendar className="w-3.5 h-3.5 theme-accent-color" />
              {UI_STRINGS.education.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 theme-accent-color" />
              {UI_STRINGS.education.location}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
