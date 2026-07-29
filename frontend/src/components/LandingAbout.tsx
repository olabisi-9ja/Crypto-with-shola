import React from 'react';
import { Link } from 'react-router-dom';

export function LandingAbout() {
  return (
    <section className="portrait-feature">
      <div className="feature-image">
        <img src="/images/new_media/imgi_21_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9uT0VEN2NJTVcxOGtCMGROQ1lHR1ZDZmlvM0I5Zy1hbVhDTUtUNzhEZ3BrL3JzOmZvcmNlOjk4NjoxMjg2OjEvZzpub3dlOjc2OjM1Mi9jOjk4NjoxMjg2L2FIUjBjSE02T.webp" alt="Shola" />
        <span className="orbit orbit-one">DISCIPLINE</span>
        <span className="orbit orbit-two">PATIENCE</span>
      </div>
      <div className="feature-copy">
        <p className="eyebrow" style={{color: 'var(--orange)'}}>About Shola</p>
        <h2>A guide,<br />not a guru.</h2>
        <p style={{fontWeight: 'bold'}}>
          Dedicated, astute financial enthusiast and driven business leader, Shola is a highly motivated and experienced personnel... with deep interest in Web3 technologies and its intricacies. Having lived in US and UK, Shola has had a significant impact on lives, especially in the crypto trading space. He sees an opportunity for individuals based in Africa to walk their focus into the Web3 world by learning the mark he has made in his career.
        </p>
        <p>Babatunde "Shola" Olusola is a chemical engineer turned certified life coach and crypto mentor. Leveraging his life coaching background, Shola combines inspirational motivation with practical crypto trading tutorials.</p>
        <p>He has built a 109K+ Telegram Community and has 394K+ X Followers, empowering young people to level up financially.</p>
        <Link className="text-link" to="/about">Learn More About Shola <span>↗</span></Link>
      </div>
    </section>
  );
}
