import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top control, appearing after the first screen. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 grid size-11 place-items-center rounded-full bg-foreground/85 text-background shadow-lg transition hover:bg-foreground"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
