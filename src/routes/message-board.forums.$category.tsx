import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { forumThreads, forumCategories } from "@/data/forum-mock";

export const Route = createFileRoute("/message-board/forums/$category")({
  head: () => ({
    meta: [
      { title: "Forum Board — 321.Chat Message Board" },
      { name: "description", content: "Threads in a 321.Chat message-board board." },
      { property: "og:title", content: "Forum Board — 321.Chat" },
      { property: "og:description", content: "Threads in this board." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ForumBoardPage,
});

function ForumBoardPage() {
  const { category } = Route.useParams();
  const [sort, setSort] = useState<"recent" | "replies" | "views">("recent");
  const cat = forumCategories.find((c) => c.id === category);
  const threads = forumThreads.filter((t) => t.category === category);
  const others = forumThreads.filter((t) => t.category !== category);

  const sorted = [...threads].sort((a, b) =>
    sort === "replies"
      ? b.replies - a.replies
      : sort === "views"
        ? b.views - a.views
        : 0
  );
  const shown = sort === "recent" ? threads : sorted;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 rounded border bg-card px-4 py-4">
        <div>
          <h1 className="text-xl font-semibold">{cat?.name ?? "Unknown board"}</h1>
          <p className="text-xs text-muted-foreground">{cat?.description}</p>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs">
          <label className="text-muted-foreground">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded border bg-background px-2 py-1.5 text-xs"
          >
            <option value="recent">Most recent</option>
            <option value="replies">Most replies</option>
            <option value="views">Most viewed</option>
          </select>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded border bg-card">
        {shown.length === 0 && others.length === 0 && (
          <p className="px-4 py-10 text-center text-sm text-muted-foreground">
            No threads in this board yet. Be the first to post one!
          </p>
        )}
        {[...shown, ...others].map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-3 px-3 py-3 not-last:border-b"
          >
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: t.avatarColor }}
            >
              {t.avatarText}
            </span>
            <div className="min-w-0 flex-1">
              <Link
                to="/message-board/threads/$id"
                params={{ id: String(t.id) }}
                className="flex items-center gap-1.5 text-sm font-semibold text-forum-link hover:underline"
              >
                {t.pinned && (
                  <span title="Pinned" className="text-gold">
                    📌
                  </span>
                )}
                <span className="truncate">{t.title}</span>
              </Link>
              <p className="text-xs text-muted-foreground">
                {t.author} · started {t.started}
              </p>
            </div>
            <dl className="hidden gap-6 text-center text-xs sm:flex">
              <div>
                <dt className="text-muted-foreground">Replies</dt>
                <dd className="font-semibold">{t.replies}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Views</dt>
                <dd className="font-semibold">{t.views}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-muted-foreground">
        Demo data — this board is populated with simulated threads for the build.
      </p>
    </>
  );
}
