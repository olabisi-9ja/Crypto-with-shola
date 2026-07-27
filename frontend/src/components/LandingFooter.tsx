import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function LandingFooter() {
  return (
    <>
      {/* Why Trust Section */}
      <section className="w-full py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">About CryptoWithShola</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded by Babatunde “Shola” Olusola in 2022, CryptoWithShola blends life coaching with beginner-friendly crypto education. Our mission is to empower young people to level up financially through trading basics and community support.
            </p>
            <ul className="space-y-4">
              {[
                "Certified life coach turned crypto mentor with a massive verified following.",
                "Practical tutorials, daily signals, and motivational Q&A sessions.",
                "Expanding education to include DeFi, NFTs, and crypto security.",
                "Disclaimer: Crypto involves risk. Educational content is not financial advice."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border p-12 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">Start your journey today</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of traders learning to navigate the crypto markets with discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
               <Link to="/membership" className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-colors">
                 Join Membership
               </Link>
               <Link to="/contact" className="px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-bold hover:bg-secondary transition-colors">
                 Join Free Telegram
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Actual Footer */}
      <footer className="w-full bg-background py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 bg-[length:200%_auto] text-transparent bg-clip-text animate-text-gradient">
              CWS
            </span>
            <span className="font-bold tracking-tight">Crypto with Shola</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/learn" className="hover:text-foreground">Learn</Link>
            <Link to="/membership" className="hover:text-foreground">Membership</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Crypto with Shola. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
