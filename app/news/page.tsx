import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { NewsListContent } from "@/components/news/news-list-content";

export const metadata: Metadata = buildMetadata({
  title: "Yangiliklar",
  description:
    "Enwis mahsulot yangilanishlari, xavfsizlik e'lonlari va platforma haqidagi so'nggi yangiliklar.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsListContent /> ;
}
