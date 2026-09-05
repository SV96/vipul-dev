import React, { useState } from 'react';
import { Bot, Send, User, Terminal, RefreshCw, MessageSquare, Check, Copy, Sparkles, Database } from 'lucide-react';
import { UI_STRINGS, AI_ASSISTANT_QUESTIONS } from '../constants/portfolioConstants';

export default function AiShowcase() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: UI_STRINGS.aiAssistant.initialGreeting,
      source: 'Verified Portfolio Context'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleSend = (userQuestion) => {
    const textToSend = userQuestion || input;
    if (!textToSend.trim() || isTyping) return;

    const updatedMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    const matched = AI_ASSISTANT_QUESTIONS.find(q =>
      textToSend.toLowerCase().includes(q.question.toLowerCase().split(' ')[0]) ||
      q.question.toLowerCase().includes(textToSend.toLowerCase())
    );

    const reply = matched ? matched.answer : UI_STRINGS.aiAssistant.fallbackReply;

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: reply,
        source: matched ? 'Matched Production Knowledge Base' : 'General Experience Fallback'
      }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section id="ai-assistant" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.aiAssistant.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.aiAssistant.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.aiAssistant.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.aiAssistant.subheading}
          </p>
        </div>

        {/* Developer RAG Interface */}
        <div className="max-w-4xl mx-auto rounded-xl glass-panel shadow-xl overflow-hidden border theme-border">
          
          {/* Header Bar */}
          <div className="px-5 py-3 border-b theme-border flex items-center justify-between bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg btn-accent flex items-center justify-center text-white shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold theme-text-heading text-xs sm:text-sm flex items-center gap-2">
                  <span>{UI_STRINGS.aiAssistant.botName}</span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-500 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    RAG Ready
                  </span>
                </h4>
                <span className="text-[10px] sm:text-[11px] theme-text-muted font-mono">
                  {UI_STRINGS.aiAssistant.botSubtitle}
                </span>
              </div>
            </div>

            <button
              onClick={() => setMessages([{
                sender: 'ai',
                text: UI_STRINGS.aiAssistant.resetGreeting,
                source: 'Session Reset'
              }])}
              className="p-1.5 rounded-lg glass-panel theme-text-muted hover:theme-text-heading hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              title={UI_STRINGS.aiAssistant.resetTooltip}
              aria-label="Reset chat history"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Query Selector */}
          <div className="px-5 py-2.5 border-b theme-border flex flex-wrap items-center gap-2 bg-slate-50/50 dark:bg-slate-900/20">
            <span className="text-[11px] theme-text-muted font-mono flex items-center gap-1 mr-1 shrink-0">
              <MessageSquare className="w-3 h-3 theme-accent-color" />
              {UI_STRINGS.aiAssistant.sampleQueriesLabel}
            </span>
            {AI_ASSISTANT_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.question)}
                className="px-2.5 py-1 rounded-md glass-panel text-[11px] theme-text-muted hover:theme-accent-color hover:border-slate-400 dark:hover:border-slate-600 transition-colors text-left"
              >
                "{q.question}"
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="p-5 sm:p-6 space-y-4 min-h-[300px] max-h-[420px] overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-xl group relative ${msg.sender === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'btn-accent text-white shadow-sm'
                        : 'glass-panel theme-text-main border theme-border'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'ai' && msg.source && (
                    <div className="mt-1 flex items-center justify-between text-[10px] font-mono theme-text-dim px-1">
                      <span className="flex items-center gap-1">
                        <Database className="w-2.5 h-2.5" />
                        <span>{msg.source}</span>
                      </span>
                      <button
                        onClick={() => handleCopy(msg.text, idx)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 hover:theme-accent-color"
                        title="Copy text"
                      >
                        {copiedIdx === idx ? <Check className="w-2.5 h-2.5 text-emerald-500" /> : <Copy className="w-2.5 h-2.5" />}
                        <span>{copiedIdx === idx ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg glass-panel flex items-center justify-center theme-text-muted shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center theme-text-muted text-xs font-mono">
                <div className="w-7 h-7 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 px-3 py-2 rounded-xl glass-panel">
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce delay-200"></span>
                  <span className="ml-1 text-[10px] theme-text-dim">Retrieving context...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Interface */}
          <div className="p-3 sm:p-4 border-t theme-border bg-slate-50/50 dark:bg-slate-900/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={UI_STRINGS.aiAssistant.inputPlaceholder}
                className="flex-1 glass-panel rounded-xl px-4 py-2.5 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="btn-accent px-4 py-2.5 rounded-xl font-semibold text-xs shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5 shrink-0"
              >
                <span>{UI_STRINGS.aiAssistant.sendBtn}</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
