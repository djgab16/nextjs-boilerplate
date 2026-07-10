"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  FileText,
  ListChecks,
  Code2,
  TestTube2,
  Eye,
  GitPullRequest,
  Rocket,
  Sparkles,
} from "lucide-react";
import { WorkflowStep } from "./workflow-step";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description:
      "Describe what you want to build in natural language. Kiro understands intent, context, and constraints.",
  },
  {
    icon: FileText,
    title: "Specification",
    description:
      "AI generates a detailed spec with requirements, acceptance criteria, and edge cases for your review.",
  },
  {
    icon: ListChecks,
    title: "Task Planning",
    description:
      "Complex work is broken into ordered, manageable tasks with clear dependencies and milestones.",
  },
  {
    icon: Code2,
    title: "Implementation",
    description:
      "Kiro writes production-quality code following your project conventions, patterns, and architecture.",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description:
      "Automated test execution with intelligent error analysis and self-correction until all tests pass.",
  },
  {
    icon: Eye,
    title: "Review",
    description:
      "You review every change with full visibility. Approve, request modifications, or provide feedback.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Request",
    description:
      "Well-documented PRs are created automatically with meaningful descriptions and linked context.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Merged changes flow through your CI/CD pipeline. Kiro validates the deployment succeeded.",
  },
];

export function HowItWorksContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="how-it-works-heading"
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
            Workflow
          </motion.span>

          <motion.h1
            id="how-it-works-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 0.5, delay: 0.1 }
            }
          >
            How Kiro Works
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
            From a simple idea to a deployed feature, Kiro guides your code
            through an 8-step pipeline that ensures quality at every stage.
          </motion.p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section
        className="px-4 pb-20 sm:px-6 lg:px-8"
        aria-label="Development workflow steps"
      >
        <div className="mx-auto max-w-7xl">
          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <div className="mx-auto max-w-md">
              {steps.map((step, index) => (
                <WorkflowStep
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  totalSteps={steps.length}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Desktop: horizontal grid layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8">
              {steps.slice(0, 4).map((step, index) => (
                <WorkflowStep
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  totalSteps={4}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-12 grid grid-cols-4 gap-8">
              {steps.slice(4).map((step, index) => (
                <WorkflowStep
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 5}
                  totalSteps={8}
                  index={index + 4}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section
        className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="workflow-summary-heading"
      >
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.5 }
          }
        >
          <h2
            id="workflow-summary-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl"
          >
            From Idea to Production in Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            What used to take hours of coding, testing, and deployment setup
            now happens in a streamlined, AI-powered workflow. You stay in
            control while Kiro handles the heavy lifting.
          </p>
        </motion.div>
      </section>
    </>
  );
}
