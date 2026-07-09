"use client";

import { motion } from "framer-motion";
import { Zap, Shuffle, LineChart, CloudLightning } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SOLUTIONS } from "@/lib/constants";

const ICONS = [Zap, Shuffle, LineChart, CloudLightning];

export function Solutions() {
  return (
    <section className="section-pad bg-white">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Yechim"
          title="Enwis har bir muammoga aniq javob beradi"
          description="Har bir muammoning ortida — Enwis'da tayyor va sinovdan o'tgan yechim turadi."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, i) => {
            const Icon = ICONS[i] ?? Zap;;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 transition-colors hover:border-[var(--color-deep)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20 transition-colors group-hover:bg-[var(--color-volt)]">
                  <Icon className="h-5 w-5 text-[var(--color-deep)]" />
                </div>
                <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
