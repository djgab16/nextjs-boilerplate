"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 via-accent/20 to-ring/10 p-8 text-center sm:p-12 lg:p-16"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
        whileInView={
          prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
        }
        viewport={{ once: true, margin: "-50px" }}
        transition={
          prefersReducedMotion ? undefined : { duration: 0.5 }
        }
      >
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Ready to build smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Join thousands of developers who are already using Kiro to ship better
          software, faster. Start your journey today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/tutorials">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/community">Join the Community</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
