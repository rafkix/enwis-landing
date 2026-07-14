"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "pill-tag mb-5",
            isDark && "bg-white/10 border-white/15 text-[var(--color-volt-light)]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]",
          isDark ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-[1.05rem] leading-relaxed",
            isDark ? "text-white/65" : "text-[var(--color-slate)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
