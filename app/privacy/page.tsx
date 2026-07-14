import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Maxfiylik siyosati",
  description:
    "Enwis platformasining rasmiy Maxfiylik siyosati — shaxsiy ma'lumotlaringiz qanday himoyalanishi haqida.",
  path: "/privacy",
});

const SECTIONS = [
  {
    title: "1. Ma'lumotlarni yig'ish",
    content:
      "Enwis faqat xizmatni ko'rsatish uchun zarur bo'lgan shaxsiy ma'lumotlarni yig'adi: ism, elektron pochta manzili va tashkilot nomi (ixtiyoriy). Platformadan foydalanish paytida to'plangan imtihon natijalari faqat o'qituvchi va tashkilot administratori tomonidan ko'rilishi mumkin.",
  },
  {
    title: "2. Ma'lumotlarni saqlash",
    content:
      "Barcha ma'lumotlar Markaziy Osiyodagi serverlarda SSL-shifrlangan holda saqlanadi. Foydalanuvchi ma'lumotlari uchinchi tomonlarga berilmaydi, sotilmaydi yoki o'tkazib berilmaydi.",
  },
  {
    title: "3. Cookie fayllari",
    content:
      "Enwis faqat xizmatni to'g'ri ishlashi uchun zarur bo'lgan cookie fayllardan foydalanadi. Uchinchi tomon cookie fayllari qo'llanilmaydi.",
  },
  {
    title: "4. Foydalanuvchi huquqlari",
    content:
      "Siz o'z shaxsiy ma'lumotlaringizni ko'rish, tahrirlash yoki o'chirish huquqiga egasiz. Buning uchun biz bilan bog'laning.",
  },
  {
    title: "5. Xavfsizlik",
    content:
      "Enwis SSL/TLS shifrlash, ikki bosqichli autentifikatsiya va muntazam xavfsizlik tekshiruvlaridan foydalanadi.",
  },
  {
    title: "6. Bog'lanish",
    content:
      "Maxfiylik siyosati haqida savollaringiz bo'lsa, biz bilan bog'laning: privacy@enwis.uz",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-24">
      <div className="container-editorial max-w-3xl">
        <div className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft-sm)] lg:p-12">
          <h1 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium text-[var(--color-ink)]">
            Maxfiylik siyosati
          </h1>
          <p className="mt-3 text-sm text-[var(--color-slate)]">
            So&apos;nggi yangilanish: 2026-yil 1-iyul
          </p>
          <div className="mt-10 space-y-8 border-t border-[var(--color-line)] pt-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-base font-medium text-[var(--color-ink)]">
                  {section.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-slate)]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
