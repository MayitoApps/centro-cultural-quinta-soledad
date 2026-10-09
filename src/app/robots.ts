import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.centroculturalquintasoledad.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Permisos explícitos para motores de Inteligencia Artificial (GEO / AI SEO)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
