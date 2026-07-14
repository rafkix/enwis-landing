import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { FeaturesContent } from "@/components/pages/features-content";

export const metadata: Metadata = buildMetadata({
  title: "Imkoniyatlar",
  description:
    "Enwis platformasining AI yordamida baholash, test yaratish, analitika, PDF hisobotlar va boshqa zamonaviy imkoniyatlarini kashf eting.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesContent />;
}