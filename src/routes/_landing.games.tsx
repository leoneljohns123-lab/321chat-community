import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { ContentSection } from "@/components/landing/ContentSection";

export const Route = createFileRoute("/_landing/games")({
  head: () => ({
    meta: [
      { title: "Gold Games — 321.Chat" },
      {
        name: "description",
        content:
          "Games you can play with chat gold on 321.Chat — earn gold in the rooms, then take a break with the games.",
      },
      { property: "og:title", content: "Gold Games — 321.Chat" },
      {
        property: "og:description",
        content: "Games you can play with chat gold.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GamesPage,
});

const GAMES = [
  { icon: "🎰", name: "Gold Slots", blurb: "Spin for gold — small bets, occasional jackpots." },
  { icon: "🃏", name: "Blackjack", blurb: "The classic 21, wagered in gold." },
  { icon: "🎲", name: "Dice", blurb: "Guess high or low and double your stake." },
  { icon: "🧩", name: "Trivia", blurb: "Answer questions against the room for gold prizes." },
  { icon: "💎", name: "Gold Rush", blurb: "A quick matching game with gold payouts." },
  { icon: "🎯", name: "Darts", blurb: "Aim well, win gold from the pot." },
  { icon: "🏀", name: "Hoop Shot", blurb: "Time your shots, climb the daily board." },
  { icon: "🎁", name: "Mystery Box", blurb: "Spend gold for a random surprise gift." },
  { icon: "🐸", name: "Lily Pad", blurb: "Hop the frog across the pond for gold." },
];

function GamesPage() {
  return (
    <>
      <PageHero title="Gold Games" tagline="Take a break from talking — nine games, all played with gold" />
      <PageBody>
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Games run on{" "}
          <Link to="/gold" className="text-forum-link hover:underline">
            gold
          </Link>
          , the site's virtual currency. You earn gold free while you're in a
          chat room — 2 gold every six minutes, 3 as a VIP — so the games cost
          you nothing but time.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g) => (
            <div key={g.name} className="rounded-lg border bg-card p-5 shadow-sm">
              <span aria-hidden="true" className="text-3xl">
                {g.icon}
              </span>
              <h2 className="mt-2 font-bold">{g.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
            </div>
          ))}
        </div>
      </PageBody>
      <ContentSection
        title="Earn Gold While You Chat"
        image="features"
        tinted
        paragraphs={[
          "Every six minutes in a room earns registered accounts gold automatically. Stack it up, then spend it on the games, gifts for friends or extra gallery slots.",
        ]}
      />
    </>
  );
}
