import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kirohub.dev";

  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/features", changeFrequency: "monthly" as const, priority: 0.9 },
    {
      path: "/how-it-works",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    { path: "/tutorials", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/community", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/resources", changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
