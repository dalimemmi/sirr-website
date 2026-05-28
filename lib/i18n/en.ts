export type WebsiteLocale = "en" | "no";

export type WebsiteCopy = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  lang: {
    label: string;
    en: string;
    no: string;
  };
  landing: {
    signIn: string;
    getStarted: string;
    badge: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    howItWorks: string;
    stepsTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    benefitsTitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    exampleTitle: string;
    exampleY1: string;
    exampleY1Text: string;
    exampleY3: string;
    exampleY3Text: string;
    employersTitle: string;
    employersDesc: string;
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
  },
  lang: {
    label: "Language",
    en: "English",
    no: "Norwegian",
  },
  landing: {
    signIn: "Sign in",
    getStarted: "Get started",
    badge: "AI Career Intelligence",
    heroTitle: "Navigate your career with",
    heroHighlight: "AI intelligence",
    heroSubtitle:
      "Sirr helps you understand where you are, where you could be in 5, 10 and 15 years — and which jobs fit you best.",
    howItWorks: "See how it works",
    stepsTitle: "How it works",
    step1Title: "1. Build your profile",
    step1Desc: "Describe your experience, goals, and paste or upload your CV.",
    step2Title: "2. Get a career plan",
    step2Desc: "AI creates a realistic 5, 10 and 15-year plan for your market.",
    step3Title: "3. Match with jobs",
    step3Desc: "See relevant roles, skill gaps, and tailored applications.",
    benefitsTitle: "Benefits for job seekers",
    benefit1: "Personal roadmap tailored to your goals",
    benefit2: "Job matches based on skills and preferences",
    benefit3: "Course and certification suggestions",
    benefit4: "Cover letter and CV tips per role",
    exampleTitle: "Example: 5-year plan",
    exampleY1: "Years 1–2:",
    exampleY1Text:
      "Build skills in React and product management. Target junior product or UX developer roles.",
    exampleY3: "Years 3–5:",
    exampleY3Text:
      "Own a product area, complete relevant certification, aim for mid-level roles.",
    employersTitle: "For employers (coming soon)",
    employersDesc: "Companies will soon post jobs and find candidates who match their career plan.",
  },
};
