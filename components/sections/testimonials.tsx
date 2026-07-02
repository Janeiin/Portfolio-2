"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";

export function Testimonials() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <SectionTitle
          eyebrow="In Their Words"
          title="What partners say"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col justify-between rounded-card border border-stone/70 bg-ivory p-9 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift md:p-11"
            >
              <div>
                <Quote className="h-6 w-6 text-champagne" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="mt-7 font-serif text-xl font-light leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-10">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-graphite/70">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
