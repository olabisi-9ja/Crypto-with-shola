import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { BookOpen, AlertTriangle, Cpu, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export function LearnPage() {
  const lessons = [
    { title: "Crypto Basics", desc: "Blockchain explained simply. What wallets do, what exchanges are, and how transactions work." },
    { title: "Trading Basics", desc: "Charts, entries, exits, and how to manage a trade from start to finish." },
    { title: "Risk Management", desc: "Position sizing, stop losses, and protecting your capital over time." },
    { title: "Wallet Setup", desc: "How to set up a secure wallet, back up your seed phrase, and avoid common mistakes." },
    { title: "Exchanges", desc: "How to choose an exchange, verify your identity safely, and understand fees." },
    { title: "Chart Reading", desc: "Support, resistance, trends, and patterns you can actually use in real trades." }
  ];

  const mistakes = [
    { title: "Over-leveraging", desc: "Using too much leverage turns a small loss into a catastrophic one. We teach position sizing first." },
    { title: "Ignoring risk", desc: "Many beginners focus only on entry points. We teach that exit strategy and risk control define profitability." },
    { title: "Chasing hype", desc: "Social media trends are not strategies. We teach how to evaluate setups independently of noise." }
  ];

  const tools = [
    { title: "Chart Tools", desc: "TradingView for charting and analysis. Essential for any serious trader." },
    { title: "Exchanges", desc: "Verified platforms with transparent fees and solid security practices." },
    { title: "Wallets", desc: "Cold storage and mobile wallets that balance convenience with security." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-600 mb-3">
              Academy
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Free Education For<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-serif italic font-normal">Serious Beginners.</span>
            </h1>
            <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              This is a mini academy. Start with crypto basics, move through trading fundamentals, and learn the risk management habits that separate consistent traders from gamblers.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3]">
              <img src={images.cryptoCoins} alt="Learn hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Beginner Path */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Beginner path in order</h2>
            <p className="text-stone-600">Follow the sequence below. Each section builds on the previous one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((l, i) => (
              <div key={i} className="bg-stone-50 border border-stone-200 p-8 rounded-3xl text-left flex flex-col justify-between hover:border-amber-600/30 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 mb-6 font-bold">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{l.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">{l.desc}</p>
                </div>
                <button onClick={() => alert('Lesson content coming soon!')} className="w-full py-3 bg-[#1c1917] hover:bg-stone-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors">
                  Read Lesson
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-24 bg-[#1c1917] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">Mistakes beginners make</h2>
            <p className="text-stone-400">Knowing these common pitfalls in advance saves both time and capital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-stone-900 border border-stone-850 p-8 rounded-3xl text-left">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#faf9f6]">{m.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">Recommended Tools</h2>
            <p className="text-stone-600">The software and platforms we trust to execute our trading plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((t, i) => (
              <div key={i} className="bg-stone-50 border border-stone-200 p-8 rounded-3xl text-left flex items-start gap-4 hover:border-amber-600/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
