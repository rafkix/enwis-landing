"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-deep-900)] via-[var(--color-deep)] to-[var(--color-deep-900)] py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--color-volt)]/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[8%] h-[320px] w-[320px] rounded-full bg-[var(--color-volt-light)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-editorial relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] text-white"
        >
          Birinchi imtihoningizni{" "}
          <span className="text-[var(--color-volt-light)]">bugun</span> yarating
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-lg text-white/60"
        >
          Kredit karta talab qilinmaydi. O&apos;qituvchi rejasi butunlay bepul.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" asChild>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Boshlash <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[var(--color-volt)]/30 text-white hover:border-[var(--color-volt)]/60 hover:bg-white/5"
            asChild
          >
            <Link href="/contact#demo">
              <PlayCircle className="h-4 w-4" /> Demo ko&apos;rish
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
