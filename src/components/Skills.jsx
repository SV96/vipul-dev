import React, { useState } from 'react';
import { UI_STRINGS, SKILLS_DATA } from '../constants/portfolioConstants';
import { Code2, Server, Bot, Database, Cloud, Sparkles } from 'lucide-react';

const categoryIcons = {
  "GenAI & AI Agents": Bot,
  "Frontend": Code2,
  "Backend": Server,
  "Databases & Caching": Database,
  "DevOps & Cloud": Cloud,
};

export default function Skills() {
  const categories = Object.keys(SKILLS_DATA);
  const [activeCategory, setActiveCategory] = useState("GenAI & AI Agents");

  return (
    <section id="skills" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest theme-accent-color font-mono mb-3">
            {UI_STRINGS.skills.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.skills.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.skills.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.skills.subheading}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Code2;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs transition-all duration-200 ${
                  isActive
                    ? 'btn-accent shadow-lg scale-105 font-bold'
                    : 'glass-panel theme-text-muted hover:theme-text-heading'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'theme-accent-color'}`} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {SKILLS_DATA[activeCategory]?.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl theme-accent-soft-bg flex items-center justify-center theme-accent-color group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold theme-text-heading text-sm group-hover:theme-accent-color transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] theme-text-muted font-mono">
                      {UI_STRINGS.skills.proficiencyLabel}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold theme-accent-color theme-accent-soft-bg px-2.5 py-1 rounded-md border theme-accent-soft-border">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-950 rounded-full h-2 overflow-hidden p-0.5 border theme-border">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out theme-accent-bg"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl p-6 sm:p-8 glass-panel theme-accent-soft-border shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono theme-accent-color uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {UI_STRINGS.skills.bannerEyebrow}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold theme-text-heading mb-2">
                {UI_STRINGS.skills.bannerTitle}
              </h4>
              <p className="theme-text-muted text-sm max-w-2xl">
                {UI_STRINGS.skills.bannerDesc}
              </p>
            </div>
            <a
              href="#ai-assistant"
              className="btn-accent px-6 py-3 rounded-xl text-xs font-semibold shadow-lg whitespace-nowrap"
            >
              {UI_STRINGS.skills.bannerBtn}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
