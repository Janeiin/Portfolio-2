import { stats } from "@/lib/data";
import { Container } from "@/components/site/container";
import { Counter } from "@/components/motion/counter";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";

export function Stats() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <HorizonLine className="mb-16" />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="flex h-full flex-col">
                {stat.value !== null ? (
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-serif text-6xl font-light text-burgundy md:text-7xl"
                  />
                ) : (
                  <span className="font-serif text-4xl font-light leading-[1.15] text-burgundy md:text-[2.6rem]">
                    Enterprise
                  </span>
                )}
                <p className="mt-4 max-w-[16ch] text-sm leading-snug text-graphite/90">
                  {stat.value !== null ? stat.label : "Strategy Leadership"}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <HorizonLine className="mt-16" />
      </Container>
    </section>
  );
}
