import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HelpContent } from "@/components/pages/help-content";

export const metadata: Metadata = buildMetadata({
  title: "Yordam Markazi",
  description:
    "Enwis haqida savol-javob, qo'llanma va texnik yordam markazi.",
  path: "/help",
});

export default function HelpPage() {
  return <HelpContent />;
}
