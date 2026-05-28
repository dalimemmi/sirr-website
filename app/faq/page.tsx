import type { Metadata } from "next";
import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";

export const metadata: Metadata = {
  title: "FAQ — Sirr",
  description: "Frequently asked questions about Sirr AI Career Intelligence Platform.",
};

const faq = [
  ["What is Sirr?", "Sirr is an AI Career Intelligence Platform that helps you find opportunities, win applications, and grow your career."],
  ["Is Sirr a job board?", "No. Sirr is not just a job board. It combines matching, document generation, tracking, and long-term planning."],
  ["How does Sirr help me apply for jobs?", "Sirr helps you save jobs, generate tailored CVs and cover letters, and track applications in one workflow."],
  ["Can I save jobs from LinkedIn and Finn?", "Yes. Sirr is designed to support job capture from LinkedIn, Finn, NAV, and company websites."],
  ["Is the Chrome extension included in the Free plan?", "No. Chrome extension access is part of the Pro plan."],
  ["How does AI CV generation work?", "Sirr uses job context and your profile to generate role-specific CV drafts with stronger relevance."],
  ["Can I generate cover letters?", "Yes. Sirr can generate personalized cover letters and help you adapt messaging per opportunity."],
  ["What is the Career Plan feature?", "Career Plan provides roadmap guidance, salary forecasting, skills planning, and AI recommendations."],
  ["Is there a free plan?", "Yes. You can start with a Free plan for core workflow validation."],
  ["What does Pro include?", "Pro unlocks extension access, advanced AI generation, full career planning, and deeper insights."],
  ["Are there AI usage limits?", "Yes. Fair usage limits apply to ensure quality and stable service for all users."],
  ["Is my data private?", "Sirr is built with privacy-conscious principles. More detailed policy text will be published in legal pages."],
];

export default function FaqPage() {
  return (
    <MarketingPage
      title="Frequently asked questions"
      subtitle="Everything you need to know before using Sirr for your next career move."
    >
      <ContentSection
        eyebrow="FAQ"
        title="Answers for candidates evaluating Sirr"
        description="Sirr is positioned as an AI Career Intelligence Platform, not a single-purpose tool."
      >
        <div className="mx-auto grid max-w-4xl gap-4">
          {faq.map(([q, a]) => (
            <article key={q} className="premium-surface rounded-2xl p-6">
              <h2 className="text-lg font-semibold">{q}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a}</p>
            </article>
          ))}
        </div>
      </ContentSection>
    </MarketingPage>
  );
}
