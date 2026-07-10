export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "documentation" | "cheat-sheet" | "template" | "github" | "video";
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const documentation: Resource[] = [
  {
    id: "doc-1",
    title: "Getting Started Guide",
    description:
      "Complete guide to installing and configuring Kiro for your development environment.",
    url: "#",
    type: "documentation",
    icon: "BookOpen",
  },
  {
    id: "doc-2",
    title: "Specification Language Reference",
    description:
      "Full reference for writing specifications that Kiro can interpret and execute.",
    url: "#",
    type: "documentation",
    icon: "FileText",
  },
  {
    id: "doc-3",
    title: "API Documentation",
    description:
      "Complete API reference for Kiro's extension system and plugin architecture.",
    url: "#",
    type: "documentation",
    icon: "Code",
  },
  {
    id: "doc-4",
    title: "Configuration Reference",
    description:
      "All configuration options for customizing Kiro's behavior, agents, and integrations.",
    url: "#",
    type: "documentation",
    icon: "Settings",
  },
];

export const cheatSheets: Resource[] = [
  {
    id: "cs-1",
    title: "Specification Syntax Cheat Sheet",
    description:
      "Quick reference for all specification syntax, patterns, and best practices.",
    url: "#",
    type: "cheat-sheet",
    icon: "Zap",
  },
  {
    id: "cs-2",
    title: "Keyboard Shortcuts",
    description:
      "All keyboard shortcuts for Kiro's editor, navigation, and AI commands.",
    url: "#",
    type: "cheat-sheet",
    icon: "Keyboard",
  },
  {
    id: "cs-3",
    title: "Agent Commands Quick Reference",
    description:
      "Complete list of agent commands for task planning, code generation, and automation.",
    url: "#",
    type: "cheat-sheet",
    icon: "Terminal",
  },
];

export const templates: Resource[] = [
  {
    id: "tpl-1",
    title: "Next.js Full-Stack Starter",
    description:
      "Production-ready Next.js template with Kiro specifications for common features.",
    url: "#",
    type: "template",
    icon: "Layout",
  },
  {
    id: "tpl-2",
    title: "REST API Specification Template",
    description:
      "Template for defining REST API endpoints with validation, auth, and error handling specs.",
    url: "#",
    type: "template",
    icon: "Server",
  },
  {
    id: "tpl-3",
    title: "React Component Library Starter",
    description:
      "Starter template for building a component library with Kiro-driven documentation.",
    url: "#",
    type: "template",
    icon: "Layers",
  },
];

export const githubExamples: Resource[] = [
  {
    id: "gh-1",
    title: "kiro-examples/todo-app",
    description:
      "Complete todo application built from specifications demonstrating the full Kiro workflow.",
    url: "#",
    type: "github",
    icon: "Github",
  },
  {
    id: "gh-2",
    title: "kiro-examples/e-commerce",
    description:
      "E-commerce platform with product catalog, cart, and checkout built using Kiro.",
    url: "#",
    type: "github",
    icon: "Github",
  },
  {
    id: "gh-3",
    title: "kiro-examples/blog-platform",
    description:
      "Full-featured blog platform with CMS, comments, and authentication.",
    url: "#",
    type: "github",
    icon: "Github",
  },
];

export const videos: Resource[] = [
  {
    id: "vid-1",
    title: "Kiro in 5 Minutes",
    description:
      "Quick overview of Kiro's core features and how it changes your development workflow.",
    url: "#",
    type: "video",
    icon: "PlayCircle",
  },
  {
    id: "vid-2",
    title: "Building a SaaS App with Kiro",
    description:
      "Full walkthrough of building a SaaS application from specification to deployment.",
    url: "#",
    type: "video",
    icon: "PlayCircle",
  },
  {
    id: "vid-3",
    title: "Advanced Specification Patterns",
    description:
      "Deep dive into complex specification patterns for enterprise applications.",
    url: "#",
    type: "video",
    icon: "PlayCircle",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is Kiro and how does it differ from other AI coding tools?",
    answer:
      "Kiro is an AI-native IDE that uses specification-driven development to turn your ideas into production-ready code. Unlike simple code completion tools, Kiro understands your entire project context, plans tasks autonomously, and can execute multi-file changes while maintaining code consistency across your codebase.",
  },
  {
    id: "faq-2",
    question: "Do I need to write specifications for everything?",
    answer:
      "No. Specifications are optional but recommended for complex features. You can use Kiro for simple code generation, refactoring, and bug fixes without writing formal specs. However, specifications give Kiro better context and produce more reliable, maintainable results for larger tasks.",
  },
  {
    id: "faq-3",
    question: "How does Kiro handle version control and collaboration?",
    answer:
      "Kiro integrates directly with GitHub for version control. It can create branches, commit changes, open pull requests, and respond to code review feedback automatically. Your team can review AI-generated code through the normal PR workflow, ensuring human oversight at every step.",
  },
  {
    id: "faq-4",
    question: "Is my code secure when using Kiro?",
    answer:
      "Yes. Kiro processes your code with enterprise-grade security. Your specifications and code are encrypted in transit and at rest. Kiro does not train on your proprietary code, and you maintain full ownership of all generated output. SOC 2 compliance is available for enterprise plans.",
  },
  {
    id: "faq-5",
    question: "Can I use Kiro with my existing projects?",
    answer:
      "Absolutely. Kiro works with any existing codebase regardless of language, framework, or size. It analyzes your project structure, coding conventions, and documentation to generate code that matches your existing patterns. No migration or special setup is required beyond installation.",
  },
  {
    id: "faq-6",
    question: "What programming languages does Kiro support?",
    answer:
      "Kiro supports all major programming languages including TypeScript, JavaScript, Python, Go, Rust, Java, C#, and more. The specification-driven approach is language-agnostic, so you can use the same workflow regardless of your tech stack.",
  },
  {
    id: "faq-7",
    question: "How do I get started with Kiro?",
    answer:
      "Getting started is simple: install the Kiro extension from your IDE marketplace, sign in with your account, and open any project. Kiro will analyze your codebase automatically. You can then start using AI-assisted features immediately or write your first specification to build a new feature.",
  },
];
