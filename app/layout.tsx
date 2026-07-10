import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    "The community-driven educational platform for developers to learn and adopt Kiro, the AI-native IDE that transforms how you build software.",
  keywords: [
    "Kiro",
    "AI IDE",
    "developer tools",
    "specification-driven development",
    "AI coding",
    "developer community",
  ],
  authors: [{ name: "Kiro Hub Community" }],
  openGraph: {
    title: "Kiro Hub - Learn, Build, and Collaborate with Kiro",
    description:
      "The community-driven educational platform for developers to learn and adopt Kiro.",
    type: "website",
    locale: "en_US",
    siteName: "Kiro Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiro Hub - Learn, Build, and Collaborate with Kiro",
    description:
      "The community-driven educational platform for developers to learn and adopt Kiro.",
  },
  robots: {
    index: true,
    follow: true,
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
