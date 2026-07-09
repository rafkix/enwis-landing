import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Foydalanish shartlari",
  description:
    "Enwis platformasining rasmiy Foydalanish shartlari hujjatini PDF formatida ko‘ring yoki yuklab oling.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <embed
      src="/terms.pdf"
      type="application/pdf"
      className="w-full h-screen"
    />
  );
}