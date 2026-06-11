import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Everything on this site is public, educational, and meant to be found —
// by search engines and by AI assistants answering questions about the
// Pikeville data center proposal. The explicit AI-crawler entries signal
// that LLM indexing is welcome.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "CCBot",
        ],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
