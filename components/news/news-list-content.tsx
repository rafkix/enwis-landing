"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Newspaper,
  PlayCircle,
  AudioLines,
  Code2,
  Images,
  CalendarDays,
  LayoutGrid,
  List as ListIcon,
  ChevronRight,
} from "lucide-react";
import { NEWS_POSTS, formatNewsDate, type NewsMedia } from "@/lib/news";
import { AdSlot } from "@/components/shared/ad-slot";
import { CurrencyWidget } from "@/components/shared/currency-widget";
import { HeroBg } from "@/components/shared/hero-bg";

type ViewMode = "grid" | "list";

function Placeholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-mist)] to-[var(--color-line)]">
      <Newspaper
        className="h-8 w-8 text-[var(--color-slate-light)]"
        strokeWidth={1.5}
      />
    </div>
  );
}

/**
 * Har qanday media turi uchun bitta konteyner — rasm/video/audio/kod,
 * hammasi xatolikka chidamli (buzilgan link bo'lsa placeholder'ga tushadi).
 */
function MediaCover({
  media,
  mediaCount,
  alt,
  sizes,
  aspect = "aspect-[4/3]",
}: {
  media?: NewsMedia;
  mediaCount?: number;
  alt: string;
  sizes: string;
  aspect?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showFailed = !media || failed;

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-[var(--color-mist)]`}
    >
      {showFailed && <Placeholder />}

      {!showFailed && media.type === "image" && (
        <Image
          src={media.src}
          alt={media.alt ?? alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      )}

      {!showFailed && media.type === "video" && (
        <>
          {media.poster ? (
            <Image
              src={media.poster}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover"
              onError={() => setFailed(true)}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              src={media.src}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              onError={() => setFailed(true)}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <PlayCircle className="h-9 w-9 text-white" strokeWidth={1.5} />
          </div>
        </>
      )}

      {!showFailed && media.type === "audio" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-deep-900)] to-[var(--color-deep)]">
          <AudioLines
            className="h-7 w-7 text-[var(--color-volt-light)]"
            strokeWidth={1.5}
          />
        </div>
      )}

      {!showFailed && media.type === "code" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--color-deep-900)] p-4">
          <Code2
            className="h-7 w-7 text-[var(--color-volt)]"
            strokeWidth={1.5}
          />
        </div>
      )}

      {!showFailed && mediaCount && mediaCount > 1 && (
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          <Images className="h-3 w-3" />+{mediaCount - 1}
        </span>
      )}
    </div>
  );
}

/** Rasm ustida, kategoriya/sana qatori va sarlavha ostida — grid ko'rinishi uchun */
function StoryCard({ post }: { post: (typeof NEWS_POSTS)[number] }) {
  return (
    <Link href={`/news/${post.slug}`} className="group block">
      <MediaCover
        media={post.media?.[0]}
        mediaCount={post.media?.length}
        alt={post.title}
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
        aspect="aspect-[4/3]"
      />
      <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-slate)]">
        <span className="flex items-center gap-1">
          <Newspaper className="h-3 w-3" />
          {post.category}
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays className="h-3 w-3" />
          {formatNewsDate(post.date)}
        </span>
      </div>
      <h3 className="mt-1.5 line-clamp-2 font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
        {post.title}
      </h3>
    </Link>
  );
}

/** Kichik gorizontal qator — "Ro'yxat" ko'rinishi uchun */
function StoryRow({ post }: { post: (typeof NEWS_POSTS)[number] }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex items-center gap-4 border-b border-[var(--color-line)] py-4 last:border-0"
    >
      <div className="w-24 shrink-0 sm:w-32">
        <MediaCover
          media={post.media?.[0]}
          alt={post.title}
          sizes="128px"
          aspect="aspect-[4/3]"
        />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-3 text-xs text-[var(--color-slate)]">
          <span className="flex items-center gap-1">
            <Newspaper className="h-3 w-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {formatNewsDate(post.date)}
          </span>
        </div>
        <h3 className="mt-1.5 line-clamp-2 font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

/** O'ng tomondagi "So'nggi yangiliklar" panel */
function LatestSidebar({ posts }: { posts: typeof NEWS_POSTS }) {
  return (
    <aside className="flex flex-col gap-6">
      {/* Sidebar reklama banner — Google AdSense, sticky holda yuqorida turadi */}
      <div className="sticky top-24 flex flex-col gap-6">
        <CurrencyWidget />
        <AdSlot
          network="adsense"
          slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? ""}
          className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
        />
      </div>

      <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-base font-medium text-[var(--color-ink)]">
            So&apos;nggi yangiliklar
          </h2>
          <ChevronRight className="h-4 w-4 text-[var(--color-slate-light)]" />
        </div>
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className={i > 0 ? "border-t border-[var(--color-line)]" : ""}
            >
              <Link
                href={`/news/${post.slug}`}
                className="group block py-4 first:pt-3"
              >
                <p className="text-sm font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
                  {post.title}
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[var(--color-slate)]">
                  <CalendarDays className="h-3 w-3" />
                  <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Ikkinchi banner — Yandex.Direct, ro'yxat ostida */}
      <AdSlot
        network="yandex"
        slotId={process.env.NEXT_PUBLIC_YANDEX_SLOT_SIDEBAR ?? ""}
        className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
      />
    </aside>
  );
}

/** Har N ta karta/qatordan keyin reklama qo'yish uchun interval */
const AD_INTERVAL = 6;

export function NewsListContent() {
  const [view, setView] = useState<ViewMode>("grid");
  const posts = NEWS_POSTS;
  const latest = NEWS_POSTS.slice(0, 8);

  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <HeroBg />

      <div className="container-editorial relative">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pill-tag mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
          Yangiliklar
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.1] text-[var(--color-ink)]"
        >
          Enwis&apos;dan so&apos;nggi yangiliklar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-slate)]"
        >
          Mahsulot yangilanishlari, xavfsizlik e&apos;lonlari va platforma
          haqidagi yangiliklar.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[2.2fr_1fr]">
          <div>
            {/* Sarlavha qatori: bo'lim nomi + Ro'yxat/Plitka almashtirgich */}
            <div className="mb-6 flex items-center justify-between border-b border-[var(--color-line)] pb-4">
              <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--color-ink)]">
                <span className="h-5 w-1 rounded-full bg-[var(--color-deep)]" />
                Barchasi
              </h2>
              <div className="relative flex items-center gap-1 rounded-[var(--radius-pill)] bg-[var(--color-mist)] p-1">
                <button
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                  className="relative flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs font-medium transition-colors"
                >
                  {view === "list" && (
                    <motion.span
                      layoutId="view-toggle-pill"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="absolute inset-0 rounded-[var(--radius-pill)] bg-white shadow-[var(--shadow-soft-sm)]"
                    />
                  )}
                  <span
                    className={`relative flex items-center gap-1.5 ${
                      view === "list"
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <ListIcon className="h-3.5 w-3.5" />
                    Ro&apos;yxat
                  </span>
                </button>
                <button
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  className="relative flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs font-medium transition-colors"
                >
                  {view === "grid" && (
                    <motion.span
                      layoutId="view-toggle-pill"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                      className="absolute inset-0 rounded-[var(--radius-pill)] bg-white shadow-[var(--shadow-soft-sm)]"
                    />
                  )}
                  <span
                    className={`relative flex items-center gap-1.5 ${
                      view === "grid"
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    Plitka
                  </span>
                </button>
              </div>
            </div>

            {view === "grid" ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <Fragment key={post.slug}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(i, 5) * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <StoryCard post={post} />
                    </motion.div>

                    {/* Har AD_INTERVAL postdan keyin, oxirgi element bo'lmasa, gridni buzmasdan
                        to'liq kenglikda reklama banner qo'yiladi */}
                    {(i + 1) % AD_INTERVAL === 0 && i !== posts.length - 1 && (
                      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <AdSlot
                          network="adsense"
                          slotId={
                            process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? ""
                          }
                          className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            ) : (
              <div className="flex flex-col">
                {posts.map((post, i) => (
                  <Fragment key={post.slug}>
                    <StoryRow post={post} />
                    {(i + 1) % AD_INTERVAL === 0 && i !== posts.length - 1 && (
                      <div className="py-4">
                        <AdSlot
                          network="yandex"
                          slotId={
                            process.env.NEXT_PUBLIC_YANDEX_SLOT_INLINE ?? ""
                          }
                          className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            )}
          </div>

          <LatestSidebar posts={latest} />
        </div>
      </div>
    </section>
  );
}
