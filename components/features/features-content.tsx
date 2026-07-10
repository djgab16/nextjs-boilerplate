"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Bot,
  ListChecks,
  Brain,
  GitBranch,
  GitPullRequest,
  Layers,
  Terminal,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: FileText,
    title: "AI Specifications",
    description:
      "Transform natural language descriptions into detailed, structured specifications with requirements, acceptance criteria, and edge case handling. Every feature starts with a clear plan.",
  },
  {
    icon: Bot,
    title: "Autonomous Development",
    description:
      "Kiro autonomously implements features from specification to working code. It reads your codebase, understands conventions, and delivers production-quality changes for your review.",
  },
  {
    icon: ListChecks,
    title: "Task Planning",
    description:
      "Complex features are broken into manageable, ordered tasks with clear dependencies. Kiro plans the implementation sequence so nothing gets missed.",
  },
  {
    icon: Brain,
    title: "Context Awareness",
    description:
      "Full project understanding including file relationships, naming conventions, design patterns, and architectural decisions. Changes are consistent with your existing codebase.",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description:
      "Native integration with GitHub for branch management, issue tracking, and collaborative workflows. Kiro works within your existing development process.",
  },
  {
    icon: GitPullRequest,
    title: "PR Automation",
    description:
      "Automatically create well-documented pull requests with meaningful descriptions, linked issues, and clear change summaries ready for team review.",
  },
  {
    icon: Layers,
    title: "Multi-file Editing",
    description:
      "Make coordinated changes across dozens of files simultaneously. Kiro understands cross-file dependencies and ensures all related changes are consistent.",
  },
  {
    icon: Terminal,
    title: "Terminal Automation",
    description:
      "Intelligent command execution for builds, tests, linting, and deployment. Kiro runs commands, interprets output, and fixes errors automatically.",
  },
  {
    icon: Database,
    title: "Agent Memory",
    description:
      "Kiro remembers your preferences, project patterns, and past decisions. Steering files and learnings persist across sessions for continuously improving results.",
  },
  {
    icon: Globe,
    title: "Web Automation",
    description:
      "Interact with web tools, fetch documentation, research APIs, and validate deployments. Kiro can browse the web to gather information needed for implementation.",
  },
];

export function FeaturesContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="features-page-heading"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.5 }
            }
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Capabilities
          </motion.span>

          <motion.h1
            id="features-page-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.5, delay: 0.1 }
            }
          >
            Powerful Features for Modern Development
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.5, delay: 0.2 }
            }
          >
            From specification to deployment, Kiro provides everything you
            need to build software faster without sacrificing quality.
          </motion.p>
        </div>
      </section>

      {/* Feature Grid */}
      <section
        className="px-4 pb-20 sm:px-6 lg:px-8"
        aria-label="Feature list"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
