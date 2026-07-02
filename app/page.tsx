import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Philosophy } from "@/components/sections/philosophy";
import { Industries } from "@/components/sections/industries";
import { SelectedWork } from "@/components/sections/selected-work";
import { Stats } from "@/components/sections/stats";
import { FounderIntro } from "@/components/sections/founder-intro";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Philosophy />
      <Industries />
      <SelectedWork limit={3} />
      <Stats />
      <FounderIntro />
      <Testimonials />
      <CTA />
    </>
  );
}
