export type NewsMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "audio"; src: string; title?: string }
  | { type: "code"; code: string; language?: string; filename?: string };

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readingTime: number; // minutes
  content: string[]; // paragraphs
  media?: NewsMedia[]; // ixtiyoriy: bir nechta rasm/video/audio/kod bo'lishi mumkin, birinchisi = ro'yxatdagi cover
}

export const NEWS_POSTS: NewsPost[] = [
  // lib/news.ts dagi NEWS_POSTS massiviga qo'shing:
  {
    slug: "ozod-etilgan-abituriyentlarga-ruxsatnoma-berilmaydi",
    title: "Testdan ozod etilgan abituriyentlarga ruxsatnoma berilmaydi",
    excerpt:
      'Barcha fanlardan milliy sertifikatga ega bo\'lgan va shu asosda ozod etilgan abituriyentlar uchun "Abituriyent ruxsatnomasi" shakllantirilmaydi.',
    category: "Ta'lim",
    date: "2026-07-08", // vaqtni tasdiqlang: manbada faqat 12:42 / 08.07.2026 ko'rsatilgan
    readingTime: 2,
    content: [
      "Bilim va malakalarni baholash agentligi ma'lumot berishicha, test sinovidan ozod etuvchi huquqqa ega abituriyentlar uchun alohida ruxsatnoma rasmiylashtirilmaydi. Bu qoida sertifikat asosida yoki qonunchilikda nazarda tutilgan boshqa sabab bilan ozod etilgan barcha abituriyentlarga bir xilda tatbiq etiladi.",
      "Xususan, ro'yxatdan o'tish jarayonida \"sertifikatdan foydalanaman\" variantini tanlagan va barcha fanlardan milliy sertifikatga ega abituriyentlar test sinovidan avtomatik ozod hisoblanadi. Shu sababli ularning shaxsiy kabinetida ruxsatnoma umuman shakllanmaydi va test o'tkaziladigan hududga borishlari shart emas.",
      "Agentlik ma'lumotlariga ko'ra, test sinovlari yakunlangach, mazkur toifadagi abituriyentlar ham qabulning ikkinchi bosqichida ishtirok etadi — ularga 15 kun ichida oliy ta'lim muassasasi, ta'lim yo'nalishi, ta'lim shakli va tanlov ustuvorligini belgilash imkoniyati beriladi.",
    ],
    media: [
      {
        type: "image",
        src: "/news/ruxsatnoma.jpg",
        alt: "Ruxsatnoma yuklab olish",
      },
    ],
    // Original maqoladagi rasm Kun.uz'ga tegishli — o'z rasmingizni yuklashingizni tavsiya qilaman.
    // media: [{ type: "image", src: "/news/ruxsatnoma/cover.jpg", alt: "Abituriyent ruxsatnomasi" }],
  },
  {
    slug: "abituriyent-ruxsatnomalari-berish-boshlandi",
    title: "Abituriyentlarga ruxsatnomalarni berish boshlandi",
    excerpt:
      "2026–2027 o'quv yiliga hujjat topshirgan abituriyentlar test sinovi uchun ruxsatnomalarini yuklab olishlari mumkin.",
    category: "Ta'lim",
    date: "2026-07-01", // aniq sana manbada ko'rsatilmagan — tasdiqlab, to'g'rilang
    readingTime: 2,
    content: [
      "2026–2027 o'quv yili uchun oliy va kasbiy ta'lim muassasalariga kirish maqsadida ro'yxatdan o'tgan abituriyentlarga \"Abituriyent ruxsatnomasi\"ni berish boshlandi. Bilim va malakalarni baholash agentligi ma'lumotiga ko'ra, hujjat my.uzbmb.uz portali orqali rasmiylashtiriladi.",
      "Ruxsatnomani yuklab olish uchun abituriyent shaxsiy identifikatsiya raqami (JShShIR) hamda pasport seriyasi va raqamini kiritishi kerak bo'ladi.",
      "Test sinoviga kelayotganda abituriyent belgilangan vaqtdan kechikmasligi va o'zi bilan asl pasport (yoki ID-karta) hamda ruxsatnomani olib kelishi shart. Agentlik ta'kidlashicha, hujjat nusxasi bilan kelgan yoki kechikkan abituriyentlar test sinoviga kiritilmaydi.",
    ],
    media: [
      {
        type: "image",
        src: "/news/ruxsatnoma-berish.jpg",
        alt: "Ruxsatnoma yuklab olish",
      },
    ],
    // media: [{ type: "image", src: "/news/ruxsatnoma-berish/cover.jpg", alt: "Ruxsatnoma yuklab olish" }],
  },
];

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}

export function getOtherNewsPosts(slug: string, limit = 2): NewsPost[] {
  return NEWS_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}

export function formatNewsDate(iso: string): string {
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}
