import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { buttonClassName } from "@/components/ui/button";
import { authUrl } from "@/lib/appLinks";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing — Sirr",
  description: "Simple Sirr pricing with Free and Pro plans for AI-powered career intelligence.",
};

const freePlan = [
  "Manual job saving",
  "Basic application tracker",
  "Limited AI generations per month",
  "Basic CV suggestions",
  "Basic match insights",
  "Limited career plan preview",
];

const proPlan = [
  "Chrome extension access",
  "Save jobs from LinkedIn, Finn, NAV, and company websites",
  "Unlimited saved jobs",
  "Unlimited tracker usage",
  "AI tailored CV generation",
  "AI cover letter generation",
  "PDF export",
  "Advanced match insights",
  "Full career plan",
  "Salary forecasting",
  "Skills roadmap",
  "AI career recommendations",
  "Priority AI processing",
];

export default function PricingPage() {
  return (
    <MarketingPage
      title="Simple pricing for better career execution"
      subtitle="Start with Free and upgrade to Pro when you need full AI-powered workflow capacity."
    >
      <ContentSection
        eyebrow="Monthly plans"
        title="Two plans for MVP validation"
        description="Future-ready layout for yearly pricing will be added later."
      >
        <div className="pricing-stage rounded-3xl border border-primary/15 p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PriceCard name="Free" price="0 NOK" features={freePlan} cta="Start free" />
            <PriceCard name="Pro" price="149 NOK / month" features={proPlan} cta="Go Pro" popular />
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">Fair usage applies.</p>
        </div>
      </ContentSection>
    </MarketingPage>
  );
}

function PriceCard({
  name,
  price,
  features,
  cta,
  popular = false,
}: {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <article
      className={cn("pricing-card flex h-full flex-col rounded-2xl p-7", popular && "pricing-card-popular ring-2 ring-primary/25")}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{name}</h2>
        {popular && (
          <span className="rounded-full bg-gradient-to-r from-[#1555A8] to-[#2B78D0] px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
            Most popular
          </span>
        )}
      </div>
      <p className="mt-3 text-4xl font-semibold tracking-tight text-[#103B73]">{price}</p>
      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 text-[#2B78D0]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <a href={authUrl()} className={cn(buttonClassName("default", "default"), "w-full justify-center")}>
          {cta}
        </a>
      </div>
    </article>
  );
}
