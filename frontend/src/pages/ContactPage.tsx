import React, { useState } from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  return (
    <>
      <LandingNavbar />

      <main id="main">
        {/* Header */}
        <section className="intro-band" style={{borderBottom: '1px solid var(--line)'}}>
          <p className="eyebrow">Contact</p>
          <h2>Get In<br /><span>Touch.</span></h2>
          <p className="band-copy">Have questions about our signals, structured academy courses, or 1-on-1 mentorship programs? Contact us directly.</p>
        </section>

        {/* Layout */}
        <section className="portrait-feature" style={{background: 'var(--acid)', padding: '0', alignItems: 'stretch'}}>
          
          <div className="feature-copy" style={{padding: '7vw 6vw', borderRight: '1px solid var(--ink)', background: 'var(--ink)', color: 'white'}}>
            <p className="eyebrow" style={{color: 'white'}}>Direct Channels</p>
            <h2 style={{color: 'white'}}>We respond<br />fastest to<br />Telegram.</h2>
            
            <div style={{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <a href="https://t.me/cryptowithshola" target="_blank" rel="noreferrer" style={{display: 'block', padding: '24px', border: '1px solid var(--line)', color: 'white', textDecoration: 'none'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px'}}>
                  <MessageCircle size={24} color="var(--orange)" />
                  <h3 style={{fontSize: '1.2rem', margin: 0}}>Telegram Community</h3>
                </div>
                <p style={{fontSize: '14px', margin: 0, opacity: 0.8}}>Join our main public channel containing free market updates.</p>
              </a>

              <div style={{display: 'block', padding: '24px', border: '1px solid var(--line)', color: 'white'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px'}}>
                  <Mail size={24} color="var(--orange)" />
                  <h3 style={{fontSize: '1.2rem', margin: 0}}>Support Email</h3>
                </div>
                <p style={{fontSize: '14px', margin: 0, opacity: 0.8}}>support@cryptowithshola.com</p>
                <p style={{fontSize: '11px', fontFamily: 'var(--mono)', marginTop: '10px', textTransform: 'uppercase', opacity: 0.5}}>General support replies take up to 24-48 business hours.</p>
              </div>
            </div>
          </div>

          <div className="feature-copy" style={{padding: '7vw 6vw', background: 'var(--paper)', color: 'var(--ink)'}}>
            <p className="eyebrow">Send a Message</p>
            <h2>Drop us<br />a line.</h2>
            
            <form onSubmit={handleSubmit} style={{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '25px'}}>
              <div>
                <label style={{display: 'block', font: '13px var(--mono)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 500}}>Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  style={{width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--ink)', font: '16px var(--sans)', outline: 'none'}}
                />
              </div>

              <div>
                <label style={{display: 'block', font: '13px var(--mono)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 500}}>Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  style={{width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--ink)', font: '16px var(--sans)', outline: 'none'}}
                />
              </div>

              <div>
                <label style={{display: 'block', font: '13px var(--mono)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 500}}>Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry..."
                  style={{width: '100%', padding: '16px', background: 'transparent', border: '1px solid var(--ink)', font: '16px var(--sans)', outline: 'none', resize: 'none'}}
                />
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className="round-link"
                style={{border: 'none', cursor: 'pointer', background: 'var(--ink)', color: 'white', padding: '10px 10px 10px 22px', alignSelf: 'flex-start'}}
              >
                <span>{submitted ? 'Sending...' : 'Send Message'}</span>
                <b style={{background: 'var(--acid)', color: 'var(--ink)'}}><Send size={16} /></b>
              </button>
            </form>
          </div>
          
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
