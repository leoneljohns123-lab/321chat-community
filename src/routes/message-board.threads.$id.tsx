import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { forumThreads } from "@/data/forum-mock";

export const Route = createFileRoute("/message-board/threads/$id")({
  loader: ({ params }) => {
    const thread = forumThreads.find((t) => String(t.id) === params.id);
    if (!thread) notFound();
    return { thread };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.thread?.title ?? "Discussion Thread";
    const excerpt = loaderData?.thread?.excerpt ?? "";
    return {
      meta: [
        { title: `${title} — 321.Chat Message Board` },
        { name: "description", content: "A discussion thread on the 321.Chat message board." },
        { property: "og:title", content: title },
        { property: "og:description", content: excerpt.slice(0, 140) || "A discussion thread on the message board." },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: ThreadPage,
});

function ThreadPage() {
  const thread = Route.useLoaderData().thread;
  if (!thread) notFound();

  return (
    <>
      <div className="rounded border bg-card px-4 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0">
            <h1 className="flex items-center gap-2 text-xl font-semibold">
              {thread.pinned && <span title="Pinned">📌</span>}
              {thread.title}
            </h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Started by {thread.author} · {thread.started} · {thread.replies} replies ·{" "}
              {thread.views} views
            </p>
          </div>
          <button
            type="button"
            className="ml-auto rounded bg-forum-link px-3 py-2 text-xs font-semibold text-white hover:brightness-110"
          >
            ✎ Reply
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[190px_1fr]">
        {thread.posts.map((post, i) => (
          <article
            key={i}
            className="grid gap-0 overflow-hidden rounded border bg-card lg:grid-cols-[190px_1fr]"
          >
            <div className="border-b bg-section/60 p-3 text-center lg:border-b-0 lg:border-r">
              <span
                aria-hidden="true"
                className="mx-auto grid size-10 place-items-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: post.avatarColor }}
              >
                {post.author[0]}
              </span>
              <p className="mt-1.5 text-sm font-semibold">{post.author}</p>
              <p className="text-[10px] text-muted-foreground">
                {post.author === "Staff" ? "Administrator" : "Member"}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground">Posts: {12 + i * 7}</p>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-muted-foreground">
                {post.when} ·{" "}
                {i === 0 && <span className="font-semibold text-forum-link">#1</span>}
                {i > 0 && (
                  <span className="font-semibold text-forum-link">#{i + 1}</span>
                )}
              </p>
              <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                {post.text}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-2 text-[11px] text-muted-foreground">
        Demo data — posts shown are simulated content for this build.
      </p>
    </>
  );
}
