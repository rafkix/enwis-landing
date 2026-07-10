"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  TrendingUp,
  Clock,
  Wallet,
  ShieldCheck,
  Check,
  LucideIcon,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { LogoCloud } from "@/components/shared/logo-cloud";
import { MockupFrame } from "@/components/shared/mockup-frame";
import { AnalyticsMockup } from "@/components/shared/dashboard-mockups";
import {
  B2B_STATS,
  B2B_VALUE_PILLARS,
  B2B_ENTERPRISE_FEATURES,
} from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const PILLAR_ICONS: Record<"roi" | "time" | "cost" | "security", LucideIcon> = {
  roi: TrendingUp,
  time: Clock,
  cost: Wallet,
  security: ShieldCheck,
};

export function B2BContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-40 pb-20 lg:pt-48 lg:pb-24">
        {/* Hero sectiondagi bilan bir xil ambient background: ikkita glow blur + nuqtali grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[var(--color-volt)]/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-deep)]/10 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
        />

        <div className="container-editorial relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="pill-tag mb-7 border-[var(--color-line)] bg-[var(--color-mist)] text-[var(--color-deep)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
              Tashkilotlar uchun
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.1] text-[var(--color-ink)]"
            >
              Muassasangiz miqyosida baholashni raqamlashtiring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-slate)]"
            >
              Minglab talaba, yuzlab o&apos;qituvchi — bitta xavfsiz
              platformada. Enwis maktablar, universitetlar va davlat
              tashkilotlariga vaqt, xarajat va nazoratni birgalikda tejashga
              yordam beradi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact#demo">
                  Demo bron qilish <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact#demo">
                  <CalendarClock className="h-4 w-4" /> Uchrashuv belgilash
                </Link>
              </Button>
            </motion.div>

            {/* Compact mockup for mobile/tablet — the layered desktop version is hidden below lg */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="mt-10 lg:hidden"
            >
              <MockupFrame path="app.enwis.uz/analytics" className="w-full">
                <AnalyticsMockup />
              </MockupFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-14"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
                Bizga ishonch bildirgan tashkilotlar
              </p>
              <LogoCloud />
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            {/* Organization-wide analytics, primary card on top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -12, y: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="relative z-10"
            >
              <MockupFrame
                path="b2b.enwis.uz/dashboard"
                className="relative w-full max-w-[580px]"
              >
                <AnalyticsMockup />
              </MockupFrame>
            </motion.div>

            {/* Floating scale badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="absolute -bottom-6 left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 shadow-[var(--shadow-soft-lg)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
                <BarChart3
                  className="h-4 w-4 text-[var(--color-deep)]"
                  strokeWidth={1.75}
                />
              </span>
              <div>
                <p className="text-xs font-medium text-[var(--color-ink)]">
                  480+ muassasa
                </p>
                <p className="text-[11px] text-[var(--color-slate)]">
                  Enwis'ga ishonch bildirdi
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI stats */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-editorial grid grid-cols-2 gap-8 lg:grid-cols-4">
          {B2B_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-medium text-[var(--color-ink)] lg:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value pillars: ROI, Time Savings, Cost Reduction, Security */}
      <section className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Nega Enwis"
            title="Tashkilotlar uchun o'lchanadigan qiymat"
            description="Bular umumiy va'dalar emas — muassasa miqyosida sezadigan aniq natijalar."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {B2B_VALUE_PILLARS.map((pillar, i) => {
              const PillarIcon =
                PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: EASE,
                  }}
                  className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
                    <PillarIcon className="h-5 w-5 text-[var(--color-deep)]" />
                  </div>
                  <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-slate)]">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise features */}
      <section className="section-pad bg-[var(--color-deep-900)]">
        <div className="container-editorial">
          <SectionHeading
            tone="dark"
            eyebrow="Enterprise imkoniyatlari"
            title="Yirik tashkilotlar uchun mo'ljallangan qatlam"
            description="Standart rejalardan tashqari, katta muassasalar ehtiyoji uchun qo'shimcha imkoniyatlar."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-2xl)] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {B2B_ENTERPRISE_FEATURES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-[var(--color-deep-900)] p-7"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Check className="h-4 w-4 text-[var(--color-volt-light)]" />
                </div>
                <h3 className="font-display text-base font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book demo / Schedule meeting */}
      <section className="section-pad bg-white">
        <div className="container-editorial max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-tight text-[var(--color-ink)]"
          >
            Jamoangiz bilan gaplashishga tayyormiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="mt-5 text-lg leading-relaxed text-[var(--color-slate)]"
          >
            Demo bron qiling yoki qulay vaqtda uchrashuv belgilang —
            muassasangiz ehtiyojiga mos reja va integratsiya bo&apos;yicha birga
            ko&apos;rib chiqamiz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact#demo">
                Demo bron qilish <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact#demo">
                <CalendarClock className="h-4 w-4" /> Uchrashuv belgilash
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
