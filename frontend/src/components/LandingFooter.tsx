import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer style={{
      background: 'var(--ink)', 
      color: 'white', 
      padding: '80px 6vw 40px',
      fontFamily: 'var(--sans)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '40px',
        marginBottom: '60px'
      }}>
        {/* Brand Section */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Link to="/" style={{fontFamily: 'var(--display)', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--orange)', textDecoration: 'none', lineHeight: '1'}}>
            CWS.
          </Link>
          <p style={{color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem', maxWidth: '300px'}}>
            Simplifying your journey through the crypto noise. Expert guidance, daily signals, and a community built for the real world.
          </p>
          <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
            <a href="https://twitter.com/cryptowithshola" target="_blank" rel="noreferrer" style={{color: 'white', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://t.me/yourtelegramchannel" target="_blank" rel="noreferrer" style={{color: 'white', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">
              <Send size={24} />
            </a>
            <a href="mailto:cryptowithshola@gmail.com" style={{color: 'white', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 style={{fontSize: '1rem', marginBottom: '20px', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)'}}>Explore</h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <li><Link to="/learn" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Learn Crypto</Link></li>
            <li><Link to="/membership" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Membership Plans</Link></li>
            <li><Link to="/proof" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Proof of Results</Link></li>
            <li><Link to="/blog" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Our Blog</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 style={{fontSize: '1rem', marginBottom: '20px', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)'}}>Support</h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <li><Link to="/faq" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">FAQs</Link></li>
            <li><Link to="/contact" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Contact Us</Link></li>
            <li><a href="https://t.me/yourtelegramchannel" target="_blank" rel="noreferrer" style={{color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'all 0.2s'}} className="hover-orange">Join Telegram</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{fontSize: '1rem', marginBottom: '20px', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--orange)'}}>Get in Touch</h4>
          <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontSize: '0.95rem'}}>
            Have questions? Reach out directly.
          </p>
          <a href="mailto:cryptowithshola@gmail.com" style={{color: 'white', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'underline', transition: 'all 0.2s'}} className="hover-orange">
            cryptowithshola@gmail.com
          </a>
        </div>
      </div>

      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '20px',
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        paddingTop: '30px',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.5)'
      }}>
        <div>© {new Date().getFullYear()} Crypto With Shola. All rights reserved.</div>
        <div style={{display: 'flex', gap: '20px'}}>
          <span style={{cursor: 'pointer', transition: 'all 0.2s'}} className="hover-orange">Privacy Policy</span>
          <span style={{cursor: 'pointer', transition: 'all 0.2s'}} className="hover-orange">Terms of Service</span>
          <span style={{cursor: 'pointer', transition: 'all 0.2s'}} className="hover-orange">Disclaimer</span>
        </div>
      </div>
      
      <style>{`
        .hover-orange:hover { opacity: 1 !important; color: var(--orange) !important; text-decoration: none !important; }
      `}</style>
    </footer>
  );
}
