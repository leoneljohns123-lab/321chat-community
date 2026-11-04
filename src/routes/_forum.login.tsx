import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_forum/login")({
  head: () => ({
    meta: [
      { title: "Log In — 321.Chat Message Board" },
      { name: "description", content: "Log in to the 321.Chat message board." },
      { property: "og:title", content: "Log In — 321.Chat Message Board" },
      { property: "og:description", content: "Log in to the message board." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ForumLoginPage,
});

function ForumLoginPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-md rounded border bg-card p-6">
      <h1 className="text-xl font-semibold">Log In</h1>
      <p className="mt-1 text-xs text-muted-foreground">
        Demo build — there is no live account system yet, so credentials are not
        stored or checked.
      </p>
      {done ? (
        <div className="mt-4 rounded border bg-section p-3 text-sm">
          Login is disabled in this demo build. Nothing was submitted.
        </div>
      ) : (
        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Your name or email address</span>
            <input
              className="rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Password</span>
            <input
              type="password"
              className="rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-muted-foreground">
            <input type="checkbox" className="size-3.5" /> Stay logged in
          </label>
          <button
            type="submit"
            className="rounded bg-forum-link px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            Log in
          </button>
        </form>
      )}
      <p className="mt-4 border-t pt-3 text-center text-xs text-muted-foreground">
        New here?{" "}
        <Link to="/message-board/register" className="text-forum-link hover:underline">
          Register
        </Link>{" "}
        ·{" "}
        <Link to="/message-board/login" className="text-forum-link hover:underline">
          Forgot your password?
        </Link>
      </p>
    </div>
  );
}
