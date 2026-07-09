"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="Jarayon"
          title="To'rt qadamda — savoldan tahlilgacha"
          description="Enwis ortidagi jarayon oddiy: yaratish, o'tkazish, baholash va tushunish."
          className="mx-auto"
        />

        <div className="relative mt-16 grid gap-8 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-[var(--color-line)] lg:block"
          />
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[var(--color-line)] bg-white font-mono text-sm text-[var(--color-deep)] shadow-[var(--shadow-soft-sm)]">
                {item.step}
              </div>
              <h3 className="font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
