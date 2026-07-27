import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { HelpCircle, ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Is Crypto With Shola free?", a: "Yes — the Telegram community, selected lessons, and weekly updates are free. Premium content and trade signals require a membership." },
    { q: "What is inside the Telegram group?", a: "Market updates, community discussions, occasional free signals, announcements, and rules. It is not a paid signal room by default." },
    { q: "Is this financial advice?", a: "No. Everything on this site is for educational purposes only. Past results do not guarantee future performance. Trade at your own risk." },
    { q: "How often are signals posted?", a: "Premium members receive daily breakdowns. The frequency depends on market conditions — quality always comes before quantity." },
    { q: "Do I need experience?", a: "No. Our beginner path is designed for complete beginners. Advanced members can skip ahead to premium content." },
    { q: "What is the difference between free and paid?", a: "Free members get access to selected lessons and community updates. Paid members get recordings, premium signals, live classes, and priority support." },
    { q: "Can I cancel membership?", a: "Yes. You can cancel any time from your dashboard. Refund policies are outlined on our Refund Policy page." },
    { q: "How do I access recordings?", a: "After payment, log in to your dashboard. All recordings are organized by topic and date." }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans flex flex-col">
      <LandingNavbar />

      {/* Hero */}
      <header className="relative w-full pt-32 pb-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-black tracking-widest uppercase text-amber-600 mb-3">
            FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Common Questions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-serif italic font-normal">Honest Answers.</span>
          </h1>
          <p className="text-stone-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
            Everything you need to know before joining the community or upgrading to a membership plan.
          </p>
        </div>
      </header>

      {/* FAQ items */}
      <section className="py-24 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50 transition-colors hover:border-stone-300">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center text-[#1c1917]"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-600 shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="p-6 border-t border-stone-200 text-stone-600 text-sm leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Call */}
      <section className="py-20 bg-stone-100 text-center border-t border-stone-200">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-3">Still have questions?</h2>
          <p className="text-stone-600 mb-8 leading-relaxed text-sm">
            Contact us directly or explore related details. Our support team is ready to help you navigate our platform packages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-[#1c1917] text-white rounded-full font-bold text-sm shadow-md hover:bg-stone-800 transition-colors">
              Contact Support
            </Link>
            <Link to="/membership" className="px-6 py-3 bg-white border border-stone-200 text-[#1c1917] rounded-full font-bold text-sm hover:bg-stone-50 transition-colors">
              View Membership
            </Link>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
