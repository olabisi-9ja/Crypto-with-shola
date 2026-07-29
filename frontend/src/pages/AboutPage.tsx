import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { images } from '../lib/images';

export function AboutPage() {
  const values = [
    {
      kicker: "Transparency First",
      title: "Real verified wins.",
      desc: "We show verified wins and transparent losses. No edited screenshots or hidden logs."
    },
    {
      kicker: "Education Over Hype",
      title: "Independent traders.",
      desc: "Our primary goal is to build confident traders, not dependent followers."
    },
    {
      kicker: "Discipline Over Luck",
      title: "Consistency & process.",
      desc: "Long-term profitability in crypto comes from consistency and process, not luck."
    },
    {
      kicker: "Real Identity",
      title: "Shola stands behind.",
      desc: "No anonymous guru accounts. Shola stands behind every lesson and trade setup."
    }
  ];

  const milestones = [
    { year: "2019", text: "Started sharing trading insights publicly, focusing on risk management and discipline." },
    { year: "2021", text: "Launched the public Telegram community, growing past 1,000 active members in under a year." },
    { year: "2024", text: "Expanded to premium mentorship, live trading, and a full-time support team." }
  ];

  return (
    <>
      <LandingNavbar />
      
      <main id="main">
        {/* Header */}
        <section className="intro-band">
          <p className="eyebrow">About Shola</p>
          <h2>Real Name.<br /><span>Real Story.</span></h2>
          <p className="band-copy">Shola started in crypto not as an expert, but as someone frustrated by the noise. He built Crypto With Shola to teach people how to trade with discipline — not hype.</p>
        </section>

        {/* Feature section */}
        <section className="portrait-feature" style={{background: 'var(--acid)'}}>
          <div className="feature-image">
            <img src={images.sholaSuit} alt="Shola" />
            <span className="orbit orbit-one">ENGINEER</span>
            <span className="orbit orbit-two">COACH</span>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Background</p>
            <h2>The right habits.</h2>
            <p>Before crypto education, Shola worked in traditional finance and technology. The transition taught him that success in trading is less about finding the perfect strategy and more about building the right habits.</p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="programs">
          <div className="section-heading">
            <p className="eyebrow">Core Values</p>
            <h2>What we<br />stand for.</h2>
          </div>
          <div className="program-grid">
            {values.map((v, i) => (
              <div key={i} className={`program ${i % 3 === 0 ? 'program-dark' : i % 3 === 1 ? 'program-yellow' : 'program-paper'}`}>
                <span className="program-no">0{i+1}</span>
                <div>
                  <p className="program-kicker">{v.kicker}</p>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Credibility Timeline */}
        <section className="notes-section" style={{borderTop: '1px solid var(--line)'}}>
          <div className="notes-top">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2>Credibility<br />Timeline.</h2>
            </div>
          </div>
          <div className="notes-grid">
            {milestones.map((m, i) => (
              <div key={i} className={`note ${i % 2 !== 0 ? 'note-invert' : ''}`}>
                <span>Milestone / {m.year}</span>
                <h3 style={{fontSize: '5rem', marginTop: '30px'}}>{m.year}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="final-home" style={{background: 'var(--ink)', color: 'white'}}>
          <p className="eyebrow" style={{color: 'white'}}>Why he teaches</p>
          <h2 style={{color: 'white'}}>Discipline &<br />Education.</h2>
          <p style={{maxWidth: '400px', fontSize: '17px', marginBottom: '40px', lineHeight: '1.5'}}>The crypto space is full of promises and short on structure. Shola teaches because he believes discipline and education are the only sustainable advantages.</p>
          <a className="round-link light" href="/contact" style={{background: 'var(--acid)', color: 'var(--ink)'}}><span>Join the community</span><b style={{background: 'var(--ink)', color: 'white'}}>→</b></a>
          <div className="final-star" style={{color: 'var(--acid)'}}>✦</div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
