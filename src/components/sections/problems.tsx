"use client";

import { motion } from "framer-motion";
import { FileWarning, ShieldAlert, TrendingDown, FolderX } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PROBLEMS } from "@/lib/constants";

const ICONS = [FileWarning, ShieldAlert, TrendingDown, FolderX];

export function Problems() {
  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Muammo"
          title="An'anaviy imtihon tizimi endi yetarli emas"
          description="Qog'oz asosidagi baholash o'qituvchi vaqtini yeydi va aniq natija bermaydi."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-ink)]/5">
                  <Icon className="h-5 w-5 text-[var(--color-ink-soft)]" />
                </div>
                <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
