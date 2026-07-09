import type { Metadata } from "next";

export const SITE_URL = "https://enwis.uz";
export const SITE_NAME = "Enwis";
export const DEFAULT_OG_IMAGE = "/header.png";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Central metadata builder — every route calls this so title format,
 * canonical URLs, Open Graph and Twitter cards stay consistent site-wide.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? `${title}` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "uz_UZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Enwis",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    description:
      "Enwis — maktablar, universitetlar, o'quv markazlari va tashkilotlar uchun raqamli imtihon platformasi.",
    sameAs: [],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enwis",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      priceCurrency: "UZS",
    },
  };
}
