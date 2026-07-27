import React from 'react';
import { ArrowLeft, Cpu, ShieldAlert, Coins, Share2, Layers } from 'lucide-react';
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Back to main Nav */}
      <nav className="w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-amber-500 font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to main site
          </Link>
          <a href="/contact" className="px-5 py-2 rounded-full border border-zinc-800 text-xs font-bold uppercase tracking-wider text-amber-500 hover:bg-zinc-900 transition-colors">
            Contact Web3 Team
          </a>
        </div>
      </nav>

      {/* Massive Brutalist Header */}
      <header className="relative w-full pt-32 pb-24 border-b border-zinc-900 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-amber-500 font-black tracking-widest text-xs uppercase mb-3 block">
            Specialized Development
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none text-zinc-50">
            WEB3 FOCUS
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Custom smart contract engineering, enterprise blockchain integrations, and tokenomics consulting led by the Shola network.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-900 p-8 rounded-3xl text-left hover:border-amber-500/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-amber-500">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Grid */}
      <section className="py-24 border-b border-zinc-900 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center md:text-left mb-12 tracking-tight">For Our Customers</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {enterpriseGrid.map((item, i) => (
              <div key={i} className="lg:col-span-5 bg-zinc-900/30 border border-zinc-900 p-8 rounded-3xl text-left">
                <h4 className="font-bold text-lg mb-2 text-zinc-100">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="lg:col-span-2 bg-gradient-to-br from-amber-600 to-amber-800 p-8 rounded-3xl flex flex-col justify-between text-zinc-950 font-black text-2xl tracking-tighter uppercase text-left min-h-[200px]">
              <Cpu className="w-8 h-8 text-zinc-950" />
              <div>
                <span>Explore</span><br />
                <span>Our</span><br />
                <span>Case</span><br />
                <span>Studies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-12 border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 font-black text-zinc-600 tracking-widest text-sm md:text-base">
          <span>AAVE</span>
          <span>POLYGON</span>
          <span>CHAINLINK</span>
          <span>OPTIMISM</span>
          <span>ARBITRUM</span>
        </div>
      </section>

      {/* Article Feed */}
      <section className="py-24 bg-zinc-950 text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 tracking-tight text-center">Technical Publications</h2>
          
          <div className="space-y-8">
            {articles.map((art, i) => (
              <article key={i} className="border border-zinc-900 bg-zinc-900/20 p-8 rounded-3xl hover:border-amber-500/20 transition-colors flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div>
                  <div className="text-xs text-amber-500 font-bold mb-2">Technical · {art.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">{art.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{art.desc}</p>
                </div>
                <button onClick={() => alert('Article loading...')} className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-amber-500 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-zinc-800 shrink-0">
                  Read Article
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-medium">
          <div className="flex items-center gap-2 text-zinc-300 font-bold">
            <span className="text-xl">🐺</span>
            <span>Web3 Focus</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300">X (Twitter)</a>
            <a href="#" className="hover:text-zinc-300">GitHub</a>
            <a href="#" className="hover:text-zinc-300">Discord</a>
          </div>
          <div>
            © {new Date().getFullYear()} Web3 Focus. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
