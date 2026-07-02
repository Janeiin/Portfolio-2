"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { cn } from "@/lib/utils";

export function SelectedWork({ limit }: { limit?: number }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Partnerships, not projects"
          description="A selection of engagements across strategy, research, brand and marketing. Each began with a question worth answering."
        />

        <div className="space-y-6">
          {items.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group grid overflow-hidden rounded-card border border-stone/70 bg-ivory shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1.1fr_1fr]"
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "relative min-h-[220px] bg-gradient-to-br md:min-h-[320px]",
                    study.tone
                  )}
                >
                  <span className="absolute bottom-6 left-6 right-6 block h-px bg-ivory/50 opacity-70 transition-all duration-700 group-hover:right-12" />
                  <span className="absolute left-6 top-6 font-serif text-sm tracking-[0.25em] text-ink/50 mix-blend-luminosity">
                    {study.year}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <p className="eyebrow">{study.discipline}</p>
                    <h3 className="mt-5 text-display-sm font-light text-ink transition-colors duration-300 group-hover:text-burgundy">
                      {study.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-graphite/90">
                      {study.summary}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-medium text-graphite/70">
                      {study.client}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone text-ink transition-all duration-300 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-ivory">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
