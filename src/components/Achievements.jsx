import React from 'react';
import { UI_STRINGS, ACHIEVEMENTS_DATA } from '../constants/portfolioConstants';
import { Award, Trophy, Zap, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

const achievementIcons = [Trophy, Award, ShieldCheck, Zap, TrendingUp];

const achievementCategory = [
  "Mentorship & Leadership",
  "Executive Recognition",
  "Production Architecture",
  "Performance Optimization",
  "System Reliability & SLA"
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.achievements.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.achievements.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.achievements.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.achievements.subheading}
          </p>
        </div>

        {/* High-Signal Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = achievementIcons[idx % achievementIcons.length];
            const category = achievementCategory[idx % achievementCategory.length];

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl glass-panel flex flex-col justify-between transition-all hover:border-slate-400 dark:hover:border-slate-700 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono theme-accent-color uppercase font-semibold">
                        {category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono theme-text-muted px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold theme-text-heading mb-1 group-hover:theme-accent-color transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs theme-accent-color font-medium block mb-3">
                    {item.issuer}
                  </span>

                  <p className="text-xs theme-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t theme-border flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{UI_STRINGS.achievements.verifiedMilestone}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
