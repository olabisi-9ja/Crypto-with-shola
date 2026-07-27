import React from 'react';
import { Quote } from 'lucide-react';

export function LandingTestimonials() {
  const testimonials = [
    {
      quote: "Shola's life coaching combined with crypto basics changed how I approach my finances. I feel empowered to level up.",
      name: "Amara",
      title: "Member since 2025"
    },
    {
      quote: "The daily Telegram signals and Bybit tutorials are exactly what a beginner needs. The community energy is unmatched.",
      name: "Daniel",
      title: "Member since 2023"
    },
    {
      quote: "Attending the Lagos Meet & Greet in 2026 was incredible. Real testimonies, real motivation, and a real community.",
      name: "Fatima",
      title: "Member since 2024"
    }
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Results Strip */}
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-background/20 text-center">
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black mb-2">109K+</span>
            <span className="text-background/70 text-sm">Telegram Subscribers</span>
          </div>
          <div className="flex flex-col pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2">394K</span>
            <span className="text-background/70 text-sm">X/Twitter Followers</span>
          </div>
          <div className="flex flex-col pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2">2022</span>
            <span className="text-background/70 text-sm">Community Founded</span>
          </div>
          <div className="flex flex-col pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2">13.9K</span>
            <span className="text-background/70 text-sm">Avg. Views Per Post</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">What members say</h2>
          <p className="text-muted-foreground text-lg">
            We ask for honest feedback — and we publish it, positive and critical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm relative">
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary"></div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
