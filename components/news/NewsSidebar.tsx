import Link from "next/link";
import { NEWS_POSTS, formatNewsDate, type NewsPost } from "@/lib/news";

interface NewsSidebarProps {
  /** Joriy maqola sluggi — uni ro'yxatlardan chiqarib tashlash uchun */
  currentSlug: string;
}

function pickPosts(exclude: string, count: number, offset = 0): NewsPost[] {
  return NEWS_POSTS.filter((p) => p.slug !== exclude).slice(
    offset,
    offset + count,
  );
}

function SidebarRow({ post, index }: { post: NewsPost; index: number }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
    >
      <span className="mt-0.5 font-mono text-xs tabular-nums text-[var(--color-slate-light)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
          {post.title}
        </p>
        <time
          dateTime={post.date}
          className="mt-1 block text-xs text-[var(--color-slate)]"
        >
          {formatNewsDate(post.date)}
        </time>
      </div>
    </Link>
  );
}

export function NewsSidebar({ currentSlug }: NewsSidebarProps) {
  const latest = pickPosts(currentSlug, 5);
  const recommended = pickPosts(currentSlug, 4, 5);

  return (
    <aside className="flex flex-col gap-10">
      <div className="rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white p-6">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-[var(--color-deep)]">
          So&apos;nggi yangiliklar
        </p>
        <div className="mt-3 flex flex-col divide-y divide-[var(--color-line)]">
          {latest.map((post, i) => (
            <SidebarRow key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="rounded-[var(--radius-2xl)] bg-[var(--color-mist)] p-6">
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-[var(--color-slate)]">
            Tavsiyalar
          </p>
          <div className="mt-3 flex flex-col gap-4">
            {recommended.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group block"
              >
                <span className="pill-tag mb-2 inline-flex bg-white text-[10px]">
                  {post.category}
                </span>
                <p className="text-sm font-medium leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-deep)]">
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
