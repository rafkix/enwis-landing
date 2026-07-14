"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, X } from "lucide-react";
import type { NewsMedia } from "@/lib/news";

function CodeBlock({ media }: { media: Extract<NewsMedia, { type: "code" }> }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(media.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard ruxsati bo'lmasa jim o'tkazib yuboramiz — bu xato emas
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-[var(--color-deep-900)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-xs text-white/50">
          {media.filename ?? media.language ?? "kod"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-white"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Nusxalandi" : "Nusxalash"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90">
        <code>{media.code}</code>
      </pre>
    </div>
  );
}

function ImageGallery({
  images,
}: {
  images: Extract<NewsMedia, { type: "image" }>[];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const visible = images.filter((img) => !failedSrcs.has(img.src));
  if (visible.length === 0) return null;

  // Resolved once per render so TypeScript (noUncheckedIndexedAccess) knows
  // it's either a real image or null — no repeated unchecked indexing below.
  const activeImage =
    lightboxIndex !== null ? (visible[lightboxIndex] ?? null) : null;

  return (
    <>
      <div
        className={
          visible.length === 1
            ? "grid grid-cols-1"
            : "grid grid-cols-2 gap-2 sm:gap-3"
        }
      >
        {visible.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--color-mist)]"
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              onError={() =>
                setFailedSrcs((prev) => new Set(prev).add(img.src))
              }
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute right-4 top-4 text-white/70 hover:text-white"
            onClick={() => setLightboxIndex(null)}
            aria-label="Yopish"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-4xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt ?? ""}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function VideoBlock({
  media,
}: {
  media: Extract<NewsMedia, { type: "video" }>;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="overflow-hidden rounded-2xl bg-black">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="w-full"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function AudioBlock({
  media,
}: {
  media: Extract<NewsMedia, { type: "audio" }>;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
      {media.title && (
        <p className="mb-3 text-sm font-medium text-[var(--color-ink)]">
          {media.title}
        </p>
      )}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        src={media.src}
        controls
        className="w-full"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function ArticleMedia({ media }: { media?: NewsMedia[] }) {
  if (!media || media.length === 0) return null;

  const images = media.filter(
    (m): m is Extract<NewsMedia, { type: "image" }> => m.type === "image",
  );
  const others = media.filter((m) => m.type !== "image");

  return (
    <div className="mt-10 flex flex-col gap-4">
      {images.length > 0 && <ImageGallery images={images} />}
      {others.map((m, i) => {
        if (m.type === "video")
          return <VideoBlock key={`video-${i}`} media={m} />;
        if (m.type === "audio")
          return <AudioBlock key={`audio-${i}`} media={m} />;
        if (m.type === "code") return <CodeBlock key={`code-${i}`} media={m} />;
        return null;
      })}
    </div>
  );
}
