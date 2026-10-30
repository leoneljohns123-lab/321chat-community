import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/Logo";
import { BackToTop } from "@/components/landing/BackToTop";
import {
  mockMessages,
  mockRooms,
  mockUsers,
  type MockMessage,
} from "@/data/chat-mock";
import { CookieNotice } from "@/components/chat/CookieNotice";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat — 321.Chat" },
      {
        name: "description",
        content:
          "Log in or join as a guest and start chatting instantly. Free moderated chat rooms, nothing to install.",
      },
      { property: "og:title", content: "Chat — 321.Chat" },
      {
        property: "og:description",
        content: "Log in or join as a guest and start chatting instantly.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ChatPage,
});

type Mode = "entry" | "guest" | "register";

const CHAT_FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Rules", to: "/rules" },
  { label: "Contact us", to: "/contact" },
] as const;

function ChatPage() {
  const [mode, setMode] = useState<Mode>("entry");
  const [nickname, setNickname] = useState("");

  if (mode !== "entry") {
    return (
      <ChatRoom
        nickname={nickname || (mode === "guest" ? "Guest" : "")}
        onExit={() => setMode("entry")}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-section">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-lg border bg-card p-8 text-center shadow-md">
          <Logo className="justify-center" />
          <h1 className="mt-6 text-2xl font-bold">Welcome To The Chat</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Our chat community is here for making new friends and sharing a few
            good moments with other people.
          </p>

          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setMode("guest");
            }}
          >
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Pick a nickname"
              maxLength={20}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-center text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Guest login
            </button>
          </form>

          <div className="mt-6 border-t pt-4 text-sm">
            <p className="text-muted-foreground">New here?</p>
            <button
              type="button"
              onClick={() => setMode("register")}
              className="mt-1 font-semibold text-forum-link hover:underline"
            >
              Register now
            </button>
          </div>

          <div className="mt-6 border-t pt-4 text-sm">
            <Link to="/contact" className="text-muted-foreground hover:text-foreground hover:underline">
              Help &amp; Support
            </Link>
          </div>

          <p className="mt-6 rounded-md bg-muted px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
            Demo notice: this chat interface is a reconstruction running on demo
            data. Messages and user lists shown inside are simulated for
            development.
          </p>
        </div>
      </main>
      <ChatFooter />
      <CookieNotice />
      <BackToTop />
    </div>
  );
}

function ChatFooter() {
  return (
    <footer className="border-t bg-card py-5 text-center text-xs text-muted-foreground">
      <p>2026 © 321.Chat</p>
      <nav className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {CHAT_FOOTER_LINKS.map((l) => (
          <Link key={l.label} to={l.to} className="hover:text-foreground hover:underline">
            {l.label}
          </Link>
        ))}
      </nav>
      <p className="mt-2 flex items-center justify-center gap-1">
        <span aria-hidden="true">🌐</span> Language
      </p>
    </footer>
  );
}

function ChatRoom({ nickname, onExit }: { nickname: string; onExit: () => void }) {
  const [roomId, setRoomId] = useState(mockRooms[0].id);
  const [messages, setMessages] = useState<MockMessage[]>(mockMessages);
  const [draft, setDraft] = useState("");
  const [showUsers, setShowUsers] = useState(true);
  const room = mockRooms.find((r) => r.id === roomId)!;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      {
        id: m.length + 1,
        user: nickname || "You",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setDraft("");
  };

  return (
    <div className="flex h-screen flex-col bg-section">
      {/* App bar */}
      <header className="flex items-center gap-3 border-b bg-foreground px-3 py-2 text-background">
        <Logo tone="dark" className="shrink-0" />
        <span className="truncate text-sm font-semibold text-background/90">
          {room.name}
        </span>
        <span className="rounded-full bg-background/10 px-2 py-0.5 text-[11px] text-background/80">
          {room.users} online
        </span>
        <span className="ml-auto hidden text-[11px] text-background/60 sm:block">
          Demo mode — simulated data
        </span>
        <button
          type="button"
          onClick={onExit}
          className="rounded bg-background/10 px-3 py-1.5 text-xs font-semibold text-background transition hover:bg-background/20"
        >
          Leave room
        </button>
      </header>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        {/* Rooms sidebar */}
        <aside className="flex gap-1 overflow-x-auto border-b bg-card p-2 md:w-48 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r">
          <p className="hidden px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground md:block">
            Rooms
          </p>
          {mockRooms.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                setRoomId(r.id);
                setMessages((m) => [
                  {
                    id: 0,
                    user: "system",
                    text: `You joined ${r.name}.`,
                    time: new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                    kind: "system",
                  },
                  ...m,
                ]);
              }}
              className={
                "flex shrink-0 items-center justify-between rounded-md px-2.5 py-2 text-left text-xs font-medium transition " +
                (r.id === roomId
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/75 hover:bg-accent")
              }
            >
              <span className="truncate">{r.name}</span>
              <span className="ml-2 text-[10px] opacity-75">{r.users}</span>
            </button>
          ))}
        </aside>

        {/* Message area */}
        <section className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3" aria-live="polite">
            {messages.map((m) =>
              m.kind === "system" ? (
                <p
                  key={m.id}
                  className="rounded bg-muted px-3 py-1.5 text-center text-[11px] text-muted-foreground"
                >
                  {m.text}
                </p>
              ) : (
                <div key={m.id} className="flex items-start gap-2 text-sm">
                  <span className="min-w-0 max-w-[35%] truncate font-semibold" style={{ color: mockUsers.find((u) => u.name === m.user)?.color ?? "#6c63d2" }}>
                    {m.user}
                    {mockUsers.find((u) => u.name === m.user)?.vip && (
                      <span title="VIP" className="ml-0.5 text-[10px]">
                        ✦
                      </span>
                    )}
                  </span>
                  <span className="text-muted-foreground">{m.text}</span>
                  <span className="ml-auto shrink-0 text-[10px] text-muted-foreground/70">
                    {m.time}
                  </span>
                </div>
              )
            )}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t bg-card p-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Message ${room.name}…`}
              maxLength={500}
              aria-label="Message"
              className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="button"
              aria-label="Add emoji"
              className="rounded-md border px-3 text-base"
              onClick={() => setDraft((d) => d + " 😄")}
            >
              😄
            </button>
            <button
              type="submit"
              className="rounded-md bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:brightness-110"
            >
              Send
            </button>
          </form>
        </section>

        {/* User list */}
        <aside className="border-t bg-card md:w-44 md:border-l md:border-t-0">
          <button
            type="button"
            onClick={() => setShowUsers((s) => !s)}
            className="flex w-full items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
          >
            In the room <span aria-hidden="true">{showUsers ? "▾" : "▸"}</span>
          </button>
          {showUsers && (
            <ul className="max-h-40 overflow-y-auto px-2 pb-2 md:max-h-none">
              {mockUsers.map((u) => (
                <li key={u.name}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs hover:bg-accent"
                    title={`Profile: ${u.name}`}
                  >
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: u.color }}
                    />
                    <span className="truncate font-medium" style={{ color: u.color }}>
                      {u.mod && <span title="Moderator">🛡 </span>}
                      {u.name}
                    </span>
                    {u.vip && <span className="ml-auto text-[10px] text-gold">✦</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
