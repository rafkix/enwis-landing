"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="Fikrlar"
          title="O'qituvchilar va tashkilotlar Enwis haqida"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[var(--radius-xl)] border border-[var(--color-line)] p-7"
            >
              <Quote className="h-6 w-6 text-[var(--color-volt)]" />
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--color-ink)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mist)] font-display text-sm font-medium text-[var(--color-deep)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-slate)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
