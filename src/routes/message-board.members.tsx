import { createFileRoute, Link } from "@tanstack/react-router";
import { forumMembers } from "@/data/forum-mock";

export const Route = createFileRoute("/message-board/members")({
  head: () => ({
    meta: [
      { title: "Members — 321.Chat Message Board" },
      { name: "description", content: "The member list of the 321.Chat message board." },
      { property: "og:title", content: "Members — 321.Chat Message Board" },
      { property: "og:description", content: "The board's member list." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 rounded border bg-card px-4 py-4">
        <h1 className="text-xl font-semibold">Members</h1>
        <Link
          to="/message-board"
          className="ml-auto rounded border px-3 py-2 text-xs font-semibold hover:bg-accent"
        >
          Forum home
        </Link>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {forumMembers.map((m) => (
          <div key={m.name} className="flex items-center gap-3 rounded border bg-card p-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: m.color }}
            >
              {m.name[0]}
            </span>
            <div>
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-muted-foreground">
                {m.online ? (
                  <span className="text-forum-green">● Online now</span>
                ) : (
                  "Member"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        Demo data — the live member list is a registered-member feature.
      </p>
    </>
  );
}
