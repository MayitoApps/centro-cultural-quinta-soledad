import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.centroculturalquintasoledad.com";
  const now = new Date();

  const staticRoutes = [
    { url: "", changeFrequency: "daily", priority: 1.0 },
    { url: "/hoteles", changeFrequency: "weekly", priority: 0.9 },
    { url: "/nuestra-gastronomia", changeFrequency: "weekly", priority: 0.9 },
    { url: "/eventos", changeFrequency: "weekly", priority: 0.9 },
    { url: "/momentos", changeFrequency: "weekly", priority: 0.8 },
    { url: "/nuestra-historia", changeFrequency: "monthly", priority: 0.7 },
    { url: "/quienes-somos", changeFrequency: "monthly", priority: 0.7 },
    { url: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { url: "/comunidad", changeFrequency: "monthly", priority: 0.6 },
    { url: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
