import React from 'react';
import { Quote } from 'lucide-react';

export function LandingTestimonials() {
  const testimonials = [
    {
      quote: "my prediction for $BENDOG was right, thanks for the amazing lectures I really appreciate your effort.",
      name: "Vikrom",
      title: "@VIKROM_"
    },
    {
      quote: "It’s been from profits to profits in the crypto space all thanks to #Cryptowithshola for the trainings and the daily signals, Bossman @itsShola thank you for hosting this.",
      name: "Lilian Ernest",
      title: "@LilianErnest3"
    },
    {
      quote: "I am so thankful for learning crypto with #CryptoWithShola everything that I was so confused about I learned about crypto trading. @itsShola God bless you for this life time opportunity.",
      name: "Kvng Kunta",
      title: "@KvngKunta7"
    },
    {
      quote: "It's been an amazing 3 weeks. I did not only learn how to trade. I now place trades myself and enjoy massive profits thanks to the signals being provided by @itsShola and team.",
      name: "ThroughandThroughGooner",
      title: "Member"
    },
    {
      quote: "Defi class starts tonight with @itsShola. I did TA yesterday and today on coins and TP hit. Wow! It can only get better #CryptoWithShola made it happened",
      name: "Your Reliable Data Vendor",
      title: "@Re..."
    },
    {
      quote: "Thanks so much @itsshola #CryptoWithShola",
      name: "Danny",
      title: "@ifechukwu__"
    },
    {
      quote: "Enjoying the free session #CryptoWithShola",
      name: "Prevail",
      title: "NFT NYC 2024"
    },
    {
      quote: "#cryptowithshola has been fire on fire space of gaining knowledge on a daily with more experienced tutors. Thank you @itsShola for this spaces.",
      name: "Maney",
      title: "@maney_02"
    },
    {
      quote: "Learning so much these days and also making profits #cryptowithshola FTMUSDT ROI +117.26%",
      name: "BOD",
      title: "@Noteven95"
    }
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Results Strip */}
        <div className="bg-foreground text-background p-8 md:p-12 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 border border-border text-center">
          <div className="flex flex-col border-r border-background/20 last:border-0">
            <span className="text-4xl md:text-5xl font-black mb-2" style={{fontFamily: 'var(--sans)'}}>109K+</span>
            <span className="text-background/70 text-sm" style={{fontFamily: 'var(--mono)', textTransform: 'uppercase'}}>Telegram Subscribers</span>
          </div>
          <div className="flex flex-col border-r border-background/20 last:border-0 pl-0 md:pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2" style={{fontFamily: 'var(--sans)'}}>394K</span>
            <span className="text-background/70 text-sm" style={{fontFamily: 'var(--mono)', textTransform: 'uppercase'}}>X/Twitter Followers</span>
          </div>
          <div className="flex flex-col border-r border-background/20 last:border-0 pl-0 md:pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2" style={{fontFamily: 'var(--sans)'}}>2022</span>
            <span className="text-background/70 text-sm" style={{fontFamily: 'var(--mono)', textTransform: 'uppercase'}}>Community Founded</span>
          </div>
          <div className="flex flex-col pl-0 md:pl-8">
            <span className="text-4xl md:text-5xl font-black mb-2" style={{fontFamily: 'var(--sans)'}}>13.9K</span>
            <span className="text-background/70 text-sm" style={{fontFamily: 'var(--mono)', textTransform: 'uppercase'}}>Avg. Views Per Post</span>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4" style={{fontFamily: 'var(--display)'}}>Testimonies</h2>
          <p className="text-muted-foreground text-lg">
            Real feedback and results from our community.
          </p>
        </div>

        {/* Visual Testimony removed as per user request */}

        <div className="grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card text-card-foreground p-8 border border-foreground -ml-[1px] -mt-[1px] relative hover:bg-secondary transition-colors">
              <Quote className="w-10 h-10 text-foreground/10 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-8 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary border border-foreground"></div>
                <div>
                  <h4 className="font-bold" style={{fontFamily: 'var(--display)'}}>{t.name}</h4>
                  <p className="text-xs text-foreground/70" style={{fontFamily: 'var(--mono)', textTransform: 'uppercase'}}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
