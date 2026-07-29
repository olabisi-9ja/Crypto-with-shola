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
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" to="/contact">Join the community <span>↗</span></Link>
    </header>
  );
}
