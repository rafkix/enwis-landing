import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { B2BContent } from "@/components/sections/b2b-content";

export const metadata: Metadata = buildMetadata({
  title: "Tashkilotlar uchun (B2B)",
  description:
    "Enwis maktablar, universitetlar va davlat tashkilotlariga baholashni raqamlashtirish orqali vaqt va xarajatni tejashga yordam beradi. ROI, xavfsizlik va enterprise imkoniyatlar haqida bilib oling.",
  path: "/b2b",
});

export default function B2BPage() {
  return <B2BContent />;
}
