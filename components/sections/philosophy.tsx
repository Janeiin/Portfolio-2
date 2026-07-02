import { Container } from "@/components/site/container";
import { TextReveal } from "@/components/motion/text-reveal";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";

export function Philosophy() {
  return (
    <section className="texture-grain bg-ink py-28 text-ivory md:py-44">
      <Container>
        <FadeIn>
          <p className="eyebrow mb-14 text-champagne">Our Philosophy</p>
        </FadeIn>

        <TextReveal
          as="h2"
          text={'Most marketers ask,\n"What should we post?"'}
          className="text-display-lg font-light text-stone/60"
        />
        <TextReveal
          as="h2"
          text={'We ask,\n"What problem are we solving?"'}
          className="mt-8 text-display-lg font-light text-ivory"
          delay={0.25}
        />

        <HorizonLine className="mt-16 max-w-40 bg-champagne/40" />

        <FadeIn delay={0.2} className="mt-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-stone/85 md:text-xl">
            Intentional marketing begins with the business problem, not the
            content calendar. When every campaign has a purpose, every piece of
            content supports an objective, and every brand tells a story worth
            following, marketing stops being an expense and becomes a growth
            engine. That discipline is the difference between activity and
            momentum.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
