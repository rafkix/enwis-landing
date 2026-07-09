"use client";

import Image from "next/image";
import Link from "next/link";
import { Send, Instagram, Linkedin, Youtube } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Telegram: Send,
  Instagram: Instagram,
  Youtube: Youtube,
};

/**
 * Uses the real, official store badges as image files.
 *
 * Download the official assets and place them at these exact paths before
 * shipping — do not re-draw or recolor them, Apple/Google's brand
 * guidelines require the badges to be used unmodified:
 *
 *  - /public/app-store-badge.svg   →  developer.apple.com/app-store/marketing/guidelines/
 *  - /public/google-play-badge.svg →  play.google.com/intl/en_us/badges/
 */
const STORE_BADGES = [
  {
    id: "app-store",
    src: "/app-store-badge.svg",
    alt: "App Store'dan yuklab oling",
    width: 162,
    height: 48,
  },
  {
    id: "google-play",
    src: "/google-play-badge.svg",
    alt: "Google Play'dan yuklab oling",
    width: 182,
    height: 54,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--color-deep-900)] text-white/70">
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/header.png"
              alt="Enwis"
              width={128}
              height={32}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Maktablar, universitetlar va o&apos;quv markazlari uchun
              raqamli imtihon platformasi.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label] ?? Send;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-[var(--color-volt)] hover:text-[var(--color-deep-900)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-6">
            <FooterColumn title="Kompaniya" links={FOOTER_LINKS.company} />
            <FooterColumn title="Manbalar" links={FOOTER_LINKS.resources} />
            <div>
              <FooterColumn title="Huquqiy" links={FOOTER_LINKS.legal} />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {STORE_BADGES.map((badge) => (
                  <span
                    key={badge.id}
                    aria-disabled="true"
                    title={`${badge.alt} — tez orada`}
                    className="cursor-not-allowed opacity-90 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={badge.width}
                      height={badge.height}
                      className="h-8 w-auto"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Enwis. Barcha huquqlar himoyalangan.</p>
          <p>O&apos;zbekistonda ishlab chiqilgan</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-white/40">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-[var(--color-volt-light)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}