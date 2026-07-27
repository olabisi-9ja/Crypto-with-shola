import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function LandingPricing() {
  const tiers = [
    {
      name: "Free Community",
      price: "0",
      period: "forever",
      desc: "Get started with foundational trading education and join the main Telegram channel.",
      features: [
        "Access to basic training guides",
        "Public market analysis updates",
        "Join 109,000+ Telegram subscribers",
        "Occasional spot trade setups",
        "Community discussion space"
      ],
      cta: "Join Free Telegram",
      link: "https://t.me/cryptowithshola",
      popular: false
    },
    {
      name: "VIP Signal Group",
      price: "49",
      period: "month",
      desc: "Real-time high-probability trading signals with complete setup invalidation and entry context.",
      features: [
        "Daily live trading signals",
        "Exact entry, stop-loss & targets",
        "Deep weekly market breakdowns",
        "Priority Q&A inside VIP channel",
        "Deep focus on getting profits",
        "Discipline & Risk Management rules"
      ],
      cta: "Become VIP Member",
      link: "#membership",
      popular: true
    },
    {
      name: "1-on-1 Mentorship",
      price: "499",
      period: "one-time",
      desc: "Accelerated learning curve with personal direct access to Shola for portfolio strategy.",
      features: [
        "1-on-1 trade review sessions",
        "Customized risk profile plan",
        "4x private monthly Zoom calls",
        "Direct Telegram access to Shola",
        "Lifetime access to VIP Signals",
        "Proprietary strategy workbook"
      ],
      cta: "Apply for Mentorship",
      link: "#mentorship",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-[#faf9f6] text-[#1c1917] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Choose Your Level</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Invest in Your Financial Growth</h3>
          <p className="text-stone-600 text-lg">
            Choose a plan that fits your current trading experience and commitment level.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t, i) => (
            <div 
              key={i} 
              className={`bg-white border-2 p-8 rounded-3xl flex flex-col justify-between relative shadow-sm transition-all duration-300 hover:shadow-xl ${
                t.popular ? 'border-amber-600 lg:scale-105' : 'border-stone-200'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-[#faf9f6] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                <h4 className="text-xl font-black mb-2">{t.name}</h4>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed min-h-[48px]">{t.desc}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">${t.price}</span>
                  <span className="text-stone-500 font-semibold text-sm">/{t.period}</span>
                </div>

                <ul className="space-y-4 border-t border-stone-100 pt-6 mb-8">
                  {t.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-stone-700 text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={t.link} 
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold transition-all ${
                  t.popular 
                    ? 'bg-[#1c1917] text-[#faf9f6] hover:opacity-90' 
                    : 'bg-stone-100 text-[#1c1917] hover:bg-stone-200'
                }`}
              >
                {t.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
