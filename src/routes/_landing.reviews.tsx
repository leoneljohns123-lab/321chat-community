import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 321.Chat" },
      {
        name: "description",
        content: "What chatters say about 321.Chat — community, moderation and features.",
      },
      { property: "og:title", content: "Reviews — 321.Chat" },
      { property: "og:description", content: "What chatters say about the community." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ReviewsPage,
});

/* Sample testimonials written for the demo build — not quotes from real users. */
const REVIEWS = [
  {
    name: "Longtime lurker",
    stars: 5,
    text: "Been in and out of the rooms for years. The moderation is fair — you can joke around, but trolls don't last. That's rarer than it should be.",
  },
  {
    name: "NewGrandma42",
    stars: 5,
    text: "The senior room is my coffee break. Easy to use on my phone, no ads popping up mid-sentence, and people actually say good morning back.",
  },
  {
    name: "sk8er_13",
    stars: 4,
    text: "Teen chat moves FAST. Sometimes too fast to read lol. Emojis and GIFs are great though, and the mods keep it clean.",
  },
  {
    name: "Rohit_88",
    stars: 5,
    text: "Work nights, so I'm awake at odd hours. There's always someone from some time zone to talk to. Made actual friends here.",
  },
  {
    name: "quietstorm",
    stars: 4,
    text: "Registered after months as a guest — profiles and private messages were worth it. Gold earning is slow but it's free.",
  },
  {
    name: "PixelFae",
    stars: 5,
    text: "The furry room has a genuinely friendly crowd. Sharing art in the gallery is the best part.",
  },
];

function ReviewsPage() {
  return (
    <>
      <PageHero title="What Chatters Say" tagline="Reviews from the community" />
      <PageBody>
        <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
          Sample testimonials shown for this demo build — they are not quotes
          from real users.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-lg border bg-card p-5 shadow-sm">
              <p className="text-sm text-gold" aria-label={`${r.stars} out of 5 stars`}>
                {"★".repeat(r.stars)}
                <span className="text-muted-foreground/40">{"★".repeat(5 - r.stars)}</span>
              </p>
              <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-foreground">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </PageBody>
    </>
  );
}
