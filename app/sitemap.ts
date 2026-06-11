import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/pros-cons", priority: 0.9 },
    { path: "/ideas", priority: 0.9 },
    { path: "/pikeville", priority: 0.9 },
    { path: "/basics", priority: 0.8 },
    { path: "/water", priority: 0.8 },
    { path: "/power", priority: 0.8 },
    { path: "/noise", priority: 0.8 },
    { path: "/health", priority: 0.8 },
    { path: "/communities", priority: 0.8 },
    { path: "/map", priority: 0.6 },
    { path: "/sources", priority: 0.5 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
