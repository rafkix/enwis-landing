import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { Problems } from "@/components/home/problems";
import { Solutions } from "@/components/home/solutions";
import { HowItWorks } from "@/components/home/how-it-works";
import { Features } from "@/components/home/features";
import { ProductPreview } from "@/components/home/product-preview";
import { Organizations } from "@/components/home/organizations";
import { Security } from "@/components/home/security";
import { Analytics } from "@/components/home/analytics";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Enwis — Raqamli imtihon va baholash platformasi",
  description:
    "Imtihon yaratish, o'tkazish, avtomatik baholash va tahlilni bitta platformada birlashtiring. Maktablar, universitetlar, o'quv markazlari va tashkilotlar uchun.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <Organizations />
      <Security />
      <Analytics />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
