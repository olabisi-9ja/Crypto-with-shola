import React from 'react';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Blocks, Gem, Lock, Users, Network, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { coaches } from '../lib/coaches';

const TickerTape = () => {
  const words = ["DECENTRALIZED FINANCE", "•", "YIELD FARMING", "•", "SMART CONTRACTS", "•", "TOKENOMICS", "•", "LIQUIDITY POOLS", "•", "ON-CHAIN ANALYSIS", "•", "AIRDROPS", "•", "WEB3 SECURITY", "•"];
  
  return (
    <div className="w-full bg-[#e8ff40] overflow-hidden py-4 border-y border-[#1a1a1a] relative z-20">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 px-4 items-center">
            {words.map((word, j) => (
              <span key={j} className="text-black font-black uppercase text-xl md:text-3xl tracking-widest" style={{fontFamily: 'var(--display)'}}>
                {word}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Web3Page() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const curriculum = [
    {
      title: "DeFi Architecture",
      desc: "Go beyond basic trading. Understand exactly how AMMs (Automated Market Makers), Liquidity Pools, and Decentralized Exchanges operate so you can front-run the market.",
      icon: <Network className="text-[#e8ff40]" size={32} />
    },
    {
      title: "Advanced Tokenomics",
      desc: "Learn to read the tape. We break down token distribution, vesting schedules, inflation mechanics, and utility models to help you spot rugs and identify true long-term gems.",
      icon: <Gem className="text-[#ff0055]" size={32} />
    },
    {
      title: "On-Chain Sleuthing",
      desc: "The blockchain doesn't lie. Master the art of tracking whale wallets, analyzing smart contract inflows, and reading Etherscan like a professional auditor.",
      icon: <Blocks className="text-white" size={32} />
    },
    {
      title: "Airdrop Strategies",
      desc: "Maximize your portfolio growth with zero initial capital. Get weekly action steps for interacting with testnets and unreleased protocols to position yourself for massive airdrops.",
      icon: <Zap className="text-[#e8ff40]" size={32} />
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#ff0055] selection:text-white" style={{fontFamily: 'var(--sans)'}}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference bg-black/10 backdrop-blur-md border-b border-[#1a1a1a]">
        <Link to="/" className="text-white hover:text-[#e8ff40] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold" style={{fontFamily: 'var(--mono)'}}>
          <ArrowLeft size={16} /> RETURN HOME
        </Link>
        <a href="#subscribe" className="text-black bg-[#e8ff40] px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-colors font-bold" style={{fontFamily: 'var(--mono)'}}>
          Secure Access
        </a>
      </nav>

      <main>
        {/* Old Sleek Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
          <motion.div 
            style={{ y: yHero }}
            className="px-6 md:px-12 max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center"
          >
            {/* Left Big Text */}
            <div className="w-full md:w-2/3 relative z-10">
              <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] font-black tracking-tighter uppercase" style={{fontFamily: 'var(--display)'}}>
                <span className="text-white">DEFI.</span><br />
                <i className="font-serif font-light lowercase text-[#a1a1aa] text-[12vw] md:text-[9vw] leading-[0.5] block -ml-4" style={{fontFamily: 'Georgia, serif', letterSpacing: '-0.05em'}}>master</i>
                <span className="text-[#e8ff40]">WEB3.</span><br />
                <span className="text-[#ff0055]">TOKENS.</span>
              </h1>
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/3 mt-12 md:mt-0 relative z-10 text-right md:text-left self-end">
              <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed">
                Welcome to the exclusive Web3 Portal. Get monthly insights, advanced strategies, and unfiltered access to the leading minds in the crypto space. <strong className="text-white font-medium">Cut through the noise.</strong>
              </p>
            </div>
          </motion.div>
          
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
        </section>

        {/* Scrolling Ticker */}
        <TickerTape />

        {/* CURRICULUM SECTION (Sleek minimalist style) */}
        <section className="py-32 px-6 md:px-12 relative z-10 bg-[#050505]">
          <div className="max-w-[1600px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6 uppercase tracking-tight text-[#e8ff40]" style={{fontFamily: 'var(--display)'}}>
                The Web3 <strong className="text-white font-black">Curriculum</strong>
              </h2>
              <p className="text-[#a1a1aa] max-w-3xl text-lg md:text-xl leading-relaxed">
                A structured, continuously updated library of masterclasses and alpha. We strip away the noise and teach you the exact frameworks institutional investors use to navigate the decentralized web.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculum.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 md:p-10 border border-[#1a1a1a] rounded-xl hover:border-[#e8ff40] transition-colors group bg-[#0a0a0a]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center mb-8">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-lg leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ADVANTAGE SECTION (Sleek minimalist style) */}
        <section className="py-32 relative overflow-hidden bg-black border-y border-[#1a1a1a]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-full border border-[#1a1a1a] flex items-center justify-center relative p-12 bg-[#050505]"
              >
                <div className="text-center z-10 p-12">
                  <Lock size={48} className="mx-auto mb-6 text-white" />
                  <h3 className="text-3xl font-black uppercase tracking-widest mb-2" style={{fontFamily: 'var(--display)'}}>The Inner</h3>
                  <h3 className="text-3xl font-black uppercase tracking-widest text-[#ff0055]" style={{fontFamily: 'var(--display)'}}>Circle</h3>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light mb-8 uppercase tracking-tight text-[#a1a1aa]" style={{fontFamily: 'var(--display)'}}>
                You don't have to <strong className="text-white font-black block mt-2">trade alone.</strong>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-[#a1a1aa] leading-relaxed">
                  The crypto market is brutal, chaotic, and unforgiving to isolated retail traders. The Inner Circle is a fortified community where we dissect the market together.
                </p>
                <ul className="space-y-6 border-t border-[#1a1a1a] pt-8">
                  {[
                    { title: "Weekly Live Masterclasses", desc: "Join Shola and guest experts every week for live chart breakdowns and deep dives into upcoming narratives." },
                    { title: "Direct Mentor Access", desc: "Get your specific portfolio questions answered directly by verified, profitable traders. No gatekeeping." },
                    { title: "Early Alpha Signals", desc: "Gain access to high-conviction trade setups and early ecosystem plays long before they reach Crypto Twitter." }
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-6">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#e8ff40] shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                        <p className="text-[#a1a1aa] leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION (Old sleek grayscale style) */}
        <section className="py-32 relative bg-white overflow-hidden text-black border-t border-[#1a1a1a]">
          {/* Background Text Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[25vw] font-black text-[#f7f7f7] leading-none select-none z-0 tracking-tighter pointer-events-none" style={{fontFamily: 'var(--display)'}}>
            MENTORS
          </div>

          <div className="max-w-[1600px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 md:mt-32">
            {coaches.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col group"
              >
                <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                </div>
                <h3 className="text-3xl font-bold mb-1 tracking-tight">{coach.name}</h3>
                <p className="text-[#ff0055] text-sm uppercase tracking-wider mb-4 font-bold" style={{fontFamily: 'var(--mono)'}}>{coach.title}</p>
                <p className="text-[#555] text-sm leading-relaxed mb-6 line-clamp-3">{coach.bio}</p>
                <Link to={`/coach/${coach.id}`} className="inline-flex items-center gap-2 font-bold hover:text-[#ff0055] transition-colors text-sm uppercase" style={{fontFamily: 'var(--mono)'}}>
                  View Profile <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUBSCRIPTION BANNER (Old sleek acid style) */}
        <section id="subscribe" className="py-32 relative flex items-center justify-center overflow-hidden border-t border-[#1a1a1a] bg-[#e8ff40] text-black cursor-pointer group">
          {/* Parallax Background Text */}
          <motion.div 
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-[22vw] font-black tracking-tighter opacity-10 select-none whitespace-nowrap pointer-events-none mix-blend-overlay"
            style={{fontFamily: 'var(--display)'}}
          >
            JOIN NOW
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative z-10 max-w-2xl text-center px-6"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight" style={{fontFamily: 'var(--display)'}}>Start Your Journey</h2>
            <p className="text-xl mb-10 font-medium">Subscribe monthly to get unrestricted access to all Web3 strategies, private sessions, and premium resources.</p>
            <button className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#ff0055] transition-colors inline-flex items-center gap-3" style={{fontFamily: 'var(--mono)'}}>
              Subscribe - $99/Mo <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </section>

      </main>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#e8ff40] font-black uppercase tracking-widest -rotate-90 origin-left translate-y-12 translate-x-4 opacity-50" style={{fontFamily: 'var(--display)', fontSize: '4rem'}}>
              WEB3
            </h4>
          </div>
          <div className="flex flex-col gap-4 text-sm" style={{fontFamily: 'var(--mono)'}}>
            <a href="#" className="text-white hover:text-[#e8ff40] transition-colors">Policy</a>
            <a href="#" className="text-white hover:text-[#e8ff40] transition-colors">Terms</a>
            <a href="#" className="text-white hover:text-[#e8ff40] transition-colors">Vision & Team</a>
            <a href="/contact" className="text-white hover:text-[#e8ff40] transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4 text-sm" style={{fontFamily: 'var(--mono)'}}>
            <a href="https://twitter.com/cryptowithshola" className="text-white hover:text-[#e8ff40] transition-colors">X (Twitter)</a>
            <a href="https://t.me/cryptowithshola" className="text-white hover:text-[#e8ff40] transition-colors">Telegram</a>
            <a href="#" className="text-white hover:text-[#e8ff40] transition-colors">Discord</a>
          </div>
          <div className="flex items-end justify-start md:justify-end text-[#555] text-xs uppercase" style={{fontFamily: 'var(--mono)'}}>
            © {new Date().getFullYear()} CWS WEB3 PORTAL
          </div>
        </div>
      </footer>
    </div>
  );
}
