import type { Metadata } from "next";
import { FeaturesContent } from "@/components/features/features-content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Kiro's powerful features including AI specifications, autonomous development, task planning, GitHub integration, and more.",
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
