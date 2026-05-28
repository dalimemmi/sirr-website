export type WebsiteLocale = "en" | "no";

export type WebsiteCopy = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    shortDescription: string;
  };
  lang: {
    label: string;
    en: string;
    no: string;
  };
  nav: {
    features: string;
    pricing: string;
    about: string;
    faq: string;
    contact: string;
    login: string;
    startFree: string;
  };
  cta: {
    startFree: string;
    getStarted: string;
    trySirr: string;
    login: string;
    pro: string;
    free: string;
    final: string;
    seeHowItWorks: string;
  };
  footer: {
    product: string;
    company: string;
    legal: string;
    follow: string;
    links: {
      features: string;
      pricing: string;
      faq: string;
      about: string;
      contact: string;
      privacy: string;
      terms: string;
      status: string;
      linkedin: string;
      x: string;
      github: string;
    };
  };
};

export const en: WebsiteCopy = {
  meta: {
    title: "Sirr — AI Career Intelligence",
    description: "Plan your career with AI — personalized roadmaps, job matching, and application tools.",
  },
  brand: {
    name: "Sirr",
    tagline: "AI Career Intelligence",
    shortDescription:
      "Sirr transforms job search chaos into an organized, AI-assisted career workflow for ambitious professionals.",
  },
  lang: {
    label: "Language",
    en: "English",
    no: "Norwegian",
  },
  nav: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    login: "Login",
    startFree: "Start free",
  },
  cta: {
    startFree: "Start free",
    getStarted: "Get started",
    trySirr: "Try Sirr",
    login: "Login",
    pro: "Get Pro",
    free: "Start Free Plan",
    final: "Start free",
    seeHowItWorks: "See how it works",
  },
  footer: {
    product: "Product",
    company: "Company",
    legal: "Legal",
    follow: "Follow",
    links: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      status: "Status",
      linkedin: "LinkedIn",
      x: "X",
      github: "GitHub",
    },
  },
};
