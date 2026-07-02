import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { TextReveal } from "@/components/motion/text-reveal";
import { SelectedWork } from "@/components/sections/selected-work";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A selection of partnerships across strategy, research, brand and marketing, from national healthcare groups to the world's most storied luxury brands.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-4 pt-40 md:pt-52">
        <Container>
          <FadeIn y={12}>
            <p className="eyebrow mb-8">Selected Work</p>
          </FadeIn>
          <TextReveal
            as="h1"
            text={"Work that began\nwith a question."}
            className="max-w-4xl text-display-lg font-light text-ink"
          />
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-graphite/90">
              From enterprise strategy for national healthcare groups to
              research led campaigns for the world&apos;s most storied brands.
            </p>
          </FadeIn>
        </Container>
      </section>
      <SelectedWork />
      <CTA />
    </>
  );
}
