import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { ContentSection } from "@/components/landing/ContentSection";

export const Route = createFileRoute("/_landing/about")({
  head: () => ({
    meta: [
      { title: "About — 321.Chat" },
      { name: "description", content: "The story behind 321.Chat, a free moderated chat community." },
      { property: "og:title", content: "About — 321.Chat" },
      { property: "og:description", content: "The story behind the community." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="About 321.Chat" tagline="A place to talk, kept friendly on purpose" />
      <PageBody narrow>
        <p className="text-sm leading-relaxed text-muted-foreground">
          321.Chat is a free, browser-based chat community. There is nothing to
          download and no account needed to join a room — pick a nickname, pick
          a room, and start talking. Registering, also free, adds profiles,
          private messages, photo galleries and gold.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The rooms are moderated by a volunteer team with a light touch:
          conversation is trusted, and moderation steps in when someone set out
          to ruin it for everyone else. Age-specific rooms keep communities
          comfortable, and the same rules run across every room on the site.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The only paid feature on the whole site is an optional VIP upgrade — a
          one-time $15 that never expires. Everything the rooms are for is free,
          and we intend to keep it that way.
        </p>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          This site is an independent platform; it is not affiliated with any
          similarly named service.
        </p>
      </PageBody>
      <ContentSection
        title="Come Say Hello"
        image="moderation"
        tinted
        paragraphs={[
          "The rooms are open right now — guests are always welcome.",
        ]}
      />
    </>
  );
}
