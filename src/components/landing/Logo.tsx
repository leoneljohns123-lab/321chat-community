import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Original "321.Chat" wordmark: a rounded speech-bubble tile with "321"
 * beside the ".Chat" word. Rendered entirely in CSS so it stays crisp
 * at any size and on any background.
 */
export function Logo({
  className,
  tone = "color",
}: {
  className?: string;
  tone?: "color" | "white" | "dark";
}) {
  return (
    <Link
      to="/"
      aria-label="321.Chat home"
      className={cn("inline-flex items-center gap-1.5 select-none", className)}
    >
      <span
        className={cn(
          "relative grid size-9 place-items-center rounded-lg rounded-bl-none text-base font-extrabold tracking-tight shadow-sm",
          tone === "color" && "bg-primary text-primary-foreground",
          tone === "white" && "bg-white/95 text-primary",
          tone === "dark" && "bg-foreground text-background"
        )}
      >
        321
      </span>
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          tone === "white" ? "text-white" : "text-foreground"
        )}
      >
        .Chat
      </span>
    </Link>
  );
}
