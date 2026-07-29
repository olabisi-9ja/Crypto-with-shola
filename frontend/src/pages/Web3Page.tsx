import React from 'react';
import { ArrowLeft, ArrowUpRight, Zap, Shield, Blocks, Gem, Lock, Users, Network, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
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
  const { scrollYProgress, scrollY } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference bg-black/10 backdrop-blur-md border-b border-[#1a1a1a] transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full md:translate-y-0' : 'translate-y-0'}`}>
        <Link to="/" className="text-white hover:text-[#e8ff40] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold" style={{fontFamily: 'var(--mono)'}}>
          <ArrowLeft size={16} /> RETURN HOME
        </Link>
        <a href="#subscribe" className="text-black bg-[#e8ff40] px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-colors font-bold" style={{fontFamily: 'var(--mono)'}}>
          Secure Access
        </a>
      </nav>

      <main>
        {/* ALFA-Inspired Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 overflow-hidden bg-black">
          {/* Abstract Wave Background (Simulated via gradients) */}
          <div className="absolute inset-0 z-0 opacity-60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[20%] bg-gradient-to-r from-transparent via-[#458b97]/30 to-transparent blur-[60px] transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[15%] bg-gradient-to-r from-transparent via-[#ff8800]/20 to-transparent blur-[50px] transform rotate-6 mt-16"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[10%] bg-gradient-to-r from-transparent via-[#e8ff40]/10 to-transparent blur-[40px] transform -rotate-3 mb-12"></div>
          </div>

          <motion.div 
            style={{ y: yHero }}
            className="w-full flex flex-col items-center relative z-10 px-6 pt-12"
          >
            {/* Giant Metallic/Faded Text */}
            <h1 className="text-[20vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter leading-[0.75] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[#111] opacity-100" style={{fontFamily: 'var(--display)'}}>
              WEB3
            </h1>

            {/* Fanning Cards Effect */}
            <div className="relative mt-8 md:-mt-20 w-full max-w-5xl h-[400px] md:h-[500px] flex justify-center items-end perspective-[1200px]">
              
              {/* Back Card (Left) */}
              <motion.div 
                initial={{ opacity: 0, rotateZ: -12, x: "-15%", y: 100 }}
                animate={{ opacity: 1, rotateZ: -6, x: "-8%", y: 40 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="absolute w-[80%] md:w-[85%] max-w-[700px] h-[300px] md:h-[400px] bg-[#080808] border border-[#222] rounded-t-3xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 md:p-6 opacity-40 flex items-center justify-center border-b border-[#222]">
                  <div className="font-bold tracking-widest text-white text-xs md:text-sm flex items-center gap-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-white"></div> PORTAL
                  </div>
                </div>
              </motion.div>

              {/* Back Card (Right) */}
              <motion.div 
                initial={{ opacity: 0, rotateZ: 12, x: "15%", y: 100 }}
                animate={{ opacity: 1, rotateZ: 6, x: "8%", y: 40 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="absolute w-[80%] md:w-[85%] max-w-[700px] h-[300px] md:h-[400px] bg-gradient-to-b from-[#1c0812] to-[#050505] border border-[#441122] rounded-t-3xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 md:p-6 opacity-40 flex items-center justify-center border-b border-[#441122]">
                  <div className="font-bold tracking-widest text-white text-xs md:text-sm flex items-center gap-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ff0055]"></div> COMMUNITY
                  </div>
                </div>
              </motion.div>

              {/* Front Card */}
              <motion.div 
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="absolute z-20 w-[95%] max-w-[800px] h-[350px] md:h-[420px] bg-[#050505] border border-[#333] rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
              >
                {/* Card Header */}
                <div className="flex justify-center items-center p-4 md:p-6 border-b border-[#1a1a1a]">
                  <div className="font-bold tracking-widest text-white text-xs md:text-sm flex items-center gap-2" style={{fontFamily: 'var(--mono)'}}>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-[#e8ff40] clip-path-polygon-[0_0,100%_0,100%_100%,0_100%,0_50%,50%_50%]"></div> CWS
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center relative overflow-hidden bg-gradient-to-b from-transparent to-[#0a0a0a]">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight z-10">
                    The exclusive<br />blockchain community
                  </h2>
                  <p className="text-[#888] mt-4 md:mt-6 max-w-md text-sm md:text-lg z-10">Get monthly insights, advanced strategies, and unfiltered access to the leading minds in the crypto space.</p>
                  
                  {/* Subtle particle effect at bottom of card */}
                  <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#112] to-transparent mix-blend-screen"></div>
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute rounded-full bg-[#00e5ff]"
                      style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                        left: Math.random() * 100 + '%',
                        bottom: Math.random() * 25 + '%',
                        opacity: Math.random() * 0.5 + 0.1,
                      }}
                    ></div>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
          
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] z-30 pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
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
