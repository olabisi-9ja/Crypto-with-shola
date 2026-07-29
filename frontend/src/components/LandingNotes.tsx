import React from 'react';
import { Link } from 'react-router-dom';

export function LandingNotes() {
  return (
    <>
      {/* Merged: Join Us Now */}
      <section className="notes-section" style={{background: 'var(--ink)', color: 'white'}}>
        <div className="notes-top" style={{borderBottom: 'none'}}>
          <div style={{width: '100%'}}>
            <p className="eyebrow" style={{color: 'var(--acid)'}}>Join Us Now</p>
            <h2 style={{color: 'white', marginBottom: '30px'}}>A live session... personal growth. Together we can create a space where everyone has the tools and knowledge to thrive making Crypto.</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center'}}>
              <a href="https://t.me/yourtelegramchannel" className="round-link light" style={{background: 'var(--orange)', color: 'var(--ink)', border: 'none'}}><span>Join Us</span><b>→</b></a>
            </div>
          </div>
        </div>
      </section>

      <section className="notes-section">
        <div className="notes-top">
          <div>
            <p className="eyebrow">From the notebook</p>
            <h2>Stay curious.</h2>
          </div>
          <Link className="text-link" to="/blog">All notes <span>↗</span></Link>
        </div>
        <div className="notes-grid">
          <Link to="/blog/trade-not-taken" className="note">
            <span>01 / Psychology</span>
            <h3>The trade you don't take can be the best one.</h3>
            <p>A note on why patience protects your capital, and trading less can make you more.</p>
            <b>Read note →</b>
          </Link>
          <Link to="/blog/risk-rules" className="note note-invert">
            <span>02 / Trading Strategy</span>
            <h3>Before the chart: set up your risk rules.</h3>
            <p>A practical framework for your next setup before you even look at the price action.</p>
            <b>Read note →</b>
          </Link>
          <Link to="/blog/market-cycles" className="note">
            <span>03 / Market Analysis</span>
            <h3>How to think in cycles, not headlines.</h3>
            <p>Viewing the market from a higher timeframe to eliminate the daily noise and anxiety.</p>
            <b>Read note →</b>
          </Link>
        </div>
      </section>
    </>
  );
}
