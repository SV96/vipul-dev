import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, FileText, CheckCircle2, Code2, Cpu, Database, Server, Sparkles } from 'lucide-react';
import { UI_STRINGS, PERSONAL_DATA, STATS_DATA, TECH_BADGES } from '../constants/portfolioConstants';

const engineeringFocusList = [
  "Senior Full-Stack & GenAI Architect",
  "Autonomous CrewAI Multi-Agent Workflows",
  "High-Concurrency InsurTech Platforms",
  "Sub-100ms PostgreSQL & MongoDB Tuning"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24
    }
  }
};

export default function Hero() {
  const [focusIndex, setFocusIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % engineeringFocusList.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden group/hero"
    >
      {/* Subtle Architectural Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(var(--text-main) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Dynamic Cursor-Tracking Ambient Spotlight */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover/hero:opacity-100 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] theme-accent-soft-bg"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Radial Top Light Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/5 via-indigo-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Engineering Status Pill with Dynamic Cycler */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel theme-accent-soft-border text-xs font-mono mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="h-4 overflow-hidden relative min-w-[260px] sm:min-w-[320px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={focusIndex}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="block theme-text-heading font-medium tracking-tight truncate"
                >
                  {engineeringFocusList[focusIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Headline with Staggered Fade */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight theme-text-heading leading-[1.12] mb-6"
          >
            Architecting <span className="gradient-text">Scalable Web Platforms</span> & Autonomous AI Workflows
          </motion.h1>

          {/* Editorial Intro Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl theme-text-muted font-normal leading-relaxed max-w-3xl mb-10"
          >
            {UI_STRINGS.hero.introPrefix}
            <span className="theme-text-heading font-semibold">{PERSONAL_DATA.name}</span>
            {UI_STRINGS.hero.introText}
            <span className="theme-text-heading font-medium underline decoration-cyan-500/40 underline-offset-4">{UI_STRINGS.hero.techHighlight1}</span>
            {UI_STRINGS.hero.introMiddle}
            <span className="theme-text-heading font-medium underline decoration-indigo-500/40 underline-offset-4">{UI_STRINGS.hero.techHighlight2}</span>
            {UI_STRINGS.hero.introSuffix}
          </motion.p>

          {/* High-Contrast Action Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="btn-accent px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-2 group transition-all"
            >
              <span>{UI_STRINGS.hero.btnProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-6 py-3 rounded-xl glass-panel theme-text-main font-semibold text-xs sm:text-sm hover:theme-accent-color hover:border-slate-400 dark:hover:border-slate-600 transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 theme-accent-color" />
              <span>{UI_STRINGS.hero.btnContact}</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_DATA.resumeLink}
              download={UI_STRINGS.resumeFileName}
              className="px-5 py-3 rounded-xl glass-panel theme-accent-color theme-accent-soft-border font-semibold text-xs sm:text-sm hover:opacity-80 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{UI_STRINGS.downloadCVText}</span>
            </motion.a>
          </motion.div>

          {/* Core Technology Stack Matrix */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-slate-300 dark:bg-slate-800"></span>
              <p className="text-[11px] uppercase tracking-widest theme-text-muted font-mono">
                {UI_STRINGS.hero.matrixTitle}
              </p>
              <span className="h-px w-8 bg-slate-300 dark:bg-slate-800"></span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TECH_BADGES.map((badge, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="px-3 py-1 rounded-lg glass-panel text-xs font-mono theme-text-main hover:theme-accent-color hover:border-slate-400 dark:hover:border-slate-700 transition-colors cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Telemetry Impact Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full"
          >
            {STATS_DATA.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="p-4 sm:p-5 rounded-xl glass-panel text-center transition-all hover:border-slate-400 dark:hover:border-slate-700 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold theme-text-heading mb-1 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs theme-text-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
