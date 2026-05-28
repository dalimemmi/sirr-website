import { Check } from "lucide-react";
import Image from "next/image";
import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.features;

const blocks = [
  {
    title: "Job matching",
    description: "Understand which roles deserve your attention with compatibility signals and AI-backed context.",
    image: "/marketing/features/match-score.png",
    alt: "Abstract Sirr-blue job match score analytics visual",
    points: ["Match score", "AI relevance", "Smart recommendations"],
  },
  {
    title: "Application tracker",
    description: "Keep every job, follow-up, and deadline organized in a focused pipeline.",
    image: "/marketing/features/application-tracker.png",
    alt: "Abstract Sirr-blue application tracker workflow visual",
    points: ["Kanban workflow", "Deadlines", "Follow-ups", "Status tracking"],
  },
  {
    title: "AI tailored CVs",
    description: "Turn each role into a sharper CV draft with structure, keywords, and fit guidance.",
    image: "/marketing/features/cv-cover-letter.png",
    alt: "Abstract Sirr-blue AI CV and cover letter generation visual",
    points: ["Tailored resume generation", "Keyword optimization", "Role-specific adaptation"],
  },
  {
    title: "AI cover letters",
    description: "Create role-aware letters from the same intelligence that powers your application workspace.",
    image: "/marketing/features/cv-cover-letter.png",
    alt: "Abstract Sirr-blue document generation visual",
    points: ["Personalized cover letters", "Extracted job context", "Reusable templates"],
  },
  {
    title: "Chrome extension",
    description: "Capture roles from the sites you already use, then let Sirr structure the opportunity.",
    image: "/marketing/features/chrome-extension.png",
    alt: "Abstract Sirr-blue browser extension capture visual",
    points: ["Save jobs from anywhere", "LinkedIn, Finn, NAV support", "Company websites"],
  },
  {
    title: "Career planning",
    description: "Move beyond today’s application and map the skills, salary, and direction behind your next step.",
    image: "/marketing/features/career-plan.png",
    alt: "Abstract Sirr-blue career planning timeline visual",
    points: ["Career roadmap", "Salary growth", "Skills planning", "Recommendations"],
  },
  {
    title: "Career intelligence",
    description: "See your job search as a complete system with insights that connect actions to progress.",
    image: "/marketing/features/ai-analytics.png",
    alt: "Abstract AI analytics dashboard for career decisions",
    points: ["AI-powered insights", "Long-term planning", "Application analytics"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "Funksjoner", path: "/features" },
        ]}
      />
      <SoftwareApplicationJsonLd />
      <MarketingPage
      title="Features built for serious career progress"
      subtitle="Sirr combines discovery, execution, and long-term planning in one intelligent workspace."
    >
      <section className="container mx-auto px-4 pt-12">
        <div className="grid overflow-hidden rounded-3xl border border-primary/15 bg-slate-950 shadow-strong lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative p-8 text-white md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.45),transparent_42%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100/80">Feature operating system</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                Every tool connects back to the same career workflow.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50/78">
                The visuals here should make the product feel more tangible: matching, documents, tracking,
                capture, and long-term planning all share one premium Sirr-blue interface language.
              </p>
            </div>
          </div>
          <div className="relative min-h-72">
            <Image
              src="/marketing/features/support-workspace.png"
              alt="Abstract Sirr-blue workspace showing career support and progress insights"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <ContentSection
        eyebrow="Feature suite"
        title="Everything you need to find opportunities, win applications, and grow"
        description="Each feature is designed to reduce friction and increase confidence at every stage of your career journey."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="premium-surface group overflow-hidden rounded-3xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="relative border-b border-border/65 bg-slate-950">
                <Image
                  src={block.image}
                  alt={block.alt}
                  width={1024}
                  height={640}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/9] h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-white/5" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{block.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{block.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </MarketingPage>
    </>
  );
}
