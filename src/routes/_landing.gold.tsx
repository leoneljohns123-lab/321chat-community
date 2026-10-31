import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { StatTile, FaqBlock } from "@/components/landing/StatTile";

export const Route = createFileRoute("/_landing/gold")({
  head: () => ({
    meta: [
      { title: "Chat Gold & Gifts — 321.Chat" },
      {
        name: "description",
        content:
          "Gold is 321.Chat's virtual currency — earned free in any room, spent on gifts, gallery slots, games and more.",
      },
      { property: "og:title", content: "Chat Gold & Gifts — 321.Chat" },
      {
        property: "og:description",
        content: "Earned free in any room — spent on gifts, galleries and games.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GoldPage,
});

function GoldPage() {
  return (
    <>
      <PageHero
        title="Chat Room Gold & Gifts"
        tagline="Frequently asked questions"
      />
      <PageBody>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Gold is the chat's own currency. <strong className="text-foreground">You earn it free, just for being in a chat room</strong>,
            you can top it up if you want to, and you spend it on gifts, the
            games and photo gallery slots. Here is how it all fits together:
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatTile stat="2 gold" caption="Every six minutes — free, in any room" />
            <StatTile stat="3 gold" caption="Same six minutes, once you're VIP" />
            <StatTile stat="103" caption="Gifts to send, from 50 to 50,000 gold" />
            <StatTile stat="$10" caption="Smallest gold pack — 1,000 gold" />
          </div>

          <div className="mt-8 rounded-lg border bg-card px-5 py-2 shadow-sm">
            <FaqBlock icon="🪙" question="What is gold and what is it used for?">
              Gold is a virtual currency. Spend it on{" "}
              <a href="#gifts" className="text-forum-link hover:underline">
                virtual gifts
              </a>{" "}
              for other chatters, extra photo gallery slots, a username change or{" "}
              <Link to="/games" className="text-forum-link hover:underline">
                the games
              </Link>
              .
            </FaqBlock>
            <FaqBlock icon="⚡" question="How do you earn gold?">
              By being in a room. Every six minutes your account earns 2 gold —
              or 3 if you're{" "}
              <Link to="/vip" className="text-forum-link hover:underline">
                VIP
              </Link>
              . You need a registered account; guests don't collect it.
            </FaqBlock>
            <FaqBlock icon="💳" question="How do you buy gold?">
              Open the three-dash menu at the top left of the chat window and
              choose Buy Gold. Gold packs start at $10 for 1,000 gold.
            </FaqBlock>
            <FaqBlock id="gifts" icon="🎁" question="How do you give a gift or share gold?">
              Open another chatter's profile and use the three-dash menu at the
              top right to send a gift or share gold. Sharing gold is a VIP
              feature.
            </FaqBlock>
            <FaqBlock icon="📦" question="How do you view someone's gift collection?">
              Open their profile, then the gifts tab — collections are visible
              to everyone.
            </FaqBlock>
            <FaqBlock icon="🙋" question="Can you gift yourself?">
              Not right now. The common workaround: a second account buys or
              receives the gold, then gifts your main account what you want.
            </FaqBlock>
            <FaqBlock icon="⏱" question="When will I get my gold?">
              Purchases inside the chat are instant — as soon as the card is
              processed the gold lands on the account.
            </FaqBlock>
          </div>
        </div>
      </PageBody>
    </>
  );
}
