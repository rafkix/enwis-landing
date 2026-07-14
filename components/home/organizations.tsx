"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ORGANIZATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Organizations() {
  type OrganizationId = (typeof ORGANIZATIONS)[number]["id"];
  const [active, setActive] = useState<OrganizationId>(ORGANIZATIONS[0].id);
  const activeOrg = ORGANIZATIONS.find((o) => o.id === active) ?? ORGANIZATIONS[0];

  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Kimlar uchun"
          title="Har bir tashkilot o'lchamiga moslashadi"
          description="Yakka o'qituvchidan davlat tashkilotigacha — Enwis ehtiyojingizga qarab shakllanadi."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col gap-2">
            {ORGANIZATIONS.map((org) => (
              <button
                key={org.id}
                onClick={() => setActive(org.id)}
                className={cn(
                  "rounded-[var(--radius-lg)] border px-5 py-4 text-left transition-all duration-300",
                  active === org.id
                    ? "border-[var(--color-deep)] bg-white shadow-[var(--shadow-soft-sm)]"
                    : "border-transparent hover:bg-white/60"
                )}
              >
                <span
                  className={cn(
                    "font-display text-base font-medium",
                    active === org.id ? "text-[var(--color-ink)]" : "text-[var(--color-slate)]"
                  )}
                >
                  {org.label}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeOrg.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-7 lg:p-9"
            >
              <h3 className="font-display text-2xl font-medium leading-tight text-[var(--color-ink)]">
                {activeOrg.headline}
              </h3>
              <p className="mt-3 max-w-lg text-[var(--color-slate)] leading-relaxed">
                {activeOrg.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {activeOrg.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-[var(--color-ink)]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-volt)]">
                      <Check className="h-3 w-3 text-[var(--color-deep-900)]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
