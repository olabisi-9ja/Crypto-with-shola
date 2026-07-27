import React from 'react';
import { TrendingUp, BrainCircuit, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingFeatures() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">What we provide</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Built on discipline<br />and proven methods.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Crypto can build paths to leveling up financially. Our approach is beginner-friendly and practical. We provide the tutorials, the trading signals, and the community you need to start getting profits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Live Trading - Spans 2 columns */}
          <div className="md:col-span-2 bg-primary text-primary-foreground border border-border p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:opacity-95 transition-opacity flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Trading Signals & Tutorials</h4>
              <p className="text-primary-foreground/80 leading-relaxed max-w-lg mb-8">
                Get daily trading signals and step-by-step app tutorials (like Bybit). Learn how to place trades, manage risk, and understand basic market strategies to grow your portfolio.
              </p>
            </div>
            <Link to="/membership" className="font-bold text-sm tracking-widest uppercase hover:underline">
              Explore Signals →
            </Link>
          </div>

          {/* Psychology */}
          <div className="bg-card text-card-foreground border border-border p-8 rounded-3xl shadow-sm hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-xl font-bold mb-3">Mindset & Motivation</h4>
            <p className="text-muted-foreground leading-relaxed">
              Shola’s background as a life coach shines here. Master your mindset, stay motivated, and focus on leveling up your life financially.
            </p>
          </div>

          {/* Community */}
          <div className="bg-card text-card-foreground border border-border p-8 rounded-3xl shadow-sm hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-xl font-bold mb-3">Massive Community</h4>
            <p className="text-muted-foreground leading-relaxed">
              Join over 109,000 active subscribers in our Telegram. Get live Q&A sessions, event updates like our Lagos Meet & Greets, and shared testimonies.
            </p>
          </div>

          {/* Courses - Spans 2 columns */}
          <div className="md:col-span-2 bg-secondary text-secondary-foreground border border-border p-8 rounded-3xl shadow-sm hover:border-primary/30 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Broader Education & Security</h4>
              <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
                Moving beyond basic trading, we touch on DeFi, NFTs, and essential security practices. Navigate the evolving Nigerian crypto space safely with awareness of risk and compliance.
              </p>
            </div>
            <Link to="/learn" className="font-bold text-sm tracking-widest uppercase text-primary hover:underline">
              View Course Curriculum →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
