import Link from "next/link";
import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.terms;

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "Vilkår", path: "/terms" },
        ]}
      />
      <MarketingPage
        title="Terms of Service"
        subtitle="The rules for using Sirr’s platform and services."
      >
        <ContentSection
          eyebrow="Agreement"
          title="Acceptance and eligibility"
          description="By using Sirr, you agree to these Terms of Service. You must provide accurate information and be legally able to enter into this agreement."
        >
          <SectionList
            items={[
              "You are responsible for your account credentials and account activity.",
              "You must use the service lawfully and in accordance with these terms.",
              "If you do not agree with these terms, you must stop using the service.",
            ]}
          />
        </ContentSection>

        <ContentSection
          muted
          eyebrow="Service"
          title="What Sirr provides"
          description="Sirr is an AI Career Intelligence platform to help users track opportunities and improve application quality."
        >
          <div className="space-y-4">
            <TermsCard
              title="Platform functionality"
              body="Sirr supports workflows such as job tracking, application stage management, AI-assisted CV and cover letter tailoring, and career planning."
            />
            <TermsCard
              title="Acceptable use"
              body="Users must not abuse the service, attempt unauthorized access, or upload unlawful content."
            />
            <TermsCard
              title="Service changes"
              body="We may improve, change, or discontinue parts of the service to maintain quality, security, and product fit."
            />
          </div>
        </ContentSection>

        <ContentSection
          eyebrow="Responsibilities"
          title="Data, privacy, and intellectual property"
          description="These terms govern account use and service access. Privacy handling is described separately."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TermsCard
              title="Privacy and data"
              body="Use of personal data is governed by our Privacy Policy, including user rights and GDPR details."
            />
            <TermsCard
              title="Intellectual property"
              body="Sirr and related branding, software, and design assets remain the property of Sirr unless otherwise stated."
            />
            <TermsCard
              title="Termination and suspension"
              body="We may suspend or terminate access for serious misuse, legal violations, or security risks."
            />
            <TermsCard
              title="Liability and disclaimers"
              body="Sirr is provided on an as-available basis. To the extent permitted by law, liability is limited for indirect or consequential losses."
            />
          </div>
        </ContentSection>

        <ContentSection
          muted
          eyebrow="Legal"
          title="Governing law, contact, and updates"
          description="These terms are governed by Norwegian law unless mandatory local law requires otherwise."
        >
          <div className="premium-surface rounded-2xl border border-primary/15 p-6">
            <p className="text-sm text-muted-foreground">
              Questions about these terms can be sent to <strong>hello@sirr.no</strong>. Material updates to these terms
              are communicated through in-app notices and/or email. Continued use after updates means acceptance of the
              revised terms.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Related document:{" "}
              <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </ContentSection>
      </MarketingPage>
    </>
  );
}

function TermsCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="premium-surface rounded-2xl border border-primary/15 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}

function SectionList({ items }: { items: string[] }) {
  return (
    <div className="premium-surface rounded-2xl border border-primary/15 p-6">
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
