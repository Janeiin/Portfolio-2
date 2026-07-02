import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <section className="pb-16 pt-40 md:pt-52">
        <Container>
          <FadeIn y={12}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-burgundy"
            >
              <ArrowLeft className="h-4 w-4" />
              Selected Work
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow mb-6 mt-12">{study.discipline}</p>
            <h1 className="max-w-4xl text-display-lg font-light text-ink">
              {study.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-10">
            <dl className="flex flex-wrap gap-x-14 gap-y-6 text-sm">
              <div>
                <dt className="eyebrow mb-2">Client</dt>
                <dd className="text-ink">{study.client}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Industry</dt>
                <dd className="text-ink">{study.industry}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Year</dt>
                <dd className="text-ink">{study.year}</dd>
              </div>
            </dl>
          </FadeIn>
        </Container>
      </section>

      <section>
        <Container>
          <FadeIn>
            <div
              aria-hidden="true"
              className={cn(
                "relative h-[38vh] overflow-hidden rounded-card bg-gradient-to-br shadow-soft md:h-[56vh]",
                study.tone
              )}
            >
              {/* Replace with case study photography */}
              <span className="absolute bottom-10 left-10 right-10 block h-px bg-ivory/50" />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {[
              { label: "The Challenge", text: study.challenge },
              { label: "The Approach", text: study.approach },
              { label: "The Outcome", text: study.outcome },
            ].map((block) => (
              <FadeIn key={block.label}>
                <p className="eyebrow mb-5">{block.label}</p>
                <p className="font-serif text-2xl font-light leading-relaxed text-ink md:text-[1.75rem]">
                  {block.text}
                </p>
                <HorizonLine className="mt-12" />
              </FadeIn>
            ))}

            {study.roles && study.roles.length > 0 ? (
              <FadeIn>
                <p className="eyebrow mb-6">Role</p>
                <ul className="flex flex-wrap gap-3">
                  {study.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-stone bg-ivory px-4 py-2 text-sm text-graphite"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}
          </div>
        </Container>
      </section>

      {study.results && study.results.length > 0 ? (
        <section className="pb-4">
          <Container>
            <FadeIn>
              <div className="rounded-card border border-stone/70 bg-ivory p-10 shadow-soft md:p-14">
                <p className="eyebrow mb-10">Results</p>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {study.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-serif text-5xl font-light text-burgundy md:text-6xl">
                        {r.value}
                      </p>
                      <p className="mt-3 max-w-[18ch] text-sm leading-snug text-graphite/90">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      ) : null}

      <section className="pb-28">
        <Container>
          <FadeIn>
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-start justify-between gap-6 rounded-card border border-stone/70 bg-ivory p-10 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:flex-row md:items-center md:p-14"
            >
              <div>
                <p className="eyebrow mb-4">Next</p>
                <p className="font-serif text-3xl font-light text-ink transition-colors group-hover:text-burgundy md:text-4xl">
                  {next.title}
                </p>
              </div>
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stone text-ink transition-all duration-300 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-ivory">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </FadeIn>
          <FadeIn className="mt-14 text-center">
            <Button asChild variant="outline">
              <Link href="/contact">Start the Conversation</Link>
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
