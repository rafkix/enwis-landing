"use client";

import { useEffect, useState } from "react";
import { Landmark } from "lucide-react";

interface CurrencyRate {
  currency: string;
  buy: string;
}

interface CurrencyBank {
  bank_name: string;
  rate: CurrencyRate[];
}

// daryo.uz'ga to'g'ridan-to'g'ri client'dan fetch qilinsa, ular Origin
// header'iga qarab 403 qaytaradi (faqat o'z sayti uchun ochiq API).
// Shu sababli bizning server-side proxy route'imiz (src/app/api/currency/route.ts)
// orqali so'rov yuboramiz — u server-to-server so'rov qiladi, Origin bloklanmaydi.
const CURRENCY_API = "/api/currency";

// Faqat shu valyutalarni ko'rsatamiz, shu tartibda
const VISIBLE_CURRENCIES = ["USD", "EUR", "RUB"];

function formatRate(value: string) {
  const num = Number(value);
  if (Number.isNaN(num)) return value;
  // Butun so'mga yaxlitlab, bo'shliq bilan minglikka ajratamiz
  return Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function CurrencyWidget() {
  const [bank, setBank] = useState<CurrencyBank | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(CURRENCY_API, { cache: "no-store" });
        if (!res.ok) throw new Error("Kurslarni olishda xatolik");
        const data: CurrencyBank[] = await res.json();
        if (!cancelled) setBank(data[0] ?? null);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return null;

  const rates =
    bank?.rate.filter((r) => VISIBLE_CURRENCIES.includes(r.currency)) ?? [];

  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
      <div className="mb-4 flex items-center gap-2">
        <Landmark className="h-4 w-4 text-[var(--color-deep)]" />
        <h2 className="font-display text-sm font-medium text-[var(--color-ink)]">
          Valyuta kurslari
        </h2>
      </div>

      {!bank ? (
        <div className="flex flex-col gap-3">
          {VISIBLE_CURRENCIES.map((c) => (
            <div
              key={c}
              className="h-5 animate-pulse rounded bg-[var(--color-mist)]"
            />
          ))}
        </div>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--color-line)]">
          {rates.map((r) => (
            <li
              key={r.currency}
              className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
            >
              <span className="text-sm font-medium text-[var(--color-slate)]">
                {r.currency}
              </span>
              <span className="font-mono text-sm text-[var(--color-ink)]">
                {formatRate(r.buy)}{" "}
                <span className="text-[var(--color-slate-light)]">
                  so&apos;m
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 text-[11px] text-[var(--color-slate-light)]">
        Manba: {bank?.bank_name ?? "Markaziy Bank"}
      </p>
    </div>
  );
}