import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/seo/faq";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.faq;

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FaqPageJsonLd />
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
            {FAQ_ITEMS.map(([q, a]) => (
              <article key={q} className="premium-surface rounded-2xl p-6">
                <h2 className="text-lg font-semibold">{q}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </article>
            ))}
          </div>
        </ContentSection>
      </MarketingPage>
    </>
  );
}
