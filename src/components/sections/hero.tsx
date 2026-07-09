"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MockupFrame } from "@/components/shared/mockup-frame";
import {
  TeacherDashboardMockup,
  StudentExamMockup,
} from "@/components/shared/dashboard-mockups";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { LogoCloud } from "@/components/shared/logo-cloud";
import { HERO_STATS, APP_URL } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Ambient layered background */}
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
            className="pill-tag mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
            Raqamli baholash platformasi
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.05] text-[var(--color-ink)]"
          >
            Imtihonlaringizni qog&apos;ozdan{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">bulutga</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-[var(--color-volt)]/50"
              />
            </span>{" "}
            ko&apos;chiring
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-slate)]"
          >
            Enwis — maktablar, universitetlar va o&apos;quv markazlari uchun
            imtihon yaratish, o&apos;tkazish va tahlil qilishning yagona
            platformasi. AI ixtiyoriy — platforma u yo&apos;q holda ham
            to&apos;liq ishlaydi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Boshlash <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact#demo">
                <PlayCircle className="h-4 w-4" /> Demo ko&apos;rish
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
            <MockupFrame path="app.enwis.uz/exam" className="w-full">
              <StudentExamMockup />
            </MockupFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
              Ishonch bildirgan tashkilotlar
            </p>
            <LogoCloud />
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          {/* Teacher dashboard, offset behind the main card for depth */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="absolute -right-10 -top-10 z-0 w-[380px] rotate-[4deg] opacity-90"
          >
            <MockupFrame path="app.enwis.uz/dashboard" className="w-full">
              <TeacherDashboardMockup />
            </MockupFrame>
          </motion.div> */}

          {/* Student exam, primary card on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -12, y: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="relative z-10"
          >
            <MockupFrame
              path="app.enwis.uz/exam"
              className="relative w-full max-w-[580px]"
            >
              <StudentExamMockup />
            </MockupFrame>
          </motion.div>
        
        </div>
      </div>

      <div className="container-editorial relative mt-24 grid grid-cols-2 gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-4">
        {HERO_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          >
            <p className="font-display text-3xl font-medium text-[var(--color-ink)] lg:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-[var(--color-slate)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
