import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { forumThreads, forumCategories } from "@/data/forum-mock";

export const Route = createFileRoute("/message-board/search")({
  head: () => ({
    meta: [
      { title: "Search — 321.Chat Message Board" },
      { name: "description", content: "Search threads and posts on the 321.Chat message board." },
      { property: "og:title", content: "Search — 321.Chat Message Board" },
      { property: "og:description", content: "Search threads and posts." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const results = q.trim()
    ? forumThreads.filter(
        (t) =>
          t.title.toLowerCase().includes(q.toLowerCase()) ||
          t.excerpt.toLowerCase().includes(q.toLowerCase()) ||
          t.posts.some((p) => p.text.toLowerCase().includes(q.toLowerCase()))
      )
    : [];

  return (
    <>
      <div className="rounded border bg-card p-4">
        <h1 className="text-xl font-semibold">Search</h1>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search threads and posts…"
            aria-label="Search query"
            className="min-w-0 flex-1 rounded border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="rounded bg-forum-link px-4 py-2 text-xs font-semibold text-white"
          >
            Search
          </button>
        </form>
        <p className="mt-2 text-xs text-muted-foreground">
          Demo search — indexes the simulated threads in this build
          ({forumCategories.length} boards).
        </p>
      </div>

      {q.trim() && (
        <div className="mt-4 overflow-hidden rounded border bg-card">
          <p className="border-b px-3 py-2 text-xs font-semibold text-muted-foreground">
            {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
          </p>
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Nothing matched. Try a different word.
            </p>
          )}
          {results.map((t) => (
            <div key={t.id} className="px-3 py-3 not-last:border-b">
              <a
                href={`/message-board/threads/${t.id}`}
                className="text-sm font-semibold text-forum-link hover:underline"
              >
                {t.title}
              </a>
              <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{t.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
