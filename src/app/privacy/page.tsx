import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Maxfiylik siyosati",
  description:
    "Enwis platformasining rasmiy Maxfiylik siyosati hujjatini PDF formatida ko‘ring yoki yuklab oling.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <embed
      src="/privacy.pdf"
      type="application/pdf"
      className="w-full h-screen"
    />
  );
}