"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  PRICING_PLANS,
  PRICING_COMPARISON_ROWS,
  APP_URL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Intl.NumberFormat("uz-UZ") ishlatilmaydi — Node.js runtime'da ICU
 * ma'lumotlari to'liq bo'lmasligi mumkin va server "69,000", brauzer
 * esa "69 000" chiqarishi mumkin, bu esa hydration mismatch beradi
 * (aynan shu xato loglarda ko'rindi). Shuning uchun muhitga bog'liq
 * bo'lmagan, har doim bir xil natija beruvchi regex-based formatlash
 * ishlatiladi.
 */
function formatSum(value: number) {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// ── PROMO SOZLAMALARI ──────────────────────────────────────────
// Bu haqiqiy aksiya: 31-iyulgacha Pro va Premium tariflarga -20%.
// Sanadan keyin promo avtomatik tugaydi va oddiy narx qaytadi.
// PRICING_PLANS endi @/lib/constants dan keladi (promoEligible maydoni
// shu faylga qo'shilgan bo'lishi kerak — pastdagi constants-pricing-plans.ts ga qarang).
const PROMO_DISCOUNT_PERCENT = 20;
// DIQQAT: iyul oyida 31-kun bor, lekin ba'zi oylarda yo'q — shu sabab bu sana
// doim to'g'ri "oy oxiri"ni bildirmaydi. Iyul uchun 31 to'g'ri qiymat.
const PROMO_VALID_UNTIL = new Date("2026-07-31T23:59:59+05:00"); // Tashkent vaqti

// Yillik tarifda haqiqatda qancha tejalishini hisoblaymiz (har bir tarif uchun alohida),
// qo'lda "-20%" deb yozib qo'yish o'rniga — shunda ko'rsatilgan raqam har doim to'g'ri bo'ladi.
function calcYearlySavingsPercent(monthly: number, yearly: number) {
  if (monthly === 0) return 0;
  const paidMonthlyOverYear = monthly * 12;
  return Math.round(
    ((paidMonthlyOverYear - yearly) / paidMonthlyOverYear) * 100,
  );
}

// Umumiy tejovni oylik "ro'yxat narxi"ga nisbatan hisoblaydi — oylik va yillik
// rejim uchun asos boshqacha bo'lgani sabab alohida funksiya.
function calcTotalSavingsPercent(
  monthly: number,
  finalPrice: number,
  isYearly: boolean,
) {
  if (monthly === 0) return 0;
  const reference = isYearly ? monthly * 12 : monthly;
  return Math.round(((reference - finalPrice) / reference) * 100);
}

/**
 * Countdown faqat client-only qiymat qaytaradi (Date.now() vaqt o'tishi bilan
 * o'zgaradi), shuning uchun `mounted` bayrog'i bilan birinchi render (server +
 * client hydration paytida) har doim "hali hisoblanmagan" holatni qaytaradi,
 * useEffect ichida esa faqat mount bo'lgandan keyin haqiqiy son o'rnatiladi —
 * shu tariqa server/client matn mos kelmasligi (hydration mismatch) oldi olinadi.
 */
function useCountdown(target: Date) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    const update = () => setTimeLeft(target.getTime() - Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  const isActive = mounted && timeLeft > 0;
  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));

  return { isActive, days, hours };
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const {
    isActive: promoActive,
    days,
    hours,
  } = useCountdown(PROMO_VALID_UNTIL);

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

        {/* Promo banner — faqat aksiya rostdan faol bo'lganda ko'rinadi.
            "yana" so'zi bilan bu yillik reja chegirmasidan FARQLI, QO'SHIMCHA
            vaqtinchalik aksiya ekani aniq ko'rsatiladi. */}
        {promoActive && (
          <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-[var(--color-volt)] px-4 py-2 text-sm font-medium text-[var(--color-deep-900)]">
            <Clock className="h-4 w-4" />
            Cheklangan aksiya: Pro va Premium&apos;ga yana qo&apos;shimcha -
            {PROMO_DISCOUNT_PERCENT}% — {days} kun {hours} soat qoldi
            (31-iyulgacha)
          </div>
        )}

        <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-[var(--radius-pill)] bg-white p-1 shadow-[var(--shadow-soft-sm)]">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-medium transition-all",
              !yearly
                ? "bg-[var(--color-deep)] text-white"
                : "text-[var(--color-slate)]",
            )}
          >
            Oylik
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-medium transition-all",
              yearly
                ? "bg-[var(--color-deep)] text-white"
                : "text-[var(--color-slate)]",
            )}
          >
            Yillik
            <span className="rounded-full bg-[var(--color-volt)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-deep-900)]">
              yillik to&apos;lovda -
              {calcYearlySavingsPercent(
                PRICING_PLANS[1].monthly,
                PRICING_PLANS[1].yearly,
              )}
              %
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => {
            const basePrice = yearly ? plan.yearly : plan.monthly;
            const applyPromo =
              promoActive && plan.promoEligible && basePrice > 0;
            const finalPrice = applyPromo
              ? Math.round((basePrice * (100 - PROMO_DISCOUNT_PERCENT)) / 100)
              : basePrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "flex flex-col rounded-[var(--radius-2xl)] border p-8",
                  plan.highlighted
                    ? "border-[var(--color-deep)] bg-[var(--color-deep-900)] text-white shadow-[var(--shadow-soft-lg)]"
                    : "border-[var(--color-line)] bg-white",
                )}
              >
                <p
                  className={cn(
                    "font-display text-lg font-medium",
                    plan.highlighted ? "text-white" : "text-[var(--color-ink)]",
                  )}
                >
                  {plan.name}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlighted
                      ? "text-white/60"
                      : "text-[var(--color-slate)]",
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-6 mb-2">
                  {basePrice === 0 ? (
                    <span className="font-display text-3xl font-medium">
                      Bepul
                    </span>
                  ) : (
                    <div className="flex items-end gap-2">
                      {/* Chizilgan narx faqat promo REAL faol bo'lganda,
                          va bu HOZIRGI standart narx — o'ylab topilgan raqam emas */}
                      {applyPromo && (
                        <span
                          className={cn(
                            "text-base line-through",
                            plan.highlighted
                              ? "text-white/40"
                              : "text-[var(--color-slate-light)]",
                          )}
                        >
                          {formatSum(basePrice)}
                        </span>
                      )}
                      <span className="font-display text-3xl font-medium">
                        {formatSum(finalPrice)}{" "}
                        <span
                          className={cn(
                            "text-base font-normal",
                            plan.highlighted
                              ? "text-white/50"
                              : "text-[var(--color-slate)]",
                          )}
                        >
                          so&apos;m / {yearly ? "yil" : "oy"}
                        </span>
                      </span>
                    </div>
                  )}
                  {applyPromo && (
                    <p
                      className={cn(
                        "mt-1 text-xs",
                        plan.highlighted
                          ? "text-[var(--color-volt-light)]"
                          : "text-emerald-600",
                      )}
                    >
                      31-iyulgacha yana -{PROMO_DISCOUNT_PERCENT}% (jami{" "}
                      {calcTotalSavingsPercent(
                        plan.monthly,
                        finalPrice,
                        yearly,
                      )}
                      % arzon oylik narxdan), keyin {formatSum(basePrice)}{" "}
                      so&apos;mga qaytadi
                    </p>
                  )}
                </div>

                <Button
                  variant={plan.highlighted ? "primary" : "dark"}
                  size="md"
                  className="mt-4 w-full"
                  asChild
                >
                  {plan.id === "free" ? (
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
                        plan.highlighted
                          ? "text-white/80"
                          : "text-[var(--color-ink)]",
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted
                            ? "text-[var(--color-volt-light)]"
                            : "text-[var(--color-deep)]",
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
                <tr
                  key={row.feature}
                  className="border-b border-[var(--color-line)] last:border-0"
                >
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
