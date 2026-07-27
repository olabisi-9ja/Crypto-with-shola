import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { Check, X, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export function ProofPage() {
  const stats = [
    { value: "+312%", label: "Annual growth — VIP signals" },
    { value: "87%", label: "Win rate — verified trades" },
    { value: "142", label: "Students trained this year" },
    { value: "4.9", label: "Average student rating" }
  ];

  const recaps = [
    { month: "February 2026", desc: "3 setups failed due to unexpected macro news. Lesson learned: always track macro events before entering." },
    { month: "March 2026", desc: "1 loss from over-leveraging a setup that looked perfect. Lesson learned: stick strictly to position size rules." },
    { month: "April 2026", desc: "2 wins and 1 loss. Overall positive results. Lesson learned: patience pays — not every day is a trading day." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-600 mb-3">
              Performance Track
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Data-Driven Results.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-serif italic font-normal">No Hype.</span>
            </h1>
            <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Transparency is our core value. We show verified wins, transparent losses, and the lessons that come from both.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3]">
              <img src={images.telegramBanner} alt="Proof chart" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200 text-center">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col pt-8 md:pt-0">
                <span className="text-4xl md:text-5xl font-black text-amber-700 mb-2">{s.value}</span>
                <span className="text-stone-500 text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Losses */}
      <section className="py-24 bg-[#1c1917] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#faf9f6]">Transparent Losses</h2>
            <p className="text-stone-400">
              Every trader has losses. We publish monthly recaps including setups that failed with breakdown explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recaps.map((r, i) => (
              <div key={i} className="bg-stone-900 border border-stone-850 p-8 rounded-3xl text-left flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-6 font-bold">
                    <X className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-stone-200">{r.month}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Progress */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">Before / After Progress</h2>
            <p className="text-stone-600">
              Many students start with random setups and finish with custom, strict, and independent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Before */}
            <div className="bg-stone-50 border-2 border-red-500/10 p-8 rounded-3xl text-left">
              <h3 className="font-black text-xl mb-6 text-red-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Before Mentorship
              </h3>
              <ul className="space-y-4">
                {[
                  "Random trades with no clear system rules",
                  "No risk management limits (wiping accounts)",
                  "Emotional entries and panic-driven exits",
                  "Chasing social media noise and random calls"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm text-stone-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-stone-50 border-2 border-emerald-500/10 p-8 rounded-3xl text-left">
              <h3 className="font-black text-xl mb-6 text-emerald-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> After Mentorship
              </h3>
              <ul className="space-y-4">
                {[
                  "Structured, clean daily trading routines",
                  "Strict, clear position sizing formulas",
                  "Pre-planned setups, entries, and invalidations",
                  "Independent chart analyses and technical logs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-stone-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-100 text-center border-t border-stone-200">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-black tracking-tight mb-4">Ready for verified signals?</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Unlocks full track-record lists, daily VIP setups, live chart sessions, and Discord channels.
          </p>
          <a href="/membership" className="px-8 py-4 bg-[#1c1917] text-white rounded-full font-bold shadow-md hover:bg-stone-800 transition-colors">
            See Membership Tiers
          </a>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
