import { ContentSection, MarketingPage } from "@/components/marketing/PageScaffold";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buttonClassName } from "@/components/ui/button";
import { authUrl } from "@/lib/appLinks";
import { cn } from "@/lib/cn";
import { pageSeo } from "@/lib/seo/metadata";

export const metadata = pageSeo.contact;

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hjem", path: "" },
          { name: "Kontakt", path: "/contact" },
        ]}
      />
      <MarketingPage
      title="Contact Sirr"
      subtitle="Reach out for early access, partnerships, or product questions."
    >
      <ContentSection
        eyebrow="Contact"
        title="Professional SaaS-style contact experience"
        description="Form UI only for now. Backend submission will be connected in a future phase."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <form className="premium-surface rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="First name" placeholder="Amina" />
              <Input label="Last name" placeholder="Hansen" />
            </div>
            <div className="mt-4">
              <Input label="Email" type="email" placeholder="you@company.com" />
            </div>
            <div className="mt-4">
              <Input label="Company" placeholder="Optional" />
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
              <textarea
                className="min-h-32 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-primary/30 placeholder:text-muted-foreground focus:ring-2"
                placeholder="How can we help?"
              />
            </div>
            <button type="button" className={cn(buttonClassName("default", "default"), "mt-5 w-full justify-center")}>
              Send message
            </button>
          </form>

          <aside className="premium-surface rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Other ways to reach us</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Email: hello@sirr.no (placeholder)</li>
              <li>LinkedIn: Sirr (placeholder)</li>
              <li>X: @sirr (placeholder)</li>
            </ul>
            <div className="mt-7 rounded-xl border border-border/70 bg-primary/5 p-4">
              <p className="text-sm font-medium">Ready to try the product instead?</p>
              <a href={authUrl()} className={cn(buttonClassName("default", "default"), "mt-3")}>
                Start free
              </a>
            </div>
          </aside>
        </div>
      </ContentSection>
    </MarketingPage>
    </>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-foreground">{label}</label>
      <input
        {...props}
        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-primary/30 placeholder:text-muted-foreground focus:ring-2"
      />
    </div>
  );
}
