"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics componentidagi bilan bir xil sabab: Next.js App Router'da
 * ichki navigatsiya client-side bo'lgani uchun Yandex Metrika'ning standart
 * skripti faqat birinchi yuklanishda hit yuboradi. Shu componentda har bir
 * marshrut o'zgarganda `ym(..., 'hit', url)` qo'lda chaqiriladi.
 */
function HitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!YANDEX_METRIKA_ID || typeof window.ym !== "function") return;

    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    window.ym(YANDEX_METRIKA_ID, "hit", url);
  }, [pathname, searchParams]);

  return null;
}

export function YandexMetrika() {
  if (!YANDEX_METRIKA_ID) return null;

  return (
    <>
      <Script id="yandex-metrika-init" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          // hit: false — birinchi va keyingi sahifa o'tishlarini HitTracker
          // orqali qo'lda yuboramiz, shu bilan ikki marta hisoblanishning
          // oldi olinadi.
          ym(${YANDEX_METRIKA_ID}, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            hit: false
          });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Suspense fallback={null}>
        <HitTracker />
      </Suspense>
    </>
  );
}
