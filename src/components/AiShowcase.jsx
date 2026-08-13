import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';
import { UI_STRINGS, AI_ASSISTANT_QUESTIONS } from '../constants/portfolioConstants';

export default function AiShowcase() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: UI_STRINGS.aiAssistant.initialGreeting
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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
      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="ai-assistant" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-accent-soft-bg border theme-accent-soft-border theme-accent-color text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
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

        {/* Chat Widget */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel shadow-2xl overflow-hidden">
          
          {/* Bar */}
          <div className="px-6 py-4 border-b theme-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl btn-accent flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold theme-text-heading text-sm flex items-center gap-2">
                  <span>{UI_STRINGS.aiAssistant.botName}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h4>
                <span className="text-[11px] theme-text-muted font-mono">
                  {UI_STRINGS.aiAssistant.botSubtitle}
                </span>
              </div>
            </div>

            <button
              onClick={() => setMessages([{
                sender: 'ai',
                text: UI_STRINGS.aiAssistant.resetGreeting
              }])}
              className="p-2 rounded-lg glass-panel theme-text-muted hover:theme-text-heading transition-colors"
              title={UI_STRINGS.aiAssistant.resetTooltip}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Sample Pills */}
          <div className="px-6 py-3 border-b theme-border flex flex-wrap items-center gap-2">
            <span className="text-[11px] theme-text-muted font-mono flex items-center gap-1 mr-1">
              <MessageSquare className="w-3 h-3 theme-accent-color" />
              {UI_STRINGS.aiAssistant.sampleQueriesLabel}
            </span>
            {AI_ASSISTANT_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.question)}
                className="px-3 py-1 rounded-full glass-panel text-[11px] theme-text-main hover:theme-accent-color transition-all"
              >
                "{q.question}"
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="p-6 space-y-4 min-h-[320px] max-h-[420px] overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-xl p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'btn-accent text-white rounded-tr-none shadow-md'
                      : 'glass-panel theme-text-main rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center theme-text-main shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center theme-text-muted text-xs font-mono">
                <div className="w-8 h-8 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 p-3 rounded-2xl glass-panel">
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full theme-accent-bg animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="p-4 border-t theme-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={UI_STRINGS.aiAssistant.inputPlaceholder}
                className="flex-1 glass-panel rounded-xl px-4 py-3 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="btn-accent px-5 py-3 rounded-xl font-semibold text-xs shadow-md transition-all disabled:opacity-50 flex items-center gap-1.5"
              >
                <span>{UI_STRINGS.aiAssistant.sendBtn}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
