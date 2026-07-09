"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  FileQuestion,
  BarChart3,
  Users,
  Settings,
  Clock,
  CheckCircle2,
  ChevronRight,
  Plus,
  Check,
  TrendingUp,
  TrendingDown,
  Save,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ----------------------------------------------------------------------- */
/* Teacher dashboard                                                       */
/* ----------------------------------------------------------------------- */

const SIDEBAR_ITEMS = [
  { icon: LayoutGrid, label: "Boshqaruv paneli", active: true },
  { icon: FileQuestion, label: "Imtihonlar" },
  { icon: Users, label: "Talabalar" },
  { icon: BarChart3, label: "Tahlil" },
  { icon: Settings, label: "Sozlamalar" },
];

const STATS = [
  { icon: FileQuestion, label: "Faol imtihonlar", value: "3" },
  { icon: Users, label: "Ishtirokchilar", value: "412" },
  { icon: BarChart3, label: "O'rtacha ball", value: "78%" },
];

const RECENT_EXAMS = [
  {
    name: "Ingliz tili — B1 nazorat",
    count: "128 ishtirokchi",
    status: "Jarayonda",
  },
  {
    name: "Matematika — chorak nazorati",
    count: "96 ishtirokchi",
    status: "Yakunlangan",
  },
  {
    name: "Tarix — 9-sinf test",
    count: "84 ishtirokchi",
    status: "Rejalashtirilgan",
  },
] as const;

const STATUS_STYLE: Record<(typeof RECENT_EXAMS)[number]["status"], string> = {
  Jarayonda: "bg-[var(--color-volt-dim)] text-[var(--color-deep)]",
  Yakunlangan: "bg-[var(--color-mist)] text-[var(--color-slate)]",
  Rejalashtirilgan:
    "bg-white border border-[var(--color-line)] text-[var(--color-slate)]",
};

export function TeacherDashboardMockup() {
  return (
    <div className="flex h-[380px] overflow-hidden border border-[var(--color-line)] bg-white font-body text-sm shadow-[var(--shadow-soft-md,0_20px_50px_-24px_rgba(17,24,39,0.25))]">
      <aside className="hidden w-48 flex-col gap-1 border-r border-[var(--color-line)] bg-[var(--color-mist)] p-3 sm:flex">
        <div className="mb-3 flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-deep)] text-xs font-medium text-white">
            M
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-[var(--color-ink)]">
              Madina T.
            </p>
            <p className="truncate text-[11px] text-[var(--color-slate)]">
              42-maktab
            </p>
          </div>
        </div>

        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition-colors ${
              item.active
                ? "bg-white font-medium text-[var(--color-deep)] shadow-[var(--shadow-soft-sm,0_1px_2px_rgba(17,24,39,0.06))]"
                : "text-[var(--color-slate)] hover:bg-white/60 hover:text-[var(--color-ink)]"
            }`}
          >
            {item.active && (
              <span className="absolute -left-3 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-[var(--color-volt)]" />
            )}
            <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {item.label}
          </div>
        ))}
      </aside>

      <div className="flex-1 overflow-hidden p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-display text-base font-medium text-[var(--color-ink)]">
              Salom, Madina 👋
            </p>
            <p className="text-xs text-[var(--color-slate)]">
              Bugun 3 ta imtihon jarayonda
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--color-volt)] px-4 py-2 text-xs font-medium text-[var(--color-deep-900)] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.25} />
            Yangi imtihon
          </button>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="rounded-xl border border-[var(--color-line)] bg-white p-3"
            >
              <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-mist)]">
                <stat.icon
                  className="h-3.5 w-3.5 text-[var(--color-deep)]"
                  strokeWidth={1.75}
                />
              </div>
              <p className="font-display text-lg font-medium text-[var(--color-ink)]">
                {stat.value}
              </p>
              <p className="text-[11px] text-[var(--color-slate)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--color-line)] bg-white">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-2.5">
            <p className="text-xs font-medium text-[var(--color-ink)]">
              So&apos;nggi imtihonlar
            </p>
            <ChevronRight className="h-3.5 w-3.5 text-[var(--color-slate)]" />
          </div>
          {RECENT_EXAMS.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: EASE }}
              className="flex items-center justify-between px-4 py-2.5 text-xs transition-colors last:border-0 hover:bg-[var(--color-mist)]/60"
            >
              <div className="min-w-0">
                <p className="truncate text-[var(--color-ink)]">{row.name}</p>
                <p className="text-[11px] text-[var(--color-slate)]">
                  {row.count}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] ${STATUS_STYLE[row.status]}`}
              >
                {row.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Student exam                                                            */
/* ----------------------------------------------------------------------- */

const OPTIONS = [
  { label: "A", text: "for", active: false },
  { label: "B", text: "since", active: true },
  { label: "C", text: "during", active: false },
  { label: "D", text: "at", active: false },
];

export function StudentExamMockup() {
  const progress = (7 / 20) * 100;

  return (
    <div className="flex h-[380px] flex-col overflow-hidden border border-[var(--color-line)] bg-white font-body text-sm shadow-[var(--shadow-soft-md,0_20px_50px_-24px_rgba(17,24,39,0.25))]">
      <div className="h-1 w-full bg-[var(--color-mist)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: EASE }}
          className="h-full bg-[var(--color-volt)]"
        />
      </div>

      <div className="flex items-center justify-between border-[var(--color-line)] px-5 py-3">
        <p className="font-display text-sm font-medium text-[var(--color-ink)]">
          Ingliz tili — B1 nazorat
        </p>
        <div className="flex items-center gap-1.5 rounded-full bg-[var(--color-mist)] px-3 py-1 text-xs font-medium text-[var(--color-deep)]">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
          14:32
        </div>
      </div>

      <div className="flex-1 p-5">
        <p className="mb-1.5 text-xs font-medium text-[var(--color-slate)]">
          Savol 7 / 20
        </p>
        <p className="mb-5 font-display text-base leading-snug text-[var(--color-ink)]">
          Quyidagi gapda bo&apos;sh joyga mos keladigan so&apos;zni tanlang:
          &ldquo;She has been working here ___ 2019.&rdquo;
        </p>

        <div className="space-y-2.5">
          {OPTIONS.map((opt, i) => (
            <motion.div
              key={opt.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors ${
                opt.active
                  ? "border-[var(--color-deep)] bg-[var(--color-mist)]"
                  : "border-[var(--color-line)] hover:border-[var(--color-slate)]/40"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium transition-colors ${
                  opt.active
                    ? "bg-[var(--color-volt)] text-[var(--color-deep-900)]"
                    : "bg-[var(--color-mist)] text-[var(--color-slate)]"
                }`}
              >
                {opt.active ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                ) : (
                  opt.label
                )}
              </span>
              <span
                className={
                  opt.active
                    ? "font-medium text-[var(--color-ink)]"
                    : "text-[var(--color-ink)]"
                }
              >
                {opt.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--color-line)] px-5 py-3">
        <span className="flex items-center gap-1.5 text-xs text-[var(--color-slate)]">
          <Save className="h-3.5 w-3.5" strokeWidth={1.75} />
          Avtomatik saqlangan
        </span>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-[var(--color-deep)] px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Keyingi savol
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Analytics                                                                */
/* ----------------------------------------------------------------------- */

const ANALYTICS_BARS = [62, 74, 58, 81, 69, 88, 76];
const ANALYTICS_DAYS = ["Du", "Se", "Cho", "Pa", "Ju", "Sha", "Ya"];
const AVERAGE = Math.round(
  ANALYTICS_BARS.reduce((sum, v) => sum + v, 0) / ANALYTICS_BARS.length,
);

export function AnalyticsMockup() {
  return (
    <div className="flex h-[380px] flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-5 font-body text-sm shadow-[var(--shadow-soft-md,0_20px_50px_-24px_rgba(17,24,39,0.25))]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-base font-medium text-[var(--color-ink)]">
            Guruh tahlili
          </p>
          <p className="text-xs text-[var(--color-slate)]">
            10-A sinf · Matematika
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-deep)]">
          <CheckCircle2
            className="h-4 w-4 text-[var(--color-volt)]"
            strokeWidth={1.75}
          />
          Haftalik hisobot tayyor
        </div>
      </div>

      <div className="relative mb-5 flex items-end gap-3  border border-[var(--color-line)] bg-white p-4 pt-6">
        <div
          className="pointer-events-none absolute inset-x-4 border-t border-dashed border-[var(--color-slate)]/30"
          style={{ bottom: `calc(1rem + ${AVERAGE}%)` }}
        />
        <span
          className="pointer-events-none absolute right-4 -translate-y-1/2 rounded-full bg-white px-1.5 text-[10px] text-[var(--color-slate)]"
          style={{ bottom: `calc(1rem + ${AVERAGE}%)` }}
        >
          o&apos;rtacha {AVERAGE}%
        </span>

        {ANALYTICS_BARS.map((value, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex h-32 w-full items-end overflow-hidden rounded-md bg-[var(--color-mist)]">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                className="w-full rounded-md bg-gradient-to-t from-[var(--color-deep)] to-[var(--color-volt)]"
              />
            </div>
            <span className="text-[11px] text-[var(--color-slate)]">
              {ANALYTICS_DAYS[i]}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-start gap-2.5 border border-[var(--color-line)] p-3">
          <TrendingDown
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-slate)]"
            strokeWidth={1.75}
          />
          <div>
            <p className="text-[11px] text-[var(--color-slate)]">
              Eng zaif mavzu
            </p>
            <p className="font-display text-sm font-medium text-[var(--color-ink)]">
              Trigonometriya
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2.5 rounded-xl border border-[var(--color-line)] p-3">
          <TrendingUp
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-deep)]"
            strokeWidth={1.75}
          />
          <div>
            <p className="text-[11px] text-[var(--color-slate)]">
              Eng kuchli mavzu
            </p>
            <p className="font-display text-sm font-medium text-[var(--color-ink)]">
              Algebra asoslari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
