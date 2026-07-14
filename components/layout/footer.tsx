"use client";

import Image from "next/image";
import Link from "next/link";
import { Send, Instagram, Youtube, ArrowRight, CheckCircle } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS, APP_URL } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Telegram: Send,
  Instagram: Instagram,
  Youtube: Youtube,
};

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
      {/* Main footer */}
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/header.png"
                alt="Enwis"
                width={128}
                height={32}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Maktablar, universitetlar va o&apos;quv markazlari uchun
              raqamli imtihon platformasi.
            </p>

            {/* Status badge */}
            <Link
              href="/status"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              <CheckCircle className="h-3.5 w-3.5" />
              Barcha tizimlar ishlayapti
            </Link>

            {/* Social */}
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

            {/* Store badges */}
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

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-6">
            <FooterColumn title="Kompaniya" links={FOOTER_LINKS.company} />
            <FooterColumn title="Manbalar" links={FOOTER_LINKS.resources} />
            <FooterColumn title="Huquqiy" links={FOOTER_LINKS.legal} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Enwis. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-4">
            <Link href="/status" className="transition-colors hover:text-white/70">
              Platforma holati
            </Link>
            <span className="text-white/20">|</span>
            <p>O&apos;zbekistonda ishlab chiqilgan</p>
          </div>
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
              className="group flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-[var(--color-volt-light)]"
            >
              {link.label}
              <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
