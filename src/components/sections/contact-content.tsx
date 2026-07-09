"use client";

import { motion } from "framer-motion";
import { Building2, Headset, MessageCircleQuestion, Mail, Phone, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { MapPlaceholder } from "@/components/sections/map-placeholder";
import { CONTACT_CHANNELS, COMPANY_INFO } from "@/lib/constants";

const CHANNEL_ICONS = {
  sales: Building2,
  support: Headset,
  general: MessageCircleQuestion,
} as const;

export function ContactContent() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden pt-40 pb-14 lg:pt-48 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--color-volt)]/15 blur-[120px]"
        />
        <div className="container-editorial relative max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pill-tag mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
            Bog&apos;lanish
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-medium leading-[1.1] text-[var(--color-ink)]"
          >
            Sizga qanday yordam bera olamiz?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-slate)]"
          >
            Demo so&apos;rashdan tortib texnik yordamgacha — jamoamiz sizga tez orada javob
            beradi.
          </motion.p>
        </div>
      </section>

      {/* Channels */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-editorial grid gap-5 sm:grid-cols-3">
          {CONTACT_CHANNELS.map((channel, i) => {
            const Icon = CHANNEL_ICONS[channel.id as keyof typeof CHANNEL_ICONS];
            return (
              <motion.a
                key={channel.id}
                href={`mailto:${channel.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] p-6 transition-colors hover:border-[var(--color-deep)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-mist)] transition-colors group-hover:bg-[var(--color-volt)]">
                  <Icon className="h-5 w-5 text-[var(--color-deep)]" />
                </div>
                <h3 className="font-display text-base font-medium text-[var(--color-ink)]">
                  {channel.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-slate)]">
                  {channel.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[var(--color-deep)]">
                  {channel.email}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Form + sidebar */}
      <section id="demo" className="section-pad bg-[var(--color-mist)] scroll-mt-24">
        <div className="container-editorial grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="flex h-full flex-col">
            <SectionHeading
              eyebrow="Murojaat"
              title="Bizga xabar yozing"
              description="Formani to'ldiring — qaysi bo'lim kerakligini tanlashning o'zi yetarli, qolganini o'zimiz hal qilamiz."
            />
            <div className="mt-8 flex-1">
              <ContactForm />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full flex-col gap-5"
          >
            <div className="flex-1">
              <MapPlaceholder />
            </div>

            <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
                Kompaniya ma&apos;lumotlari
              </p>
              <ul className="mt-4 flex flex-col gap-4 text-sm text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-slate)]" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[var(--color-slate)]" />
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                    className="hover:text-[var(--color-deep)]"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--color-slate)]" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[var(--color-deep)]">
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[var(--color-slate)]" />
                  <span>{COMPANY_INFO.hours}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
