import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alpharailings.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/our-process",
    "/quote",
    "/faq",
    "/financing",
    "/materials",
    "/blog",
    "/areas",
  ];

  const servicePages = [
    "/services/glass-railings",
    "/services/cable-railings",
    "/services/iron-railings",
    "/services/staircases",
    "/services/gates-fences",
    "/services/shower-doors",
    "/services/glass-partitions",
    "/services/commercial-railings",
  ];

  const areaPages = [
    "/areas/massachusetts",
    "/areas/new-hampshire",
    "/areas/maine",
    "/areas/rhode-island",
    "/areas/florida",
  ];

  const allPages = [...staticPages, ...servicePages, ...areaPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : path.startsWith("/areas") ? 0.8 : 0.7,
  }));
}
