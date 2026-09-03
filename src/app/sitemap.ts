import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/service-pages";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/about",
    "/services",
    ...servicePages.map((p) => `/services/${p.slug}`),
    "/packages",
    "/portfolio",
    "/case-studies",
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog/") ? 0.5 : 0.6,
  }));
}
