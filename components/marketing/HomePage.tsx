"use client";

import { ArrowRight, Check, ChevronRight, ClipboardCheck, Compass, FileText, Sparkles, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { MarketingFooter, MarketingHeader, SectionHeader } from "@/components/marketing/MarketingShell";
import { buttonClassName } from "@/components/ui/button";
import { authUrl } from "@/lib/appLinks";
import { cn } from "@/lib/cn";

const problems = [
  "Scattered applications across tabs and spreadsheets",
  "Generic CVs that fail to stand out",
  "Forgotten deadlines and follow-up tasks",
  "No clear view of pipeline health",
  "Uncertainty about long-term career direction",
];

const pillars = [
  {
    title: "Find opportunities",
    description: "Smart matching, imported jobs, and one-click capture from anywhere.",
    points: ["AI relevance score", "Job import from multiple sources", "Extension-ready workflow"],
  },
  {
    title: "Win applications",
    description: "Generate tailored CVs and cover letters with role-specific insights.",
    points: ["Tailored CV generation", "Cover letter drafts", "AI optimization hints"],
  },
  {
    title: "Grow your career",
    description: "Plan next moves with salary forecasts, skills roadmap, and recommendations.",
    points: ["Career timeline", "Salary forecast", "Skills roadmap"],
  },
];

const steps = [
  { title: "Save jobs", description: "Capture interesting roles from LinkedIn, Finn, NAV, and company sites." },
  { title: "Generate tailored documents", description: "Build CVs and cover letters aligned to each job." },
  { title: "Track applications", description: "Use clear stages, reminders, and notes to stay in control." },
  { title: "Plan career growth", description: "Map long-term progression and salary potential with AI support." },
];

export function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <MarketingHeader />
      <main>
        <section
          id="home-hero"
          className="relative isolate min-h-[88vh] border-b border-border/40"
        >
          <Image
            src="/hero/sirr-hero-background.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-40 h-full w-full object-cover"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero/sirr-hero-background.png"
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          >
            <source src="/hero/sirr-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950/70 via-slate-950/58 to-slate-950/76" />
          <div className="container relative mx-auto max-w-5xl px-4 pb-20 pt-24 text-center lg:pb-28 lg:pt-32">
            <div className="mx-auto max-w-4xl">
              <span className="inline-flex rounded-full border border-white/30 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-white">
                AI Career Intelligence Platform
              </span>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                AI Career Intelligence for your next step
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-100/90">
                Sirr helps you discover relevant jobs, tailor your CV, generate cover letters, track applications,
                and plan your long-term career path in one intelligent workspace.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={authUrl()} className={buttonClassName("default", "lg")}>
                  {t.cta.startFree}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className={cn(
                    buttonClassName("outline", "lg"),
                    "border-white/45 bg-transparent text-white hover:bg-white/15",
                  )}
                >
                  {t.cta.seeHowItWorks}
                </a>
              </div>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 rounded-2xl border border-white/20 bg-white/6 p-4 backdrop-blur-sm md:grid-cols-3">
              <HeroMetric title="Match score" value="92%" hint="average relevance" />
              <HeroMetric title="Application flow" value="Kanban" hint="organized pipeline" />
              <HeroMetric title="Career plan" value="5-15y" hint="timeline forecasting" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="Problem"
            title="Job search is fragmented, reactive, and hard to scale"
            description="Most candidates juggle too many disconnected tools. Sirr brings structure and intelligence into one workflow."
          />
          <div className="mb-8 grid gap-5 lg:grid-cols-2">
            <MarketingVisual
              src="/marketing/features/ai-analytics.png"
              alt="Abstract AI analytics dashboard for career decisions"
              label="Career intelligence"
            />
            <MarketingVisual
              src="/marketing/features/support-workspace.png"
              alt="Abstract workspace showing candidate support and progress insights"
              label="Guided workspace"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem} className="premium-panel rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-sm text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-tint border-y border-border/60 py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Core pillars"
              title="One platform for opportunities, applications, and growth"
              description="Sirr is not just a job board. It is your intelligent operating system for modern career progression."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="premium-surface rounded-2xl p-6">
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="How it works"
            title="From saved jobs to smarter career decisions in four steps"
            align="left"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="premium-surface rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <FeatureStrip
          id="cv-cover-letter"
          title="AI CV and cover letters tailored to each role"
          description="Generate polished, role-specific documents with clearer structure, stronger keywords, and export-ready output."
          items={["Tailored CV generation", "Cover letter generation", "PDF export", "AI optimization"]}
          icon={FileText}
          visualSrc="/marketing/features/cv-cover-letter.png"
          visualAlt="Abstract Sirr-blue AI CV and cover letter generation visual"
        />
        <FeatureStrip
          id="application-tracker"
          title="Application tracker that keeps every move organized"
          description="Manage your full pipeline in a clear kanban view with reminders, follow-ups, and stage-level visibility."
          items={["Kanban workflow", "Application stages", "Follow-up reminders", "Organized job search"]}
          icon={ClipboardCheck}
          visualSrc="/marketing/features/application-tracker.png"
          visualAlt="Abstract Sirr-blue application tracker workflow visual"
          flip
        />
        <FeatureStrip
          id="chrome-extension"
          title="Chrome extension for premium one-click capture"
          description="Save jobs from LinkedIn, Finn, NAV, and company websites instantly, then let AI extract context automatically."
          items={["LinkedIn + Finn + NAV", "One-click save", "AI-ready extraction", "Pro-focused workflow"]}
          icon={Compass}
          visualSrc="/marketing/features/chrome-extension.png"
          visualAlt="Abstract Sirr-blue browser extension capture visual"
        />
        <FeatureStrip
          id="career-plan"
          title="Career plan with long-term intelligence"
          description="Understand where you are going with timeline projections, salary forecasting, and practical skill roadmaps."
          items={["Salary forecast", "Career timeline", "Skills roadmap", "AI recommendations"]}
          icon={Target}
          visualSrc="/marketing/features/career-plan.png"
          visualAlt="Abstract Sirr-blue career planning timeline visual"
          flip
        />
        <FeatureStrip
          id="match-score"
          title="Match score explains why a role fits"
          description="Get clear compatibility signals, skills overlap details, and actionable AI guidance before you apply."
          items={["Job compatibility", "Skills overlap", "AI fit explanation", "Application confidence"]}
          icon={Sparkles}
          visualSrc="/marketing/features/match-score.png"
          visualAlt="Abstract Sirr-blue job match score analytics visual"
        />

        <section className="section-tint container mx-auto my-8 rounded-3xl border border-border/65 px-4 py-20">
          <SectionHeader
            eyebrow="Testimonials"
            title="Built for ambitious candidates who want clarity"
            description="Placeholder customer voices for MVP storytelling."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Sirr gave me structure, not just more jobs. I finally understood where to focus.",
              "The tailored CV and cover letter flow saved me hours every week.",
              "I now track every application and follow-up in one place with confidence.",
            ].map((quote, idx) => (
              <blockquote key={quote} className="premium-surface rounded-2xl p-6">
                <p className="text-sm text-muted-foreground">“{quote}”</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.09em] text-primary">
                  Candidate {idx + 1}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section-tint border-y border-border/60 py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Pricing preview"
              title="Start free, scale to Pro when you need full power"
              description="Simple two-plan validation model for MVP."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <PricingCard
                name="Free"
                price="0 NOK"
                features={[
                  "Manual job saving",
                  "Basic application tracker",
                  "Limited AI generations per month",
                  "Basic match insights",
                ]}
                cta={t.cta.free}
              />
              <PricingCard
                name="Pro"
                price="149 NOK / month"
                popular
                features={[
                  "Chrome extension access",
                  "Unlimited tracker usage",
                  "AI tailored CV generation",
                  "AI cover letter generation",
                  "Salary forecasting and skills roadmap",
                ]}
                cta={t.cta.pro}
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Fair usage applies.</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="FAQ preview"
            title="Need details before you start?"
            description="See quick answers or explore the full FAQ."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "What is Sirr?",
              "Is Sirr a job board?",
              "How does AI CV generation work?",
              "Is there a free plan?",
            ].map((item) => (
              <div key={item} className="premium-surface rounded-2xl p-5">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className={buttonClassName("outline", "default")}>
              Go to full FAQ
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="relative border-t border-border/60 bg-gradient-to-b from-background to-primary/8 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.15),transparent_54%)]" />
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Take control of your career journey with AI.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Move from scattered actions to a focused, intelligent workflow designed for better opportunities.
            </p>
            <div className="mt-8">
              <a href={authUrl()} className={buttonClassName("default", "lg")}>
                {t.cta.final}
              </a>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

function HeroMetric({ title, value, hint }: { title: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-white/18 bg-slate-950/25 p-4 text-left text-white">
      <p className="text-xs uppercase tracking-[0.1em] text-white/70">{title}</p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
      <p className="text-xs text-white/75">{hint}</p>
    </div>
  );
}

function MarketingVisual({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-slate-950 shadow-strong">
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={640}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
        {label}
      </span>
    </div>
  );
}

function FeatureStrip({
  id,
  title,
  description,
  items,
  icon: Icon,
  visualSrc,
  visualAlt,
  flip = false,
}: {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  visualSrc: string;
  visualAlt: string;
  flip?: boolean;
}) {
  return (
    <section id={id} className="container mx-auto px-4 py-12 md:py-16">
      <div className={cn("grid gap-8 lg:grid-cols-2 lg:items-center", flip && "lg:[&>*:first-child]:order-2")}>
        <div>
          <div className="inline-flex rounded-xl border border-primary/25 bg-primary/10 p-2 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
          <p className="mt-3 text-muted-foreground">{description}</p>
          <ul className="mt-5 space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="premium-panel group relative overflow-hidden rounded-3xl p-2 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,hsl(var(--primary)/0.2),transparent_38%)]" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-white/45 bg-slate-950">
            <Image
              src={visualSrc}
              alt={visualAlt}
              width={1024}
              height={640}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
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
      className={cn(
        "premium-surface rounded-2xl p-7",
        popular && "border-primary/55 ring-2 ring-primary/25 shadow-strong",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{name}</h3>
        {popular && <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{price}</p>
      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href={authUrl()} className={cn(buttonClassName(popular ? "default" : "outline", "default"), "mt-7 w-full justify-center")}>
        {cta}
      </a>
    </article>
  );
}
