import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../lib/images';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = reverse ? 40 : 100 + Math.random() * 50;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span style={{ color: 'var(--orange)', display: 'inline-block', minWidth: '6.5em', textAlign: 'left' }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', fontWeight: 'normal' }}>|</span>
    </span>
  );
};

export function LandingHero() {
  return (
    <section className="hero-home">
      <div className="hero-copy">
        <div className="hero-header-mobile">
          <p className="eyebrow reveal-1">Live Trading & Mentorship</p>
          <h1 className="reveal-1">
            Simplifying<br />
            <Typewriter words={["Altcoins", "Stablecoins", "Tokens", "Crypto"]} /> With <em>Shola.</em>
          </h1>
        </div>
        <div className="hero-body-mobile">
          <p className="hero-intro reveal-2" style={{fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--orange)', marginBottom: '10px', marginTop: '20px'}}>
            Your journey to profitable trading starts here. Let's grow and learn together.
          </p>
          <p className="hero-intro reveal-2">Level up financially with simple, practical crypto basics and trading tutorials. Join a massive active community led by Shola, a certified life coach turned crypto mentor.</p>
          <div className="hero-actions reveal-3">
            <a className="round-link" href="https://t.me/yourtelegramchannel" target="_blank" rel="noopener noreferrer">
              <span>Join Our Free Telegram</span><b>→</b>
            </a>
            <Link className="text-link" to="/membership">See how membership works <span>↗</span></Link>
          </div>
        </div>
      </div>
      <div className="hero-visual reveal-2" style={{position: 'relative'}}>
        <div className="sun" style={{zIndex: 10}}>₿</div>
        <figure style={{zIndex: 2}}>
          <img src="/images/new_media/imgi_2_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9QbDZpNDVwWHpwM3VqRkxibVpCMm1JTEU0WHNJT2I4U3pCaVNVcHJDNkI4L3JzOmZvcmNlOjYzMTo3MDA6MS9nOm5vd2U6NDk1OjQ4NS9jOjYzMTo3MDAvYUhSMGNITTZMeT.webp" alt="Shola, founder of Crypto With Shola" style={{borderRadius: '0', border: '2px solid var(--ink)'}} />
        </figure>
        
        {/* Unclipped caption */}
        <div style={{position: 'absolute', bottom: '60px', left: '-20px', zIndex: 6, background: 'var(--ink)', color: 'white', padding: '6px 12px', fontWeight: 'bold', fontSize: '12px', letterSpacing: '0.08em', maxWidth: '200px', lineHeight: '1.4'}}>
          SHOLA / YOUR GUIDE THROUGH THE NOISE
        </div>

        {/* Avatars grouped and styled */}
        <div style={{position: 'absolute', bottom: '-40px', right: '-40px', zIndex: 5, display: 'flex'}}>
          <img src="/images/new_media/imgi_3_aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzA4YTEwNDRiLTc4NjAtNGQ0Yi04OTA1LTU4ZWJkYzM2ZGZmOC8xNzE3NDkyMjQ4X2wzanRZSTUyNDAweDQwMC5qcGVn.webp" alt="Cyrus" style={{width: '130px', height: '130px', border: '3px solid var(--ink)', background: 'var(--paper)', borderRadius: '50%', objectFit: 'cover', transform: 'translateX(25px)'}} />
          <img src="/images/new_media/imgi_4_aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzA4YTEwNDRiLTc4NjAtNGQ0Yi04OTA1LTU4ZWJkYzM2ZGZmOC8xNzE3NDkyMjcwX3BYUTY4U09WNDAweDQwMC5qcGVn.webp" alt="Louis" style={{width: '130px', height: '130px', border: '3px solid var(--ink)', background: 'var(--paper)', borderRadius: '50%', objectFit: 'cover'}} />
        </div>

        <p className="scribble reveal-3" style={{top: '-40px', right: '-20px'}}>No hype<br />just habits <span>↘</span></p>
      </div>
      <div className="hero-side-note reveal-3">ACTIVE SINCE 2022<br />109K+ MEMBERS</div>
    </section>
  );
}
