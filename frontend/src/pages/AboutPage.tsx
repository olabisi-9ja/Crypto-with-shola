import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { ShieldCheck, Target, Heart, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency First",
      desc: "We show verified wins and transparent losses. No edited screenshots or hidden logs."
    },
    {
      icon: Target,
      title: "Education Over Hype",
      desc: "Our primary goal is to build independent, confident traders, not dependent followers."
    },
    {
      icon: Heart,
      title: "Discipline Over Luck",
      desc: "Long-term profitability in crypto comes from consistency and process, not luck."
    },
    {
      icon: Award,
      title: "Real Identity",
      desc: "No anonymous guru accounts. Shola stands behind every lesson and trade setup."
    }
  ];

  const milestones = [
    { year: "2019", text: "Started sharing trading insights publicly, focusing on risk management and discipline." },
    { year: "2021", text: "Launched the public Telegram community, growing past 1,000 active members in under a year." },
    { year: "2024", text: "Expanded to premium mentorship, live trading, and a full-time support team." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />
      
      {/* Hero Header */}
      <header className="relative w-full pt-32 pb-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-600 mb-3">
              About Shola
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Real Name. Real Story.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-serif italic font-normal">Real Mission.</span>
            </h1>
            <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-6">
              Shola started in crypto not as an expert, but as someone frustrated by the noise. He built Crypto With Shola to teach people how to trade with discipline — not hype.
            </p>
            <p className="text-stone-600 leading-relaxed max-w-xl">
              Before crypto education, Shola worked in traditional finance and technology. The transition taught him that success in trading is less about finding the perfect strategy and more about building the right habits.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img src={images.sholaSuit} alt="Shola" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Background & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Background & Transition</h2>
            <p className="text-stone-600 leading-relaxed">
              In 2019, Shola began sharing his trading journey publicly. What started as a personal blog quickly turned into a community. Today, Crypto With Shola operates as a structured platform for beginners, active VIP traders, and serious private mentorship students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-stone-50 border border-stone-200 p-8 rounded-3xl text-left hover:border-amber-600/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-700 mb-6">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Timeline */}
      <section className="py-24 bg-[#1c1917] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">Credibility Timeline</h2>
            <p className="text-stone-400">Tracing our path from a public blog to a global trading community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="bg-stone-900 border border-stone-850 p-8 rounded-3xl text-left">
                <span className="text-amber-500 font-serif italic text-4xl block mb-4">{m.year}</span>
                <p className="text-stone-300 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-20 bg-[#faf9f6] text-center border-t border-stone-200">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-black tracking-tight mb-4">Why he teaches</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            The crypto space is full of promises and short on structure. Shola teaches because he believes discipline and education are the only sustainable advantages.
          </p>
          <a href="https://t.me/cryptowithshola" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#1c1917] text-white rounded-full font-bold shadow-md hover:bg-stone-800 transition-colors">
            Join the community
          </a>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
