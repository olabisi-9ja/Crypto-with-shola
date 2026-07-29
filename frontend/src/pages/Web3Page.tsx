import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coaches } from '../lib/coaches';

export function Web3Page() {
  const newsImages = [
    '/images/new_media/imgi_21_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9uT0VEN2NJTVcxOGtCMGROQ1lHR1ZDZmlvM0I5Zy1hbVhDTUtUNzhEZ3BrL3JzOmZvcmNlOjk4NjoxMjg2OjEvZzpub3dlOjc2OjM1Mi9jOjk4NjoxMjg2L2FIUjBjSE02T.webp',
    '/images/new_media/imgi_22_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9jZ0g1OC1ZaUU2a0JOLUVPOHJ1NG1EVlc2S05xcWs1ZjlFdlNLM3VVQmVzL3JzOmZvcmNlOjUwODo0NjI6MS9nOm5vd2U6Mjg1OjI2MC9jOjUwODo0NjIvYUhSMGNITTZMe.webp',
    '/images/new_media/imgi_15_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9HOHNiZEdyRnVGZ2JMVWdCZ3pTckh0UW9rVHZKeVRHbU5UNEllYkVfRk80L3JzOmZvcmNlOjU3Njo4MDk6MS9nOm5vd2U6MDoyNzcvYzo1NzY6NzA0L2FIUjBjSE02THk5a.webp',
    '/images/new_media/imgi_16_aHR0cHM6Ly9pbWFnZXMuZ3Jvb3ZldGVjaC5pby9kdXliaE9PTXgtU3lQVUVEMFprZU1IR2FVY2VCNnZFeGYwdFRiT1FHZWVnL3JzOmZvcmNlOjU3ODo4MDk6MS9nOm5vd2U6MDoyOTcvYzo1NzY6ODA2L2FIUjBjSE02THk5a.webp'
  ];

  const features = [
    "Arbitrage bots",
    "Real-time volume tracking algorithms",
    "Sniper bots for DEX launches",
    "Automated risk scaling"
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#ff0055] selection:text-white" style={{fontFamily: 'var(--sans)'}}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="text-white hover:text-[#ff0055] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest" style={{fontFamily: 'var(--mono)'}}>
          <ArrowLeft size={16} /> MAIN SITE
        </Link>
        <Link to="/contact" className="text-white text-sm uppercase tracking-widest hover:text-[#ff0055] transition-colors" style={{fontFamily: 'var(--mono)'}}>
          Contact
        </Link>
      </nav>

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pb-24 max-w-[1600px] mx-auto relative">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-start pt-12 md:pt-24"
          >
            {/* Massive Typo */}
            <div className="relative z-10 w-full md:w-1/2">
              <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter" style={{fontFamily: 'var(--display)'}}>
                <span className="text-[#333]">CRY</span><span className="text-white">PTO</span><br />
                <span className="text-white">IS FUN</span>
              </h1>
              
              {/* Scribble Logo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: -5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-[80%] left-0 md:left-24"
              >
                <div className="text-[#ff0055] text-7xl font-signature italic font-light tracking-tighter -rotate-12 opacity-80" style={{fontFamily: 'cursive'}}>CWS</div>
              </motion.div>
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/3 mt-24 md:mt-0 relative z-10 text-right md:text-left self-end md:self-center">
              <p className="text-[#a1a1aa] text-lg md:text-2xl font-light leading-relaxed">
                It started with a crazy dream where Shola bought the next hidden gem live on an X Spaces. Now, everyone f*cked around and let us build a massive community. <strong className="text-white font-medium">The rest... is crypto history.</strong>
              </p>
            </div>
          </motion.div>
          
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-24 relative border-t border-[#1a1a1a] bg-white overflow-hidden">
          {/* Background Text Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[25vw] font-black text-[#f1f1f1] leading-none select-none z-0 tracking-tighter pointer-events-none" style={{fontFamily: 'var(--display)'}}>
            TEAM
          </div>

          <div className="max-w-[1600px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 md:mt-32">
            {coaches.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col"
              >
                <h3 className="text-3xl font-bold text-black mb-1">{coach.name}</h3>
                <p className="text-[#ff0055] text-sm uppercase tracking-wider mb-4" style={{fontFamily: 'var(--mono)'}}>{coach.title}</p>
                <p className="text-[#555] text-sm leading-relaxed mb-6">{coach.bio}</p>
                <Link to={`/coach/${coach.id}`} className="inline-flex items-center gap-2 text-black font-medium hover:text-[#ff0055] transition-colors text-sm uppercase" style={{fontFamily: 'var(--mono)'}}>
                  View Profile <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRODUCT SHOWCASE (BOT) */}
        <section className="py-32 px-6 md:px-12 border-t border-[#1a1a1a] relative bg-[#050505]">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-8">
                The <strong className="font-bold">APE IT</strong><br /> Trading Bot
              </h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#a1a1aa] text-lg">
                    <span className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white"><Check size={14} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full flex items-center gap-3 hover:bg-[#ff0055] hover:text-white transition-colors"
                style={{fontFamily: 'var(--mono)'}}
              >
                Get Access <ArrowUpRight size={16} />
              </motion.button>
            </motion.div>

            {/* Graphic side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center relative"
            >
              <div className="w-[300px] h-[300px] rounded-full border border-[#1a1a1a] flex items-center justify-center relative bg-[#0a0a0a]">
                <Activity size={80} className="text-[#333]" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff0055] opacity-30"
                />
                
                {/* Scribble Brand */}
                <div className="absolute -bottom-10 -right-10 text-[#ff0055] text-6xl rotate-12 opacity-80" style={{fontFamily: 'cursive'}}>BJT</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MERCH BANNER */}
        <section className="py-40 relative flex items-center justify-center overflow-hidden border-t border-[#1a1a1a] bg-[#050505] cursor-pointer group">
          {/* Parallax Background Text */}
          <motion.div 
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-[25vw] font-black tracking-tighter opacity-10 text-white select-none whitespace-nowrap pointer-events-none mix-blend-overlay"
            style={{fontFamily: 'var(--display)'}}
          >
            MERCH
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative z-10 w-40 h-40 rounded-full border-2 border-[#e8ff40] flex items-center justify-center text-center p-4 group-hover:bg-[#e8ff40] group-hover:text-black transition-all duration-300"
          >
            <span className="font-bold uppercase tracking-wider text-xs" style={{fontFamily: 'var(--mono)'}}>Come in and<br />rule the stuff</span>
          </motion.div>
        </section>

        {/* NEWS / GALLERY SECTION */}
        <section className="py-24 border-t border-[#1a1a1a] relative bg-[#050505]">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-[8vw] md:text-[6vw] font-black tracking-tighter leading-none" style={{fontFamily: 'var(--display)'}}>NEWS</h2>
              <div className="text-right pb-4 text-[#a1a1aa] uppercase text-xs tracking-widest" style={{fontFamily: 'var(--mono)'}}>
                Latest Updates<br />From The Lab
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {newsImages.map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="aspect-square bg-[#111] rounded-lg overflow-hidden relative group"
                >
                  <img src={src} alt="News thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[#e8ff40] text-xs font-mono mb-2 uppercase">Update 0{i+1}</span>
                    <h3 className="text-white font-medium text-lg">Ecosystem Drop</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#ff0055] font-black uppercase tracking-widest -rotate-90 origin-left translate-y-12 translate-x-4 opacity-50" style={{fontFamily: 'var(--display)', fontSize: '4rem'}}>
              CWS
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
            © {new Date().getFullYear()} CWS WEB3
          </div>
        </div>
      </footer>
    </div>
  );
}
