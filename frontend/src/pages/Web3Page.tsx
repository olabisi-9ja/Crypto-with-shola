import React from 'react';
import { ArrowLeft, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Web3Page() {
  const services = [
    { title: "Smart Contract Audits", desc: "Deep-level security analysis for Solidity and Rust based contracts. We ensure your protocols are safe, gas-optimized, and free of vulnerabilities." },
    { title: "Tokenomics Design", desc: "Mathematical modelling for token launch frameworks. We design sustainable supply mechanisms that prevent inflation spirals." },
    { title: "DeFi Integrations", desc: "Connect your protocol to decentralized oracle feeds, multi-chain bridges, automated market makers (AMMs), and liquidity pools." }
  ];

  const enterpriseGrid = [
    { title: "Enterprise Integrations", desc: "Bridging legacy database architectures with secure EVM networks. Custom API layers and gas-less transaction relays." },
    { title: "Custom Marketplaces", desc: "High-performance smart contract marketplaces featuring custom royalties, lazy-minting, and whitelist logic." }
  ];

  const articles = [
    { date: "Sep 12", title: "Why Decentralized Identity is the Future of Web3", desc: "A deep dive into zero-knowledge proofs and how they reshape privacy on public ledgers." },
    { date: "Aug 28", title: "Streamlining Your Organization: Top 10 DeFi Implementations", desc: "How traditional treasuries are utilizing stablecoin yields to maximize capital efficiency." },
    { date: "Aug 05", title: "How to Automate Smart Contract Testing", desc: "Using Foundry and Hardhat to create robust integration testing pipelines." }
  ];

  return (
    <>
      <nav style={{position: 'fixed', top: 0, width: '100%', background: 'var(--ink)', zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" style={{color: 'white', textDecoration: 'none', font: '13px var(--mono)', display: 'flex', alignItems: 'center', gap: '10px'}}>
          <ArrowLeft size={16} /> BACK TO MAIN SITE
        </Link>
        <Link to="/contact" style={{color: 'var(--acid)', textDecoration: 'none', font: '13px var(--mono)', textTransform: 'uppercase', border: '1px solid var(--acid)', padding: '8px 16px', borderRadius: '50px'}}>
          Contact Web3 Team
        </Link>
      </nav>

      <main id="main" style={{paddingTop: '60px'}}>
        {/* Header */}
        <section className="intro-band" style={{background: 'var(--ink)', color: 'white'}}>
          <p className="eyebrow" style={{color: 'var(--acid)'}}>Specialized Development</p>
          <h2 style={{color: 'white'}}>WEB3<br /><span style={{color: 'var(--paper)'}}>FOCUS.</span></h2>
          <p className="band-copy">Custom smart contract engineering, enterprise blockchain integrations, and tokenomics consulting led by the Shola network.</p>
        </section>

        {/* Services Section */}
        <section className="programs" style={{background: 'var(--paper)'}}>
          <div className="section-heading">
            <p className="eyebrow">Expertise</p>
            <h2>Services.</h2>
          </div>
          <div className="program-grid">
            {services.map((s, i) => (
              <div key={i} className="program" style={{border: '1px solid var(--ink)', background: 'white'}}>
                <span className="program-no">0{i+1}</span>
                <div style={{marginTop: '40px'}}>
                  <h3 style={{fontSize: 'clamp(1.5rem, 2vw, 2rem)', marginBottom: '15px'}}>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Grid */}
        <section className="notes-section" style={{borderTop: '1px solid var(--line)', background: 'var(--ink)', color: 'white'}}>
          <div className="notes-top">
            <div>
              <p className="eyebrow" style={{color: 'var(--orange)'}}>For Our Customers</p>
              <h2 style={{color: 'white'}}>Enterprise<br />Solutions.</h2>
            </div>
          </div>
          <div className="notes-grid" style={{borderColor: 'white'}}>
            {enterpriseGrid.map((item, i) => (
              <div key={i} className="note" style={{borderColor: 'var(--line)', border: '1px solid rgba(255,255,255,0.2)', margin: '-1px 0 0 -1px'}}>
                <span style={{color: 'var(--acid)'}}>Solution / {String(i+1).padStart(2, '0')}</span>
                <h3 style={{color: 'white'}}>{item.title}</h3>
                <p style={{color: 'white'}}>{item.desc}</p>
              </div>
            ))}
            <div className="note" style={{borderColor: 'var(--line)', border: '1px solid rgba(255,255,255,0.2)', margin: '-1px 0 0 -1px', background: 'var(--orange)', color: 'var(--ink)'}}>
              <span style={{color: 'var(--ink)'}}>Case Studies</span>
              <h3 style={{color: 'var(--ink)'}}>Explore<br />Our<br />Work</h3>
              <Cpu size={32} style={{marginTop: '20px'}} />
            </div>
          </div>
        </section>

        {/* Partners / Logos */}
        <section className="marquee-wrap" style={{background: 'var(--acid)', padding: '20px 0', borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)'}}>
          <div className="marquee" style={{color: 'var(--ink)'}}>
            <span>AAVE</span> ✦ <span>POLYGON</span> ✦ <span>CHAINLINK</span> ✦ <span>OPTIMISM</span> ✦ <span>ARBITRUM</span> ✦
            <span>AAVE</span> ✦ <span>POLYGON</span> ✦ <span>CHAINLINK</span> ✦ <span>OPTIMISM</span> ✦ <span>ARBITRUM</span> ✦
          </div>
        </section>

        {/* Article Feed */}
        <section className="programs" style={{background: 'var(--paper)'}}>
          <div className="section-heading">
            <p className="eyebrow">Publications</p>
            <h2>Technical<br />Articles.</h2>
          </div>
          <div className="program-grid">
            {articles.map((art, i) => (
              <div key={i} className="program" style={{border: '1px solid var(--ink)', background: 'transparent'}}>
                <span className="program-no">{art.date}</span>
                <div style={{marginTop: '40px'}}>
                  <h3 style={{fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)', marginBottom: '15px'}}>{art.title}</h3>
                  <p>{art.desc}</p>
                </div>
                <button onClick={() => alert('Article loading...')} className="round-link" style={{alignSelf: 'flex-start', marginTop: '20px', border: 'none', cursor: 'pointer', background: 'var(--ink)', color: 'white'}}>
                  <span>Read</span><b style={{background: 'var(--acid)', color: 'var(--ink)'}}>→</b>
                </button>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{background: 'var(--ink)', color: 'white', padding: '40px 6vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap', gap: '20px'}}>
        <div style={{font: '20px var(--display)', fontWeight: 900}}>Web3 Focus</div>
        <div style={{display: 'flex', gap: '20px', font: '13px var(--mono)'}}>
          <a href="#" style={{color: 'white', textDecoration: 'none'}}>X (Twitter)</a>
          <a href="#" style={{color: 'white', textDecoration: 'none'}}>GitHub</a>
          <a href="#" style={{color: 'white', textDecoration: 'none'}}>Discord</a>
        </div>
        <div style={{font: '13px var(--mono)', opacity: 0.5}}>
          © {new Date().getFullYear()} Web3 Focus. All rights reserved.
        </div>
      </footer>
    </>
  );
}
