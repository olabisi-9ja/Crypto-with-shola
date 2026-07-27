import React from 'react';
import { images } from '../lib/images';
import { ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

export function LandingProof() {
  return (
    <section className="w-full py-24 bg-[#faf9f6] text-[#1c1917] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Community & Growth</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Learn Alongside a Massive Community.</h3>
          <p className="text-stone-600 text-lg">
            Join thousands who tune in for live signals, market Q&A, and practical app tutorials.
          </p>
        </div>

        {/* Proof Grid - Layout displaying screenshots and live charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text/Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 bg-stone-100 p-4 rounded-2xl border border-stone-200">
              <Sparkles className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-bold text-sm">Daily Telegram Signals</h4>
                <p className="text-xs text-stone-500">Live signals and trading tips sent to over 109,000 active subscribers.</p>
              </div>
            </div>

            <h4 className="text-2xl font-black mb-4">Practical Tutorials & Market Basics</h4>
            <p className="text-stone-600 leading-relaxed mb-6">
              We focus on crypto basics and practical execution — like how to place a trade on Bybit. While trading offers high potential rewards, we also emphasize understanding the risks and basic security in the crypto market.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Beginner-friendly introductory videos",
                "Live Q&A and active mentorship sessions",
                "Disclaimer: Crypto trading involves significant risk."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-stone-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot Showcase */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 aspect-[4/3]">
              <img 
                src={images.telegramBanner} 
                alt="Live training screenshots" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <span className="text-white font-bold text-sm">Telegram Broadcasts</span>
                <span className="text-stone-300 text-xs">Live channel setups</span>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200 aspect-[4/3] sm:translate-y-6">
              <img 
                src={images.liveTraining} 
                alt="Live streaming logs" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <span className="text-white font-bold text-sm">Live Stream Recordings</span>
                <span className="text-stone-300 text-xs">Weekly chart reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Banner section */}
        <div className="relative bg-[#1c1917] text-[#faf9f6] rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-xl text-left">
            <h4 className="text-2xl md:text-3xl font-black mb-3">Ready to join the movement?</h4>
            <p className="text-stone-400 text-sm leading-relaxed">
              Join the public Telegram channel to receive daily signals, lifestyle coaching, and promotional opportunities. Disclaimer: Trading involves risk, and promotional codes may be affiliate links.
            </p>
          </div>
          <a 
            href="https://t.me/cryptowithshola" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4.5 rounded-full bg-amber-500 text-[#1c1917] font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shrink-0"
          >
            Join Free Channel
          </a>
        </div>

      </div>
    </section>
  );
}
