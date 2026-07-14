import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Foydalanish shartlari",
  description:
    "Enwis platformasining rasmiy Foydalanish shartlari — xizmatdan foydalanish qoidalari va majburiyatlar.",
  path: "/terms",
});

const SECTIONS = [
  {
    title: "1. Xizmatdan foydalanish",
    content:
      "Enwis platformasi ta'lim muassasalari va o'qituvchilarga raqamli imtihon yaratish va baholash xizmatini ko'rsatadi. Platformadan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz.",
  },
  {
    title: "2. Ro'yxatdan o'tish",
    content:
      "Platformadan to'liq foydalanish uchun ro'yxatdan o'tish shart. Ro'yxatdan o'tish paytida to'g'ri va dolzarb ma'lumotlarni kiritishingiz kerak.",
  },
  {
    title: "3. To'lov shartlari",
    content:
      "Bepul tarif 1 ta imtihon va 30 ta talaba bilan cheklangan. Pullik tariflar oylik yoki yillik asosida to'lanadi. Barcha to'lovlar qaytarilmaydi.",
  },
  {
    title: "4. Intellektual mulk",
    content:
      "Platformada yaratilgan imtihonlar va kontent foydalanuvchining o'ziga tegishli. Enwis platformasi kodlari va dizayni Enwis kompaniyasiga tegishli.",
  },
  {
    title: "5. Mas'uliyat cheklovlari",
    content:
      "Enwis imtihon natijalarining aniqligi va dolzarbligi uchun javobgar emas. Foydalanuvchi o'z kontentini mustaqil saqlab turishi kerak.",
  },
  {
    title: "6. Shartlarni o'zgartirish",
    content:
      "Enwis istalgan vaqtda ushbu shartlarni o'zgartirish huquqini saqlab qoladi. O'zgarishlar saytda e'lon qilingandan keyin kuchga kiradi.",
  },
  {
    title: "7. Bog'lanish",
    content:
      "Foydalanish shartlari haqida savollaringiz bo'lsa, biz bilan bog'laning: legal@enwis.uz",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-24">
      <div className="container-editorial max-w-3xl">
        <div className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft-sm)] lg:p-12">
          <h1 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium text-[var(--color-ink)]">
            Foydalanish shartlari
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
