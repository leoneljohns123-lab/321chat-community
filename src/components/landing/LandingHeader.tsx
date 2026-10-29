import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navRooms } from "@/data/rooms";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Forum", to: "/message-board" },
  { label: "VIP", to: "/vip" },
  { label: "Gold", to: "/gold" },
  { label: "Rules", to: "/rules" },
  { label: "FAQs", to: "/rules/faq" },
  { label: "Contact", to: "/contact" },
] as const;

/** Sticky site navigation: logo, room dropdown, page links, mobile drawer. */
export function LandingHeader() {
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setRoomsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-shadow " +
        (scrolled ? "shadow-sm" : "")
      }
    >
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <Logo tone="color" />

        {/* Desktop links */}
        <ul className="ml-4 hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              aria-expanded={roomsOpen}
              onClick={() => setRoomsOpen((o) => !o)}
              onBlur={() => setTimeout(() => setRoomsOpen(false), 120)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
            >
              Chat Rooms <ChevronDown className="size-3.5" />
            </button>
            {roomsOpen && (
              <ul className="absolute left-0 top-full z-50 mt-1 grid w-72 grid-cols-2 gap-0.5 rounded-lg border bg-popover p-2 shadow-lg">
                <li>
                  <Link
                    to="/"
                    className="block rounded px-2 py-1.5 text-sm text-popover-foreground/85 hover:bg-accent hover:text-foreground"
                  >
                    Free Chat
                  </Link>
                </li>
                {navRooms.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/rooms/$slug"
                      params={{ slug: r.slug }}
                      className="block rounded px-2 py-1.5 text-sm text-popover-foreground/85 hover:bg-accent hover:text-foreground"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/chat"
            className="hidden rounded-md bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:brightness-110 sm:inline-flex"
          >
            Start Chatting
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-md text-foreground/80 hover:bg-accent md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
            <ul className="grid gap-0.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <p className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Chat Rooms
                </p>
                <ul className="grid grid-cols-2 gap-0.5">
                  <li>
                    <Link
                      to="/"
                      className="block rounded px-2 py-1.5 text-sm hover:bg-accent"
                    >
                      Free Chat
                    </Link>
                  </li>
                  {navRooms.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/rooms/$slug"
                        params={{ slug: r.slug }}
                        className="block rounded px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-2">
                <Link
                  to="/chat"
                  className="block rounded-md bg-cta px-4 py-2 text-center text-sm font-semibold text-cta-foreground"
                >
                  Start Chatting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
