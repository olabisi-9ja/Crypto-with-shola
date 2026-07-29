import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingMarquee } from '../components/LandingMarquee';
import { LandingHero } from '../components/LandingHero';
import { LandingIntroBand } from '../components/LandingIntroBand';
import { LandingFeatures } from '../components/LandingFeatures';
import { LandingAbout } from '../components/LandingAbout';
import { LandingNotes } from '../components/LandingNotes';
import { LandingTestimonials } from '../components/LandingTestimonials';
import { LandingCoaches } from '../components/LandingCoaches';
import { LandingFooter } from '../components/LandingFooter';

export function LandingPage() {
  return (
    <>
      <LandingMarquee />
      <LandingNavbar />
      <main id="main">
        <LandingHero />
        <LandingIntroBand />
        <LandingFeatures />
        <LandingAbout />
        <LandingNotes />
        <LandingTestimonials />
        <LandingCoaches />
        <section className="final-home" style={{background: 'var(--orange)', color: 'var(--ink)'}}>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px'}}>
            <div style={{flex: 1, minWidth: '300px'}}>
              <h2 style={{color: 'var(--ink)', fontSize: 'clamp(2rem, 4vw, 3rem)'}}>Ready for Your Crypto Journey?</h2>
              <p style={{fontWeight: 'bold', marginBottom: '20px'}}>Join our Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} style={{display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px'}}>
                <input type="text" placeholder="Name" style={{padding: '15px', border: '2px solid var(--ink)', background: 'white', color: 'var(--ink)'}} />
                <input type="email" placeholder="Email" style={{padding: '15px', border: '2px solid var(--ink)', background: 'white', color: 'var(--ink)'}} />
                <button type="submit" className="round-link" style={{background: 'var(--ink)', color: 'white', border: 'none', width: 'fit-content'}}><span>Join Now</span><b>→</b></button>
              </form>
            </div>
          </div>
          <div className="final-star" style={{color: 'var(--ink)'}}>✦</div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}
