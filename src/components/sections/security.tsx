"use client";

import { motion } from "framer-motion";
import { Shuffle, Dices, History, ScanFace, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SECURITY_FEATURES } from "@/lib/constants";

const ICONS = [Shuffle, Dices, History, ScanFace, MonitorSmartphone, ShieldCheck];

export function Security() {
  return (
    <section className="section-pad bg-[var(--color-deep-900)]">
      <div className="container-editorial">
        <SectionHeading
          tone="dark"
          eyebrow="Xavfsizlik"
          title="Ishonchli natija — mustahkam infratuzilma bilan"
          description="Har bir imtihon shubhasiz natija bersin deb, xavfsizlik har bir qatlamda mavjud."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-2xl)] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_FEATURES.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-[var(--color-deep-900)] p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-[18px] w-[18px] text-[var(--color-volt-light)]" />
                </div>
                <h3 className="font-display text-base font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
