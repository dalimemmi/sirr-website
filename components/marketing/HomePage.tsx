"use client";

import { MarketingHeader, HeroSection, MarketingFooter } from "@/components/marketing/MarketingHeader";
import {
  BenefitsSection,
  EmployersSection,
  ExampleSection,
  HowItWorksSection,
} from "@/components/marketing/HomeSections";

export function HomePage() {
  return (
    <div className="min-h-screen nest-gradient">
      <MarketingHeader />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ExampleSection />
      <EmployersSection />
      <MarketingFooter />
    </div>
  );
}
