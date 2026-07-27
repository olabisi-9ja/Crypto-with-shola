import React from 'react';
import { ArrowRight, BookOpen, MessageCircle, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LandingHowItWorks() {
  return (
    <section className="w-full py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">How it works</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Elevate Your Trading?</h3>
          <p className="text-muted-foreground text-lg">
            Start with free resources, grow with structured lessons, and upgrade when you are ready for deeper support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm flex flex-col items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <span className="font-black text-xl">1</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Learn the basics</h4>
            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              Free guides, beginner videos, and a supportive Telegram community. No paywall on foundational knowledge.
            </p>
            <Link to="/learn" className="flex items-center gap-2 font-bold text-primary hover:underline mt-auto">
              Start free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm flex flex-col items-start relative overflow-hidden group md:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <span className="font-black text-xl">2</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Join the community</h4>
            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              Get signals, participate in discussions, and build habits with people who take trading seriously.
            </p>
            <a href="/contact" className="flex items-center gap-2 font-bold text-primary hover:underline mt-auto">
              Join Telegram <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-3xl border border-border shadow-sm flex flex-col items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-background/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mb-6 text-primary-foreground">
              <span className="font-black text-xl">3</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Upgrade when ready</h4>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 flex-grow">
              Membership unlocks live sessions, premium signals, and one-on-one support. No rush — move at your pace.
            </p>
            <Link to="/membership" className="flex items-center gap-2 font-bold hover:underline mt-auto">
              See plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Learning Paths */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">Featured learning paths</h2>
          </div>
          <Link to="/learn" className="px-6 py-2 rounded-full border border-border hover:bg-card transition-colors font-bold text-sm">
            View all lessons
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, title: "Crypto Basics", desc: "Blockchain, wallets, and how markets work — explained simply." },
            { icon: TrendingUp, title: "Technical Analysis", desc: "Reading charts, identifying trends, and using indicators effectively." },
            { icon: MessageCircle, title: "Market Psychology", desc: "Controlling emotions and sticking to your trading plan." },
            { icon: Star, title: "Advanced Strategies", desc: "Deep dives into order blocks, liquidity, and smart money concepts." }
          ].map((path, i) => (
            <Link key={i} to="/learn" className="bg-card text-card-foreground p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <path.icon className="w-5 h-5 text-foreground" />
              </div>
              <h4 className="font-bold mb-2">{path.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{path.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
