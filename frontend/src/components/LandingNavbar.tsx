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
          <Link to="/web3" className="relative group text-xs font-bold font-mono" style={{ marginLeft: '10px' }}>
            <span className="flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 group-hover:from-orange-400 group-hover:to-amber-400 transition-all">
              WEB3 PORTAL <span className="text-orange-500 animate-pulse">●</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300 ease-out"></span>
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
                className="mt-4 border border-orange-500/30 p-4 rounded-xl flex items-center justify-between group hover:border-orange-500 transition-colors"
              >
                <span className="font-mono text-sm uppercase tracking-widest font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  WEB3 PORTAL <span className="text-orange-500 animate-pulse">●</span>
                </span>
                <span className="text-xl text-orange-500 group-hover:translate-x-2 transition-transform">→</span>
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
