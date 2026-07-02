import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Campaigns from "@/components/Campaigns";
import Gallery from "@/components/Gallery";
import CaseStudies from "@/components/CaseStudies";
import Dashboard from "@/components/Dashboard";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Campaigns />
      <Gallery />
      <CaseStudies />
      <Dashboard />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
