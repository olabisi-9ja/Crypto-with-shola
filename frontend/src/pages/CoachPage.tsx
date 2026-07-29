import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { coaches } from '../lib/coaches';

export function CoachPage() {
  const { id } = useParams<{ id: string }>();
  const coach = coaches.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!coach) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--paper)'}}>
        <LandingNavbar />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--ink)'}}>Coach Not Found</h1>
          <Link to="/" className="round-link" style={{marginTop: '20px', width: 'fit-content'}}><span>Return Home</span><b>→</b></Link>
        </div>
        <LandingFooter />
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--paper)'}}>
      <LandingNavbar />
      
      <main style={{flex: 1, padding: '10vw 6vw'}}>
        <Link to="/" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--ink)', fontWeight: 'bold', marginBottom: '40px', fontSize: '1.1rem'}} className="hover-orange">
          <ArrowLeft size={24} /> Back to Home
        </Link>

        <div style={{display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '8vw', alignItems: 'start'}}>
          <div style={{position: 'sticky', top: '120px'}}>
            <img src={coach.image} alt={coach.name} style={{width: '100%', borderRadius: '12px', border: '2px solid var(--ink)', objectFit: 'cover', aspectRatio: '4/5'}} />
            <div style={{marginTop: '20px', display: 'flex', gap: '15px'}}>
              <a href={coach.socials.twitter} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--ink)', color: 'white', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', flex: 1, justifyContent: 'center'}} className="hover-opacity-8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> Twitter
              </a>
              {coach.socials.telegram && (
                <a href={coach.socials.telegram} target="_blank" rel="noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--ink)', color: 'white', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', flex: 1, justifyContent: 'center'}} className="hover-opacity-8">
                  <Send size={20} /> Telegram
                </a>
              )}
            </div>
          </div>

          <div>
            <h1 style={{fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--ink)', margin: '0 0 10px 0', lineHeight: 1, fontFamily: 'var(--display)'}}>{coach.name}</h1>
            <p style={{fontSize: '1.5rem', color: 'var(--orange)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 40px 0'}}>{coach.title}</p>
            
            <div style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--ink)', maxWidth: '800px'}}>
              {coach.bio.split('\n').map((paragraph, idx) => (
                <p key={idx} style={{marginBottom: '20px'}}>{paragraph}</p>
              ))}
            </div>

            <div style={{marginTop: '60px', padding: '40px', background: 'var(--acid)', border: '2px solid var(--ink)', borderRadius: '12px'}}>
              <h2 style={{margin: '0 0 20px 0', fontSize: '2rem'}}>Want to learn directly from {coach.name}?</h2>
              <p style={{fontSize: '1.1rem', marginBottom: '30px'}}>Join our VIP community to get direct access to daily signals, live sessions, and personalized mentorship.</p>
              <Link to="/membership" className="round-link" style={{width: 'fit-content'}}><span>Join VIP</span><b>→</b></Link>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />

      <style>{`
        .hover-orange:hover { color: var(--orange) !important; }
        .hover-opacity-8:hover { opacity: 0.8; }
        @media (max-width: 768px) {
          main > div {
            grid-template-columns: 1fr !important;
          }
          main > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
