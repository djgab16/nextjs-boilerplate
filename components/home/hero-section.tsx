"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  const fadeUpDelay = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
      aria-labelledby="hero-heading"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-ring/10 blur-3xl"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            AI-Native Development
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          {...fadeUpDelay(0.1)}
        >
          Build Smarter with{" "}
          <span className="bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent">
            Kiro
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          {...fadeUpDelay(0.2)}
        >
          The AI-native IDE that transforms how you build software. From
          specifications to deployment, Kiro automates your workflow while
          keeping you in control.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          {...fadeUpDelay(0.3)}
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/tutorials">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
