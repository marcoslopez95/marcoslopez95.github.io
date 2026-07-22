import React, { useState } from 'react';
import { Language, Theme, ContactFormData } from '../types';
import { translations } from '../data/translations';

interface ConnectViewProps {
  lang: Language;
  theme: Theme;
  onLogTerminal?: (message: string) => void;
}

export const ConnectView: React.FC<ConnectViewProps> = ({
  lang,
  theme,
  onLogTerminal,
}) => {
  const t = translations[lang].connect;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: t.form.options[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    if (onLogTerminal) {
      onLogTerminal(`[POST /api/v1/contact] Routing inquiry from ${formData.email}...`);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onLogTerminal) {
        onLogTerminal(`[CONTACT SUCCESS] 200 OK — Message queued for Marcos López.`);
      }
    }, 1200);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t.title}{' '}
          <span className={theme === 'dark' ? 'text-[#4ae176]' : 'text-[#006948]'}>
            {t.titleHighlight}
          </span>
        </h1>
        <p className="text-base sm:text-lg opacity-80 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Interactive Form Column */}
        <div className="lg:col-span-7">
          <div
            className={`p-6 sm:p-10 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-md'
            }`}
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#006948]/10 dark:bg-[#4ae176]/10 text-[#006948] dark:text-[#4ae176] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold">{t.form.success}</h3>
                <p className="opacity-80 text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Your message has been routed directly to Marcos López. You will receive a response within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: t.form.options[0],
                      message: '',
                    });
                  }}
                  className={`mt-4 px-6 py-2.5 rounded-xl font-bold text-xs font-mono-code border ${
                    theme === 'dark'
                      ? 'border-[#4ae176] text-[#4ae176]'
                      : 'border-[#006948] text-[#006948]'
                  }`}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block font-mono-code text-xs uppercase tracking-wider opacity-80">
                      {t.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border transition-all font-sans-geist text-sm outline-none ${
                        theme === 'dark'
                          ? 'bg-[#101415] border-[#45464d] focus:border-[#4ae176] text-white'
                          : 'bg-[#f5fbf5] border-[#bccac0] focus:border-[#006948] text-[#171d19]'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block font-mono-code text-xs uppercase tracking-wider opacity-80">
                      {t.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border transition-all font-sans-geist text-sm outline-none ${
                        theme === 'dark'
                          ? 'bg-[#101415] border-[#45464d] focus:border-[#4ae176] text-white'
                          : 'bg-[#f5fbf5] border-[#bccac0] focus:border-[#006948] text-[#171d19]'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-2">
                  <label className="block font-mono-code text-xs uppercase tracking-wider opacity-80">
                    {t.form.subjectLabel}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all font-sans-geist text-sm outline-none ${
                      theme === 'dark'
                        ? 'bg-[#101415] border-[#45464d] focus:border-[#4ae176] text-white'
                        : 'bg-[#f5fbf5] border-[#bccac0] focus:border-[#006948] text-[#171d19]'
                    }`}
                  >
                    {t.form.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block font-mono-code text-xs uppercase tracking-wider opacity-80">
                    {t.form.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-all font-sans-geist text-sm outline-none ${
                      theme === 'dark'
                        ? 'bg-[#101415] border-[#45464d] focus:border-[#4ae176] text-white'
                        : 'bg-[#f5fbf5] border-[#bccac0] focus:border-[#006948] text-[#171d19]'
                    }`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-98 ${
                    theme === 'dark'
                      ? 'bg-[#4ae176] text-[#003915] hover:bg-[#6bff8f]'
                      : 'bg-[#006948] text-white hover:bg-[#00855d]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"></span>
                      <span>{t.form.validating}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.form.btnSend}</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Channels & Location Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Channels */}
          <div
            className={`p-8 rounded-2xl border space-y-6 ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight">{t.directChannels}</h3>

            <div className="space-y-4">
              {t.channels.map((chan) => (
                <a
                  key={chan.name}
                  href={chan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all group ${
                    theme === 'dark'
                      ? 'bg-[#101415] border-[#45464d]/30 hover:border-[#4ae176]'
                      : 'bg-[#f5fbf5] border-[#bccac0]/40 hover:border-[#006948]'
                  }`}
                >
                  <div>
                    <p className="font-mono-code text-xs opacity-60">{chan.name}</p>
                    <p className="font-bold text-sm sm:text-base group-hover:text-[#006948] dark:group-hover:text-[#4ae176] transition-colors">
                      {chan.handle}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-lg opacity-60 group-hover:translate-x-1 transition-transform">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Location & Availability Card */}
          <div
            className={`p-8 rounded-2xl border space-y-6 overflow-hidden relative ${
              theme === 'dark'
                ? 'bg-[#191c1e] border-[#45464d]/40'
                : 'bg-white border-[#bccac0]/60 shadow-sm'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[#006948] dark:text-[#4ae176]">
                  location_on
                </span>
                <h4 className="font-bold text-lg">{t.location}</h4>
              </div>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                {t.availabilityDesc}
              </p>
            </div>

            {/* Stylized Caracas Map Graphic */}
            <div className="rounded-xl overflow-hidden border border-[#45464d]/30 relative h-48">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBVQYk7I-3bGK9BARI51k9OTKRaEarQVLPbblNuVzAhiuDjgbtqVbr93UMYwEsGcR3V-7c2d15ujKAQhPGcQSXgj6R3jhRKA-BR5i-na3ZTTSxhxpIRh8RN2lHfWdLRTvAAbatAWZcnrVjHcD3lW6fK2cW6XXR7kqFfSxUdi8GiUEPqnmSgmhlVlWPPtPN5dZARzjtrZWx6WcG41WES8RGel2oC9SBtD5GxsRVatCoZ0cOuo6VjKg0SQ"
                alt="Caracas Architecture Node Map"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101415]/80 via-transparent to-transparent flex items-end p-3">
                <span className="font-mono-code text-[11px] text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ae176] animate-pulse"></span>
                  CARACAS NODE (GMT-4) ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
