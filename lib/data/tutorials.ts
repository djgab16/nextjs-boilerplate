export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  progress: number;
  topics: string[];
  slug: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Getting Started with Kiro",
    description:
      "Learn the fundamentals of Kiro, from installation to your first AI-assisted project. This tutorial covers setup, configuration, and basic workflows.",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    progress: 75,
    topics: ["Installation", "Configuration", "First Project"],
    slug: "getting-started-with-kiro",
  },
  {
    id: "2",
    title: "Writing Your First Specification",
    description:
      "Discover how to write effective specifications that Kiro can interpret and turn into working code. Learn the spec-driven development approach.",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    progress: 40,
    topics: ["Specifications", "Requirements", "Documentation"],
    slug: "writing-your-first-specification",
  },
  {
    id: "3",
    title: "AI-Powered Task Planning",
    description:
      "Understand how Kiro breaks down complex projects into manageable tasks using AI-driven planning and prioritization.",
    difficulty: "Beginner",
    estimatedTime: "25 min",
    progress: 0,
    topics: ["Task Planning", "Project Management", "AI Agents"],
    slug: "ai-powered-task-planning",
  },
  {
    id: "4",
    title: "Multi-File Editing Workflows",
    description:
      "Master the art of coordinating changes across multiple files. Learn how Kiro maintains consistency when refactoring large codebases.",
    difficulty: "Intermediate",
    estimatedTime: "35 min",
    progress: 60,
    topics: ["Multi-File Editing", "Refactoring", "Code Consistency"],
    slug: "multi-file-editing-workflows",
  },
  {
    id: "5",
    title: "GitHub Integration Deep Dive",
    description:
      "Configure and optimize Kiro's GitHub integration for automated PR creation, code reviews, and branch management.",
    difficulty: "Intermediate",
    estimatedTime: "30 min",
    progress: 20,
    topics: ["GitHub", "Pull Requests", "CI/CD", "Automation"],
    slug: "github-integration-deep-dive",
  },
  {
    id: "6",
    title: "Context-Aware Development",
    description:
      "Learn how Kiro uses project context, documentation, and codebase analysis to generate more accurate and relevant code.",
    difficulty: "Intermediate",
    estimatedTime: "40 min",
    progress: 0,
    topics: ["Context Awareness", "Codebase Analysis", "AI Memory"],
    slug: "context-aware-development",
  },
  {
    id: "7",
    title: "Advanced Specification Patterns",
    description:
      "Explore advanced specification techniques including conditional logic, edge case handling, and complex system architectures.",
    difficulty: "Advanced",
    estimatedTime: "50 min",
    progress: 10,
    topics: ["Advanced Specs", "Architecture", "Edge Cases"],
    slug: "advanced-specification-patterns",
  },
  {
    id: "8",
    title: "Custom Agent Workflows",
    description:
      "Build custom AI agent workflows tailored to your team's development process. Configure agent behavior, memory, and automation rules.",
    difficulty: "Advanced",
    estimatedTime: "60 min",
    progress: 0,
    topics: ["Custom Agents", "Workflows", "Team Configuration"],
    slug: "custom-agent-workflows",
  },
  {
    id: "9",
    title: "Enterprise Deployment Strategies",
    description:
      "Deploy Kiro across your organization with best practices for security, compliance, and team-wide adoption strategies.",
    difficulty: "Advanced",
    estimatedTime: "45 min",
    progress: 0,
    topics: ["Enterprise", "Deployment", "Security", "Compliance"],
    slug: "enterprise-deployment-strategies",
  },
];
