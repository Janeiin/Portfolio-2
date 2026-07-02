"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { TextReveal } from "@/components/motion/text-reveal";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-36 md:pt-52">
      {/* Ambient horizon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[62%] h-[60vh] w-[140vw] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-champagne/40 via-stone/30 to-transparent blur-3xl" />
        <motion.div
          className="absolute left-0 top-[64%] h-px w-full bg-gradient-to-r from-transparent via-burgundy/40 to-transparent"
          initial={{ scaleX: reduce ? 1 : 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <Container className="relative">
        <FadeIn delay={0.1} y={12}>
          <p className="eyebrow mb-8">THIRD HORIZON</p>
        </FadeIn>

        <TextReveal
          as="h1"
          text={"Strategy that creates clarity.\nMarketing that builds momentum."}
          className="max-w-5xl text-display-xl font-light text-ink"
          delay={0.2}
        />

        <FadeIn delay={0.7} className="mt-10 max-w-xl">
          <p className="text-lg leading-relaxed text-graphite/90 md:text-xl">
            We help organisations discover what makes them impossible to
            ignore, then transform that into strategy, stories and experiences
            that create lasting momentum.
          </p>
        </FadeIn>

        <FadeIn delay={0.9} className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/work">
              Selected Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/founder">Meet the Founder</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={1.1} className="mt-20 md:mt-28">
          <div className="max-w-2xl">
            <span className="horizon-rule mb-8 max-w-24" />
            <p className="font-serif text-2xl font-light leading-snug text-graphite/70 md:text-[2rem]">
              Most marketing starts with content.
              <br />
              <span className="italic text-ink">Ours starts with curiosity.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
