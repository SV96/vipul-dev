import React from 'react';
import { UI_STRINGS, ACHIEVEMENTS_DATA } from '../constants/portfolioConstants';
import { Award, Trophy, Zap, ShieldAlert, TrendingUp, CheckCircle2 } from 'lucide-react';

const achievementIcons = [Trophy, Award, Zap, ShieldAlert, TrendingUp];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest theme-accent-color font-mono mb-3">
            {UI_STRINGS.achievements.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.achievements.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.achievements.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.achievements.subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = achievementIcons[idx % achievementIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono theme-accent-color theme-accent-soft-bg px-2.5 py-1 rounded-md border theme-accent-soft-border font-semibold">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold theme-text-heading mb-1 group-hover:theme-accent-color transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs theme-accent-color font-medium block mb-3 opacity-90">
                    {item.issuer}
                  </span>

                  <p className="text-xs theme-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t theme-border flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {UI_STRINGS.achievements.verifiedMilestone}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
