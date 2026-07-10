import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SearchProvider } from "@/components/search-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AIChatbot } from "@/components/ai-chatbot";
import { SearchDialog } from "@/components/search-dialog";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kiro Hub - Learn, Build, and Collaborate with Kiro",
    template: "%s | Kiro Hub",
  },
  description:
    "The community-driven educational platform for developers to learn and adopt Kiro, the AI-native IDE that transforms how you build software. Discover tutorials, features, and join a vibrant developer community.",
  keywords: [
    "Kiro",
    "AI IDE",
    "developer tools",
    "specification-driven development",
    "AI coding",
    "developer community",
    "AI-native IDE",
    "autonomous development",
    "task planning",
    "code generation",
  ],
  authors: [{ name: "Kiro Hub Community" }],
  creator: "Kiro Hub",
  publisher: "Kiro Hub",
  metadataBase: new URL("https://kirohub.dev"),
  openGraph: {
    title: "Kiro Hub - Learn, Build, and Collaborate with Kiro",
    description:
      "The community-driven educational platform for developers to learn and adopt Kiro, the AI-native IDE.",
    type: "website",
    locale: "en_US",
    url: "https://kirohub.dev",
    siteName: "Kiro Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiro Hub - Learn, Build, and Collaborate with Kiro",
    description:
      "The community-driven educational platform for developers to learn and adopt Kiro, the AI-native IDE.",
    creator: "@kirohub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <AIChatbot />
            <SearchDialog />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
