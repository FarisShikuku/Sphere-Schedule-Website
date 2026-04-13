'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from './Hero';
import { Features } from './Features';
import { HowItWorks } from './HowItWorks';
import { Stats } from './Stats';
import { CTASection } from './CTASection';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar onGetStarted={onGetStarted} onSignIn={onSignIn} />
      <Hero onGetStarted={onGetStarted} onSignIn={onSignIn} />
      <Stats />
      <Features />
      <HowItWorks />
      <CTASection onGetStarted={onGetStarted} onSignIn={onSignIn} />
      <Footer />
    </div>
  );
}