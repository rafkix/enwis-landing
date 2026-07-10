export const APP_URL = "https://app.enwis.uz";

export const NAV_LINKS = [
  { label: "Yangiliklar", href: "/news" },
  { label: "B2B", href: "/b2b" },
  { label: "Biz Haqimizda", href: "/about" },
  { label: "Bog'lanish", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "Biz Haqimizda", href: "/about" },
    { label: "B2B / Tashkilotlar uchun", href: "/b2b" },
    { label: "Bog'lanish", href: "/contact" },
    { label: "Narxlar", href: "/pricing" },
  ],
  resources: [
    { label: "Yangiliklar", href: "/news" },
    { label: "Xususiyatlari", href: "/features" },
  ],
  legal: [
    { label: "Maxfiylik siyosati", href: "/privacy" },
    { label: "Foydalanish shartlari", href: "/terms" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/enwis" },
  { label: "Instagram", href: "https://instagram.com/enwis_uz" },
  { label: "Youtube", href: "https://youtube.com/@enwisapp" },
] as const;

export const HERO_STATS = [
  { value: 1, suffix: "+", label: "Yaratilgan imtihonlar" },
  { value: 0, suffix: "", label: "Ta'lim muassasalari" },
  { value: 0, suffix: "+", label: "Qamrab olingan talabalar" },
  { value: 1, suffix: "%", label: "Uptime ishonchliligi" },
] as const;

export const TRUSTED_ORGS = [
  "Milliy universitet",
  "Innovatsion litsey",
  "TATU",
  "Tashkent IT Park",
  "Silk Road o'quv markazi",
  "Nordic School",
] as const;

export const PROBLEMS = [
  {
    title: "Qog'oz imtihonlar vaqt yeydi",
    description:
      "Testlarni chop etish, tarqatish va qo'lda tekshirish o'qituvchining haftalab vaqtini oladi — bu vaqt dars sifatiga sarflanishi kerak edi.",
  },
  {
    title: "Ko'chirish va nusxa ko'chirishni nazorat qilib bo'lmaydi",
    description:
      "Bir xil savollar, bir xil tartib — auditoriyada nazorat qilish deyarli imkonsiz, natijalar haqiqiy bilimni aks ettirmaydi.",
  },
  {
    title: "Natijalar tahlili yo'q",
    description:
      "Qog'ozdagi baho — bu faqat raqam. Qaysi mavzu zaif, qaysi talaba yordamga muhtoj — buni tushunish uchun ma'lumot yo'q.",
  },
  {
    title: "Hujjatlar yo'qoladi, tizim tarqoq",
    description:
      "Har bir fan, har bir guruh alohida jildda. Sertifikat, natija, davomat — barchasi turli joyda saqlanadi va tez orada tartibsizlikka aylanadi.",
  },
] as const;

export const SOLUTIONS = [
  {
    title: "Imtihon — bir necha daqiqada tayyor",
    description:
      "Savollar bankidan tanlang yoki AI yordamida yarating, chop etish shart emas — havola yuboring, xolos.",
  },
  {
    title: "Savol va javoblar avtomatik aralashtiriladi",
    description:
      "Har bir talaba o'ziga xos tartibdagi savol va javob variantlarini ko'radi — ko'chirish amalda mumkin emas.",
  },
  {
    title: "Natijalar — bir zumda, tahlil bilan birga",
    description:
      "Baholash avtomatik amalga oshadi, mavzu bo'yicha kuchli va zaif tomonlar grafikda ko'rsatiladi.",
  },
  {
    title: "Barcha narsa bitta bulutda",
    description:
      "Savollar banki, natijalar, sertifikatlar va hisobotlar — bitta xavfsiz platformada, istalgan qurilmadan ochiladi.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "O'qituvchi imtihon yaratadi",
    description:
      "Savollar bankidan tanlang, o'zingiz yozing yoki AI generatoridan foydalaning — 10 daqiqada tayyor.",
  },
  {
    step: "02",
    title: "Talabalar qo'shiladi",
    description:
      "Havola yoki kod orqali kirish — ilova o'rnatish shart emas, brauzerda ochiladi.",
  },
  {
    step: "03",
    title: "Avtomatik baholash",
    description:
      "Test tugashi bilan natija tayyor — o'qituvchi qo'lda tekshirish bilan vaqt sarflamaydi.",
  },
  {
    step: "04",
    title: "Chuqur tahlil",
    description:
      "Har bir savol, har bir talaba bo'yicha statistika — keyingi darsni shu asosda qurish mumkin.",
  },
] as const;

export const FEATURES = [
  {
    group: "Yaratish",
    items: [
      {
        title: "Savollar banki",
        description:
          "Fan, mavzu va qiyinlik darajasi bo'yicha tartiblangan markaziy savollar ombori.",
      },
      {
        title: "Imtihon konstruktori",
        description:
          "Sudrab tashlash orqali savol qo'shing, ballarni belgilang, vaqt chegarasini o'rnating.",
      },
      {
        title: "AI savol generatori",
        description:
          "Mavzuni kiriting — AI bir necha soniyada tayyor variantlarni taklif qiladi. Ixtiyoriy.",
      },
      {
        title: "Qo'lda savol yuklash",
        description:
          "Word yoki Excel fayldan mavjud savollaringizni bir zumda import qiling.",
      },
    ],
  },
  {
    group: "O'tkazish",
    items: [
      {
        title: "Vaqt chegarasi",
        description:
          "Har bir imtihon yoki har bir savol uchun alohida taymer o'rnatish imkoni.",
      },
      {
        title: "Savollarni aralashtirish",
        description:
          "Har bir talabaga tasodifiy tartibda savollar ko'rsatiladi.",
      },
      {
        title: "Javoblarni aralashtirish",
        description:
          "Variantlar tartibi ham har safar o'zgaradi — ko'chirish imkoniyati yo'qqa chiqadi.",
      },
      {
        title: "Bildirishnomalar",
        description:
          "Imtihon boshlanishi, yakunlanishi va natijalar haqida avtomatik xabarnoma.",
      },
    ],
  },
  {
    group: "Natijalar",
    items: [
      {
        title: "Avtomatik baholash",
        description:
          "Yopiq turdagi savollar soniyada baholanadi, xatolik ehtimoli nolga tushadi.",
      },
      {
        title: "Tahlil va hisobotlar",
        description:
          "Guruh, fan yoki individual talaba kesimida chuqur statistik hisobot.",
      },
      {
        title: "Sertifikatlar",
        description:
          "Muvaffaqiyatli yakunlangan kurslar uchun avtomatik generatsiya qilinadigan sertifikat.",
      },
    ],
  },
  {
    group: "Platforma",
    items: [
      {
        title: "Xavfsizlik",
        description:
          "Faoliyat jurnali, qurilmani aniqlash va shifrlangan bulut saqlash.",
      },
      {
        title: "REST API",
        description:
          "Enwis'ni mavjud tizimingiz — kunday, ERP yoki LMS bilan integratsiya qiling.",
      },
    ],
  },
] as const;

export const ORGANIZATIONS = [
  {
    id: "teacher",
    label: "Yakka o'qituvchi",
    headline: "O'z sinfingiz uchun professional imtihon tizimi",
    description:
      "Ro'yxatdan o'ting va birinchi imtihoningizni bugunoq yarating — kredit karta talab qilinmaydi.",
    points: [
      "Cheksiz talabalar",
      "Tayyor savollar banki",
      "Bepul boshlang'ich reja",
    ],
  },
  {
    id: "school",
    label: "Maktab",
    headline: "Barcha sinflar, bitta boshqaruv paneli",
    description:
      "Fan o'qituvchilarini birlashtiring, chorak nazoratlarini markazlashtiring, ota-onalarga hisobot bering.",
    points: [
      "Ko'p sinf boshqaruvi",
      "Direktor uchun umumiy statistika",
      "Ota-ona hisobotlari",
    ],
  },
  {
    id: "university",
    label: "Universitet",
    headline: "Fakultet miqyosida standartlashtirilgan baholash",
    description:
      "Minglab talaba, yuzlab fan — barchasi bir xil xavfsizlik va sifat standarti bilan boshqariladi.",
    points: [
      "Fakultetlararo hisobotlar",
      "Sessiya uchun ommaviy imtihon",
      "Yuqori xavfsizlik darajasi",
    ],
  },
  {
    id: "center",
    label: "O'quv markazi",
    headline: "Har bir kurs guruhi uchun aniq progress",
    description:
      "Kirish testidan yakuniy sertifikatgacha — o'quvchi yo'lini boshidan oxirigacha kuzating.",
    points: [
      "Guruh bo'yicha progress",
      "Avtomatik sertifikatlash",
      "Marketing uchun natijalar",
    ],
  },
  {
    id: "enterprise",
    label: "Korporativ / Davlat",
    headline: "Maxsus shartnoma, maxsus infratuzilma",
    description:
      "SLA kafolati, maxsus domen, SSO integratsiyasi va shaxsiy hisob menejeri bilan.",
    points: ["SSO va maxsus domen", "SLA kafolati", "Shaxsiy hisob menejeri"],
  },
] as const;

export const SECURITY_FEATURES = [
  {
    title: "Savollarni aralashtirish",
    description: "Har bir talaba uchun individual savol tartibi.",
  },
  {
    title: "Javoblarni aralashtirish",
    description: "Variantlar tartibi har safar tasodifiy o'zgaradi.",
  },
  {
    title: "Faoliyat jurnali",
    description:
      "Har bir harakat — kirish, chiqish, javob — vaqt belgisi bilan qayd etiladi.",
  },
  {
    title: "Face ID tayyorligi",
    description:
      "Yuzni tanish orqali identifikatsiya uchun infratuzilma tayyor.",
  },
  {
    title: "Qurilmani aniqlash",
    description:
      "Bir hisobdan bir nechta qurilmadan kirish avtomatik aniqlanadi.",
  },
  {
    title: "Xavfsiz bulut",
    description:
      "Barcha ma'lumotlar shifrlangan holda, zaxira nusxalari bilan saqlanadi.",
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Platformani sinab ko'rish va shaxsiy foydalanish uchun.",
    features: [
      "5 tagacha test yaratish",
      "Har bir testni 30 ta ishtirokchi ishlashi mumkin",
      "Avtomatik baholash",
      "Asosiy statistika",
      "Testni havola orqali ulashish",
      "Community qo'llab-quvvatlash",
    ],
    cta: "Bepul boshlash",
    highlighted: false,
    promoEligible: false,
  },

  {
    id: "pro",
    name: "Pro",
    monthly: 69000,
    yearly: 662400,
    description: "O'qituvchilar va faol test yaratuvchilar uchun.",
    features: [
      "Cheksiz test yaratish",
      "Har bir test uchun 500 tagacha ishtirokchi",
      "AI savol generatori",
      "Savollar banki",
      "Avtomatik baholash",
      "Batafsil statistika",
      "Guruhlarni boshqarish",
      "Email qo'llab-quvvatlash",
    ],
    cta: "Pro tarifini tanlash",
    highlighted: true,
    promoEligible: true,
  },

  {
    id: "premium",
    name: "Premium",
    monthly: 119000,
    yearly: 1142400,
    description: "Professional o'qituvchilar va ta'lim markazlari uchun.",
    features: [
      "Pro tarifidagi barcha imkoniyatlar",
      "Cheksiz test yaratish",
      "Cheksiz ishtirokchilar",
      "AI savol generatori",
      "AI natijalar tahlili",
      "Sertifikat yaratish",
      "Prioritet texnik yordam",
      "Yangi funksiyalarga erta kirish",
    ],
    cta: "Premium tarifini tanlash",
    highlighted: false,
    promoEligible: true,
  },
] as const;

export const PRICING_COMPARISON_ROWS = [
  {
    feature: "Savollar banki",
    teacher: true,
    organization: true,
    enterprise: true,
  },
  {
    feature: "Avtomatik baholash",
    teacher: true,
    organization: true,
    enterprise: true,
  },
  {
    feature: "AI savol generatori",
    teacher: false,
    organization: true,
    enterprise: true,
  },
  {
    feature: "Ko'p foydalanuvchi boshqaruvi",
    teacher: false,
    organization: true,
    enterprise: true,
  },
  {
    feature: "Chuqur tahlil va hisobotlar",
    teacher: false,
    organization: true,
    enterprise: true,
  },
  {
    feature: "REST API",
    teacher: false,
    organization: false,
    enterprise: true,
  },
  {
    feature: "SSO va maxsus domen",
    teacher: false,
    organization: false,
    enterprise: true,
  },
  {
    feature: "Shaxsiy hisob menejeri",
    teacher: false,
    organization: false,
    enterprise: true,
  },
] as const;

export const TESTIMONIALS = [
  {
    segment: "Teachers",
    quote:
      "Endi test qog'ozlarini tekshirish uchun kechqurunlarimni sarflamayman — natija darsdan chiqishim bilan tayyor bo'ladi.",
    name: "Madina Yusupova",
    role: "Ingliz tili o'qituvchisi",
  },
  {
    segment: "Schools",
    quote:
      "Barcha sinflarning chorak nazoratlarini bitta panelda ko'ramiz — direktor sifatida bu katta qulaylik.",
    name: "Bahodir Rahimov",
    role: "Maktab direktori",
  },
  {
    segment: "Universities",
    quote:
      "Sessiya davomida minglab talabani bir vaqtning o'zida imtihon qilish endi muammo emas.",
    name: "Dilnoza Karimova",
    role: "Fakultet dekani",
  },
  {
    segment: "Learning Centers",
    quote:
      "Har bir guruhning progressini ota-onalarga aniq raqamlar bilan ko'rsata olamiz — bu ishonchni oshirdi.",
    name: "Jasur Tosheev",
    role: "O'quv markazi asoschisi",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Enwis'dan foydalanish uchun AI shartmi?",
    answer:
      "Yo'q. AI faqat savol yaratishni tezlashtiruvchi qo'shimcha vosita. Platforma AI'siz ham to'liq ishlaydi — savollarni qo'lda yozish yoki mavjud fayldan import qilish mumkin.",
  },
  {
    question: "Talabalar ilova o'rnatishi kerakmi?",
    answer:
      "Yo'q. Imtihon brauzer orqali ochiladi — kompyuter, planshet yoki telefondan, havola yoki kod orqali kirish yetarli.",
  },
  {
    question: "Ko'chirishning oldi qanday olinadi?",
    answer:
      "Har bir talaba uchun savollar va javob variantlari tasodifiy tartibda ko'rsatiladi, faoliyat jurnali va qurilmani aniqlash tizimi orqali shubhali harakatlar qayd etiladi.",
  },
  {
    question: "Bepul reja bilan qancha talaba qo'sha olaman?",
    answer:
      "O'qituvchi rejasida talabalar soni cheklanmagan. Cheklov faqat kengaytirilgan tahlil va ko'p foydalanuvchi boshqaruvi kabi tashkiliy funksiyalarga tegishli.",
  },
  {
    question: "Ma'lumotlarim qanday himoyalanadi?",
    answer:
      "Barcha ma'lumotlar shifrlangan bulutda saqlanadi, muntazam zaxira nusxalari olinadi va kirish faoliyati to'liq jurnallashtiriladi.",
  },
  {
    question: "Mavjud tizim bilan integratsiya qilsa bo'ladimi?",
    answer:
      "Ha. Enterprise reja doirasida to'liq huquqli REST API taqdim etiladi — buni mavjud LMS yoki ichki tizimingizga ulash mumkin.",
  },
] as const;

export const ABOUT_VALUES = [
  {
    title: "Soddalik murakkablikdan ustun",
    description:
      "Har bir funksiya o'z o'rnini oqlashi kerak. Agar u imtihon yaratishni yoki natijani tushunishni osonlashtirmasa — u chiqarilmaydi.",
  },
  {
    title: "Avval o'qituvchilar",
    description:
      "Biz mahsulotni o'qituvchilar bilan birga quramiz, ular uchun emas — har bir jarayon sinf xonasining haqiqiy ehtiyojidan boshlanadi.",
  },
  {
    title: "Ishonch — tizimning bir qismi",
    description:
      "Xavfsizlik va adolat keyinroq yoqiladigan funksiya emas. Aralashtirish, jurnal yuritish va shifrlash — tizimning poydevorida.",
  },
  {
    title: "AI — yordamchi, zaruriyat emas",
    description:
      "AI xohlaganingizda ishni tezlashtiradi. Platforma u yo'q holda ham xuddi shunday to'liq, ishonchli va adolatli ishlaydi.",
  },
] as const;

export const ABOUT_TIMELINE = [
  {
    year: "2023",
    title: "Enwis asos solindi",
    description:
      "Qog'oz testlarni tekshirish bilan kechqurunlarini yo'qotishdan charchagan muhandislar va sobiq o'qituvchilardan iborat kichik jamoa tomonidan boshlandi.",
  },
  {
    year: "2024",
    title: "Birinchi maktablar raqamlashdi",
    description:
      "Maktablar va o'quv markazlarining birinchi guruhi chorak nazoratlarini to'liq Enwis'ga ko'chirdi.",
  },
  {
    year: "2025",
    title: "AI savol generatori ishga tushdi",
    description:
      "Savol yaratish uchun ixtiyoriy AI qatlami qo'shildi — undan foydalanmaslikni tanlagan tashkilotlar uchun hech narsa o'zgarmadi.",
  },
  {
    year: "2026",
    title: "Universitet va enterprise segmentiga kengayish",
    description:
      "Fakultet miqyosidagi imtihon sessiyalari, SSO va maxsus enterprise reja Enwis'ni yirik muassasa va tashkilotlarga olib keldi.",
  },
] as const;

export const ABOUT_STATS = [
  { value: 2023, suffix: "", label: "Asos solingan yil" },
  { value: 86, suffix: "+", label: "Ulangan muassasalar" },
  { value: 41000, suffix: "+", label: "Qamrab olingan talabalar" },
  { value: 12, suffix: "", label: "Jamoa a'zolari" },
] as const;

export const CONTACT_CHANNELS = [
  {
    id: "sales",
    title: "Sotuv bo'limi",
    description:
      "Tashkilotingiz uchun reja, narx yoki enterprise shartlar bo'yicha savollar.",
    email: "sales@enwis.uz",
  },
  {
    id: "support",
    title: "Texnik yordam",
    description:
      "Mavjud hisobingiz, imtihonlar yoki texnik muammolar bo'yicha yordam.",
    email: "support@enwis.uz",
  },
  {
    id: "general",
    title: "Umumiy savollar",
    description:
      "Boshqa har qanday savol, taklif yoki hamkorlik bo'yicha murojaat.",
    email: "info.enwis@gmail.com",
  },
] as const;

export const CONTACT_TOPICS = [
  { value: "demo", label: "Demo so'rash" },
  { value: "sales", label: "Sotuv bo'limi" },
  { value: "support", label: "Texnik yordam" },
  { value: "general", label: "Umumiy savol" },
] as const;

export const COMPANY_INFO = {
  address: "Tashkent IT Park, Mustaqillik shoh ko'chasi, Toshkent, O'zbekiston",
  phone: "+998 88 329 88 11",
  email: "info@enwis.uz",
  hours: "Dushanba – Juma, 09:00 – 18:00 (GMT+5)",
  coordinates: { lat: 41.311081, lng: 69.240562 },
} as const;

export const B2B_STATS = [
  { value: 40, suffix: "%", label: "Baholashga sarflanadigan vaqt qisqaradi" },
  { value: 3, suffix: "x", label: "Tezroq natija va hisobot" },
  { value: 99.9, suffix: "%", label: "Platforma uptime kafolati" },
  { value: 24, suffix: "/7", label: "Enterprise qo'llab-quvvatlash" },
] as const;

export const B2B_VALUE_PILLARS = [
  {
    id: "roi",
    title: "Investitsiya tez o'zini oqlaydi",
    description:
      "Chop etish, qog'oz va qo'lda tekshirishga ketadigan xarajatlar yo'qoladi — tejalgan vaqt va resurs birinchi semestrdayoq sezilarli natija beradi.",
  },
  {
    id: "time",
    title: "O'qituvchi va ma'muriyat vaqtini qaytaring",
    description:
      "Baholash, hisobot tayyorlash va natijalarni tarqatish soatlab emas, daqiqalarda amalga oshadi — bu vaqt ta'lim sifatiga qaytadi.",
  },
  {
    id: "cost",
    title: "Xarajatlarni sezilarli qisqartiring",
    description:
      "Qog'oz, chop etish, arxivlash va qo'lda ma'lumot kiritish xarajatlari butunlay bekor bo'ladi — bir platforma hammasini almashtiradi.",
  },
  {
    id: "security",
    title: "Enterprise darajadagi xavfsizlik",
    description:
      "Shifrlangan bulut, faoliyat jurnali va qurilmani aniqlash — muassasangiz ma'lumotlari va imtihon natijalari to'liq himoyalangan.",
  },
] as const;

export const B2B_ENTERPRISE_FEATURES = [
  {
    title: "SSO integratsiyasi",
    description:
      "Xodimlaringiz mavjud korporativ hisobi orqali bir marta kirish imkoniyatiga ega bo'ladi.",
  },
  {
    title: "Maxsus domen",
    description:
      "Platformani o'z brendingiz ostida — masalan, exam.muassasa.uz — ishga tushiring.",
  },
  {
    title: "To'liq huquqli REST API",
    description:
      "Enwis'ni mavjud LMS, ERP yoki ichki tizimingiz bilan chuqur integratsiya qiling.",
  },
  {
    title: "SLA kafolati",
    description:
      "Kelishilgan uptime va javob berish vaqti bo'yicha rasmiy kafolat.",
  },
  {
    title: "Shaxsiy hisob menejeri",
    description:
      "Joriy etishdan kundalik foydalanishgacha sizga biriktirilgan mutaxassis yordam beradi.",
  },
  {
    title: "Maxsus infratuzilma",
    description:
      "Talab bo'yicha alohida joylashtirish va kengaytirilgan resurslar imkoniyati.",
  },
] as const;
