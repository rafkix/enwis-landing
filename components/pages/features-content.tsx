"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBg } from "@/components/shared/hero-bg";
import { APP_URL } from "@/lib/constants";

export function FeaturesContent() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <HeroBg />

      <div className="container-editorial relative flex max-w-3xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="pill-tag"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
          Tez orada
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-[var(--color-ink)]"
        >
          Batafsil imkoniyatlar sahifasi
          <span className="block text-[var(--color-deep)]">
            tez orada tayyor bo&apos;ladi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-slate)]"
        >
          AI asosidagi baholash, kengaytirilgan tahlillar, aqlli imtihon
          boshqaruvi va ko&apos;plab boshqa vositalar tez orada shu yerda
          bo&apos;ladi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="primary" size="lg">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Enwis&apos;ni ochish <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/">Bosh sahifa</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
