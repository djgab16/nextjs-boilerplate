import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "What is Kiro?",
  description:
    "Learn about Kiro, the AI-native IDE that transforms how you build software through specification-driven development and intelligent automation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
