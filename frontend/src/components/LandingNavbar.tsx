import React from 'react';
import { Link } from 'react-router-dom';

export function LandingNavbar() {
  return (
    <header className="home-header">
      <Link to="/" className="wordmark cws-logo" aria-label="Crypto With Shola home">CWS</Link>
      <nav aria-label="Main navigation">
        <Link to="/about">About</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/web3" className="relative group overflow-hidden bg-[#151515] text-[#e8ff40] px-3 py-1 rounded-full text-xs font-bold font-mono border border-[#e8ff40]/30 hover:border-[#e8ff40] transition-colors" style={{ marginLeft: '10px' }}>
          <span className="relative z-10 flex items-center gap-1">WEB3 PORTAL <span className="text-[#ff0055]">●</span></span>
          <div className="absolute inset-0 bg-[#e8ff40] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          <span className="absolute inset-0 z-10 flex items-center justify-center gap-1 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">WEB3 PORTAL <span className="text-[#ff0055]">●</span></span>
        </Link>
      </nav>
      <Link className="header-cta" to="/contact">Join the community <span>↗</span></Link>
    </header>
  );
}
