"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="py-28" aria-labelledby="cta-heading ">
      <div className="container-editorial">
        <div
          className="relative overflow-hidden rounded-[32px] p-14 text-center lg:p-20"
          style={{ background: "var(--dark, #18332F)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute h-[640px] w-[640px] rounded-full blur-[10px]"
            style={{
              top: "-200px",
              left: "20%",
              opacity: 0.5,
              background:
                "radial-gradient(circle, rgba(168,246,45,.35), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute h-[640px] w-[640px] rounded-full blur-[10px]"
            style={{
              bottom: "-200px",
              right: "10%",
              opacity: 0.4,
              background:
                "radial-gradient(circle, rgba(200,255,82,.3), transparent 65%)",
            }}
          />

          <div className="relative">
            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            >
              Baholashni zamonaviylashtirishga tayyormisiz?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mx-auto mt-5 max-w-[480px]"
              style={{
                color: "var(--gray-on-dark, #C7D6D1)",
                fontSize: "16px",
              }}
            >
              14 kunlik bepul sinov — kredit karta talab qilinmaydi.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-3.5 text-[14px] font-semibold"
                style={{
                  background: "var(--accent, #A8F62D)",
                  color: "var(--dark, #18332F)",
                }}
                asChild
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Bepul boshlash <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border px-8 py-3.5 text-[14px] font-semibold text-white hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,.25)" }}
                asChild
              >
                <Link href="/demo">
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
