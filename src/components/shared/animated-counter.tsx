"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const isDecimal = value % 1 !== 0;
        ref.current.textContent = isDecimal
          ? latest.toFixed(1) + suffix
          : Math.floor(latest).toLocaleString("uz-UZ") + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      0{suffix}
    </motion.span>
  );
}
