import type { Metadata } from "next";
import {
  BookOpen,
  FileText,
  Code,
  Settings,
  Zap,
  Keyboard,
  Terminal,
  Layout,
  Server,
  Layers,
  GitBranch,
  PlayCircle,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  documentation,
  cheatSheets,
  templates,
  githubExamples,
  videos,
} from "@/lib/data/resources";
import { FaqSection } from "@/components/resources/faq-section";

export const metadata: Metadata = {
  title: "Resources | Kiro Hub",
  description:
    "Access Kiro documentation, cheat sheets, templates, GitHub examples, video tutorials, and frequently asked questions.",
};

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-5 w-5" aria-hidden="true" />,
  FileText: <FileText className="h-5 w-5" aria-hidden="true" />,
  Code: <Code className="h-5 w-5" aria-hidden="true" />,
  Settings: <Settings className="h-5 w-5" aria-hidden="true" />,
  Zap: <Zap className="h-5 w-5" aria-hidden="true" />,
  Keyboard: <Keyboard className="h-5 w-5" aria-hidden="true" />,
  Terminal: <Terminal className="h-5 w-5" aria-hidden="true" />,
  Layout: <Layout className="h-5 w-5" aria-hidden="true" />,
  Server: <Server className="h-5 w-5" aria-hidden="true" />,
  Layers: <Layers className="h-5 w-5" aria-hidden="true" />,
  Github: <GitBranch className="h-5 w-5" aria-hidden="true" />,
  PlayCircle: <PlayCircle className="h-5 w-5" aria-hidden="true" />,
};

export default function ResourcesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed with Kiro. From documentation and
            cheat sheets to templates, examples, and video tutorials.
          </p>
        </header>

        {/* Documentation */}
        <section className="mb-16" aria-labelledby="docs-heading">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2 id="docs-heading" className="text-2xl md:text-3xl font-bold">
              Documentation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentation.map((doc) => (
              <Card
                key={doc.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      {iconMap[doc.icon]}
                    </div>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base mt-3">{doc.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {doc.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Cheat Sheets */}
        <section className="mb-16" aria-labelledby="cheatsheets-heading">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2
              id="cheatsheets-heading"
              className="text-2xl md:text-3xl font-bold"
            >
              Cheat Sheets
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cheatSheets.map((sheet) => (
              <Card
                key={sheet.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {iconMap[sheet.icon]}
                    </div>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base mt-3">
                    {sheet.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {sheet.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mb-16" aria-labelledby="templates-heading">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2
              id="templates-heading"
              className="text-2xl md:text-3xl font-bold"
            >
              Templates
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      {iconMap[template.icon]}
                    </div>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base mt-3">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Examples */}
        <section className="mb-16" aria-labelledby="github-heading">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="h-6 w-6 text-purple-600" aria-hidden="true" />
            <h2 id="github-heading" className="text-2xl md:text-3xl font-bold">
              GitHub Examples
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {githubExamples.map((example) => (
              <Card
                key={example.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900/50 flex items-center justify-center text-gray-700 dark:text-gray-300">
                      {iconMap[example.icon]}
                    </div>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base mt-3 font-mono">
                    {example.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {example.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="mb-16" aria-labelledby="videos-heading">
          <div className="flex items-center gap-3 mb-6">
            <PlayCircle
              className="h-6 w-6 text-purple-600"
              aria-hidden="true"
            />
            <h2 id="videos-heading" className="text-2xl md:text-3xl font-bold">
              Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400">
                      {iconMap[video.icon]}
                    </div>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-base mt-3">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle
              className="h-6 w-6 text-purple-600"
              aria-hidden="true"
            />
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl">
            <FaqSection />
          </div>
        </section>
      </div>
    </div>
  );
}
