"use client";

import { Briefcase, Building2, Compass, Target } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border/80 bg-card shadow-sm ${className ?? ""}`}>{children}</div>
  );
}

export function HowItWorksSection() {
  const { t } = useLanguage();
  const steps = [
    { icon: Compass, title: t.landing.step1Title, desc: t.landing.step1Desc },
    { icon: Target, title: t.landing.step2Title, desc: t.landing.step2Desc },
    { icon: Briefcase, title: t.landing.step3Title, desc: t.landing.step3Desc },
  ];

  return (
    <section id="how-it-works" className="border-t border-border/60 bg-card/40 py-16 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold">{t.landing.stepsTitle}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <div className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const { t } = useLanguage();
  const benefits = [t.landing.benefit1, t.landing.benefit2, t.landing.benefit3, t.landing.benefit4];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-semibold">{t.landing.benefitsTitle}</h2>
        <ul className="mx-auto grid max-w-2xl gap-3 rounded-2xl border bg-card p-8 text-muted-foreground shadow-sm">
          {benefits.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExampleSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border/60 bg-card py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="mb-4 text-center text-2xl font-semibold">{t.landing.exampleTitle}</h2>
        <Card>
          <div className="p-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">{t.landing.exampleY1}</strong> {t.landing.exampleY1Text}
            </p>
            <p className="mt-3">
              <strong className="text-foreground">{t.landing.exampleY3}</strong> {t.landing.exampleY3Text}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function EmployersSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t py-16">
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <Building2 className="mb-4 h-10 w-10 text-muted-foreground" />
        <h2 className="text-xl font-semibold">{t.landing.employersTitle}</h2>
        <p className="mt-2 max-w-lg text-muted-foreground">{t.landing.employersDesc}</p>
      </div>
    </section>
  );
}
