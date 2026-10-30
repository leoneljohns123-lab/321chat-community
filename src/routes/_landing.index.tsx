import { createFileRoute } from "@tanstack/react-router";
import { RoomHero } from "@/components/landing/RoomHero";
import { RoomGrid } from "@/components/landing/RoomGrid";
import { ContentSection } from "@/components/landing/ContentSection";

export const Route = createFileRoute("/_landing/")({
  head: () => ({
    meta: [
      { title: "321.Chat — Free Chat Rooms" },
      {
        name: "description",
        content:
          "Join free, moderated chat rooms for teens, adults, seniors and special-interest communities. Guest access, nothing to install — pick a room and start talking.",
      },
      { property: "og:title", content: "321.Chat — Free Chat Rooms" },
      {
        property: "og:description",
        content:
          "Free, moderated chat rooms for every age and interest — open as a guest in your browser, on phone, tablet or desktop.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <RoomHero
        tagline="Open to everyone, on every device"
        ctaLabel="Start Chatting!"
      />

      {/* Intro + room picker */}
      <section className="bg-section">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              A Community That Sticks Around
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Running since 2002, 321.Chat is one of the web's longest-lived chat
              communities. Every room works in the browser on phones, tablets and
              desktops, and every feature in the rooms is free — walk in as a
              guest, with no sign-up and nothing to install.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Moderators keep the rooms lively without leaning on the ban hammer.
              People can joke, argue and be themselves, and a mod steps in only
              when someone set out to spoil it. That balance is why so many
              chatters have stayed for years.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Most visitors come from the United States, with the United Kingdom,
              Canada, India, Australia and Germany close behind — chatters join
              from over a hundred countries, so a room is busy at whatever hour it
              is where you are.
            </p>
          </div>
          <RoomGrid title="Which Chat Room Would You Like To Enter?" />
        </div>
      </section>

      <ContentSection
        title="Moderated With an Even Hand"
        image="moderation"
        paragraphs={[
          "A good room needs moderation that trusts people. Here you can speak freely, disagree, joke and be yourself — and moderators get involved when a troll shows up, not the moment someone says something unpopular.",
          "That balance is deliberate, and it is the first thing longtime chatters say they cannot find anywhere else. The chat rules spell out exactly where the line sits, and if you think a moderator got it wrong, tell us.",
        ]}
      />

      <ContentSection
        title="Talk to People Around The World"
        image="world"
        side="right"
        tinted
        paragraphs={[
          "The heart of the community is in the United States, but chatters join from more than a hundred countries — the United Kingdom, Canada, India, Australia and Germany chief among them.",
          "That worldwide spread means the rooms rarely go quiet. Whenever you log in, somebody somewhere is awake and typing.",
        ]}
      />

      <ContentSection
        title="Chat Software With The Best Features"
        image="features"
        paragraphs={[
          "Walk in as a guest and start typing — no sign-up, no email, nothing to install. Register for free and you also get private messages, photo posting, a profile and gold.",
          "Only a handful of extras sit behind VIP, a one-time $15 upgrade: creating your own rooms, chat history and a few styling perks. Everything the rooms are actually for stays free, and gold is earned simply by being in a room.",
        ]}
      />

      <ContentSection
        title="Make Friends Who Share Your Interests"
        image="interests"
        side="right"
        tinted
        paragraphs={[
          "Gamer or foodie, runner or photographer — you will find people here who are into the same things and happy to talk about them.",
          "Rooms exist for age groups, interests and communities, and VIP members can open their own. When a conversation outlives a room, the message board is where it continues.",
        ]}
      />

      <ContentSection
        title="Built for the Phone in Your Hand"
        image="phone"
        paragraphs={[
          "Most chatters are on a phone, so the rooms are built for a phone first — not a desktop site squeezed down to fit.",
          "Nothing to install: walk in as a guest and start typing, or register free for photos, private messages and a profile. Everything works in the browser exactly as it does on a desktop, and you can add 321.Chat to your home screen from the share menu and open it like an app.",
        ]}
      />
    </>
  );
}
