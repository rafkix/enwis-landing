"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export function NewsContent() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-volt)]/15 blur-[140px]"
      />

      <div className="container-editorial relative flex max-w-3xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="pill-tag"
        >
          🚀 Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-[var(--color-ink)]"
        >
          News & Updates
          <span className="block text-[var(--color-deep)]">
            coming soon.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-slate)]"
        >
          We're preparing a dedicated space for product announcements, release
          notes, engineering stories, and everything happening across the Enwis
          platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="primary" size="lg">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Open Enwis <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/">Back Home</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}