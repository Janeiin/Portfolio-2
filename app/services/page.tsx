import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";
import { TextReveal } from "@/components/motion/text-reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Create clarity, build brands, grow audiences and work smarter. Four outcomes, one conviction: nothing should be made before it is understood.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-16 pt-40 md:pb-24 md:pt-52">
        <Container>
          <FadeIn y={12}>
            <p className="eyebrow mb-8">Services</p>
          </FadeIn>
          <TextReveal
            as="h1"
            text={"Four disciplines.\nOne standard."}
            className="max-w-4xl text-display-lg font-light text-ink"
          />
          <FadeIn delay={0.4} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-graphite/90">
              Social media, campaigns and content are expressions of something
              deeper: a clear strategy, grounded in research, executed with
              craft. That is what we sell.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.slug}>
                  <article
                    id={service.slug}
                    className="grid scroll-mt-32 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
                  >
                    <div>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-stone bg-ivory text-burgundy shadow-soft">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <p className="eyebrow mt-8">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 text-display-md font-light text-ink">
                        {service.title}
                      </h2>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-light leading-snug text-ink md:text-3xl">
                        {service.summary}
                      </p>
                      <p className="mt-6 text-lg leading-relaxed text-graphite/90">
                        {service.detail}
                      </p>
                      <HorizonLine className="mt-10" />
                      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-3 text-sm text-graphite"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-burgundy"
                              strokeWidth={2}
                            />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mt-24 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Discuss An Engagement</Link>
            </Button>
          </FadeIn>
        </Container>
      </section>

      <CTA />
    </>
  );
}
