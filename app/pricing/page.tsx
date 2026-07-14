import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Pricing as PricingSection } from "@/components/home/pricing";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Narxlar",
  description:
    "Enwis narxlash sahifasi. Bepul boshlang, o'sing — yashirin to'lovlarsiz.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <FinalCta />
    </>
  );
}
