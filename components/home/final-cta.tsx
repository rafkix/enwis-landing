"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  return (
    <section className="section-pad" aria-labelledby="cta-heading">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-deep-900)] p-14 text-center shadow-[var(--shadow-soft-lg)] lg:p-20">
          {/* Decorative glow orbs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-[15%] h-[500px] w-[500px] rounded-full bg-[var(--color-volt)]/25 blur-[120px] opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 right-[10%] h-[480px] w-[480px] rounded-full bg-[var(--color-volt-light)]/20 blur-[120px] opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-volt)]/10 blur-[100px] opacity-40"
          />

          {/* Grid pattern overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-volt)]/20"
            >
              <Sparkles className="h-5 w-5 text-[var(--color-volt)]" />
            </motion.div>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-white"
            >
              Baholashni zamonaviylashtirishga tayyormisiz?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="mx-auto mt-5 max-w-[480px] text-base leading-relaxed text-white/60"
            >
              14 kunlik bepul sinov — kredit karta talab qilinmaydi.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button variant="primary" size="lg" asChild>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Bepul boshlash <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
                asChild
              >
                <Link href="/contact#demo">
                  <PlayCircle className="h-4 w-4" /> Demo so&apos;rash
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
