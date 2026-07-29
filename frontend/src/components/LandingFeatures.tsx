import React from 'react';
import { Link } from 'react-router-dom';
import { Send, PlayCircle, TrendingUp } from 'lucide-react';

export function LandingFeatures() {
  return (
    <>
      {/* Merged: Follow the Process */}
      <section className="programs" style={{background: 'var(--paper)', borderBottom: '1px solid var(--ink)'}}>
        <div className="section-heading" style={{display: 'block', marginBottom: '60px'}}>
          <p className="eyebrow" style={{color: 'var(--orange)'}}>Follow the Process</p>
          <div style={{maxWidth: '800px', marginTop: '20px'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1'}}>If you are new to crypto, we advise you start learning everything on this site and our Telegram channel...</h2>
            <p style={{marginTop: '20px', fontWeight: 'bold', fontSize: '1.1rem'}}>So at this right here, watch the short guide keep on going with full, take the classes with follow the process.</p>
          </div>
        </div>
        <div className="program-grid">
          <div className="program" style={{background: 'white', border: '1px solid var(--ink)', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--ink)', background: 'var(--ink)'}}>
              <Send size={80} color="var(--orange)" strokeWidth={1.5} />
            </div>
            <div style={{padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <h3 style={{color: 'var(--orange)', marginBottom: '15px', fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', lineHeight: '1.1'}}>Telegram Live Trainings</h3>
                <p style={{fontSize: '1rem', maxWidth: '100%'}}>Daily Market update signals on your Telegram</p>
              </div>
              <a href="https://t.me/yourtelegramchannel" className="round-link" style={{marginTop: '30px', width: 'fit-content'}}><span>Join Channel</span><b>→</b></a>
            </div>
          </div>
          <div className="program" style={{background: 'white', border: '1px solid var(--ink)', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--ink)', background: 'var(--acid)'}}>
              <PlayCircle size={80} color="var(--orange)" strokeWidth={1.5} />
            </div>
            <div style={{padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <h3 style={{color: 'var(--orange)', marginBottom: '15px', fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', lineHeight: '1.1'}}>Live Training Recordings</h3>
                <p style={{fontSize: '1rem', maxWidth: '100%'}}>Previous learning recordings so that newbies to get a quick update</p>
              </div>
              <Link to="/learn" className="round-link" style={{marginTop: '30px', width: 'fit-content'}}><span>Watch Now</span><b>→</b></Link>
            </div>
          </div>
          <div className="program" style={{background: 'white', border: '1px solid var(--ink)', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--ink)', background: '#ded6c5'}}>
              <TrendingUp size={80} color="var(--orange)" strokeWidth={1.5} />
            </div>
            <div style={{padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <h3 style={{color: 'var(--orange)', marginBottom: '15px', fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', lineHeight: '1.1'}}>Daily Signals</h3>
                <p style={{fontSize: '1rem', maxWidth: '100%'}}>Join the VIP signaling room to 10x your capital</p>
              </div>
              <a href="https://t.me/yourtelegramchannel" className="round-link" style={{marginTop: '30px', width: 'fit-content'}}><span>Join Group</span><b>→</b></a>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Features */}
      <section className="programs" aria-labelledby="programs-heading">
        <div className="section-heading">
          <p className="eyebrow">Choose your next move</p>
          <h2 id="programs-heading">Built for the<br />real world.</h2>
        </div>
        <div className="program-grid">
          <Link className="program program-dark" to="/membership">
            <span className="program-no">01</span>
            <div>
              <p className="program-kicker">Free & Premium</p>
              <h3>Trading Signals<br /><i>& Tutorials.</i></h3>
              <p>Get daily trading signals and step-by-step app tutorials. Learn how to place trades, manage risk, and understand basic market strategies to grow your portfolio.</p>
            </div>
            <span className="program-arrow">↗</span>
          </Link>
          <Link className="program program-yellow" to="/contact">
            <span className="program-no">02</span>
            <div>
              <p className="program-kicker">Telegram Community</p>
              <h3>Mindset &<br /><i>Motivation.</i></h3>
              <p>Shola’s background as a life coach shines here. Master your mindset, stay motivated, and focus on leveling up your life financially with 109K+ members.</p>
            </div>
            <span className="program-arrow">↗</span>
          </Link>
          <Link className="program program-paper" to="/learn">
            <span className="program-no">03</span>
            <div>
              <p className="program-kicker">Member Area</p>
              <h3>Broader Education<br /><i>& Security.</i></h3>
              <p>Moving beyond basic trading, we touch on DeFi, NFTs, and essential security practices. Navigate the evolving Nigerian crypto space safely.</p>
            </div>
            <span className="program-arrow">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
