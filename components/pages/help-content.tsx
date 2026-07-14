"use client";

import Link from "next/link";
import {
  HelpCircle,
  MessageCircle,
  Shield,
  CreditCard,
  Settings,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FinalCta } from "@/components/home/final-cta";
import { ZigzagPattern } from "@/components/shared/zigzag-pattern";

const HELP_CATEGORIES = [
  {
    icon: BookOpen,
    title: "Boshlash",
    description: "Ro'yxatdan o'tish, birinchi imtihonni yaratish va talabalarni qo'shish.",
    href: "#boshlash",
  },
  {
    icon: Settings,
    title: "Imtihon yaratish",
    description: "Savollar tuzish, vaqt cheklovlari, avto-ball tizimi.",
    href: "#imtihon",
  },
  {
    icon: CreditCard,
    title: "To'lov va tariflar",
    description: "Bepul va pullik tariflar, to'lov usullari, promo-kodlar.",
    href: "#tolov",
  },
  {
    icon: Shield,
    title: "Xavfsizlik va maxfiylik",
    description: "Ma'lumotlar himoyasi, SSL, GDPR va FZ-152 talablari.",
    href: "#xavfsizlik",
  },
  {
    icon: MessageCircle,
    title: "Texnik yordam",
    description: "Muammo bo'lsa — biz bilan bog'laning, tez javob beramiz.",
    href: "#yordam",
  },
  {
    icon: HelpCircle,
    title: "Ko'p beriladigan savollar",
    description: "Eng ko'p so'raladigan savollarga tez javoblar.",
    href: "#faq",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Enwis nima?",
    a: "Enwis — maktablar, universitetlar va o'quv markazlari uchun raqamli imtihon platformasi. O'qituvchilar imtihonlar yaratadi, talabalar mobil qurilmada topshiradi.",
  },
  {
    q: "Bepul tarifda nima bor?",
    a: "Bepul tarifda 1 ta imtihon yaratish, 30 ta talaba qo'shish va asosiy ball tizimi mavjud. Kredit karta talab qilinmaydi.",
  },
  {
    q: "To'lov qanday amalga oshiriladi?",
    a: "Visa, Mastercard va UzCard orqali. Barcha to'lovlar SSL-shifrlangan. Yillik to'lovda qo'shimcha chegirma mavjud.",
  },
  {
    q: "Talabalar qurilmadan foydalanishi kerakmi?",
    a: "Yo'q, talabalar oddiy telefon yoki kompyuterdan brauzer orqali kirishlari mumkin. Ilovani yuklab olish shart emas.",
  },
  {
    q: "Ma'lumotlar xavfsizmi?",
    a: "Ha, barcha ma'lumotlar SSL bilan shifrlanadi va Markaziy Osiyodagi serverlarda saqlanadi. Foydalanuvchi ma'lumotlari uchinchi tomonlarga berilmaydi.",
  },
] as const;

export function HelpContent() {
  return (
    <>
      {/* Categories grid */}
      <section className="relative section-pad bg-[var(--color-mist)] overflow-hidden">
        <ZigzagPattern opacity={0.05} />
        <div className="container-editorial relative">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)]/60 bg-white/50 backdrop-blur-sm p-7 transition-all duration-300 hover:border-[var(--color-deep)]/20 hover:bg-white hover:shadow-[var(--shadow-soft-md)] hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-volt)]/20 to-[var(--color-volt)]/5 transition-colors duration-300 group-hover:from-[var(--color-volt)]/30 group-hover:to-[var(--color-volt)]/10">
                    <cat.icon className="h-5 w-5 text-[var(--color-deep)]" />
                  </div>
                  <h3 className="font-display text-base font-medium text-[var(--color-ink)]">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-deep)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Batafsil <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-editorial max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Yordam"
            title="Ko&apos;p beriladigan savollar"
            description="Eng ko'p so'raladigan savollarga tez javoblar."
          />

          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft-sm)] transition-all duration-300 hover:border-[var(--color-deep)]/15 hover:shadow-[var(--shadow-soft-md)]"
              >
                <div className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[var(--color-volt)]/8 blur-xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-deep)] text-[10px] font-mono font-medium text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-medium text-[var(--color-ink)]">
                      {item.q}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-slate)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="yordam" className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-12 text-center shadow-[var(--shadow-soft-md)] lg:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-volt)]/15 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[var(--color-deep)]/10 blur-[80px]" />
            <div className="relative">
              <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium text-[var(--color-ink)]">
                Savolingiz bormi?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[var(--color-slate)]">
                Bizning jamoa 24 soat ichida javob beradi.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-deep)] px-7 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-soft-sm)] transition-all duration-300 hover:bg-[var(--color-deep)]/90 hover:shadow-[var(--shadow-soft-md)] hover:-translate-y-0.5"
              >
                Bog&apos;lanish <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
