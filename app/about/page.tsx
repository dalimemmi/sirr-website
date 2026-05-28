import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.about;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "Om oss", path: "/about" },
        ]}
      />
      <MarketingPage
      title="Building the future of career intelligence"
      subtitle="Sirr helps candidates organize and improve job search decisions with AI-powered clarity."
    >
      <ContentSection
        eyebrow="Our story"
        title="Norway-first, globally ambitious"
        description="We started with one question: why is job search still fragmented when modern AI can orchestrate the entire workflow?"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            title="Clarity"
            body="Candidates need one place to understand opportunities, fit, and progression without tool overload."
          />
          <Card
            title="Execution"
            body="From tailored CVs to follow-up reminders, great outcomes come from consistent, organized action."
          />
          <Card
            title="Growth"
            body="Career decisions should include long-term intelligence, not just today's open positions."
          />
        </div>
      </ContentSection>
      <ContentSection
        muted
        eyebrow="Vision"
        title="A modern platform for better career decisions"
        description="Sirr is designed for launch, early customers, and strategic partnerships with a scalable roadmap ahead."
      >
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          Our focus is simple: transform job search chaos into an organized, AI-assisted system that helps people apply
          with confidence and grow intentionally.
        </p>
      </ContentSection>
    </MarketingPage>
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="premium-surface rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}
