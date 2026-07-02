import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Megaphone, Building2, Sunrise } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";
import { TextReveal } from "@/components/motion/text-reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet Janin, the strategist, marketer and researcher behind Third Horizon. A PhD in Marketing, enterprise strategy leadership, and campaigns for the world's most storied brands.",
};

const chapters = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "Grounded in evidence",
    paragraphs: [
      "A Bachelor of International Business and Management, followed by a PhD in Marketing, with doctoral research in audience behaviour and decision making: how people actually attend, evaluate and choose.",
      "That research discipline never left. Every strategy Third Horizon writes is grounded in research and evidence, because assumptions are expensive and audiences rarely behave the way boardrooms expect them to.",
    ],
  },
  {
    icon: Megaphone,
    label: "Marketing",
    title: "Learning the craft where the stakes are highest",
    paragraphs: [
      "The marketing chapters of the story run through some of the most demanding brands in the world. Campaigns, content and brand events for Mercedes Benz, Ferrari, Lamborghini and Maserati, where every touchpoint has to match the standard of the product.",
      "There was a social media strategy for Shiseido built the proper way: market research first, channel strategy second, content last. And years as a Digital Media Account Manager, where the discipline of managing brands, budgets and expectations at once became second nature.",
      "Across marketing, social media, brand, content, events and digital media, one lesson repeated itself: creativity earns attention, but strategy earns results.",
    ],
  },
  {
    icon: Building2,
    label: "Corporate",
    title: "From the campaign brief to the boardroom",
    paragraphs: [
      "The corporate chapter added the other half of the equation: enterprise strategy, transformation, marketing strategy, communications, market research, storytelling and executive leadership inside large, complex organisations.",
      "Sitting where strategy is set, not just where it is executed, changes how you think about marketing. It becomes clear that the best campaigns fail when the strategy behind them is unclear, and the simplest campaigns succeed when it isn't.",
      "This blend of strategic thinking and creative execution is rare, and it is precisely what Third Horizon was built around: the ability to zoom out to where a business is going, then zoom back in to the content, messaging and customer experience that gets it there.",
    ],
  },
  {
    icon: Sunrise,
    label: "Today",
    title: "The third horizon",
    paragraphs: [
      "In today's fast moving world, attention is cheap and trust is scarce. Brands no longer win by being the loudest; they win by being the clearest. Creativity still matters enormously, but it has to be supported by research, structure and strategic thinking, or it evaporates the moment the campaign ends.",
      "Third Horizon exists for that reason. The first horizon is what a business does today. The second is what it improves next. The third is where it becomes something new. We help ambitious organisations see that far, and build the brand, marketing and momentum to get there.",
    ],
  },
];

export default function FounderPage() {
  return (
    <>
      <section className="pb-20 pt-40 md:pb-28 md:pt-52">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
            <div>
              <FadeIn y={12}>
                <p className="eyebrow mb-8">The Founder</p>
              </FadeIn>
              <TextReveal
                as="h1"
                text={"Hi, I'm Janin."}
                className="text-display-lg font-light text-ink"
              />
              <FadeIn delay={0.3} className="mt-9 space-y-6 text-lg leading-relaxed text-graphite/90">
                <p>
                  I&apos;m a creative, strategist, and marketer who loves
                  helping businesses turn good ideas into brands people
                  actually remember.
                </p>
                <p>
                  My career has taken me from corporate boardrooms and
                  university classrooms to content shoots, brand workshops, and
                  digital campaigns. Along the way I&apos;ve worked on
                  everything from enterprise strategy and market research to
                  social media, websites, brand positioning, and AI powered
                  marketing.
                </p>
                <p>
                  That mix is my superpower. I can zoom out to understand where
                  your business is going, then zoom back in to create the
                  content, messaging and customer experience that gets you
                  there.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="mt-12">
                <HorizonLine />
                <div className="mt-10 space-y-4">
                  <p className="font-serif text-2xl font-light italic text-graphite/70">
                    Most marketers ask: &ldquo;What should we post this
                    week?&rdquo;
                  </p>
                  <p className="font-serif text-3xl font-light text-ink">
                    I ask: &ldquo;What problem are we solving?&rdquo;
                  </p>
                </div>
                <div className="mt-8 space-y-3 text-lg leading-relaxed text-graphite/90">
                  <p>Because the best marketing is intentional.</p>
                  <p>
                    Every campaign should have a purpose. Every piece of
                    content should support a business objective. Every brand
                    should tell a story worth following.
                  </p>
                  <p>
                    And yes, as a millennial I spend an unreasonable amount of
                    time on social media, but at least now I can call it market
                    research.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-gradient-to-b from-champagne via-stone to-pearl shadow-soft">
                {/* Replace with founder photography: /public/founder.jpg */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-1/2 h-px bg-burgundy/30"
                />
                <p className="absolute bottom-8 left-8 font-serif text-sm tracking-[0.3em] text-ink/40">
                  JANIN · FOUNDER
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="space-y-24 md:space-y-28">
            {chapters.map((chapter, i) => {
              const Icon = chapter.icon;
              return (
                <FadeIn key={chapter.label}>
                  <article className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone bg-pearl text-burgundy">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <p className="eyebrow mt-7">{chapter.label}</p>
                      <h2 className="mt-3 text-display-sm font-light text-ink">
                        {chapter.title}
                      </h2>
                    </div>
                    <div className="space-y-6 text-lg leading-relaxed text-graphite/90">
                      {chapter.paragraphs.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                  </article>
                  {i < chapters.length - 1 && <HorizonLine className="mt-24 md:mt-28" />}
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mt-24 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Work With Janin</Link>
            </Button>
          </FadeIn>
        </Container>
      </section>

      <CTA />
    </>
  );
}
