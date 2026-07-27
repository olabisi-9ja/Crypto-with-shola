import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-background/80 backdrop-blur-md border-border/50 py-3' : 'bg-transparent border-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-black text-3xl tracking-tighter bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 bg-[length:200%_auto] text-transparent bg-clip-text animate-text-gradient group-hover:scale-105 transition-transform">
            CWS
          </span>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Crypto with Shola</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors">About Shola</Link>
          <Link to="/web3" className="hover:text-foreground transition-colors">Web3 Focus</Link>
          <Link to="/learn" className="hover:text-foreground transition-colors">Learn</Link>
          <Link to="/membership" className="hover:text-foreground transition-colors">Membership</Link>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/proof" className="hover:text-foreground transition-colors">Proof</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/contact" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Join Telegram <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/about" className="text-lg font-medium py-2 border-b border-border">About Shola</Link>
          <Link to="/web3" className="text-lg font-medium py-2 border-b border-border">Web3 Focus</Link>
          <Link to="/learn" className="text-lg font-medium py-2 border-b border-border">Learn</Link>
          <Link to="/membership" className="text-lg font-medium py-2 border-b border-border">Membership</Link>
          <Link to="/blog" className="text-lg font-medium py-2 border-b border-border">Blog</Link>
          <Link to="/proof" className="text-lg font-medium py-2 border-b border-border">Proof</Link>
          <Link to="/contact" className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold">
            Join Telegram
          </Link>
        </div>
      )}
    </nav>
  );
}
