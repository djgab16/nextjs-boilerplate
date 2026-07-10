"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 12000, label: "Active Developers", suffix: "+" },
  { value: 5400, label: "Projects Built", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 150, label: "Community Events", suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="border-y border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="stats-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Trusted by developers worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Join a growing community of developers building the future with
            AI-powered tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
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
              <p className="text-4xl font-bold text-primary sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
