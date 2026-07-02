import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";

export default function NotFound() {
  return (
    <section className="py-48 md:py-64">
      <Container className="text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="text-display-md font-light text-ink">
          This horizon doesn&apos;t exist yet.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-graphite/90">
          The page you&apos;re looking for has moved or was never here. Let&apos;s
          get you back on course.
        </p>
        <Button asChild className="mt-10">
          <Link href="/">Return Home</Link>
        </Button>
      </Container>
    </section>
  );
}
