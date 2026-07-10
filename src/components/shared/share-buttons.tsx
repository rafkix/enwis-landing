"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

/**
 * Har bir tarmoq o'zining rasmiy "share" URL formatidan foydalanadi —
 * hech qanday SDK yoki tashqi skript kerak emas, oddiy yangi oyna ochiladi.
 */
function buildShareUrl(
  network: "telegram" | "facebook" | "x",
  url: string,
  title: string,
) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  switch (network) {
    case "telegram":
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "x":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  }
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M21.05 3.76 17.9 19.53c-.24 1.06-.87 1.32-1.76.82l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.94 8.99-8.12c.39-.35-.08-.54-.61-.19L6.2 12.9l-4.86-1.52c-1.06-.33-1.08-1.06.22-1.57L19.7 2.5c.88-.33 1.65.2 1.35 1.26Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.34 4.25 14.3 4.25c-2.17 0-3.66 1.32-3.66 3.75V10.5H8v3h2.64V21h2.86Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.94 10.6 20.6 3h-1.58l-5.78 6.62L8.62 3H3l6.98 9.96L3 21h1.58l6.1-6.99L15.68 21H21l-7.06-10.4Zm-2.16 2.47-.71-1L5.5 4.2h2.43l4.53 6.35.71 1 5.9 8.27h-2.43l-4.8-6.75Z" />
    </svg>
  );
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard ruxsati bo'lmasa jim o'tkazib yuboramiz
    }
  }

  const buttonClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition-colors hover:border-[var(--color-deep)] hover:text-[var(--color-deep)]";

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <a
        href={buildShareUrl("telegram", url, title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram'da ulashish"
        className={buttonClass}
      >
        <TelegramIcon />
      </a>
      <a
        href={buildShareUrl("facebook", url, title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook'da ulashish"
        className={buttonClass}
      >
        <FacebookIcon />
      </a>
      <a
        href={buildShareUrl("x", url, title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X'da ulashish"
        className={buttonClass}
      >
        <XIcon />
      </a>
      <button
        onClick={handleCopy}
        aria-label="Havolani nusxalash"
        className={buttonClass}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
