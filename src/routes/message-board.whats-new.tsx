import { createFileRoute, Link } from "@tanstack/react-router";
import { forumThreads } from "@/data/forum-mock";

export const Route = createFileRoute("/message-board/whats-new")({
  head: () => ({
    meta: [
      { title: "What's New — 321.Chat Message Board" },
      { name: "description", content: "The latest posts and threads across the board." },
      { property: "og:title", content: "What's New — 321.Chat" },
      { property: "og:description", content: "The latest posts across the board." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhatsNewPage,
});

function WhatsNewPage() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 rounded border bg-card px-4 py-4">
        <h1 className="text-xl font-semibold">What's New</h1>
        <div className="ml-auto flex gap-2 text-xs">
          <Link
            to="/message-board"
            className="rounded border px-3 py-2 font-semibold hover:bg-accent"
          >
            Forum home
          </Link>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded border bg-card">
        {forumThreads.map((t) => (
          <div key={t.id} className="flex items-center gap-3 px-3 py-3 not-last:border-b">
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
                className="block truncate text-sm font-semibold text-forum-link hover:underline"
              >
                {t.title}
              </Link>
              <p className="text-xs text-muted-foreground">
                {t.author} · {t.started} · {t.replies} replies
              </p>
            </div>
            <p className="hidden max-w-xs truncate text-xs text-muted-foreground sm:block">
              {t.excerpt}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-muted-foreground">
        Demo data — activity shown is simulated for this build.
      </p>
    </>
  );
}
