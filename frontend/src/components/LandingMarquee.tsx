import React from 'react';

export function LandingMarquee() {
  const items = [
    "Over 2,770+ Community Members", "✦", 
    "5 Years Active", "✦", 
    "12,000+ Training Hours", "✦", 
    "4.9 Average Rating", "✦"
  ];

  return (
    <div className="w-full bg-foreground text-background py-4 overflow-hidden border-y border-border">
      <div className="relative flex w-full flex-nowrap">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span key={i} className="mx-8 font-bold text-sm tracking-widest uppercase opacity-80">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
