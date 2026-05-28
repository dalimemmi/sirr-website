import { FAQ_ITEMS } from "@/lib/seo/faq";
import { SITE_URL, absoluteUrl } from "@/lib/seo/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
}

export function OrganizationWebSiteJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Sirr",
          url: SITE_URL,
          logo: `${SITE_URL}/brand/sirr-logo-main.png`,
          description:
            "Sirr er en AI-drevet karriereplattform for jobbsøk, søknader og langsiktig karrierevekst i Norge.",
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: absoluteUrl("/contact"),
            availableLanguage: ["Norwegian", "English"],
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Sirr",
          description:
            "AI Career Intelligence — finn stillinger, vinn søknader og planlegg karrieren med støtte for Finn.no, LinkedIn og NAV.",
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: ["nb-NO", "en-US"],
        },
      ]}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Sirr",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
          "AI-plattform for jobbmatching, tilpasset CV og søknadsbrev, søknadssporing og karriereplanlegging.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NOK",
          description: "Gratis plan tilgjengelig. Pro-plan fra 149 NOK per måned.",
        },
        featureList: [
          "Jobbmatching og matchscore",
          "Søknadssporing",
          "AI-CV og søknadsbrev",
          "Chrome-utvidelse for Finn og LinkedIn",
          "Karriereplan og lønnsprognose",
        ],
        inLanguage: ["nb", "en"],
      }}
    />
  );
}

export function FaqPageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}
