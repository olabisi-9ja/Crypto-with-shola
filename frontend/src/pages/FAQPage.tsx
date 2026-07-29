import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
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
    <>
      <LandingNavbar />

      <main id="main">
        {/* Header */}
        <section className="intro-band" style={{background: 'var(--ink)', color: 'white'}}>
          <p className="eyebrow" style={{color: 'white'}}>FAQ</p>
          <h2 style={{color: 'white'}}>Honest<br /><span style={{color: 'var(--acid)'}}>Answers.</span></h2>
          <p className="band-copy">Everything you need to know before joining the community or upgrading to a membership plan.</p>
        </section>

        {/* FAQ items */}
        <section style={{padding: '7vw 6vw', background: 'var(--paper)', display: 'grid', gridTemplateColumns: '1fr', gap: '-1px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', width: '100%'}}>
            {faqs.map((faq, i) => (
              <div key={i} style={{border: '1px solid var(--ink)', marginBottom: '-1px', background: openIndex === i ? 'var(--acid)' : 'transparent', transition: 'background 0.2s'}}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{width: '100%', padding: '30px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--ink)'}}
                >
                  <h3 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', margin: 0, fontFamily: 'var(--display)'}}>{faq.q}</h3>
                  <span style={{fontFamily: 'var(--mono)', fontSize: '24px'}}>{openIndex === i ? '—' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div style={{padding: '0 30px 30px', color: 'var(--ink)'}}>
                    <p style={{fontSize: '16px', lineHeight: 1.6, margin: 0}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Support Call */}
        <section className="final-home" style={{background: 'var(--orange)', color: 'var(--ink)'}}>
          <p className="eyebrow">Still have questions?</p>
          <h2>Contact<br />Support.</h2>
          <p style={{maxWidth: '400px', fontSize: '17px', marginBottom: '40px', lineHeight: '1.5'}}>Contact us directly or explore related details. Our support team is ready to help you navigate our platform packages.</p>
          
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <Link to="/contact" className="round-link light" style={{background: 'var(--ink)', color: 'white'}}>
              <span>Contact Support</span><b style={{background: 'var(--acid)', color: 'var(--ink)'}}>→</b>
            </Link>
            <Link to="/membership" className="text-link">View Membership</Link>
          </div>
          
          <div className="final-star" style={{color: 'var(--acid)'}}>✦</div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
