import React from 'react';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingHero } from '../components/LandingHero';
import { LandingMarquee } from '../components/LandingMarquee';
import { LandingFeatures } from '../components/LandingFeatures';
import { LandingHowItWorks } from '../components/LandingHowItWorks';
import { LandingTestimonials } from '../components/LandingTestimonials';
import { LandingFooter } from '../components/LandingFooter';
import { LandingAbout } from '../components/LandingAbout';
import { LandingCoaches } from '../components/LandingCoaches';
import { LandingPricing } from '../components/LandingPricing';
import { LandingProof } from '../components/LandingProof';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <LandingNavbar />
      <LandingHero />
      <LandingMarquee />
      <LandingFeatures />
      <LandingAbout />
      <LandingCoaches />
      <LandingProof />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFooter />
    </div>
  );
}
