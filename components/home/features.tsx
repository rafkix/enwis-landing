"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Wand2,
  Sparkles,
  Upload,
  Timer,
  Shuffle,
  Bell,
  ShieldCheck,
  BarChart4,
  FileBadge2,
  ScrollText,
  Webhook,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "Savollar banki": BookOpen,
  "Imtihon konstruktori": Wand2,
  "AI savol generatori": Sparkles,
  "Qo'lda savol yuklash": Upload,
  "Vaqt chegarasi": Timer,
  "Savollarni aralashtirish": Shuffle,
  "Javoblarni aralashtirish": Shuffle,
  Bildirishnomalar: Bell,
  "Avtomatik baholash": ScrollText,
  "Tahlil va hisobotlar": BarChart4,
  Sertifikatlar: FileBadge2,
  Xavfsizlik: ShieldCheck,
  "REST API": Webhook,
};

export function Features() {
  const flat = FEATURES.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.group }))
  );

  return (
    <section id="imkoniyatlar" className="section-pad bg-[var(--color-mist)]">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Imkoniyatlar"
          title="Yaratishdan tahlilgacha — bitta platformada"
          description="Har bir funksiya real ehtiyojdan kelib chiqib qurilgan — ortiqcha murakkablik yo'q."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flat.map((feature, i) => {
            const Icon = ICON_MAP[feature.title] ?? Sparkles;
            const isLarge = i === 0 || i === 5;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 transition-shadow hover:shadow-[var(--shadow-soft-md)] ${
                  isLarge ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
                    <Icon className="h-5 w-5 text-[var(--color-deep)]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-slate-light)]">
                    {feature.group}
                  </span>
                </div>
                <h3 className="font-display text-base font-medium text-[var(--color-ink)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
