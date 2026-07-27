import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { Check, HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tiers = [
    {
      name: "Free Telegram",
      price: "0",
      features: ["Community access", "Selected lessons", "Weekly updates", "Basic support"],
      cta: "Join Now",
      link: "https://t.me/cryptowithshola",
      popular: false
    },
    {
      name: "Basic Membership",
      price: "29",
      features: ["Recordings access", "Watchlists", "Daily alerts", "Email support"],
      cta: "Upgrade",
      link: "#",
      popular: true
    },
    {
      name: "VIP Membership",
      price: "99",
      features: ["Premium signals", "Live class access", "Priority support", "Private room"],
      cta: "Go VIP",
      link: "#",
      popular: false
    }
  ];

  const includes = [
    { title: "Daily Signal Breakdown", desc: "Every signal includes entry, stop loss, take profit, market reasoning, and a result log. Nothing hidden." },
    { title: "Live Session Access", desc: "Weekly live classes covering current setups, risk adjustments, and student questions in real time." },
    { title: "Recorded Sessions", desc: "Every live session is recorded and uploaded to the members area with search by topic." }
  ];

  const faqs = [
    { q: "How often are signals posted?", a: "Premium members receive daily breakdowns. The frequency depends on market conditions — quality always comes before quantity." },
    { q: "Can I cancel any time?", a: "Yes. You can cancel from your dashboard at any time. See our Refund Policy for details." },
    { q: "What is the difference between Basic and VIP?", a: "VIP adds premium signals, live access, private community rooms, and priority support." },
    { q: "Is there a mentorship option?", a: "Yes. Premium Mentorship is available by application. It includes direct strategy reviews and one-on-one coaching." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 bg-[#1c1917] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-500 mb-3">
              Membership
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Unlock Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-serif italic font-normal">Insights & Signals.</span>
            </h1>
            <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Choose the tier that fits your experience level. Every tier includes access to our core educational content and trading community.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-stone-800 shadow-2xl">
              <img src={images.sholaSuit} alt="Shola" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Choose your edge</h2>
            <p className="text-stone-600">Multiple tiers so you only pay for the level of support you actually need.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((t, i) => (
              <div 
                key={i} 
                className={`bg-stone-50 border-2 p-8 rounded-3xl flex flex-col justify-between relative shadow-sm hover:shadow-lg transition-all ${
                  t.popular ? 'border-amber-600 lg:scale-105' : 'border-stone-200'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-bold text-xl mb-4">{t.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-black">${t.price}</span>
                    <span className="text-stone-500 text-sm">/month</span>
                  </div>
                  <ul className="space-y-4 border-t border-stone-200 pt-6 mb-8 text-left">
                    {t.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="text-sm text-stone-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={t.link} 
                  onClick={() => t.link === '#' && alert('Payment flow opening...')}
                  className={`w-full py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 ${
                    t.popular ? 'bg-amber-600 text-white hover:bg-amber-500' : 'bg-stone-100 text-[#1c1917] hover:bg-stone-200'
                  }`}
                >
                  {t.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="py-24 bg-[#1c1917] text-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">What membership includes</h2>
            <p className="text-stone-400">Everything serious traders need to construct setups and maintain risk rules.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {includes.map((inc, i) => (
              <div key={i} className="bg-stone-900 border border-stone-850 p-8 rounded-3xl text-left">
                <h4 className="font-bold text-lg mb-3 text-amber-500">{inc.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{inc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black tracking-tight text-center mb-12">Membership FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="p-6 border-t border-stone-200 text-stone-600 text-sm leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-stone-100 text-center border-t border-stone-200">
        <div className="max-w-xl mx-auto px-6">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-black mb-3">Risk Disclaimer</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Crypto involves significant risk. No profit is guaranteed. Past results do not guarantee future performance. This site is for educational purposes only and does not constitute financial advice.
          </p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
