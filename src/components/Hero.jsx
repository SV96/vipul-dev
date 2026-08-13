import React from 'react';
import { ArrowRight, Terminal, FileText } from 'lucide-react';
import { UI_STRINGS, PERSONAL_DATA, STATS_DATA, TECH_BADGES } from '../constants/portfolioConstants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] theme-accent-soft-bg rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel theme-accent-soft-border theme-accent-color text-xs font-mono mb-8 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider font-semibold">{UI_STRINGS.availableBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight theme-text-heading leading-[1.1] mb-6">
            {UI_STRINGS.hero.titlePrefix}
            <span className="gradient-text">{UI_STRINGS.hero.titleGradient1}</span>
            {UI_STRINGS.hero.titleMiddle}
            <span className="gradient-text">{UI_STRINGS.hero.titleGradient2}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl theme-text-muted font-normal leading-relaxed max-w-3xl mb-10">
            {UI_STRINGS.hero.introPrefix}
            <span className="theme-text-heading font-semibold">{PERSONAL_DATA.name}</span>
            {UI_STRINGS.hero.introText}
            <span className="theme-accent-color font-medium">{UI_STRINGS.hero.techHighlight1}</span>
            {UI_STRINGS.hero.introMiddle}
            <span className="theme-accent-color font-medium">{UI_STRINGS.hero.techHighlight2}</span>
            {UI_STRINGS.hero.introSuffix}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="btn-accent px-7 py-3.5 rounded-xl font-semibold text-sm shadow-xl flex items-center gap-2 group"
            >
              <span>{UI_STRINGS.hero.btnProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl glass-panel theme-text-main font-semibold text-sm transition-all duration-200 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 theme-accent-color" />
              <span>{UI_STRINGS.hero.btnContact}</span>
            </a>

            <a
              href={PERSONAL_DATA.resumeLink}
              download={UI_STRINGS.resumeFileName}
              className="px-6 py-3.5 rounded-xl glass-panel theme-accent-color theme-accent-soft-border font-semibold text-sm transition-all duration-200 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{UI_STRINGS.downloadCVText}</span>
            </a>
          </div>

          {/* Tech Badges */}
          <div className="w-full max-w-4xl mb-16">
            <p className="text-xs uppercase tracking-widest theme-text-muted font-mono mb-4">
              {UI_STRINGS.hero.matrixTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TECH_BADGES.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg glass-panel text-xs font-mono theme-text-main hover:theme-accent-color transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel text-center group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold theme-text-heading mb-1 group-hover:theme-accent-color transition-colors font-mono">
                  {stat.value}
                </div>
                <div className="text-xs theme-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
