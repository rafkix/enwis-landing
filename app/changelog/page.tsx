import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ChangelogContent } from "@/components/pages/changelog-content";

export const metadata: Metadata = buildMetadata({
  title: "Yangilanishlar Tarixi",
  description: "Enwis platformasining so'nggi yangilanishlari va versiya chiqarishlari.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return <ChangelogContent />;
}
