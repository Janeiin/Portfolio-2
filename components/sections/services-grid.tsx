"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-36" id="services">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title="Intelligence before creativity"
          description="Four disciplines, one conviction: nothing should be made before it is understood. Every engagement begins with the question that matters."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-stone/70 bg-ivory p-9 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift md:p-11"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-burgundy transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone bg-pearl text-burgundy transition-colors duration-500 group-hover:border-burgundy/30 group-hover:bg-burgundy group-hover:text-ivory">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-8 text-display-sm font-light text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-graphite/90">
                      {service.summary}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-2 text-sm font-medium text-burgundy">
                    <span className="border-b border-transparent transition-colors duration-300 group-hover:border-burgundy">
                      Explore {service.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
