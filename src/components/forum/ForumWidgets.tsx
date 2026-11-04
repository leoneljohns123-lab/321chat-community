import { createFileRoute, Link } from "@tanstack/react-router";

/** The green "Post thread…" button — opens a notice in the demo build. */
export function PostThreadButton() {
  return (
    <Link
      to="/message-board/register"
      className="rounded bg-forum-green px-3 py-2 text-xs font-semibold text-white hover:brightness-110"
      title="Posting requires a registered account"
    >
      ✎ Post thread…
    </Link>
  );
}
