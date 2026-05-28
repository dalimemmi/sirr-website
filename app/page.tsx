import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/HomePage";

export const metadata: Metadata = {
  title: "Sirr — AI Career Intelligence Platform",
  description:
    "Sirr is an AI Career Intelligence Platform that helps you find opportunities, win applications, and grow your career.",
};

export default function Page() {
  return <HomePage />;
}
