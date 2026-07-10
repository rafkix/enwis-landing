import { NextResponse } from "next/server";

const CURRENCY_API = "https://data.daryo.uz/api/v1/site/currency-rates/list";

/**
 * daryo.uz'ning API'si brauzerdan to'g'ridan-to'g'ri fetch() qilinganda
 * Origin header'iga qarab 403 qaytaradi (faqat o'z sayti uchun ochiq).
 * Shu sababli bu so'rovni CLIENT o'rniga bizning serverimiz (Next.js
 * route handler) orqali yuboramiz — server-to-server so'rovda brauzer
 * Origin header'i yo'q, shuning uchun bloklanmaydi.
 *
 * Natija 1 soatga keshlanadi (`next: { revalidate }`), shunday har bir
 * sahifa yuklanishida daryo.uz'ga yangi so'rov ketmaydi.
 */
export async function GET() {
  try {
    const res = await fetch(CURRENCY_API, {
      headers: {
        // Ba'zi API'lar User-Agent bo'lmasa ham rad etadi — oddiy brauzer
        // User-Agent'ini qo'shib qo'yamiz, ehtiyot chorasi sifatida.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "application/json",
      },
      next: { revalidate: 3600 }, // 1 soat — kurslar kuniga bir necha marta o'zgaradi, xolos
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Kurslarni olishda xatolik" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Kurslarni olishda xatolik" },
      { status: 502 },
    );
  }
}
