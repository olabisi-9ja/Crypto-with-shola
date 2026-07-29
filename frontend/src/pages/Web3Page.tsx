import React from 'react';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Blocks, Gem, Lock, Users, Network, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { coaches } from '../lib/coaches';

const GlowingOrb = ({ color, size, top, left, delay, duration }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4], 
      scale: [1, 1.2, 1],
      x: [0, 50, 0, -50, 0],
      y: [0, 30, -30, 0]
    }}
    transition={{ 
      duration: duration || 10, 
      repeat: Infinity, 
      delay: delay || 0,
      ease: "linear"
    }}
    className="absolute rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top,
      left,
      zIndex: 0
    }}
  />
);

const TickerTape = () => {
  const words = ["DECENTRALIZED FINANCE", "•", "YIELD FARMING", "•", "SMART CONTRACTS", "•", "TOKENOMICS", "•", "LIQUIDITY POOLS", "•", "ON-CHAIN ANALYSIS", "•", "AIRDROPS", "•", "WEB3 SECURITY", "•"];
  
  return (
    <div className="w-full bg-[#e8ff40] overflow-hidden py-4 border-y border-black relative z-20 transform -rotate-2 scale-110 shadow-[0_0_50px_rgba(232,255,64,0.3)]">
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
      icon: <Network className="text-[#e8ff40]" size={32} />,
      color: "from-[#e8ff40]/20 to-transparent",
      borderColor: "group-hover:border-[#e8ff40]"
    },
    {
      title: "Advanced Tokenomics",
      desc: "Learn to read the tape. We break down token distribution, vesting schedules, inflation mechanics, and utility models to help you spot rugs and identify true long-term gems.",
      icon: <Gem className="text-[#ff0055]" size={32} />,
      color: "from-[#ff0055]/20 to-transparent",
      borderColor: "group-hover:border-[#ff0055]"
    },
    {
      title: "On-Chain Sleuthing",
      desc: "The blockchain doesn't lie. Master the art of tracking whale wallets, analyzing smart contract inflows, and reading Etherscan like a professional auditor.",
      icon: <Blocks className="text-[#00e5ff]" size={32} />,
      color: "from-[#00e5ff]/20 to-transparent",
      borderColor: "group-hover:border-[#00e5ff]"
    },
    {
      title: "Airdrop Strategies",
      desc: "Maximize your portfolio growth with zero initial capital. Get weekly action steps for interacting with testnets and unreleased protocols to position yourself for massive airdrops.",
      icon: <Zap className="text-[#a855f7]" size={32} />,
      color: "from-[#a855f7]/20 to-transparent",
      borderColor: "group-hover:border-[#a855f7]"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#ff0055] selection:text-white" style={{fontFamily: 'var(--sans)'}}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference bg-black/10 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="text-white hover:text-[#e8ff40] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold" style={{fontFamily: 'var(--mono)'}}>
          <ArrowLeft size={16} /> RETURN HOME
        </Link>
        <a href="#subscribe" className="text-black bg-gradient-to-r from-[#e8ff40] to-[#bde000] px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform font-bold shadow-[0_0_20px_rgba(232,255,64,0.4)]" style={{fontFamily: 'var(--mono)'}}>
          Secure Access
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
          
          {/* Animated Background Orbs */}
          <GlowingOrb color="#ff0055" size="40vw" top="-10%" left="-10%" delay={0} />
          <GlowingOrb color="#00e5ff" size="50vw" top="20%" left="60%" delay={2} />
          <GlowingOrb color="#a855f7" size="30vw" top="60%" left="10%" delay={4} />

          <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full relative z-10">
            <motion.div 
              style={{ y: yHero }}
              className="flex flex-col md:flex-row justify-between items-start gap-12"
            >
              <div className="w-full md:w-[70%]">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#e8ff40] animate-pulse"></span>
                  <span className="font-mono text-sm uppercase tracking-widest text-white/80">The Ultimate Crypto Mastermind</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[14vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase" 
                  style={{fontFamily: 'var(--display)'}}
                >
                  <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">ESCAPE</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#a855f7] to-[#00e5ff]">THE MATRIX.</span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full md:w-[30%] mt-8 md:mt-0 pt-4 md:border-l md:border-white/10 md:pl-12"
              >
                <p className="text-[#a1a1aa] text-lg md:text-xl font-light leading-relaxed mb-8">
                  Welcome to the bleeding edge of cryptocurrency. This is not for beginners. This is an immersive, intensive portal designed to take you from a casual retail trader to a Web3 native. <strong className="text-white font-medium">Master the chain.</strong>
                </p>
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gradient-to-tr from-[#ff0055] to-orange-500 flex items-center justify-center font-bold font-mono">1K+</div>
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-[#111] flex items-center justify-center">
                      <Users size={20} className="text-[#a1a1aa]" />
                    </div>
                  </div>
                  <span className="text-sm font-mono text-white/60 uppercase">Elite Members inside</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
        </section>

        {/* Scrolling Ticker */}
        <TickerTape />

        {/* CURRICULUM SECTION */}
        <section className="py-32 px-6 md:px-12 relative z-10 bg-[#050505]">
          <div className="max-w-[1600px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight" style={{fontFamily: 'var(--display)'}}>
                The Web3 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8ff40] to-[#00e5ff]">Curriculum</span>
              </h2>
              <p className="text-[#a1a1aa] max-w-3xl text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
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
                  className={`relative p-8 md:p-10 border border-[#1a1a1a] rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-2xl bg-[#0a0a0a] ${item.borderColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-xl">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-[#a1a1aa] text-lg leading-relaxed group-hover:text-white/90 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ADVANTAGE SECTION */}
        <section className="py-32 relative overflow-hidden bg-black border-y border-white/5">
          <GlowingOrb color="#e8ff40" size="40vw" top="0%" left="80%" delay={1} />
          
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative p-12"
              >
                {/* Concentric rotating rings */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-white/20"></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-[#ff0055]/30"></motion.div>
                
                <div className="text-center z-10 bg-black/80 backdrop-blur-md p-12 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,0,85,0.2)]">
                  <Lock size={48} className="mx-auto mb-6 text-[#ff0055]" />
                  <h3 className="text-3xl font-black uppercase tracking-widest mb-2" style={{fontFamily: 'var(--display)'}}>The Inner</h3>
                  <h3 className="text-3xl font-black uppercase tracking-widest text-[#ff0055]" style={{fontFamily: 'var(--display)'}}>Circle</h3>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight" style={{fontFamily: 'var(--display)'}}>
                You don't have to <span className="text-[#ff0055]">trade alone.</span>
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-[#a1a1aa] leading-relaxed">
                  The crypto market is brutal, chaotic, and unforgiving to isolated retail traders. The Inner Circle is a fortified community where we dissect the market together.
                </p>
                <ul className="space-y-6">
                  {[
                    { title: "Weekly Live Masterclasses", desc: "Join Shola and guest experts every week for live chart breakdowns and deep dives into upcoming narratives." },
                    { title: "Direct Mentor Access", desc: "Get your specific portfolio questions answered directly by verified, profitable traders. No gatekeeping." },
                    { title: "Early Alpha Signals", desc: "Gain access to high-conviction trade setups and early ecosystem plays long before they reach Crypto Twitter." }
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-6">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ff0055] shrink-0" />
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

        {/* TEAM SECTION */}
        <section className="py-32 relative bg-[#050505] overflow-hidden text-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 leading-none select-none z-0 tracking-tighter pointer-events-none whitespace-nowrap" style={{fontFamily: 'var(--display)'}}>
            MASTERS
          </div>

          <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight" style={{fontFamily: 'var(--display)'}}>
                Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#a855f7]">Veterans</span>
              </h2>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {coaches.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col group relative"
              >
                {/* Neon Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff] to-[#a855f7] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                
                <div className="overflow-hidden rounded-xl mb-6 aspect-[4/5] relative border border-white/10 group-hover:border-white/30 transition-colors z-10 bg-black">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-1 tracking-tight">{coach.name}</h3>
                  <p className="text-[#00e5ff] text-sm uppercase tracking-widest font-bold mb-4" style={{fontFamily: 'var(--mono)'}}>{coach.title}</p>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 line-clamp-3">{coach.bio}</p>
                  <Link to={`/coach/${coach.id}`} className="inline-flex items-center gap-2 font-bold hover:text-[#00e5ff] transition-colors text-sm uppercase tracking-widest" style={{fontFamily: 'var(--mono)'}}>
                    Read Dossier <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUBSCRIPTION BANNER */}
        <section id="subscribe" className="relative flex items-center justify-center overflow-hidden border-t border-black bg-black text-white cursor-pointer group py-32">
          {/* Vibrant Animated Gradient Background */}
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(-45deg, #ff0055, #a855f7, #00e5ff, #e8ff40)',
              backgroundSize: '400% 400%'
            }}
          />
          
          <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-[2px]"></div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative z-10 max-w-4xl text-center px-6"
          >
            <div className="inline-block mb-6">
              <TrendingUp size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-[0.85] drop-shadow-2xl" style={{fontFamily: 'var(--display)'}}>
              Stop Watching.<br/>Start Winning.
            </h2>
            <p className="text-xl md:text-2xl mb-12 font-medium text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              Unlock the entire vault of Web3 strategies, daily setups, and direct mentorship. 
            </p>
            <button className="px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest text-lg hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition-all duration-300 inline-flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]" style={{fontFamily: 'var(--mono)'}}>
              Join Portal - $99/Mo <ArrowUpRight size={24} />
            </button>
          </motion.div>
        </section>

      </main>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-white/20 font-black uppercase tracking-widest -rotate-90 origin-left translate-y-12 translate-x-4" style={{fontFamily: 'var(--display)', fontSize: '4rem'}}>
              WEB3
            </h4>
          </div>
          <div className="flex flex-col gap-4 text-sm" style={{fontFamily: 'var(--mono)'}}>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Vision & Team</a>
            <a href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4 text-sm" style={{fontFamily: 'var(--mono)'}}>
            <a href="https://twitter.com/cryptowithshola" className="text-white/60 hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://t.me/cryptowithshola" className="text-white/60 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Discord</a>
          </div>
          <div className="flex items-end justify-start md:justify-end text-white/40 text-xs uppercase" style={{fontFamily: 'var(--mono)'}}>
            © {new Date().getFullYear()} CWS WEB3 PORTAL
          </div>
        </div>
      </footer>
    </div>
  );
}
