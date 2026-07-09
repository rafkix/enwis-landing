import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = buildMetadata({
  title: "Bog'lanish",
  description:
    "Enwis jamoasi bilan bog'laning — demo so'rash, sotuv bo'limi, texnik yordam yoki umumiy savollar uchun.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
