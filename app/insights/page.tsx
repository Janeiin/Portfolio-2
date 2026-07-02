import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/data";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { TextReveal } from "@/components/motion/text-reveal";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on strategy, marketing, brand and AI. Written to be useful, not to fill a calendar.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="pb-20 pt-40 md:pb-28 md:pt-52">
        <Container>
          <FadeIn y={12}>
            <p className="eyebrow mb-8">Insights</p>
          </FadeIn>
          <TextReveal
            as="h1"
            text={"Thinking worth\nyour time."}
            className="max-w-4xl text-display-lg font-light text-ink"
          />
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-graphite/90">
              Perspectives on strategy, marketing, brand and AI. Written to be
              useful, not to fill a calendar.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col justify-between rounded-card border border-stone/70 bg-ivory p-9 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div>
                    <p className="eyebrow">{post.category}</p>
                    <h2 className="mt-6 font-serif text-2xl font-light leading-snug text-ink transition-colors duration-300 group-hover:text-burgundy md:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-5 leading-relaxed text-graphite/90">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-graphite/70">
                    <span>
                      {post.date} · {post.readingTime}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-burgundy transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
