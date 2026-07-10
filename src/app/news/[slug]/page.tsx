import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import {
  NEWS_POSTS,
  getNewsPostBySlug,
  getOtherNewsPosts,
  formatNewsDate,
} from "@/lib/news";
import { ArticleMedia } from "@/components/news/ArticleMedia";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { AdSlot } from "@/components/shared/ad-slot";
import { CurrencyWidget } from "@/components/shared/currency-widget";
import { ShareButtons } from "@/components/shared/share-buttons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post)
    return buildMetadata({
      title: "Yangilik topilmadi",
      description: "",
      path: "/news",
    });

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${post.slug}`,
  });
}

/**
 * Matnda "## " bilan boshlangan paragraf katta, qalin bo'lim sarlavhasi
 * sifatida chiqariladi (masalan: "## Xavfsizlik masalasi"). Bu skrinshotdagi
 * "ХВАТИТ ДЕМАГОГИИ" uslubidagi bo'lim ajratkichlariga mos keladi.
 */
function isSectionHeading(paragraph: string) {
  return paragraph.trim().startsWith("## ");
}

function ArticleParagraph({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  if (isSectionHeading(paragraph)) {
    return (
      <h2
        key={index}
        className="mb-6 mt-12 font-display text-[clamp(1.5rem,3.2vw,2.1rem)] font-semibold uppercase leading-[1.2] tracking-tight text-[var(--color-ink)] first:mt-0"
      >
        {paragraph.replace(/^##\s*/, "")}
      </h2>
    );
  }

  return (
    <p className="mb-6 text-[1.15rem] leading-[1.8] text-[var(--color-ink-soft)] last:mb-0">
      {paragraph}
    </p>
  );
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) notFound();

  const others = getOtherNewsPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/news/${post.slug}`,
    publisher: { "@type": "Organization", name: "Enwis" },
  };

  // Maqola matni o'rtasiga (taxminan yarmiga) reklama qo'yish uchun bo'lish nuqtasi.
  // Juda qisqa maqolalarda (3 tadan kam paragraf) reklama qo'yilmaydi — displey
  // nomutanosib ko'rinadi va o'quvchi tajribasini buzadi.
  const midpoint = Math.floor(post.content.length / 2);
  const showMidArticleAd = post.content.length >= 4;

  return (
    <article className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      {/* Hero va yangiliklar ro'yxati sectiondagi bilan bir xil ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[var(--color-volt)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-deep)]/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
      />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-slate)] transition-colors hover:text-[var(--color-deep)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Yangiliklar
        </Link>

        {/* Ikki ustunli grid: chapda maqola, o'ngda sidebar (faqat lg va undan katta ekranlarda) */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="max-w-2xl">
            <span className="pill-tag mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
              {post.category}
            </span>

            <h1 className="text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-[1.15] text-[var(--color-ink)]">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
                <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} daqiqa o&apos;qish</span>
              </div>
              <ShareButtons
                url={`${SITE_URL}/news/${post.slug}`}
                title={post.title}
              />
            </div>

            <ArticleMedia media={post.media} />

            <div className="mt-10 border-t border-[var(--color-line)] pt-10">
              {post.content.map((paragraph, i) => (
                <Fragment key={i}>
                  <ArticleParagraph paragraph={paragraph} index={i} />
                  {/* Maqola matni o'rtasiga, bo'lim sarlavhasini bo'lib qo'ymaslik uchun
                      faqat oddiy paragrafdan keyin joylashtiriladi */}
                  {showMidArticleAd &&
                    i === midpoint &&
                    !isSectionHeading(paragraph) && (
                      <AdSlot
                        network="adsense"
                        slotId={
                          process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? ""
                        }
                        className="my-8 rounded-2xl border border-[var(--color-line)] bg-white p-4"
                      />
                    )}
                </Fragment>
              ))}
            </div>

            {others.length > 0 && (
              <div className="mt-16 border-t border-[var(--color-line)] pt-10 lg:hidden">
                <p className="mb-6 font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
                  Boshqa yangiliklar
                </p>
                <div className="flex flex-col gap-6">
                  {others.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/news/${other.slug}`}
                      className="group flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="font-display text-base font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
                          {other.title}
                        </p>
                        <time
                          dateTime={other.date}
                          className="mt-1 block text-xs text-[var(--color-slate)]"
                        >
                          {formatNewsDate(other.date)}
                        </time>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[var(--color-slate)] transition-colors group-hover:text-[var(--color-deep)]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/news"
              className="mt-16 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep)]"
            >
              Barcha yangiliklar <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Sidebar faqat desktopda ko'rinadi, scroll bilan birga sirg'aladi */}
          <div className="hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-6">
              <CurrencyWidget />
              <AdSlot
                network="yandex"
                slotId={
                  process.env.NEXT_PUBLIC_YANDEX_SLOT_ARTICLE_SIDEBAR ?? ""
                }
                className="rounded-2xl border border-[var(--color-line)] bg-white p-4"
              />
              <NewsSidebar currentSlug={post.slug} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
