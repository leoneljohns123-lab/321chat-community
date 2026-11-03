import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { ContentSection } from "@/components/landing/ContentSection";

export const Route = createFileRoute("/_landing/guide")({
  head: () => ({
    meta: [
      { title: "Chat Guide — 321.Chat" },
      {
        name: "description",
        content:
          "New to 321.Chat? This short guide walks through joining a room, chatting, profiles, gold and staying safe.",
      },
      { property: "og:title", content: "Chat Guide — 321.Chat" },
      {
        property: "og:description",
        content: "How to join a room, chat, set up a profile and stay safe.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GuidePage,
});

const STEPS = [
  {
    icon: "1️⃣",
    title: "Pick a room",
    text: "Choose the room that fits you — by age, by interest, or just the general free-for-all. Each room's page tells you who it's for.",
  },
  {
    icon: "2️⃣",
    title: "Enter as a guest or register",
    text: "Guests pick a nickname and jump straight in. Registering (free) keeps your nickname, adds private messages, a profile, galleries and gold.",
  },
  {
    icon: "3️⃣",
    title: "Say hello",
    text: "Type in the box at the bottom and press send. Emojis, fonts and colors are one click away. Set a mood so people know how your day is going.",
  },
  {
    icon: "4️⃣",
    title: "Make it yours",
    text: "Registered members can post photos, add friends, decorate their profile and earn gold just by hanging around.",
  },
];

function GuidePage() {
  return (
    <>
      <PageHero title="Chat Guide" tagline="From first click to regular, in four steps" />
      <PageBody narrow>
        <div className="grid gap-4">
          {STEPS.map((s) => (
            <div key={s.title} className="flex gap-4 rounded-lg border bg-card p-4 shadow-sm">
              <span aria-hidden="true" className="text-2xl">
                {s.icon}
              </span>
              <div>
                <h2 className="font-bold">{s.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold">Staying safe</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>• Use a nickname, never your real name, and keep personal details out of open rooms.</li>
          <li>• Social handles go in private messages, if anywhere — not the main room.</li>
          <li>• Bothered by someone? Ignore them, then report if it continues.</li>
          <li>• Read the <a href="/rules" className="text-forum-link hover:underline">chat rules</a> — they're short and enforced.</li>
        </ul>
      </PageBody>
      <ContentSection
        title="Ready to Try It?"
        image="phone"
        tinted
        paragraphs={[
          "Pick a room on the home page and you're talking within seconds — no download, no sign-up, on any device you have.",
        ]}
      />
    </>
  );
}
