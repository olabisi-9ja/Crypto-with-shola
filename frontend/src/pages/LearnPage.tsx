import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';

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
    <>
      <LandingNavbar />

      <main id="main">
        {/* Header */}
        <section className="intro-band">
          <p className="eyebrow">Academy</p>
          <h2>Free Education For<br /><span>Serious Beginners.</span></h2>
          <p className="band-copy">This is a mini academy. Start with crypto basics, move through trading fundamentals, and learn the risk management habits that separate consistent traders from gamblers.</p>
        </section>

        {/* Hero image for Learn */}
        <section className="portrait-feature" style={{background: 'var(--acid)', padding: '0 10vw'}}>
          <div className="feature-image" style={{paddingTop: '7vw'}}>
            <img src={images.cryptoCoins} alt="Learn hero" style={{mixBlendMode: 'multiply', filter: 'grayscale(1) contrast(1.2)'}} />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Foundation</p>
            <h2>Start here.</h2>
            <p>Follow the sequence below. Each section builds on the previous one to give you a solid baseline in crypto.</p>
          </div>
        </section>

        {/* Beginner Path Grid */}
        <section className="programs">
          <div className="section-heading">
            <p className="eyebrow">Curriculum</p>
            <h2>Beginner Path.</h2>
          </div>
          <div className="program-grid">
            {lessons.map((l, i) => (
              <div key={i} className={`program ${i % 3 === 0 ? 'program-dark' : i % 3 === 1 ? 'program-yellow' : 'program-paper'}`}>
                <span className="program-no">0{i+1}</span>
                <div>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
                <button onClick={() => alert('Lesson content coming soon!')} className="round-link" style={{alignSelf: 'flex-start', marginTop: '20px', border: 'none', cursor: 'pointer', background: i % 3 === 0 ? 'var(--acid)' : 'var(--ink)', color: i % 3 === 0 ? 'var(--ink)' : 'white'}}>
                  <span>Read Lesson</span><b style={{background: i % 3 === 0 ? 'var(--ink)' : 'var(--acid)', color: i % 3 === 0 ? 'white' : 'var(--ink)'}}>→</b>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mistakes & Tools */}
        <section className="notes-section" style={{borderTop: '1px solid var(--line)', background: 'var(--ink)', color: 'white'}}>
          <div className="notes-top">
            <div>
              <p className="eyebrow" style={{color: 'white'}}>Common Pitfalls</p>
              <h2 style={{color: 'white'}}>Mistakes to avoid.</h2>
            </div>
          </div>
          <div className="notes-grid" style={{borderColor: 'white'}}>
            {mistakes.map((m, i) => (
              <div key={i} className="note" style={{borderColor: 'var(--line)', border: '1px solid rgba(255,255,255,0.2)', margin: '-1px 0 0 -1px'}}>
                <span style={{color: 'var(--orange)'}}>Warning / {String(i+1).padStart(2, '0')}</span>
                <h3 style={{color: 'white'}}>{m.title}</h3>
                <p style={{color: 'white'}}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="programs" style={{background: 'var(--paper)'}}>
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Recommended<br />Tools.</h2>
          </div>
          <div className="program-grid">
            {tools.map((t, i) => (
              <div key={i} className="program" style={{border: '1px solid var(--ink)'}}>
                <span className="program-no">TOOL / {String(i+1).padStart(2, '0')}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <LandingFooter />
    </>
  );
}
