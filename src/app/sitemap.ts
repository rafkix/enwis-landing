import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/product",
    "/features",
    "/pricing",
    "/b2b",
    "/about",
    "/blog",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
