import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/learn", label: "Learn" },
    { to: "/membership", label: "Membership" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header className="home-header relative z-50">
        <Link to="/" className="wordmark cws-logo" aria-label="Crypto With Shola home">CWS</Link>
        
        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
          <Link to="/web3" className="relative group overflow-hidden bg-[#151515] text-[#e8ff40] px-3 py-1 rounded-full text-xs font-bold font-mono border border-[#e8ff40]/30 hover:border-[#e8ff40] transition-colors" style={{ marginLeft: '10px' }}>
            <span className="relative z-10 flex items-center gap-1">WEB3 PORTAL <span className="text-[#ff0055]">●</span></span>
            <div className="absolute inset-0 bg-[#e8ff40] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-1 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">WEB3 PORTAL <span className="text-[#ff0055]">●</span></span>
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Link className="header-cta" to="/contact">Join the community <span>↗</span></Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} className="text-black" /> : <Menu size={20} className="text-black" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col md:hidden"
            style={{ fontFamily: 'var(--sans)' }}
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setIsOpen(false)}
                  className="border-b border-black/10 pb-4 text-black hover:text-[#ff0055] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/web3" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#151515] text-[#e8ff40] p-4 rounded-xl flex items-center justify-between"
              >
                <span className="font-mono text-sm uppercase tracking-widest font-bold flex items-center gap-2">WEB3 PORTAL <span className="text-[#ff0055]">●</span></span>
                <span className="text-xl">→</span>
              </Link>
              
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-transparent border-2 border-black text-black p-4 rounded-xl flex items-center justify-between hover:bg-black hover:text-white transition-colors"
              >
                <span className="font-mono text-sm uppercase tracking-widest font-bold">Join Community</span>
                <span className="text-xl">↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
