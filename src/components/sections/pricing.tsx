"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS, PRICING_COMPARISON_ROWS, APP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function formatSum(value: number) {
  return new Intl.NumberFormat("uz-UZ").format(value);
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="narxlar" className="section-pad bg-[var(--color-mist)]">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="Narxlar"
          title="Ehtiyojingizga mos reja tanlang"
          description="Yakka o'qituvchidan davlat tashkilotigacha — shaffof narxlash, yashirin to'lovlarsiz."
          className="mx-auto"
        />

        <div className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-[var(--radius-pill)] bg-white p-1 shadow-[var(--shadow-soft-sm)]">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-medium transition-all",
              !yearly ? "bg-[var(--color-deep)] text-white" : "text-[var(--color-slate)]"
            )}
          >
            Oylik
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-medium transition-all",
              yearly ? "bg-[var(--color-deep)] text-white" : "text-[var(--color-slate)]"
            )}
          >
            Yillik
            <span className="rounded-full bg-[var(--color-volt)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-deep-900)]">
              -20%
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex flex-col rounded-[var(--radius-2xl)] border p-8",
                  plan.highlighted
                    ? "border-[var(--color-deep)] bg-[var(--color-deep-900)] text-white shadow-[var(--shadow-soft-lg)]"
                    : "border-[var(--color-line)] bg-white"
                )}
              >
                <p
                  className={cn(
                    "font-display text-lg font-medium",
                    plan.highlighted ? "text-white" : "text-[var(--color-ink)]"
                  )}
                >
                  {plan.name}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlighted ? "text-white/60" : "text-[var(--color-slate)]"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-6 mb-2">
                  {price === null ? (
                    <span className="font-display text-3xl font-medium">Individual</span>
                  ) : price === 0 ? (
                    <span className="font-display text-3xl font-medium">Bepul</span>
                  ) : (
                    <span className="font-display text-3xl font-medium">
                      {formatSum(price)}{" "}
                      <span
                        className={cn(
                          "text-base font-normal",
                          plan.highlighted ? "text-white/50" : "text-[var(--color-slate)]"
                        )}
                      >
                        so&apos;m / oy
                      </span>
                    </span>
                  )}
                </div>

                <Button
                  variant={plan.highlighted ? "primary" : "dark"}
                  size="md"
                  className="mt-4 w-full"
                  asChild
                >
                  {plan.id === "teacher" ? (
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      {plan.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link href="/contact#demo">
                      {plan.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </Button>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-3 text-sm",
                        plan.highlighted ? "text-white/80" : "text-[var(--color-ink)]"
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-[var(--color-volt-light)]" : "text-[var(--color-deep)]"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-x-auto rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)]">
                <th className="p-5 text-left font-display font-medium text-[var(--color-ink)]">
                  Funksiya
                </th>
                <th className="p-5 text-center font-display font-medium text-[var(--color-ink)]">
                  O&apos;qituvchi
                </th>
                <th className="p-5 text-center font-display font-medium text-[var(--color-ink)]">
                  Tashkilot
                </th>
                <th className="p-5 text-center font-display font-medium text-[var(--color-ink)]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-[var(--color-line)] last:border-0">
                  <td className="p-5 text-[var(--color-ink)]">{row.feature}</td>
                  <td className="p-5 text-center">
                    <CheckOrX value={row.teacher} />
                  </td>
                  <td className="p-5 text-center">
                    <CheckOrX value={row.organization} />
                  </td>
                  <td className="p-5 text-center">
                    <CheckOrX value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CheckOrX({ value }: { value: boolean }) {
  return value ? (
    <Check className="mx-auto h-4 w-4 text-[var(--color-deep)]" />
  ) : (
    <X className="mx-auto h-4 w-4 text-[var(--color-slate-light)]" />
  );
}
