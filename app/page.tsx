import { HomePage } from "@/components/marketing/HomePage";
import { SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.home;

export default function Page() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      <HomePage />
    </>
  );
}
