import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";
import { Button } from "@/components/ui/button";

export function FounderIntro() {
  return (
    <section className="bg-pearl py-24 md:py-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <FadeIn>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-card bg-gradient-to-b from-champagne via-stone to-pearl shadow-soft">
              {/* Replace with founder photography: /public/founder.jpg */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-1/2 h-px bg-burgundy/30"
              />
              <p className="absolute bottom-8 left-8 font-serif text-sm tracking-[0.3em] text-ink/40">
                THE FOUNDER
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow mb-6">Behind The Consultancy</p>
              <h2 className="text-display-md font-light text-ink">
                Hi, I&apos;m Janin.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-7 text-lg leading-relaxed text-graphite/90">
                A creative, strategist and marketer who loves helping
                businesses turn good ideas into brands people actually
                remember. From corporate boardrooms and university classrooms
                to content shoots and brand workshops, that mix is the
                superpower behind Third Horizon.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <HorizonLine className="mt-10 max-w-32" />
              <p className="mt-8 font-serif text-2xl font-light italic leading-snug text-ink">
                &ldquo;Every campaign should have a purpose. Every brand should
                tell a story worth following.&rdquo;
              </p>
            </FadeIn>
            <FadeIn delay={0.35} className="mt-10">
              <Button asChild variant="outline">
                <Link href="/founder">
                  Meet the Founder
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
