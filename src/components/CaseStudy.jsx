import React from 'react';
import { motion } from 'framer-motion';
import { UI_STRINGS, CASE_STUDY_SCRIPT, CASE_STUDY_TERMINAL, WORK_PRINCIPLES } from '../constants/portfolioConstants';

const messageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
  }
};

function ChatMessage({ msg }) {
  const isMe = msg.from === 'me';

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
    >
      <p className={`font-mono text-[10px] theme-text-dim mb-1.5 ${isMe ? 'text-right' : 'text-left'}`}>
        {isMe ? UI_STRINGS.caseStudy.meLabel : UI_STRINGS.caseStudy.hmLabel}
      </p>
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-5 py-4 text-sm sm:text-[15px] leading-relaxed shadow-sm ${
          isMe
            ? 'theme-accent-soft-bg theme-accent-soft-border border rounded-2xl rounded-br-md theme-text-main'
            : 'glass-panel rounded-2xl rounded-bl-md theme-text-main border-b-2'
        }`}
        style={isMe ? undefined : { borderBottomColor: 'var(--border-hover)' }}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

function TerminalEmbed() {
  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="w-full"
    >
      <div className="rounded-2xl overflow-hidden border theme-border" style={{ background: 'var(--code-bg)' }}>
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b theme-border bg-black/20">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] theme-text-dim">{UI_STRINGS.caseStudy.terminalTitle}</span>
        </div>
        {/* Terminal body */}
        <div className="px-4 sm:px-5 py-4 font-mono text-[11px] sm:text-xs space-y-1.5 overflow-x-auto">
          {CASE_STUDY_TERMINAL.map((line, idx) => (
            <p key={idx} className={`whitespace-pre ${line.color}`}>
              {line.text}
            </p>
          ))}
        </div>
      </div>
      <p className="mt-2.5 font-mono text-[11px] theme-text-dim">
        {UI_STRINGS.caseStudy.terminalCaption}
      </p>
    </motion.div>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 theme-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="font-mono text-xs theme-accent-color mb-3">{UI_STRINGS.caseStudy.kicker}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.caseStudy.titlePrefix}
            <span className="gradient-text">{UI_STRINGS.caseStudy.titleGradient}</span>
          </h2>
        </motion.div>

        {/* Scripted conversation */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {CASE_STUDY_SCRIPT.map((msg, idx) => (
            <React.Fragment key={idx}>
              <ChatMessage msg={msg} />
              {msg.embed === 'terminal' && <TerminalEmbed />}
            </React.Fragment>
          ))}
        </div>

        {/* Working principles */}
        <div className="max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="font-mono text-xs theme-accent-color mb-3">{UI_STRINGS.caseStudy.principlesKicker}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
              {UI_STRINGS.caseStudy.principlesTitlePrefix}
              <span className="gradient-text">{UI_STRINGS.caseStudy.principlesTitleGradient}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {WORK_PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass-panel rounded-xl p-5 hover:theme-accent-soft-border transition-all"
              >
                <p className="font-mono text-xs theme-accent-color mb-2.5">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="font-bold theme-text-heading text-sm sm:text-base tracking-tight mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs theme-text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
