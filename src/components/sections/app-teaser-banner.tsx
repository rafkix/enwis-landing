"use client";

import { motion } from "framer-motion";
import { Apple, Bell } from "lucide-react";

/**
 * Stylized store-badge icons.
 *
 * NOTE: These are original glyphs, not Apple's/Google's official badge
 * artwork (that artwork is trademarked and must come from their brand
 * resource pages). Swap `<AppStoreBadge>` / `<GooglePlayBadge>` for the
 * real download badges once the apps are live.
 */
function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M5 3.5v17a1 1 0 0 0 1.53.85l14-8.5a1 1 0 0 0 0-1.7l-14-8.5A1 1 0 0 0 5 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const STORE_BADGES = [
  { id: "app-store", icon: Apple, eyebrow: "Tez orada", label: "App Store" },
  {
    id: "google-play",
    icon: GooglePlayGlyph,
    eyebrow: "Tez orada",
    label: "Google Play",
  },
] as const;

export function AppTeaserBanner() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-mist)]"
        >
          {/* subtle ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--color-volt)]/25 blur-[80px]"
          />

          <div className="relative flex flex-col items-center justify-between gap-7 px-6 py-7 sm:flex-row sm:px-8">
            <div className="flex items-center gap-5">
              {/* mini phone illustration */}
              <div className="relative hidden h-16 w-11 shrink-0 rounded-[10px] border border-[var(--color-line)] bg-[var(--color-deep)] shadow-[var(--shadow-soft-md)] sm:block">
                <div className="absolute inset-x-1.5 inset-y-1 rounded-[6px] bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute inset-x-2 top-2.5 h-1.5 rounded-full bg-[var(--color-volt)]" />
                <div className="absolute inset-x-2 top-5 h-1 rounded-full bg-white/25" />
                <div className="absolute inset-x-2 top-7 h-1 w-2/3 rounded-full bg-white/15" />
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[var(--shadow-soft-sm)] sm:hidden">
                <Bell
                  className="h-5 w-5 text-[var(--color-deep)]"
                  strokeWidth={1.75}
                />
              </div>

              <div>
                <p className="font-display text-base font-medium text-[var(--color-ink)]">
                  Enwis mobil ilovasi — tez orada
                </p>
                <p className="mt-0.5 max-w-sm text-sm leading-relaxed text-[var(--color-slate)]">
                  Talabalar imtihonni endi telefondan ham qulay o&apos;ta
                  oladigan bo&apos;ladi.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-3 sm:items-end">
              <span className="pill-tag">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-volt)]" />
                Ishlab chiqilmoqda
              </span>

              <div className="flex items-center gap-2.5">
                {STORE_BADGES.map((store) => (
                  <span
                    key={store.id}
                    aria-disabled="true"
                    title={`${store.label} — tez orada`}
                    className="group flex cursor-not-allowed items-center gap-2.5 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-4 py-2.5 transition-colors"
                  >
                    <store.icon className="h-5 w-5 shrink-0 text-[var(--color-ink)]/70" />
                    <span className="flex flex-col leading-none">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-slate)]">
                        {store.eyebrow}
                      </span>
                      <span className="mt-0.5 text-xs font-medium text-[var(--color-ink)]">
                        {store.label}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
