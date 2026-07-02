import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";
import { HorizonLine } from "@/components/motion/horizon-line";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionTitleProps) {
  return (
    <FadeIn
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <p className={cn("eyebrow mb-5", dark && "text-champagne")}>{eyebrow}</p>
      <h2
        className={cn(
          "text-display-md font-light",
          dark ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed md:text-lg",
            dark ? "text-stone/90" : "text-graphite/90",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
      <HorizonLine
        className={cn(
          "mt-10",
          dark && "bg-ivory/20",
          align === "center" && "mx-auto max-w-24"
        )}
      />
    </FadeIn>
  );
}
