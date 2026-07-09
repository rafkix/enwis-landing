import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { NewsContent } from "@/components/sections/news-content";

export const metadata: Metadata = buildMetadata({
  title: "Yangiliklar",
  description:
    "Enwis platformasidagi mahsulot yangilanishlari, yangi funksiyalar, blog maqolalari va rasmiy e'lonlarni shu yerda kuzatib boring.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsContent />;
}
