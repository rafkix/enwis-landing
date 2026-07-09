"use client";

import { motion } from "framer-motion";
import {
  FileWarning,
  ShieldAlert,
  TrendingDown,
  FolderX,
  X,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PROBLEMS } from "@/lib/constants";

const ICONS = [FileWarning, ShieldAlert, TrendingDown, FolderX];

const EASE = [0.16, 1, 0.3, 1] as const;

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
            const Icon = ICONS[i] ?? FileWarning;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className={`group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7 transition-colors duration-300 hover:border-[var(--color-ink)]/15 ${
                  i % 2 === 1 ? "lg:mt-7" : ""
                }`}
              >
                {/* folded-corner detail — a quiet nod to the paper it's replacing */}
                <div className="pointer-events-none absolute right-0 top-0 h-7 w-7 bg-[var(--color-mist)] transition-colors duration-300 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:bg-[var(--color-line)]" />

                {/* oversized red-pen "wrong mark" watermark — the signature element */}
                <X
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="pointer-events-none absolute -bottom-9 -right-7 h-40 w-40 -rotate-12 transition-transform duration-500 ease-out group-hover:rotate-[-6deg]"
                  style={{ color: "rgba(193,68,48,0.07)" }}
                />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-[var(--color-line)] transition-colors duration-300 group-hover:bg-[var(--color-volt-dim)] group-hover:ring-transparent">
                    <Icon
                      className="h-5 w-5 text-[var(--color-ink-soft)] transition-colors duration-300 group-hover:text-[var(--color-deep)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium leading-snug tracking-tight text-[var(--color-ink)]">
                    {problem.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-slate)]">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
