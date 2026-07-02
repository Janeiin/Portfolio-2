import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { TextReveal } from "@/components/motion/text-reveal";
import { FadeIn } from "@/components/motion/fade-in";

export function CTA() {
  return (
    <section className="texture-grain relative overflow-hidden bg-burgundy-deep py-28 text-ivory md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full h-[70vh] w-[160vw] -translate-x-1/2 -translate-y-1/3 rounded-[100%] bg-wine/40 blur-3xl"
      />
      <Container className="relative text-center">
        <TextReveal
          as="h2"
          text={"Ready for the\nnext horizon?"}
          className="text-display-lg font-light"
        />
        <FadeIn delay={0.3} className="mt-8">
          <p className="mx-auto max-w-md text-lg leading-relaxed text-stone/90">
            One conversation is usually enough to know whether we can help.
          </p>
        </FadeIn>
        <FadeIn delay={0.45} className="mt-12">
          <Button asChild variant="light" size="lg">
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
