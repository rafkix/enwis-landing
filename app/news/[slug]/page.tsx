import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import {
  NEWS_POSTS,
  getNewsPostBySlug,
  getOtherNewsPosts,
} from "@/lib/news";
import { ArticlePage } from "@/components/news/article-page";

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

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) notFound();

  const others = getOtherNewsPosts(post.slug);

  return <ArticlePage post={post} others={others} />;
}
