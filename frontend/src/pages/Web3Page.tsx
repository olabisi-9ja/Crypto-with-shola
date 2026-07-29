import React from 'react';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Blocks, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coaches } from '../lib/coaches';

export function Web3Page() {
  const features = [
    {
      title: "DeFi Mastery",
      desc: "Learn to navigate decentralized exchanges, liquidity pools, and yield farming strategies to maximize returns.",
      icon: <Zap size={24} />
    },
    {
      title: "Tokenomics & Altcoins",
      desc: "Deep dive into token utility, supply mechanisms, and spotting low-cap gems before they go mainstream.",
      icon: <Gem size={24} />
    },
    {
      title: "Web3 Security",
      desc: "Protect your assets. We cover wallet hygiene, smart contract risks, and how to avoid the latest scams.",
      icon: <Shield size={24} />
    },
    {
      title: "On-Chain Analysis",
      desc: "Track whale movements and understand blockchain data to make informed, data-driven trading decisions.",
      icon: <Blocks size={24} />
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#e8ff40] selection:text-black" style={{fontFamily: 'var(--sans)'}}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-white hover:text-[#e8ff40] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest" style={{fontFamily: 'var(--mono)'}}>
          <ArrowLeft size={16} /> MAIN SITE
        </Link>
        <a href="#subscribe" className="text-black bg-[#e8ff40] px-4 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-colors font-bold" style={{fontFamily: 'var(--mono)'}}>
          Subscribe Now
        </a>
      </nav>

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pb-24 max-w-[1600px] mx-auto relative min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-start"
          >
            {/* Massive Typo */}
            <div className="relative z-10 w-full md:w-2/3">
              <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase" style={{fontFamily: 'var(--display)'}}>
                <span className="text-[#333]">DEFI.</span><br />
                <span className="text-white">WEB3.</span><br />
                <span className="text-white text-transparent bg-clip-text bg-gradient-to-r from-[#e8ff40] to-[#ff0055]">TOKENS.</span>
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

        {/* TEAM SECTION */}
        <section className="py-24 relative border-t border-[#1a1a1a] bg-white overflow-hidden text-black">
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
                <h3 className="text-3xl font-bold mb-1">{coach.name}</h3>
                <p className="text-[#ff0055] text-sm uppercase tracking-wider mb-4" style={{fontFamily: 'var(--mono)'}}>{coach.title}</p>
                <p className="text-[#555] text-sm leading-relaxed mb-6 line-clamp-3">{coach.bio}</p>
                <Link to={`/coach/${coach.id}`} className="inline-flex items-center gap-2 font-medium hover:text-[#ff0055] transition-colors text-sm uppercase" style={{fontFamily: 'var(--mono)'}}>
                  View Profile <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-32 px-6 md:px-12 border-t border-[#1a1a1a] relative bg-[#050505]">
          <div className="max-w-[1600px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-4 text-[#e8ff40]">
                Portal <strong className="font-bold text-white">Access</strong>
              </h2>
              <p className="text-[#a1a1aa] max-w-2xl text-lg">Your monthly subscription unlocks premium content specifically focused on the decentralized web.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-[#1a1a1a] rounded-2xl hover:border-[#e8ff40] transition-colors group bg-[#0a0a0a]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center mb-6 group-hover:bg-[#e8ff40] group-hover:text-black transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[#a1a1aa] leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION BANNER */}
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
            whileHover={{ scale: 1.05 }}
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
