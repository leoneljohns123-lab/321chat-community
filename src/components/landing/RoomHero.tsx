import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import avatarStrip from "@/assets/avatar-strip.png";

/**
 * The orange crowd-collage hero used on every landing page:
 * centered logo/title, tagline, indigo CTA and the cartoon avatar
 * strip sitting on the band's bottom edge.
 */
export function RoomHero({
  title,
  tagline,
  subtitle,
  ctaLabel = "Start Chatting!",
  ctaTo = "/chat",
  showLogo = true,
  children,
}: {
  title?: string;
  tagline: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  showLogo?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className="hero-band relative overflow-hidden">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-10 pb-2 text-center md:pt-14">
        {showLogo && <Logo tone="white" className="mb-2" />}
        {title && (
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm md:text-4xl">
            {title}
          </h1>
        )}
        <p className="mt-1 text-lg font-medium text-white/95">{tagline}</p>
        {subtitle && <p className="mt-1 text-sm text-white/85">{subtitle}</p>}
        <Link
          to={ctaTo}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-cta px-6 py-2.5 text-sm font-semibold text-cta-foreground shadow-md transition hover:brightness-110"
        >
          {ctaLabel}
        </Link>
        {children}
      </div>
      <img
        src={avatarStrip}
        alt=""
        aria-hidden="true"
        className="mx-auto block h-32 w-auto max-w-full object-contain object-bottom md:h-44"
        loading="eager"
      />
    </header>
  );
}
