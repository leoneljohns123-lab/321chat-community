import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Search, LogIn, UserPlus } from "lucide-react";

export const Route = createFileRoute("/_forum")({
  component: ForumLayout,
});

/**
 * Shared chrome for the message board: dark top bar with search and
 * account buttons, breadcrumb row, and the board's footer + cookie bar.
 */
function ForumLayout() {
  const [query, setQuery] = useState("");
  const [cookieAccepted, setCookieAccepted] = useState(
    () => sessionStorage.getItem("forum-cookies-ok") === "1"
  );

  return (
    <div className="flex min-h-screen flex-col bg-forum-bg text-foreground">
      <header className="bg-forum-header">
        <div className="mx-auto flex h-11 max-w-6xl items-center gap-4 px-4">
          <Link to="/message-board" className="flex items-center gap-2 text-white">
            <span className="grid size-6 place-items-center rounded bg-forum-accent text-[10px] font-black">
              321
            </span>
            <span className="leading-none">
              <span className="block text-[13px] font-bold">321.Chat</span>
              <span className="block text-[9px] text-white/60">Message Boards</span>
            </span>
          </Link>
          <form
            className="ml-auto hidden items-center gap-1 sm:flex"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <label className="flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs text-white/70 focus-within:ring-1 focus-within:ring-white/30">
              <Search className="size-3.5" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                aria-label="Search the board"
                className="w-36 bg-transparent text-xs text-white placeholder:text-white/50 outline-none md:w-56"
              />
            </label>
            <Link
              to="/message-board/whats-new"
              className="hidden text-xs text-white/75 hover:text-white md:block"
            >
              What's new
            </Link>
          </form>
          <div className="ml-auto flex items-center gap-2 sm:ml-0">
            <Link
              to="/message-board/login"
              className="flex items-center gap-1.5 rounded bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
            >
              <LogIn className="size-3.5" /> Log in
            </Link>
            <Link
              to="/message-board/register"
              className="flex items-center gap-1.5 rounded bg-forum-green px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110"
            >
              <UserPlus className="size-3.5" /> Register
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb row */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-4">
        <div className="flex items-center gap-2 rounded bg-forum-header px-3 py-2 text-xs text-white/85">
          <Link to="/" className="hover:text-white hover:underline">
            Home
          </Link>
          <span aria-hidden="true">›</span>
          <Link to="/message-board" className="hover:text-white hover:underline">
            Free Chat Forum
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4">
        <Outlet />
      </main>

      <footer className="border-t bg-forum-header py-5 text-center text-[11px] text-white/60">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link to="/rules" className="hover:text-white hover:underline">Rules</Link>
          <Link to="/contact" className="hover:text-white hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:text-white hover:underline">Terms of Use</Link>
          <Link to="/" className="hover:text-white hover:underline">321.Chat home</Link>
        </nav>
        <p className="mt-2">321.Chat community © 2026 · Demo data shown</p>
      </footer>

      {!cookieAccepted && (
        <div className="sticky bottom-0 border-t bg-card px-4 py-4 text-center shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
          <p className="text-xs text-muted-foreground">
            This site uses cookies to personalise content and keep you logged in
            if you register. By continuing to use the site you consent to their
            use.
          </p>
          <div className="mt-3 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                sessionStorage.setItem("forum-cookies-ok", "1");
                setCookieAccepted(true);
              }}
              className="rounded bg-forum-link px-4 py-1.5 text-xs font-semibold text-white"
            >
              ✓ Accept
            </button>
            <Link
              to="/privacy"
              className="rounded bg-muted px-4 py-1.5 text-xs font-semibold text-foreground"
            >
              Learn more…
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
