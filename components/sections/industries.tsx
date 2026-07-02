"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { cn } from "@/lib/utils";

export function Industries() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <SectionTitle
          eyebrow="Where We Work"
          title="Industries we understand deeply"
          description="Sectors where reputation is earned slowly and lost quickly, and where strategy has to survive contact with reality."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const dark =
              industry.name === "Luxury" ||
              industry.name === "Automotive" ||
              industry.name === "Education";
            return (
              <motion.article
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-card bg-gradient-to-br p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
                  industry.tone
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-7 top-7 h-px opacity-60",
                    dark ? "bg-ivory/40" : "bg-ink/20"
                  )}
                />
                <h3
                  className={cn(
                    "font-serif text-2xl font-light",
                    dark ? "text-ivory" : "text-ink"
                  )}
                >
                  {industry.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-[0.8125rem] leading-relaxed opacity-0 transition-all duration-500 group-hover:opacity-100",
                    dark ? "text-stone/90" : "text-graphite/90"
                  )}
                >
                  {industry.line}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
