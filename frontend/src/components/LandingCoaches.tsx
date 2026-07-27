import React from 'react';
import { images } from '../lib/images';
import { MessageSquare, ShieldCheck } from 'lucide-react';

export function LandingCoaches() {
  const coaches = [
    {
      name: "Shola",
      role: "Lead Mentor & Founder",
      image: images.sholaSuit,
      desc: "Specializes in Technical Analysis, order blocks, and smart money concepts.",
      socials: { twitter: "https://twitter.com/cryptowithshola" }
    },
    {
      name: "Cyros",
      role: "Trading Psychology Coach",
      image: images.coachGodchella,
      desc: "Focuses on risk management, emotional control, and trade discipline.",
      socials: { twitter: "https://twitter.com/" }
    },
    {
      name: "Abuja",
      role: "Web3 Specialist",
      image: images.coachArt,
      desc: "Specializes in on-chain data analysis, node operations, and DeFi alpha.",
      socials: { twitter: "https://twitter.com/" }
    }
  ];

  return (
    <section className="w-full py-24 bg-[#1c1917] text-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Our Mentorship Team</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Meet Our Leading Mentors & Coaches</h3>
          <p className="text-stone-400 text-lg">
            Learn from verified professionals who trade the live markets every single day.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coaches.map((c, i) => (
            <div key={i} className="bg-stone-900 border border-stone-800 p-6 rounded-3xl flex flex-col items-center text-center shadow-lg relative group overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-[40px]"></div>

              {/* Coach Image Frame */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-stone-800 mb-6 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={c.image} 
                  alt={`${c.name} - ${c.role}`} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Coach
              </div>

              <h4 className="text-2xl font-black mb-1">{c.name}</h4>
              <p className="text-sm text-amber-500 font-bold uppercase tracking-wider mb-4">{c.role}</p>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">{c.desc}</p>

              {/* Follow Button */}
              <a 
                href={c.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-auto px-6 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold rounded-full uppercase tracking-wider transition-colors border border-stone-700"
              >
                Follow Coach
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-stone-400 font-semibold text-sm">
          and over many more community mods & analysts...
        </div>
      </div>
    </section>
  );
}
