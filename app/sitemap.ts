import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { NEWS_POSTS } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/b2b",
    "/features",
    "/pricing",
    "/news",
    "/contact",
    "/help",
    "/changelog",
    "/status",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/news" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = NEWS_POSTS.map((post) => ({
    url: `${SITE_URL}/news/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...newsEntries];
}
