import React, { useState } from 'react';
import { Terminal, ShieldCheck, Zap, Bot, Code, Cpu, Play, CheckCircle } from 'lucide-react';
import { UI_STRINGS, TERMINAL_STEPS, SECTION_FLAGS } from '../constants/portfolioConstants';

const pillarIcons = [Zap, Bot, ShieldCheck, Cpu];

export default function About() {
  const [activeStep, setActiveStep] = useState(TERMINAL_STEPS.length);
  const [isRunning, setIsRunning] = useState(false);

  // If master about flag is false, or both sub-flags are false, hide the section
  if (!SECTION_FLAGS.about || (!SECTION_FLAGS.aboutProfile && !SECTION_FLAGS.aboutTerminal)) {
    return null;
  }

  const showProfile = SECTION_FLAGS.aboutProfile !== false;
  const showTerminal = SECTION_FLAGS.aboutTerminal !== false;
  const isBothVisible = showProfile && showTerminal;

  const triggerSim = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setActiveStep(current);
      if (current >= TERMINAL_STEPS.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 600);
  };

  return (
    <section id="about" className="py-24 theme-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest theme-accent-color font-mono mb-3">
            {UI_STRINGS.about.eyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.about.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.about.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base leading-relaxed">
            {UI_STRINGS.about.subheading}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${!isBothVisible ? 'max-w-4xl mx-auto' : ''}`}>
          
          {/* Sub-Section 1: Bio & Pillars (aboutProfile flag) */}
          {showProfile && (
            <div className={`${isBothVisible ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <h4 className="text-xl font-bold theme-text-heading mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 theme-accent-color" />
                  <span>{UI_STRINGS.about.cardTitle}</span>
                </h4>
                <p className="theme-text-main leading-relaxed text-sm mb-4">
                  {UI_STRINGS.about.bioParagraph1}
                </p>
                <p className="theme-text-muted leading-relaxed text-sm">
                  {UI_STRINGS.about.bioParagraph2Prefix}
                  <strong className="theme-text-heading">{UI_STRINGS.about.location}</strong>
                  {UI_STRINGS.about.bioParagraph2Middle}
                  <strong className="theme-text-heading">{UI_STRINGS.about.company}</strong>
                  {UI_STRINGS.about.bioParagraph2Suffix}
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {UI_STRINGS.about.pillars.map((pillar, idx) => {
                  const Icon = pillarIcons[idx % pillarIcons.length];
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl glass-panel"
                    >
                      <div className="w-8 h-8 rounded-lg theme-accent-soft-bg flex items-center justify-center theme-accent-color mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold theme-text-heading text-sm mb-1">{pillar.title}</h5>
                      <p className="text-xs theme-text-muted">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sub-Section 2: Interactive Terminal (aboutTerminal flag) */}
          {showTerminal && (
            <div className={`${isBothVisible ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
              <div className="rounded-2xl overflow-hidden glass-panel shadow-2xl">
                
                {/* Title bar */}
                <div className="px-4 py-3 border-b theme-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="ml-2 font-mono text-xs theme-text-muted flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 theme-accent-color" />
                      {UI_STRINGS.about.terminalTitle}
                    </span>
                  </div>

                  <button
                    onClick={triggerSim}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md theme-accent-soft-bg theme-accent-color border theme-accent-soft-border text-xs font-mono transition-all disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? UI_STRINGS.about.terminalRunningBtn : UI_STRINGS.about.terminalRunBtn}</span>
                  </button>
                </div>

                {/* Terminal Screen */}
                <div className="p-5 font-mono text-xs space-y-2 min-h-[340px] max-h-[400px] overflow-y-auto" style={{ backgroundColor: 'var(--code-bg)' }}>
                  <div className="text-slate-500 text-[11px] pb-2 border-b border-slate-800">
                    {UI_STRINGS.about.terminalComment}
                  </div>

                  {TERMINAL_STEPS.slice(0, activeStep).map((step, idx) => (
                    <div key={idx} className={`leading-relaxed ${step.color} animate-in fade-in duration-200`}>
                      {step.text}
                    </div>
                  ))}

                  {activeStep < TERMINAL_STEPS.length && (
                    <div className="flex items-center gap-2 theme-accent-color font-bold animate-pulse pt-2">
                      <span>▋</span>
                      <span className="text-slate-500 text-xs">{UI_STRINGS.about.terminalProcessing}</span>
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div className="px-4 py-2.5 border-t theme-border flex items-center justify-between text-xs theme-text-muted font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-500">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {UI_STRINGS.statusReady}
                  </span>
                  <span>{UI_STRINGS.about.terminalFooterTech}</span>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
