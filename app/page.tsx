import { HeroSection } from "@/components/home/hero-section";
import { FeatureHighlights } from "@/components/home/feature-highlights";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
