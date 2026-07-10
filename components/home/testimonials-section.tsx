"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Kiro completely changed how I approach new projects. What used to take days of planning now happens in minutes with AI specifications.",
    author: "Sarah Chen",
    role: "Senior Frontend Engineer",
    company: "TechCorp",
  },
  {
    quote:
      "The autonomous development feature is a game-changer. I describe what I want, and Kiro delivers production-ready code that matches our team's patterns.",
    author: "Marcus Johnson",
    role: "Full Stack Developer",
    company: "StartupLab",
  },
  {
    quote:
      "I was skeptical about AI coding tools, but Kiro's context awareness blew me away. It understands our codebase better than most new hires.",
    author: "Priya Patel",
    role: "Engineering Lead",
    company: "DevScale",
  },
];

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Loved by developers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Hear from developers who have transformed their workflow with Kiro.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-50px" }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.4, delay: index * 0.15 }
              }
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold"
                  aria-hidden="true"
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <cite className="text-sm font-semibold text-foreground not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
