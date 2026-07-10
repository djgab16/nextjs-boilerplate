import type { Metadata } from "next";
import { TutorialsContent } from "@/components/tutorials/tutorials-content";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Learn Kiro through hands-on tutorials categorized by difficulty. From beginner basics to advanced specification patterns.",
};

export default function TutorialsPage() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="tutorials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1
            id="tutorials-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
          >
            Tutorials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master Kiro at your own pace with step-by-step tutorials. Filter by
            difficulty and track your progress as you learn.
          </p>
        </header>
        <TutorialsContent />
      </div>
    </section>
  );
}
