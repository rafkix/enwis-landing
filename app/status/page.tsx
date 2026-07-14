import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { StatusContent } from "@/components/pages/status-content";

export const metadata: Metadata = buildMetadata({
  title: "Platforma Holati",
  description: "Enwis platformasi holati — xizmatlar ishlash holati va rejalashtirilgan to'xtashlar.",
  path: "/status",
});

export default function StatusPage() {
  return <StatusContent />;
}
