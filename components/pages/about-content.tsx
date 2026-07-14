"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Target,
  ShieldCheck,
  Heart,
  Users,
  Zap,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MockupFrame } from "@/components/shared/mockups/mockup-frame";
import { HeroBg } from "@/components/shared/hero-bg";
import {
  TeacherDashboardMockup,
  StudentExamMockup,
} from "@/components/shared/mockups/dashboard-mockups";
import {
  ABOUT_VALUES,
  ABOUT_TIMELINE,
  ABOUT_STATS,
  APP_URL,
} from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

// Generic, on-brand icon set for value cards — cycles if there are more
// than four values so the mapping never runs out.
const VALUE_ICONS: LucideIcon[] = [ShieldCheck, Heart, Users, Zap];

export function AboutContent() {
  return (
    <>
      {/* Kompaniya hikoyasi */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
        <HeroBg />

        <div className="container-editorial relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="pill-tag mb-7"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
              Bizning hikoyamiz
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.1rem,4vw,3.25rem)] font-medium leading-[1.1] text-[var(--color-ink)]"
            >
              Enwis&apos;ni shuning uchun boshladik — tekshirish
              o&apos;qituvchining kechqurunlarini band qilmasligi kerak
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-slate)]"
            >
              Enwis kichik muhandislar va sobiq o&apos;qituvchilar jamoasidan
              boshlandi — ular doim bir xil muammoni ko&apos;rishardi: chop
              etilgan testlar, soatlab qo&apos;lda tekshirish va faqat ballni
              ko&apos;rsatib, sababini aytmaydigan natijalar. Biz o&apos;zimiz
              orzu qilgan platformani qurdik — bu platforma imtihonning texnik
              jarayonlarini o&apos;z zimmasiga oladi, shunda o&apos;qituvchilar
              sinf xonasida sodir bo&apos;ladigan narsaga e&apos;tibor qarata
              oladi. AI keyinroq, bir nechta ixtiyoriy vositalardan biri
              sifatida qo&apos;shildi — poydevor sifatida emas.
            </motion.p>

            {/* Compact mockup for mobile/tablet — the layered desktop version is hidden below lg */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-10 lg:hidden"
            >
              <MockupFrame path="app.enwis.uz/dashboard" className="w-full">
                <TeacherDashboardMockup />
              </MockupFrame>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            {/* Student exam, offset behind the main card for depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="absolute -right-8 -top-8 z-0 w-[300px] rotate-[4deg] opacity-90"
            >
              <MockupFrame path="test.enwis.uz/exam" className="w-full">
                <StudentExamMockup />
              </MockupFrame>
            </motion.div>

            {/* Teacher dashboard, primary card on top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -12, y: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="relative z-10"
            >
              <MockupFrame
                path="app.enwis.uz/dashboard"
                className="relative w-full max-w-[460px]"
              >
                <TeacherDashboardMockup />
              </MockupFrame>
            </motion.div>

            {/* Floating "founding team" badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="absolute -bottom-6 left-6 z-20 flex items-center gap-2.5 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 shadow-[var(--shadow-soft-lg)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
                <Users
                  className="h-4 w-4 text-[var(--color-deep)]"
                  strokeWidth={1.75}
                />
              </span>
              <div>
                <p className="text-xs font-medium text-[var(--color-ink)]">
                  Kichik jamoadan boshlandi
                </p>
                <p className="text-[11px] text-[var(--color-slate)]">
                  O&apos;qituvchilar va muhandislar
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missiya va Vizyon */}
      <section className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft-sm)] lg:p-10"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
              <Target className="h-5 w-5 text-[var(--color-deep)]" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
              Missiya
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-snug text-[var(--color-ink)]">
              Adolatli, tez va tushunarli baholashni har bir o&apos;qituvchi
              uchun ochiq qilish
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-slate)]">
              Bir o&apos;qituvchi va o&apos;ttizta talaba bo&apos;lsin yoki
              o&apos;ttiz mingta talabasi bo&apos;lgan universitet — imtihon
              yaratish, o&apos;tkazish va tushunish vositalari har doim
              qo&apos;l ostida bo&apos;lishi kerak, AI bilan ham, usiz ham.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft-sm)] lg:p-10"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
              <Compass className="h-5 w-5 text-[var(--color-deep)]" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
              Vizyon
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium leading-snug text-[var(--color-ink)]">
              Bilimni baholash haftalar emas, daqiqalar bilan o&apos;lchanadigan
              kelajak
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-slate)]">
              Har bir natija — talaba, o&apos;qituvchi va tashkilot uchun
              harakat qilish mumkin bo&apos;lgan tushuncha bilan kelishini
              xohlaymiz, shunda baholash shunchaki raqam emas, balki rivojlanish
              vositasiga aylanadi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qadriyatlar */}
      <section className="section-pad bg-white">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Biz nimaga ishonamiz"
            title="Har bir qarorimiz ortidagi tamoyillar"
            description="Bular devordagi plakat emas — biz o'z ishimizni shularga solishtirib tekshiramiz."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_VALUES.map((value, i) => {
              const ValueIcon = VALUE_ICONS[i % VALUE_ICONS.length]!;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                  className="rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 transition-shadow hover:shadow-[var(--shadow-soft-sm)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-volt)]/20">
                      <ValueIcon
                        className="h-5 w-5 text-[var(--color-deep)]"
                      />
                    </span>
                    <span className="font-mono text-xs text-[var(--color-slate-light)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Xronologiya */}
      <section className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial max-w-3xl">
          <SectionHeading
            eyebrow="Xronologiya"
            title="Bu yerga qanday kelib qoldik"
            description="Har bir bosqich o'zidan oldingi bosqichdan olingan saboq asosida shakllangan haqiqiy ketma-ketlik."
          />

          <div className="mt-14 flex flex-col">
            {ABOUT_TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white font-mono text-xs text-[var(--color-deep)] shadow-[var(--shadow-soft-sm)] transition-transform hover:scale-105">
                    {item.year}
                  </span>
                  {i < ABOUT_TIMELINE.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-[var(--color-line)]" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-lg font-medium text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-slate)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistika */}
      <section className="bg-[var(--color-deep-900)] py-20">
        <div className="container-editorial grid grid-cols-2 gap-8 lg:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-medium text-white lg:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enwis nima uchun mavjud / yakuniy CTA */}
      <section className="section-pad bg-white">
        <div className="container-editorial max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-tight text-[var(--color-ink)]"
          >
            Enwis nima uchun mavjud
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="mt-5 text-lg leading-relaxed text-[var(--color-slate)]"
          >
            Chunki bilimni baholaydigan insonlar o&apos;zlari o&apos;rgatayotgan
            fan kabi puxta o&apos;ylangan vositalarga loyiqdir. Tekshirishga
            sarflanmagan har bir soat — dars berishga qaytadigan soatdir, va har
            bir talaba o&apos;zini tushuntirib beradigan natijaga loyiqdir.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Boshlash <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact#demo">
                Biz bilan bog&apos;laning <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
