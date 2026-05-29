import Link from "next/link";
import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.privacy;

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "Personvern", path: "/privacy" },
        ]}
      />
      <MarketingPage
        title="Privacy Policy"
        subtitle="How Sirr handles job-related data, protects user rights, and complies with GDPR."
      >
        <ContentSection
          eyebrow="Overview"
          title="Sirr processes data to improve your job search workflow"
          description="Sirr is an AI Career Intelligence platform. We process relevant job-related public data to help you track jobs, tailor applications, and plan your career."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <PolicyCard
              title="Platform purpose"
              body="Sirr helps users discover opportunities, organize applications, and improve outcomes using structured workflows and AI support."
            />
            <PolicyCard
              title="Public job-related data"
              body="We may process public job descriptions, company names, company logos, role requirements, and related posting metadata when users save opportunities."
            />
          </div>
        </ContentSection>

        <ContentSection
          muted
          eyebrow="Data collection"
          title="What data we collect"
          description="We collect only what is necessary to deliver and improve the service."
        >
          <div className="space-y-4">
            <PolicyBlock
              title="Account and contact data"
              items={["Name", "Email address", "Profile and account settings"]}
            />
            <PolicyBlock
              title="Job and application data"
              items={[
                "Saved job listings and job descriptions",
                "Company names and logos included in job postings",
                "User notes, statuses, reminders, and tracking history",
                "Generated CV/cover-letter drafts and related context",
              ]}
            />
            <PolicyBlock
              title="Technical and usage data"
              items={[
                "Basic logs required for security, reliability, and debugging",
                "Aggregated product analytics for performance and feature quality",
              ]}
            />
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Purpose and legal basis"
          title="Why we process data"
          description="Under GDPR Article 6, processing is based on contract performance, legitimate interests, and consent where required."
        >
          <div className="space-y-4">
            <PolicyCard
              title="Service delivery"
              body="To provide core functionality such as job tracking, application workflows, and tailored AI assistance."
            />
            <PolicyCard
              title="Product quality and security"
              body="To maintain stability, prevent abuse, and improve platform reliability and user experience."
            />
            <PolicyCard
              title="Consent-based processing"
              body="When specific optional features require consent, users can withdraw consent at any time."
            />
          </div>
        </ContentSection>

        <ContentSection
          muted
          eyebrow="Your rights"
          title="Deletion, access, and correction rights"
          description="Users can request deletion of stored data at any time."
        >
          <div className="premium-surface rounded-2xl p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Right to access your stored personal data</li>
              <li>Right to correct inaccurate or incomplete data</li>
              <li>Right to delete your data and close your account</li>
              <li>Right to restrict or object to specific processing</li>
              <li>Right to data portability where applicable</li>
              <li>Right to lodge a complaint with a supervisory authority in Norway/EU</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Sharing and updates"
          title="No personal data sharing for third-party marketing"
          description="Sirr does not sell or share personal data with third parties for marketing."
        >
          <div className="space-y-4">
            <PolicyCard
              title="Processors only when needed"
              body="We use limited service providers for hosting and operations under contractual safeguards and data protection obligations."
            />
            <PolicyCard
              title="Contact and policy changes"
              body="For privacy requests, contact hello@sirr.no. Material updates are communicated via in-app notices and/or email."
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Related terms:{" "}
            <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </p>
        </ContentSection>
      </MarketingPage>
    </>
  );
}

function PolicyCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="premium-surface rounded-2xl border border-primary/15 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}

function PolicyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="premium-surface rounded-2xl border border-primary/15 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </article>
  );
}
