"use client";

import { motion } from "framer-motion";

interface ZigzagPatternProps {
  className?: string;
  opacity?: number;
}

export function ZigzagPattern({ className = "", opacity = 0.06 }: ZigzagPatternProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Top zigzag band — 30-40% from top */}
      <svg
        className="absolute left-0 right-0"
        style={{ top: "30%", height: "120px" }}
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 L60,20 L120,60 L180,20 L240,60 L300,20 L360,60 L420,20 L480,60 L540,20 L600,60 L660,20 L720,60 L780,20 L840,60 L900,20 L960,60 L1020,20 L1080,60 L1140,20 L1200,60 L1260,20 L1320,60 L1380,20 L1440,60"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[var(--color-deep)]"
          opacity={opacity}
        />
        <path
          d="M0,80 L60,40 L120,80 L180,40 L240,80 L300,40 L360,80 L420,40 L480,80 L540,40 L600,80 L660,40 L720,80 L780,40 L840,80 L900,40 L960,80 L1020,40 L1080,80 L1140,40 L1200,80 L1260,40 L1320,80 L1380,40 L1440,80"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[var(--color-volt)]"
          opacity={opacity * 0.7}
        />
      </svg>

      {/* Bottom zigzag band — mirror */}
      <svg
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "80px" }}
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 L80,10 L160,40 L240,10 L320,40 L400,10 L480,40 L560,10 L640,40 L720,10 L800,40 L880,10 L960,40 L1040,10 L1120,40 L1200,10 L1280,40 L1360,10 L1440,40"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[var(--color-deep)]"
          opacity={opacity * 0.5}
        />
      </svg>
    </motion.div>
  );
}
