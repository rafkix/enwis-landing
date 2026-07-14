import { FinalCta } from "@/components/home/final-cta";

const ENTRIES = [
  {
    version: "2.7.0",
    date: "2026-07-10",
    title: "Ilon izli zigzag pattern",
    changes: [
      "ZigzagPattern komponenti yaratildi — SVG asosidagi ilon izli dekorativ pattern",
      "Help kategoriyalari section'iga zigzag pattern qo'shildi (30% balandlikda)",
      "Card fondi: bg-white → bg-white/50 + backdrop-blur-sm (transparent)",
      "Hover'da card fon to'liq oq bo'ladi + shadow paydo bo'ladi",
    ],
  },
  {
    version: "2.6.0",
    date: "2026-07-10",
    title: "Kartochka dizaynlari to'liq qilindi",
    changes: [
      "Help kategoriyalari kartochkalari — shadow, hover animatsiya, gradient icon konteyner, glow effekti",
      "Help FAQ kartochkalari — raqamli marker, hover shadow, depth",
      "Help Contact CTA — karta bilan o'raldi, glow orb'lar, pill-button shadow",
      "Changelog timeline — gradient line, hover kartalar, sana badge",
      "Status xizmatlari — rounded pill status badge'lar, hover holat",
      "Status hodisalari — hover shadow, colored severity badge'lar",
      "Privacy/Terms — matn karta bilan o'raldi, border-top divider",
      "FinalCta — Sparkles ikonka, grid pattern overlay, 3ta glow orb, yuqoriroq shadow",
    ],
  },
  {
    version: "2.5.0",
    date: "2026-07-10",
    title: "Footer yangilanishi va yangi sahifalar",
    changes: [
      "Footer dizayni yaxshilandi — status badge, link hover animatsiyalari, store badge'lar",
      "Alohida /pricing sahifasi yaratildi",
      "/help, /status, /changelog sahifalari qo'shildi",
      "Sitemap'ga yangi sahifalar qo'shildi",
      "Nested <main> tegini tuzatildi — barcha sahifalar endi to'g'ri HTML strukturasiga ega",
      "Metadata standartlashtirildi — barcha sahifalarda buildMetadata() ishlatiladi",
      "News sahifalari container-editorial ga o'tkazildi",
      "Privacy/Terms sahifalari PDF o'rniga matn bilan to'ldirildi",
      "Dead code tozalandi — news-content.tsx o'chirildi, double semicolons tuzatildi",
    ],
  },
  {
    version: "2.4.0",
    date: "2026-07-05",
    title: "Dizayn tizimi va komponentlar",
    changes: [
      "HeroBg qayta ishlatiladigan komponentga aylantirildi",
      "Xususiyatlar sahifasi o'zbek tiliga tarjima qilindi",
      "PDF embed komponenti qayta ishlatiladigan qilib yaratildi",
    ],
  },
  {
    version: "2.3.0",
    date: "2026-06-28",
    title: "B2B sahifasi va xususiyatlar tarjimasi",
    changes: [
      "B2B / Tashkilotlar uchun alohida sahifa",
      "Xususiyatlar sahifasi o'zbek tiliga tarjima qilindi",
      "Yangiliklar maqolalari strukturasi yaxshilandi",
      "PDF embed komponenti qayta ishlatiladigan qilib yaratildi",
    ],
  },
  {
    version: "2.2.0",
    date: "2026-06-15",
    title: "Sahifalar qayta tuzilishi",
    changes: [
      "src/ papkasi yo'q qilindi, fayllar ildizga ko'chirildi",
      "components/ papkasi qayta tuzildi: home/, pages/, shared/, layout/",
      "SEO metadata alohida lib/metadata.ts ga ajratildi",
      "Sitemap xatoliklari tuzatildi",
    ],
  },
  {
    version: "2.1.0",
    date: "2026-06-01",
    title: "Dizayn tizimi standartlashtirildi",
    changes: [
      "Icon konteynerlari birlashtirildi — h-11 w-11 rounded-full",
      "Card padding va radius standartlashtirildi",
      "Shadow tizimi qo'shildi: soft-sm, soft-md, soft-lg, volt-glow",
      "Font tokenlari: Sora (display), Inter (body), IBM Plex Mono (mono)",
    ],
  },
] as const;

export function ChangelogContent() {
  return (
    <>
      <section className="section-pad bg-[var(--color-mist)]">
        <div className="container-editorial max-w-2xl">
          <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--color-deep)]/20 before:via-[var(--color-line)] before:to-transparent">
            {ENTRIES.map((entry, i) => (
              <div key={entry.version} className="relative flex gap-6">
                <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-deep)] text-xs font-medium text-white shadow-[var(--shadow-soft-sm)]">
                  {entry.version.split(".").slice(0, 2).join(".")}
                </div>
                <div className="group flex-1 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft-sm)] transition-all duration-300 hover:border-[var(--color-deep)]/15 hover:shadow-[var(--shadow-soft-md)]">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-medium text-[var(--color-ink)]">
                      {entry.title}
                    </span>
                    <span className="rounded-full bg-[var(--color-mist)] px-2.5 py-0.5 text-[11px] font-mono text-[var(--color-slate)]">
                      {entry.date}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {entry.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-slate)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-volt)]" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
