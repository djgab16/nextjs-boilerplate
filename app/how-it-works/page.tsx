import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/how-it-works/how-it-works-content";

export const metadata: Metadata = {
  title: "How Kiro Works",
  description:
    "See how Kiro transforms your ideas into production-ready code through an 8-step workflow from specification to deployment.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
