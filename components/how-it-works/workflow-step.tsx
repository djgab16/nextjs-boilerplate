"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
  totalSteps: number;
  index: number;
}

export function WorkflowStep({
  icon: Icon,
  title,
  description,
  stepNumber,
  totalSteps,
  index,
}: WorkflowStepProps) {
  const prefersReducedMotion = useReducedMotion();
  const isLast = stepNumber === totalSteps;

  return (
    <motion.div
      className="relative flex gap-4 pb-12 last:pb-0 md:flex-col md:items-center md:gap-3 md:pb-0 md:text-center"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.4, delay: index * 0.1 }
      }
    >
      {/* Vertical connector line (mobile) */}
      {!isLast && (
        <div
          className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-0.5 bg-gradient-to-b from-primary/40 to-primary/10 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Horizontal connector line (desktop) */}
      {!isLast && (
        <div
          className="absolute left-[calc(50%+2rem)] top-6 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-primary/40 to-primary/10 md:block"
          aria-hidden="true"
        />
      )}

      {/* Step icon */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-sm shadow-primary/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex-1 md:mt-2">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">
          Step {stepNumber}
        </span>
        <h3 className="mt-1 text-base font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
