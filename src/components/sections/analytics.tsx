"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users2, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { MockupFrame } from "@/components/shared/mockup-frame";
import { AnalyticsMockup } from "@/components/shared/dashboard-mockups";

const CALLOUTS = [
  {
    icon: TrendingUp,
    title: "O'sish dinamikasi",
    description: "Har bir guruh, har bir chorak bo'yicha natijalar tendensiyasini kuzating.",
  },
  {
    icon: Users2,
    title: "Talaba kesimida tahlil",
    description: "Qaysi talaba qo'shimcha yordamga muhtojligini avtomatik aniqlang.",
  },
  {
    icon: Target,
    title: "Mavzu bo'yicha aniqlik",
    description: "Sinf yoki guruhning eng zaif va eng kuchli mavzularini bir qarashda ko'ring.",
  },
];

export function Analytics() {
  return (
    <section id="mahsulot" className="section-pad bg-white">
      <div className="container-editorial grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Tahlil"
            title="Raqamlar orqasidagi hikoyani ko'ring"
            description="Har bir imtihon natijasi — chuqur, tushunarli va harakatga undovchi tahlilga aylanadi."
          />

          <div className="mt-8 flex flex-col gap-6">
            {CALLOUTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)]">
                  <item.icon className="h-[18px] w-[18px] text-[var(--color-deep)]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-medium text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-slate)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MockupFrame path="app.enwis.uz/analytics">
            <AnalyticsMockup />
          </MockupFrame>
        </motion.div>
      </div>
    </section>
  );
}
