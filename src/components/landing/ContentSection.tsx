import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import illustWorld from "@/assets/illust-world.png";
import illustFeatures from "@/assets/illust-features.png";
import illustInterests from "@/assets/illust-interests.png";
import illustPhone from "@/assets/illust-phone.png";
import illustModeration from "@/assets/illust-moderation.png";
import illustSocial from "@/assets/illust-moderation.png";
import illustExpress from "@/assets/illust-features.png";
import illustRules from "@/assets/illust-moderation.png";

const IMAGES = {
  world: illustWorld,
  features: illustFeatures,
  interests: illustInterests,
  phone: illustPhone,
  moderation: illustModeration,
  social: illustSocial,
  express: illustExpress,
  rules: illustRules,
} as const;

export type SectionImage = keyof typeof IMAGES;

/**
 * Two-column content band with a flat illustration: image and text
 * swap sides in alternating sections, on either the pale blue-gray
 * or white background, as on the reference landing pages.
 */
export function ContentSection({
  title,
  titleAccent,
  paragraphs,
  image,
  side = "left",
  tinted = false,
  children,
  className,
}: {
  title: string;
  /** Portion of the heading rendered in the accent color (e.g. "Social" in "Get Social"). */
  titleAccent?: string;
  paragraphs?: string[];
  image: SectionImage;
  side?: "left" | "right";
  tinted?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const accent = titleAccent ? (
    <span className="text-primary">{titleAccent}</span>
  ) : null;
  return (
    <section
      className={cn(tinted ? "bg-section" : "bg-background", className)}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div
          className={cn(
            "order-2 flex justify-center md:order-1",
            side === "right" && "md:order-2"
          )}
        >
          <img
            src={IMAGES[image]}
            alt=""
            aria-hidden="true"
            className="h-auto w-full max-w-xs object-contain drop-shadow-sm md:max-w-sm"
            loading="lazy"
          />
        </div>
        <div
          className={cn(
            "order-1 text-center md:order-2 md:text-left",
            side === "right" && "md:order-1"
          )}
        >
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {title} {accent}
          </h2>
          {paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Small floating "go to chat" link used at the end of sections. */
export function SectionLink({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
    >
      {label} <span aria-hidden="true">→</span>
    </Link>
  );
}
