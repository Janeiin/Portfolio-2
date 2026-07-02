import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/lib/data";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="pb-28 pt-40 md:pt-52">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn y={12}>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-burgundy"
              >
                <ArrowLeft className="h-4 w-4" />
                All Insights
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="eyebrow mb-6 mt-12">{post.category}</p>
              <h1 className="text-display-md font-light text-ink">
                {post.title}
              </h1>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-graphite/70">
                {post.date} · {post.readingTime}
              </p>
              <HorizonLine className="mt-10" />
            </FadeIn>
            <FadeIn delay={0.2} className="mt-12 space-y-7">
              {post.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-serif text-2xl font-light leading-relaxed text-ink"
                      : "text-lg leading-relaxed text-graphite/90"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>
            <FadeIn className="mt-16">
              <HorizonLine />
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <p className="font-serif text-xl font-light text-ink">
                  Have a problem worth solving?
                </p>
                <Button asChild>
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </article>
    </>
  );
}
