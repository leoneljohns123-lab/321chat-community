import type { ReactNode } from "react";

/**
 * Shared chrome for inner landing pages: the orange hero band with
 * centered title and tagline (no CTA), and a page body container.
 */
export function PageHero({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline?: string;
  children?: ReactNode;
}) {
  return (
    <header className="hero-band px-4 py-12 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h1>
      {tagline && <p className="mt-2 text-white/90">{tagline}</p>}
      {children}
    </header>
  );
}

export function PageBody({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={
        "mx-auto px-4 py-10 " +
        (narrow ? "max-w-3xl " : "max-w-5xl ") +
        className
      }
    >
      {children}
    </div>
  );
}
