import type { Metadata, Viewport } from "next";

import {
  buildMetadata,
  organizationJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo";

/** Root layout — barcha sahifalar uchun umumiy metadata */
export const rootMetadata: Metadata = {
  ...buildMetadata({
    title: "Enwis — Raqamli imtihon va baholash platformasi",
    description:
      "Enwis — maktablar, universitetlar, o'quv markazlari va tashkilotlar uchun imtihon yaratish, o'tkazish, avtomatik baholash va tahlil platformasi.",
    path: "/",
  }),

  metadataBase: new URL("https://www.enwis.uz"),
  applicationName: "Enwis",
  creator: "Enwis",
  publisher: "Enwis",
  authors: [{ name: "Enwis", url: "https://enwis.uz" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Education",

  keywords: [
    "Enwis",
    "Online Exam",
    "Digital Assessment",
    "Exam Platform",
    "Testing Platform",
    "Quiz System",
    "School",
    "University",
    "Learning Center",
    "Education",
    "AI",
    "Uzbekistan",
  ],

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://enwis.uz",
    siteName: "Enwis",
    title: "Enwis — Raqamli imtihon va baholash platformasi",
    description:
      "Imtihonlarni yarating, o'tkazing va avtomatik baholang. Zamonaviy raqamli baholash platformasi.",
    images: [
      {
        url: "https://www.enwis.uz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enwis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@info_enwis",
    title: "Enwis — Raqamli imtihon va baholash platformasi",
    description:
      "Maktablar, universitetlar va o'quv markazlari uchun zamonaviy imtihon platformasi.",
    images: ["https://www.enwis.uz/twitter-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18332f",
};

export { organizationJsonLd, softwareApplicationJsonLd };
