import { Fragment } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/seo";
import { formatNewsDate } from "@/lib/news";
import type { NewsPost } from "@/lib/news";
import { ArticleMedia } from "@/components/news/ArticleMedia";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { AdSlot } from "@/components/shared/ad-slot";
import { CurrencyWidget } from "@/components/shared/currency-widget";
import { ShareButtons } from "@/components/shared/share-buttons";
import { HeroBg } from "@/components/shared/hero-bg";

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

interface ArticlePageProps {
  post: NewsPost;
  others: NewsPost[];
}

export function ArticlePage({ post, others }: ArticlePageProps) {
  const midpoint = Math.floor(post.content.length / 2);
  const showMidArticleAd = post.content.length >= 4;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/news/${post.slug}`,
    publisher: { "@type": "Organization", name: "Enwis" },
  };

  return (
    <article className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <HeroBg />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="container-editorial relative">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-slate)] transition-colors hover:text-[var(--color-deep)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Yangiliklar
        </Link>

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

            <Link
              href="/news"
              className="mt-16 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-deep)]"
            >
              Barcha yangiliklar <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

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
