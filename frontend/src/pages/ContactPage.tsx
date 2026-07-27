import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { Mail, MessageCircle, Send, ShieldAlert } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-600 mb-3">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-serif italic font-normal">Touch.</span>
          </h1>
          <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
            Have questions about our signals, structured academy courses, or 1-on-1 mentorship programs? Contact us directly.
          </p>
        </div>
      </header>

      {/* Grid Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Support Handles */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <h3 className="text-2xl font-black mb-6">Direct Channels</h3>
            <p className="text-stone-600 leading-relaxed mb-8">
              We respond fastest to Telegram inquiries. Choose the handle that matches your topic:
            </p>

            <div className="space-y-6 mb-12">
              <a 
                href="https://t.me/cryptowithshola" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-4 bg-stone-50 border border-stone-200 p-6 rounded-3xl hover:border-amber-650/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">Telegram Community</h4>
                  <p className="text-sm text-stone-500">Join our main public channel containing free market updates.</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-stone-50 border border-stone-200 p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">Support Email</h4>
                  <p className="text-sm text-stone-500">support@cryptowithshola.com</p>
                  <p className="text-xs text-stone-400 mt-1">General support replies take up to 24-48 business hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 p-8 md:p-12 rounded-3xl shadow-sm text-left">
            <h3 className="text-2xl font-black mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry..."
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-amber-600 focus:outline-none transition-colors text-sm font-medium resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className="w-full py-4.5 bg-[#1c1917] hover:bg-stone-800 text-white rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {submitted ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
