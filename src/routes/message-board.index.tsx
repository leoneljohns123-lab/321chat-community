import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { forumCategories, forumMembers, mediaGallery } from "@/data/forum-mock";
import { PostThreadButton } from "@/components/forum/ForumWidgets";

export const Route = createFileRoute("/_forum/")({
  head: () => ({
    meta: [
      { title: "Free Chat Forum / Message Board — 321.Chat" },
      {
        name: "description",
        content:
          "The 321.Chat message board: introductions, general discussion, room feedback, gold & VIP talk and support.",
      },
      { property: "og:title", content: "Free Chat Forum / Message Board — 321.Chat" },
      {
        property: "og:description",
        content: "Introductions, discussion, room feedback and support — join the board.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ForumIndex,
});

function ForumIndex() {
  const [noticeDismissed, setNoticeDismissed] = useState(false);

  return (
    <>
      {/* Registration notice */}
      <div className="rounded border border-gold/60 bg-gold/10 p-4 text-sm">
        <p className="leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Register a free account</strong> to
          join in: post your own topics and replies, and connect with other
          members through a private inbox. Using your chat room username is
          recommended so your{" "}
          <Link to="/vip" className="text-forum-link hover:underline">
            VIP
          </Link>{" "}
          status carries over.
        </p>
        <p className="mt-2 text-xs italic leading-relaxed text-muted-foreground">
          Important! You will need to confirm your email address to register and
          to recover a forgotten password. Staff cannot assist with password
          recovery in any way. Allow a little time for the email to arrive, and
          check spam if it doesn't show up.
        </p>
      </div>

      {/* Live chat notice */}
      {!noticeDismissed && (
        <div className="mt-3 flex items-center gap-3 rounded bg-forum-header px-4 py-3 text-sm text-white">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded bg-white/10 text-base"
          >
            💬
          </span>
          <p className="min-w-0 flex-1">
            Don't forget our{" "}
            <Link to="/chat" className="font-semibold text-white underline decoration-white/40">
              live chat rooms
            </Link>{" "}
            — many to choose from, open to guests.
          </p>
          <button
            type="button"
            aria-label="Dismiss notice"
            onClick={() => setNoticeDismissed(true)}
            className="text-white/60 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Title row */}
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded border bg-card px-4 py-4">
        <h1 className="text-xl font-semibold">Free Chat Forum / Message Board</h1>
        <div className="ml-auto flex gap-2">
          <Link
            to="/message-board/whats-new"
            className="rounded bg-forum-link px-3 py-2 text-xs font-semibold text-white hover:brightness-110"
          >
            ⚡ New posts
          </Link>
          <PostThreadButton />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
        <div>
          {/* Media gallery */}
          <div className="rounded border bg-card p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-forum-link">
              🖼 Check out the Media Gallery
            </h2>
            <div className="mt-3 grid grid-cols-4 gap-1.5 sm:grid-cols-8">
              {mediaGallery.map((m) => (
                <div
                  key={m.title}
                  title={m.title}
                  className="aspect-square rounded"
                  style={{
                    background: `linear-gradient(135deg, ${m.tone}, ${m.tone}88)`,
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Placeholder tiles — the live gallery is a registered-member feature.
            </p>
          </div>

          {/* Category list */}
          <h2 className="mt-6 px-1 text-lg font-bold text-forum-accent">
            321.Chat Message Boards
          </h2>
          <div className="mt-2 overflow-hidden rounded border bg-card">
            {forumCategories.map((c) => (
              <div
                key={c.id}
                className="grid items-center gap-3 px-3 py-3 not-last:border-b sm:grid-cols-[1fr_auto_190px]"
              >
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 size-8 shrink-0 rounded"
                    style={{ backgroundColor: c.accent }}
                  />
                  <div className="min-w-0">
                    <Link
                      to="/message-board/forums/$category"
                      params={{ category: c.id }}
                      className="text-sm font-semibold text-forum-link hover:underline"
                    >
                      {c.name}
                    </Link>
                    <p className="mt-0.5 hidden text-xs text-muted-foreground sm:line-clamp-2">
                      {c.description}
                    </p>
                  </div>
                </div>
                <dl className="hidden gap-6 text-center sm:flex">
                  <div>
                    <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Threads
                    </dt>
                    <dd className="text-sm font-semibold">{c.threads}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Messages
                    </dt>
                    <dd className="text-sm font-semibold">
                      {c.messages >= 1000
                        ? `${(c.messages / 1000).toFixed(1)}K`
                        : c.messages}
                    </dd>
                  </div>
                </dl>
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: c.latest.avatarColor }}
                  >
                    {c.latest.avatarText}
                  </span>
                  <div className="min-w-0 text-xs">
                    <Link
                      to="/message-board/threads/$id"
                      params={{ id: "1" }}
                      className="block truncate font-medium text-forum-link hover:underline"
                    >
                      {c.latest.title}
                    </Link>
                    <p className="text-muted-foreground">
                      {c.latest.when} · {c.latest.by}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Demo data — thread and message counts are simulated for this build.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded border bg-forum-accent/90 p-3 text-center text-xs font-bold text-white">
            Chat VIP gets forum VIP!
            <p className="mt-1 text-[11px] font-normal text-white/85">
              Upgrade your account or a friend's for extra perks everywhere.
            </p>
            <Link
              to="/vip"
              className="mt-2 inline-block rounded bg-white/15 px-3 py-1 text-[11px] font-semibold hover:bg-white/25"
            >
              See VIP →
            </Link>
          </div>

          <div className="rounded border bg-card p-3">
            <h3 className="text-xs font-bold text-forum-link">
              👥 Members recently online
            </h3>
            <div className="mt-2 flex flex-wrap gap-1">
              {forumMembers.map((m) => (
                <Link
                  key={m.name}
                  to="/message-board/members"
                  title={m.name}
                  className="grid size-7 place-items-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: m.color }}
                >
                  {m.name[0]}
                </Link>
              ))}
            </div>
            <p className="mt-2 border-t pt-2 text-xs text-muted-foreground">Total: 44</p>
          </div>

          <div className="rounded border bg-card p-3">
            <h3 className="text-xs font-bold text-forum-link">🟢 Members online</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Green Eyes, <span className="text-forum-accent">Faceaux</span>
            </p>
            <p className="mt-2 border-t pt-2 text-xs text-muted-foreground">
              Total: 421 (members: 3, guests: 418)
            </p>
          </div>

          <div className="rounded border bg-card p-3">
            <h3 className="text-xs font-bold text-forum-link">🔥 Trending content</h3>
            <ul className="mt-2 space-y-2 text-xs">
              <li className="flex gap-2">
                <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-full bg-foreground/70" />
                <Link
                  to="/message-board/threads/$id"
                  params={{ id: "3" }}
                  className="text-forum-link hover:underline"
                >
                  Thread 'Game add on idea'
                </Link>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-full bg-foreground/70" />
                <Link
                  to="/message-board/threads/$id"
                  params={{ id: "2" }}
                  className="text-forum-link hover:underline"
                >
                  Thread 'Senior chat room'
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
