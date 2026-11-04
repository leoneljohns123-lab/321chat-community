import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_forum/register")({
  head: () => ({
    meta: [
      { title: "Register — 321.Chat Message Board" },
      { name: "description", content: "Register a free account on the 321.Chat message board." },
      { property: "og:title", content: "Register — 321.Chat Message Board" },
      { property: "og:description", content: "Register a free account." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ForumRegisterPage,
});

function ForumRegisterPage() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="mx-auto max-w-md rounded border bg-card p-6">
      <h1 className="text-xl font-semibold">Register</h1>
      <p className="mt-1 text-xs text-muted-foreground">
        Joining the board is free. Consider using your{" "}
        <Link to="/" className="text-forum-link hover:underline">
          321.Chat
        </Link>{" "}
        chat username so your VIP status carries over.
      </p>
      {done ? (
        <div className="mt-4 rounded border bg-section p-3 text-sm">
          <p className="font-semibold">Almost there!</p>
          <p className="mt-1 text-muted-foreground">
            In the live build you'd now confirm your email address. This demo
            does not send email or store accounts.
          </p>
        </div>
      ) : (
        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const pw = String(data.get("password"));
            if (pw.length < 8) {
              setError("Password must be at least 8 characters.");
              return;
            }
            setError("");
            setDone(true);
          }}
        >
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Username</span>
            <input
              name="username"
              required
              className="rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Email address</span>
            <input
              name="email"
              type="email"
              required
              className="rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Password</span>
            <input
              name="password"
              type="password"
              required
              className="rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" required className="mt-0.5 size-3.5" />
            I agree to the{" "}
            <Link to="/terms-of-use" className="text-forum-link hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link to="/rules" className="text-forum-link hover:underline">
              rules
            </Link>
            .
          </label>
          <button
            type="submit"
            className="rounded bg-forum-green px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
