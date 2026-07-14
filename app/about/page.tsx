import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = buildMetadata({
  title: "Biz haqimizda",
  description:
    "Enwis nima uchun mavjud, bizning missiyamiz va vizyonimiz, mahsulot qarorlari ortidagi qadriyatlar va bizni shu yerga olib kelgan bosqichlar.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
