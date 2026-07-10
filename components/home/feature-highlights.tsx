"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Bot,
  GitBranch,
  Brain,
  Terminal,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Specifications",
    description:
      "Generate detailed specifications from natural language. Kiro transforms your ideas into structured, actionable plans.",
  },
  {
    icon: Bot,
    title: "Autonomous Development",
    description:
      "Let Kiro autonomously implement features from spec to code. Review and approve changes at your own pace.",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description:
      "Seamless pull request automation, branch management, and code review workflows built right in.",
  },
  {
    icon: Brain,
    title: "Context Awareness",
    description:
      "Kiro understands your entire codebase, conventions, and patterns to deliver consistent, high-quality code.",
  },
  {
    icon: Terminal,
    title: "Terminal Automation",
    description:
      "Run builds, tests, and deployments with intelligent command execution and error recovery.",
  },
  {
    icon: Layers,
    title: "Multi-file Editing",
    description:
      "Make coordinated changes across multiple files simultaneously with full dependency awareness.",
  },
];

export function FeatureHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to build faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Kiro combines powerful AI capabilities with developer-friendly
            workflows to supercharge your productivity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/30"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.4, delay: index * 0.1 }
              }
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
