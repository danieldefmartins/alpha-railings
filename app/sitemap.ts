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
    "/privacy-policy",
    "/terms",
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

  const blogPages = ["/blog/glass-vs-cable-railings", "/blog/top-railing-trends-2025", "/blog/how-to-choose-deck-railings", "/blog/commercial-railing-requirements", "/blog/frameless-glass-shower-doors-guide", "/blog/iron-railings-classic-meets-modern", "/blog/glass-railings-oceanfront-homes", "/blog/cable-railing-installation-guide", "/blog/staircase-design-ideas", "/blog/railing-maintenance-tips", "/blog/choosing-gate-for-property", "/blog/glass-partitions-office-design", "/blog/railing-costs-breakdown", "/blog/florida-building-codes-railings", "/blog/massachusetts-railing-regulations"];

  const allPages = [...staticPages, ...servicePages, ...areaPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : path.startsWith("/areas") ? 0.8 : 0.7,
  }));
}
