import React from 'react';
import { Link } from 'react-router-dom';
import { coaches } from '../lib/coaches';

export function LandingCoaches() {
  return (
    <section className="programs" style={{background: 'var(--acid)', color: 'var(--ink)'}}>
      <div className="section-heading" style={{borderRight: '1px solid var(--ink)', paddingRight: '40px'}}>
        <p className="eyebrow" style={{color: 'var(--ink)'}}>Meet Our Leading Crypto Mentor/Coaches</p>
        <h2 style={{color: 'var(--ink)'}}>Guidance from<br />the Best.</h2>
      </div>
      <div className="program-grid" style={{background: 'var(--acid)'}}>
        {coaches.map((c, i) => (
          <Link to={`/coach/${c.id}`} key={i} className="program" style={{background: 'var(--paper)', border: '1px solid var(--ink)', padding: '0', display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer'}}>
            <img 
              src={c.image} 
              alt={c.name} 
              style={{width: '100%', flex: 1, minHeight: '250px', objectFit: 'cover', borderBottom: '1px solid var(--ink)'}} 
            />
            <div style={{padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: 'var(--ink)'}}>{c.name}</h3>
              <div style={{marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <span style={{color: 'var(--orange)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase'}}>{c.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{width: '100%', textAlign: 'center', padding: '40px', borderTop: '1px solid var(--ink)', fontWeight: 'bold', fontSize: '1.2rem'}}>
        and over many more
      </div>
    </section>
  );
}
