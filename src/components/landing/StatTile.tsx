import { cn } from "@/lib/utils";

/**
 * Small fact tile used on the VIP and Gold pages ("$15 — Once, and it
 * never expires", "1.5× …"). Number on top, caption below.
 */
export function StatTile({
  stat,
  caption,
  className,
}: {
  stat: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-lg border bg-card px-4 py-3 text-center shadow-sm",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute right-2 top-1 text-3xl leading-none text-primary/15"
      >
        ◤
      </span>
      <p className="text-xl font-extrabold text-primary md:text-2xl">{stat}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{caption}</p>
    </div>
  );
}

/**
 * Feature card from the VIP/Gold feature grids: hex icon, title,
 * short description, in a card with a folded corner.
 */
export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm">
      <span
        aria-hidden="true"
        className="absolute right-3 top-2 text-3xl leading-none text-primary/15"
      >
        ◥
      </span>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-section text-xl"
        >
          {icon}
        </span>
        <div>
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Question + answer block used across the FAQ-heavy pages. */
export function FaqBlock({
  icon,
  question,
  children,
  id,
}: {
  icon?: string;
  question: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-20 py-5 not-last:border-b">
      <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
        {icon && <span aria-hidden="true">{icon}</span>}
        {question}
      </h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
