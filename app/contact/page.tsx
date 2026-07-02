import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { TextReveal } from "@/components/motion/text-reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready for the next horizon? Start the conversation with Third Horizon.",
};

export default function ContactPage() {
  return (
    <section className="pb-28 pt-40 md:pb-40 md:pt-52">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <FadeIn y={12}>
              <p className="eyebrow mb-8">Contact</p>
            </FadeIn>
            <TextReveal
              as="h1"
              text={"Ready for the\nnext horizon?"}
              className="text-display-lg font-light text-ink"
            />
            <FadeIn delay={0.4} className="mt-8 max-w-md">
              <p className="text-lg leading-relaxed text-graphite/90">
                Tell us where you&apos;re heading. One conversation is usually
                enough to know whether we can help.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className="mt-12">
              <p className="eyebrow mb-3">Email</p>
              <a
                href="mailto:hello@thirdhorizon.consulting"
                className="border-b border-champagne pb-1 font-serif text-xl text-ink transition-colors hover:border-burgundy hover:text-burgundy"
              >
                hello@thirdhorizon.consulting
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
