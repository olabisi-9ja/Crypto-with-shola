import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { ShieldAlert } from 'lucide-react';

export function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tiers = [
    {
      name: "Free Telegram",
      price: "0",
      features: ["Community access", "Selected lessons", "Weekly updates", "Basic support"],
      cta: "Join Now",
      link: "https://t.me/cryptowithshola",
      popular: false,
      color: "var(--paper)"
    },
    {
      name: "Basic Membership",
      price: "29",
      features: ["Recordings access", "Watchlists", "Daily alerts", "Email support"],
      cta: "Upgrade",
      link: "#",
      popular: true,
      color: "var(--acid)"
    },
    {
      name: "VIP Membership",
      price: "99",
      features: ["Premium signals", "Live class access", "Priority support", "Private room"],
      cta: "Go VIP",
      link: "#",
      popular: false,
      color: "var(--orange)"
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
    <>
      <LandingNavbar />

      <main id="main">
        {/* Header */}
        <section className="intro-band" style={{background: 'var(--ink)', color: 'white'}}>
          <p className="eyebrow" style={{color: 'var(--acid)'}}>Membership</p>
          <h2 style={{color: 'white'}}>Unlock Premium<br /><span style={{color: 'var(--orange)'}}>Insights.</span></h2>
          <p className="band-copy">Choose the tier that fits your experience level. Every tier includes access to our core educational content and trading community.</p>
        </section>

        {/* Pricing Tiers */}
        <section className="programs" style={{background: 'var(--paper)'}}>
          <div className="section-heading">
            <p className="eyebrow">Plans</p>
            <h2>Choose<br />your edge.</h2>
          </div>
          <div className="program-grid">
            {tiers.map((t, i) => (
              <div key={i} className="program" style={{background: t.color, borderColor: 'var(--ink)'}}>
                {t.popular && <span style={{position: 'absolute', top: '-15px', right: '30px', background: 'var(--ink)', color: 'white', padding: '6px 12px', font: '11px var(--mono)', textTransform: 'uppercase'}}>Most Popular</span>}
                <span className="program-no">TIER / 0{i+1}</span>
                <div style={{marginTop: '40px'}}>
                  <h3 style={{fontSize: 'clamp(2rem, 3vw, 3.5rem)'}}>{t.name}</h3>
                  <div style={{display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '30px'}}>
                    <span style={{fontSize: '4rem', fontFamily: 'var(--display)', fontWeight: 900, letterSpacing: '-0.05em'}}>${t.price}</span>
                    <span style={{font: '14px var(--mono)', opacity: 0.7}}>/month</span>
                  </div>
                  
                  <ul style={{listStyle: 'none', padding: 0, margin: '0 0 40px 0', borderTop: '1px solid var(--ink)', paddingTop: '30px'}}>
                    {t.features.map((f, idx) => (
                      <li key={idx} style={{font: '15px var(--sans)', marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <span style={{color: 'var(--ink)'}}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={t.link} 
                  onClick={() => t.link === '#' && alert('Payment flow opening...')}
                  className="round-link"
                  style={{border: 'none', background: 'var(--ink)', color: 'white', padding: '10px 10px 10px 22px', alignSelf: 'flex-start'}}
                >
                  <span>{t.cta}</span><b style={{background: 'var(--acid)', color: 'var(--ink)'}}>→</b>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* What it includes */}
        <section className="notes-section" style={{borderTop: '1px solid var(--line)', background: 'var(--ink)', color: 'white'}}>
          <div className="notes-top">
            <div>
              <p className="eyebrow" style={{color: 'white'}}>Features</p>
              <h2 style={{color: 'white'}}>What's<br />included.</h2>
            </div>
          </div>
          <div className="notes-grid" style={{borderColor: 'white'}}>
            {includes.map((inc, i) => (
              <div key={i} className="note group text-white hover:text-[#151515]" style={{borderColor: 'var(--line)', border: '1px solid rgba(255,255,255,0.2)', margin: '-1px 0 0 -1px'}}>
                <span className="text-[var(--orange)] group-hover:text-[#151515] transition-colors">0{i+1} / Feature</span>
                <h3 className="group-hover:text-[#151515] transition-colors">{inc.title}</h3>
                <p className="group-hover:text-[#151515] transition-colors">{inc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ items */}
        <section style={{padding: '7vw 6vw', background: 'var(--acid)', display: 'grid', gridTemplateColumns: '1fr', gap: '-1px', borderTop: '1px solid var(--ink)'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', width: '100%'}}>
            <p className="eyebrow" style={{marginBottom: '40px', textAlign: 'center'}}>Membership FAQ</p>
            {faqs.map((faq, i) => (
              <div key={i} style={{border: '1px solid var(--ink)', marginBottom: '-1px', background: openFaq === i ? 'var(--orange)' : 'transparent', transition: 'background 0.2s'}}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{width: '100%', padding: '30px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--ink)'}}
                >
                  <h3 style={{fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', margin: 0, fontFamily: 'var(--display)'}}>{faq.q}</h3>
                  <span style={{fontFamily: 'var(--mono)', fontSize: '24px'}}>{openFaq === i ? '—' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{padding: '0 30px 30px', color: 'var(--ink)'}}>
                    <p style={{fontSize: '16px', lineHeight: 1.6, margin: 0}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="final-home" style={{background: 'var(--paper)', color: 'var(--ink)', padding: '5vw 12vw', minHeight: 'auto'}}>
          <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
            <ShieldAlert size={32} color="var(--orange)" style={{flexShrink: 0}} />
            <div>
              <h2 style={{fontSize: '2rem', marginBottom: '15px'}}>Risk Disclaimer</h2>
              <p style={{maxWidth: '600px', fontSize: '15px', lineHeight: '1.6'}}>Crypto involves significant risk. No profit is guaranteed. Past results do not guarantee future performance. This site is for educational purposes only and does not constitute financial advice.</p>
            </div>
          </div>
        </section>

      </main>

      <LandingFooter />
    </>
  );
}
