"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  FileText,
  Bot,
  Zap,
  Shield,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function AboutContent() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay },
        };

  return (
    <>
      {/* Hero Introduction */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="about-heading"
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground"
            {...fadeUp()}
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            About Kiro
          </motion.span>

          <motion.h1
            id="about-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            {...fadeUp(0.1)}
          >
            What is{" "}
            <span className="bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent">
              Kiro
            </span>
            ?
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            {...fadeUp(0.2)}
          >
            Kiro is an AI-native integrated development environment that
            reimagines how software gets built. Instead of treating AI as an
            afterthought, Kiro puts intelligent automation at the core of
            every development workflow.
          </motion.p>
        </div>
      </section>

      {/* Product Philosophy */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="philosophy-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp()}>
              <h2
                id="philosophy-heading"
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Why Kiro Exists
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Modern software development is complex. Developers spend more
                time wrangling toolchains, writing boilerplate, and managing
                processes than actually solving problems. Kiro was built to
                change that.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We believe developers should focus on design decisions,
                architecture, and creative problem-solving while AI handles
                the repetitive, mechanical aspects of turning ideas into
                working code.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              {...fadeUp(0.1)}
            >
              {[
                {
                  icon: Lightbulb,
                  label: "Developer-First",
                  detail: "Built for how developers actually work",
                },
                {
                  icon: Shield,
                  label: "You Stay in Control",
                  detail: "Review and approve every change",
                },
                {
                  icon: Zap,
                  label: "10x Productivity",
                  detail: "From idea to PR in minutes",
                },
                {
                  icon: Eye,
                  label: "Full Transparency",
                  detail: "See exactly what the AI is doing",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <item.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                  <p className="mt-2 font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specification-Driven Development */}
      <section
        className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="spec-driven-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="text-center" {...fadeUp()}>
            <h2
              id="spec-driven-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Specification-Driven Development
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Instead of jumping straight to code, Kiro starts with a clear
              specification. This ensures every line of code has a purpose and
              nothing gets lost in translation.
            </p>
          </motion.div>

          {/* Visual illustration */}
          <motion.div
            className="mx-auto mt-12 max-w-3xl"
            {...fadeUp(0.1)}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {/* Diagram header */}
              <div className="border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/50" />
                  <div className="h-3 w-3 rounded-full bg-green-400/50" />
                  <span className="ml-2 text-sm text-muted-foreground">
                    specification.kiro
                  </span>
                </div>
              </div>
              {/* Diagram content */}
              <div className="space-y-4 p-6">
                {[
                  {
                    step: "1",
                    title: "Describe Your Idea",
                    content:
                      '"Add user authentication with OAuth providers"',
                  },
                  {
                    step: "2",
                    title: "AI Generates Spec",
                    content:
                      "Requirements, acceptance criteria, edge cases",
                  },
                  {
                    step: "3",
                    title: "Review and Refine",
                    content:
                      "Collaborate with AI to perfect the spec",
                  },
                  {
                    step: "4",
                    title: "Implement from Spec",
                    content:
                      "AI writes code that exactly matches the spec",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agent Overview */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="agents-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="text-center" {...fadeUp()}>
            <h2
              id="agents-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              AI Agents That Work For You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Kiro uses specialized AI agents that understand code, context,
              and conventions to deliver production-quality results.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Spec Agent",
                description:
                  "Generates detailed specifications from natural language descriptions. Handles requirements, acceptance criteria, and edge cases.",
              },
              {
                icon: Bot,
                title: "Coding Agent",
                description:
                  "Writes, refactors, and maintains code across your entire codebase. Understands project conventions and patterns.",
              },
              {
                icon: Zap,
                title: "Task Agent",
                description:
                  "Breaks down complex tasks into manageable steps, prioritizes work, and coordinates between other agents.",
              },
            ].map((agent, index) => (
              <motion.article
                key={agent.title}
                className="rounded-xl border border-border bg-card p-6"
                {...fadeUp(index * 0.1)}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <agent.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {agent.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {agent.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section
        className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="differentiators-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="text-center" {...fadeUp()}>
            <h2
              id="differentiators-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              What Sets Kiro Apart
            </h2>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 max-w-3xl space-y-6"
            {...fadeUp(0.1)}
          >
            {[
              {
                title: "Spec-First, Not Prompt-First",
                description:
                  "Unlike chatbot-style tools, Kiro creates verifiable specifications before writing code. This means fewer bugs, better architecture, and traceable decisions.",
              },
              {
                title: "Full Codebase Understanding",
                description:
                  "Kiro does not just look at the file you have open. It understands your entire project, its patterns, dependencies, and conventions to make consistent changes.",
              },
              {
                title: "End-to-End Automation",
                description:
                  "From writing code to running tests, creating pull requests, and deploying, Kiro handles the complete software development lifecycle.",
              },
              {
                title: "Human-in-the-Loop",
                description:
                  "You approve every specification and review every change. Kiro amplifies your capabilities without taking away control or transparency.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <ArrowRight
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
