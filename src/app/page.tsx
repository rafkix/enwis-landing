import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Solutions } from "@/components/sections/solutions";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { ProductPreview } from "@/components/sections/product-preview";
import { Organizations } from "@/components/sections/organizations";
import { Security } from "@/components/sections/security";
import { Analytics } from "@/components/sections/analytics";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { AppTeaserBanner } from "@/components/sections/app-teaser-banner";

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
      <AppTeaserBanner />
    </>
  );
}
