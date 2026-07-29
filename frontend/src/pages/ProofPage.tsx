import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';
import { Link } from 'react-router-dom';

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
    <>
      <LandingNavbar />

      <main id="main">
        {/* Header */}
        <section className="intro-band" style={{background: 'var(--paper)', color: 'var(--ink)'}}>
          <p className="eyebrow">Performance Track</p>
          <h2>Data-Driven<br /><span>Results.</span></h2>
          <p className="band-copy">Transparency is our core value. We show verified wins, transparent losses, and the lessons that come from both.</p>
        </section>

        {/* Image Feature */}
        <section className="portrait-feature" style={{background: 'var(--ink)', padding: '0 10vw'}}>
          <div className="feature-image" style={{paddingTop: '7vw'}}>
            <img src={images.telegramBanner} alt="Proof chart" style={{filter: 'grayscale(1) contrast(1.2)'}} />
          </div>
          <div className="feature-copy" style={{color: 'white'}}>
            <p className="eyebrow" style={{color: 'var(--orange)'}}>Proof</p>
            <h2 style={{color: 'white'}}>No Hype.</h2>
            <p style={{color: 'white'}}>We don't sell dreams, we execute plans. Everything here is based on real setups and verified outcomes.</p>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{padding: '7vw 6vw', background: 'var(--acid)', borderTop: '1px solid var(--ink)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center'}}>
          {stats.map((s, i) => (
            <div key={i} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <span style={{fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--display)', fontWeight: 900, lineHeight: 1}}>{s.value}</span>
              <span style={{font: '14px var(--mono)', textTransform: 'uppercase'}}>{s.label}</span>
            </div>
          ))}
        </section>

        {/* Transparent Losses */}
        <section className="notes-section" style={{borderTop: '1px solid var(--line)', background: 'var(--ink)', color: 'white'}}>
          <div className="notes-top">
            <div>
              <p className="eyebrow" style={{color: 'white'}}>Honesty</p>
              <h2 style={{color: 'white'}}>Transparent<br />Losses.</h2>
            </div>
          </div>
          <div className="notes-grid" style={{borderColor: 'white'}}>
            {recaps.map((r, i) => (
              <div key={i} className="note" style={{borderColor: 'var(--line)', border: '1px solid rgba(255,255,255,0.2)', margin: '-1px 0 0 -1px'}}>
                <span style={{color: 'var(--orange)'}}>LOSS / {String(i+1).padStart(2, '0')}</span>
                <h3 style={{color: 'white'}}>{r.month}</h3>
                <p style={{color: 'white'}}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before / After Progress */}
        <section className="programs" style={{background: 'var(--paper)'}}>
          <div className="section-heading">
            <p className="eyebrow">Transformation</p>
            <h2>Before & After<br />Progress.</h2>
          </div>
          <div className="program-grid">
            <div className="program" style={{border: '1px solid var(--ink)', background: 'white'}}>
              <span className="program-no">BEFORE</span>
              <div style={{marginTop: '20px'}}>
                <h3>Mentorship</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: '20px 0', opacity: 0.8}}>
                  <li style={{marginBottom: '10px'}}>✗ Random trades with no clear system</li>
                  <li style={{marginBottom: '10px'}}>✗ No risk management limits</li>
                  <li style={{marginBottom: '10px'}}>✗ Emotional entries and panic exits</li>
                  <li style={{marginBottom: '10px'}}>✗ Chasing social media noise</li>
                </ul>
              </div>
            </div>
            
            <div className="program program-dark">
              <span className="program-no">AFTER</span>
              <div style={{marginTop: '20px'}}>
                <h3>Mentorship</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: '20px 0'}}>
                  <li style={{marginBottom: '10px'}}>✓ Structured daily trading routines</li>
                  <li style={{marginBottom: '10px'}}>✓ Strict position sizing formulas</li>
                  <li style={{marginBottom: '10px'}}>✓ Pre-planned setups and invalidations</li>
                  <li style={{marginBottom: '10px'}}>✓ Independent technical logs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="final-home" style={{background: 'var(--orange)', color: 'var(--ink)'}}>
          <p className="eyebrow">Next steps</p>
          <h2>Ready for<br />verified signals?</h2>
          <p style={{maxWidth: '400px', fontSize: '17px', marginBottom: '40px', lineHeight: '1.5'}}>Unlocks full track-record lists, daily VIP setups, live chart sessions, and Discord channels.</p>
          
          <Link to="/membership" className="round-link light" style={{background: 'var(--ink)', color: 'white'}}>
            <span>See Memberships</span><b style={{background: 'var(--acid)', color: 'var(--ink)'}}>→</b>
          </Link>
          
          <div className="final-star" style={{color: 'var(--acid)'}}>✦</div>
        </section>

      </main>

      <LandingFooter />
    </>
  );
}
