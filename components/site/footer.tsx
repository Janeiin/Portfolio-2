import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { Container } from "@/components/site/container";
import { HorizonLine } from "@/components/motion/horizon-line";

export function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] text-ivory">
              THIRD HORIZON
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone/70">
              A boutique strategy and marketing consultancy. Clarity first,
              creativity with intent, growth that compounds.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-6 text-champagne">Explore</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone/80 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-6 text-champagne">Begin</p>
            <p className="text-sm leading-relaxed text-stone/80">
              Ready for the next horizon?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block border-b border-champagne/60 pb-1 font-serif text-lg text-ivory transition-colors hover:border-ivory"
            >
              Start the Conversation
            </Link>
          </div>
        </div>

        <HorizonLine className="mt-16 bg-ivory/15" />

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-stone/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Strategy · Marketing · Brand · Artificial Intelligence</p>
        </div>
      </Container>
    </footer>
  );
}
