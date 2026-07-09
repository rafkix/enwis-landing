import Image from "next/image";
import Link from "next/link";
import { Send, Instagram, Linkedin } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Telegram: Send,
  Instagram: Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-deep-900)] text-white/70">
      <div className="container-editorial grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <Image
            src="/header.png"
            alt="Enwis"
            width={128}
            height={32}
            className="h-7 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Maktablar, universitetlar va o&apos;quv markazlari uchun raqamli imtihon platformasi.
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

        <FooterColumn title="Kompaniya" links={FOOTER_LINKS.company} />
        <FooterColumn title="Manbalar" links={FOOTER_LINKS.resources} />
        <FooterColumn title="Huquqiy" links={FOOTER_LINKS.legal} />
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
