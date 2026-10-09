import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.centroculturalquintasoledad.com";
  const now = new Date();

  const routes = [
    { url: "", changeFrequency: "daily", priority: 1.0 },
    { url: "/hoteles", changeFrequency: "weekly", priority: 0.9 },
    { url: "/nuestra-gastronomia", changeFrequency: "weekly", priority: 0.9 },
    { url: "/eventos", changeFrequency: "weekly", priority: 0.9 },
    { url: "/momentos", changeFrequency: "weekly", priority: 0.8 },
    { url: "/nuestra-historia", changeFrequency: "monthly", priority: 0.7 },
    { url: "/quienes-somos", changeFrequency: "monthly", priority: 0.7 },
    { url: "/comunidad", changeFrequency: "monthly", priority: 0.6 },
    { url: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
