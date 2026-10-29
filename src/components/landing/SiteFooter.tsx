import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Main Links",
    links: [
      { label: "Home", to: "/" },
      { label: "Forum", to: "/message-board" },
      { label: "FAQs", to: "/rules/faq" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Rules", to: "/rules" },
      { label: "Banned?", to: "/contact/banned" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Chat Related",
    links: [
      { label: "Chat Guide", to: "/guide" },
      { label: "Reviews", to: "/reviews" },
      { label: "VIP Features", to: "/vip" },
      { label: "Gold Features", to: "/gold" },
      { label: "Gold Games", to: "/games" },
    ],
  },
];

const SOCIALS: { label: string; glyph: string; href: string }[] = [
  { label: "Facebook", glyph: "f", href: "https://www.facebook.com/" },
  { label: "X", glyph: "𝕏", href: "https://x.com/" },
  { label: "YouTube", glyph: "▶", href: "https://www.youtube.com/" },
  { label: "Instagram", glyph: "◎", href: "https://www.instagram.com/" },
];

/** Site footer: brand + link columns + socials + legal line. */
export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-background/85">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-3 max-w-xs text-sm">
              Follow 321.Chat for status updates and community news.
            </p>
            <ul className="mt-4 flex gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`321.Chat on ${s.label}`}
                    className="grid size-9 place-items-center rounded-full border border-background/25 text-sm transition hover:bg-background/10"
                  >
                    <span aria-hidden="true">{s.glyph}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h6 className="text-xs font-semibold uppercase tracking-wider text-background/60">
                {col.title}
              </h6>
              <ul className="mt-3 grid gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-background/85 transition hover:text-background hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-background/15 pt-6 text-center text-xs leading-relaxed text-background/60">
          321.Chat © 2026 — Free chat rooms for everyone.
          <br />
          <Link to="/about" className="hover:text-background hover:underline">
            About Us
          </Link>{" "}
          |{" "}
          <Link to="/privacy" className="hover:text-background hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            to="/terms-of-use"
            className="hover:text-background hover:underline"
          >
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link
            to="/disclaimer"
            className="hover:text-background hover:underline"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
