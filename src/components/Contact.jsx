import React, { useState, useEffect } from 'react';
import { UI_STRINGS, PERSONAL_DATA, EMAILJS_CONFIG } from '../constants/portfolioConstants';
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    if (EMAILJS_CONFIG.publicKey) {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }
  }, []);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');

    // Comprehensive template parameters
    const templateParams = {
      to_email: PERSONAL_DATA.email, // me.svipul@gmail.com
      to_name: PERSONAL_DATA.name,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || `Portfolio Contact Inquiry from ${formData.name}`,
      message: formData.message,
      name: formData.name,
      email: formData.email,
      user_name: formData.name,
      user_email: formData.email,
    };

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        }
      )
      .then(
        (response) => {
          console.log('EmailJS SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          setFormSubmitted(true);
        },
        (error) => {
          setIsSubmitting(false);
          console.error('EmailJS FAILED...', error);
          const errorDetail = error?.text || error?.message || 'Failed to send message via EmailJS.';
          setErrorMessage(`Email sending failed: ${errorDetail}`);
        }
      );
  };

  return (
    <section id="contact" className="py-24 theme-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent-soft-bg theme-accent-color text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{UI_STRINGS.contact.eyebrow}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold theme-text-heading tracking-tight">
            {UI_STRINGS.contact.headingPrefix}
            <span className="gradient-text">{UI_STRINGS.contact.headingGradient}</span>
          </h3>
          <p className="mt-4 theme-text-muted text-base">
            {UI_STRINGS.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <div className="p-5 rounded-xl glass-panel group transition-all hover:border-slate-400 dark:hover:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase theme-text-muted tracking-wider">
                      {UI_STRINGS.contact.directEmailLabel}
                    </span>
                    <h4 className="font-bold theme-text-heading text-sm sm:text-base">
                      {PERSONAL_DATA.email}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_DATA.email, 'email')}
                  className="p-2 rounded-lg glass-panel theme-text-muted hover:theme-accent-color transition-colors"
                  title="Copy Email"
                  aria-label="Copy Email to clipboard"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-xl glass-panel group transition-all hover:border-slate-400 dark:hover:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase theme-text-muted tracking-wider">
                      {UI_STRINGS.contact.phoneLabel}
                    </span>
                    <h4 className="font-bold theme-text-heading text-sm sm:text-base">
                      {PERSONAL_DATA.phone}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_DATA.phone, 'phone')}
                  className="p-2 rounded-lg glass-panel theme-text-muted hover:theme-accent-color transition-colors"
                  title="Copy Phone"
                  aria-label="Copy Phone number to clipboard"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 rounded-xl glass-panel group transition-all hover:border-slate-400 dark:hover:border-slate-700">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg theme-accent-soft-bg border theme-accent-soft-border flex items-center justify-center theme-accent-color shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase theme-text-muted tracking-wider">
                    {UI_STRINGS.contact.locationLabel}
                  </span>
                  <h4 className="font-bold theme-text-heading text-sm sm:text-base">
                    {PERSONAL_DATA.location}
                  </h4>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="p-5 rounded-xl glass-panel theme-accent-soft-border shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 theme-accent-color shrink-0" />
                  <div>
                    <h4 className="font-bold theme-text-heading text-xs sm:text-sm">
                      {UI_STRINGS.contact.downloadCardTitle}
                    </h4>
                    <p className="text-[11px] theme-text-muted font-mono">
                      {UI_STRINGS.contact.downloadCardSubtitle}
                    </p>
                  </div>
                </div>
                <a
                  href={PERSONAL_DATA.resumeLink}
                  download={UI_STRINGS.resumeFileName}
                  className="btn-accent px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-sm whitespace-nowrap"
                >
                  {UI_STRINGS.contact.downloadBtn}
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl glass-panel shadow-xl border theme-border">
              <h4 className="text-base sm:text-lg font-bold theme-text-heading mb-5 flex items-center gap-2">
                <Send className="w-4 h-4 theme-accent-color" />
                <span>{UI_STRINGS.contact.formTitle}</span>
              </h4>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 anim-fade">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold theme-text-heading">
                    {UI_STRINGS.contact.successTitle}
                  </h4>
                  <p className="text-sm theme-text-main max-w-md mx-auto leading-relaxed">
                    {UI_STRINGS.contact.successTextPrefix}
                    <strong className="theme-accent-color">{PERSONAL_DATA.email}</strong>
                    {UI_STRINGS.contact.successTextSuffix}
                  </p>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setErrorMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl glass-panel theme-text-main text-xs font-semibold hover:theme-accent-color transition-colors"
                  >
                    {UI_STRINGS.contact.sendAnotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono theme-text-muted mb-1">
                        {UI_STRINGS.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={UI_STRINGS.contact.namePlaceholder}
                        className="w-full glass-panel rounded-xl px-4 py-3 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono theme-text-muted mb-1">
                        {UI_STRINGS.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={UI_STRINGS.contact.emailPlaceholder}
                        className="w-full glass-panel rounded-xl px-4 py-3 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono theme-text-muted mb-1">
                      {UI_STRINGS.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={UI_STRINGS.contact.subjectPlaceholder}
                      className="w-full glass-panel rounded-xl px-4 py-3 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono theme-text-muted mb-1">
                      {UI_STRINGS.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={UI_STRINGS.contact.messagePlaceholder}
                      className="w-full glass-panel rounded-xl px-4 py-3 text-xs sm:text-sm theme-text-main placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{UI_STRINGS.contact.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{UI_STRINGS.contact.submitBtn}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
