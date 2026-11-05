import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { FaqBlock } from "@/components/landing/StatTile";

export const Route = createFileRoute("/_landing/rules_/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — 321.Chat" },
      {
        name: "description",
        content:
          "Answers to the questions 321.Chat gets asked most: accounts, gold, VIP, moderation, bans and technical problems.",
      },
      { property: "og:title", content: "Frequently Asked Questions — 321.Chat" },
      {
        property: "og:description",
        content: "Answers about accounts, gold, VIP, moderation and bans.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FaqPage,
});

const FAQS: { icon: string; q: string; a: React.ReactNode; id: string }[] = [
  {
    id: "what-is",
    icon: "💬",
    q: "What is 321.Chat?",
    a: (
      <>
        A free online chat community that has been running group chat rooms since
        2002. Rooms work in the browser on phones, tablets and desktops, walk-in
        guest access needs no account, and registering — also free — adds
        profiles, private messages, photo galleries and gold.
      </>
    ),
  },
  {
    id: "cost",
    icon: "🆓",
    q: "Does it cost anything?",
    a: (
      <>
        Chatting is free, always. The only paid item on the whole site is the{" "}
        <Link to="/vip" className="text-forum-link hover:underline">
          VIP upgrade
        </Link>
        , a one-time $15 that never expires — and even that is optional.{" "}
        <Link to="/gold" className="text-forum-link hover:underline">
          Gold
        </Link>{" "}
        is earned free just by being in a room.
      </>
    ),
  },
  {
    id: "guest",
    icon: "👤",
    q: "Can I chat without registering?",
    a: "Yes. Pick a nickname on the chat screen and join as a guest. Registering unlocks private messages, profiles and galleries, but the rooms themselves are open to guests.",
  },
  {
    id: "install",
    icon: "📱",
    q: "Do I need to install anything?",
    a: "No. The chat runs in the browser. On phones you can add it to your home screen from the share menu and it opens like an app.",
  },
  {
    id: "gold",
    icon: "🪙",
    q: "What is gold and how do I earn it?",
    a: (
      <>
        Gold is the site's virtual currency. You earn it automatically while
        you're in a room — registered accounts only — and spend it on gifts,
        gallery slots, a username change and the games. Details on the{" "}
        <Link to="/gold" className="text-forum-link hover:underline">
          gold page
        </Link>
        .
      </>
    ),
  },
  {
    id: "vip",
    icon: "✦",
    q: "What does VIP add?",
    a: (
      <>
        Custom name and text colors, a VIP badge, faster gold earning, three
        photo slots, your own rooms, chat history and more — all for a single
        $15 payment. The full list is on the{" "}
        <Link to="/vip" className="text-forum-link hover:underline">
          VIP page
        </Link>
        .
      </>
    ),
  },
  {
    id: "mods",
    icon: "🛡",
    q: "What do moderators do?",
    a: "They keep the rooms safe and friendly: stepping in on rule-breaking, helping settle disputes and answering questions when they can. They're volunteers, so please be patient with them.",
  },
  {
    id: "banned",
    icon: "🚫",
    q: "I've been banned. What now?",
    a: (
      <>
        If you believe a ban was wrong or you're ready to come back and follow
        the rules, use the{" "}
        <Link to="/contact/banned" className="text-forum-link hover:underline">
          ban appeal form
        </Link>
        . Repeated violations can make a ban permanent.
      </>
    ),
  },
  {
    id: "complaint",
    icon: "📣",
    q: "How do I complain about a moderator or another user?",
    a: (
      <>
        Use the{" "}
        <Link to="/contact/feedback" className="text-forum-link hover:underline">
          feedback form
        </Link>{" "}
        and include room names, times and nicknames — specifics make a
        complaint actionable. Please don't send moderator complaints through the
        webmaster form; they won't reach the right people.
      </>
    ),
  },
  {
    id: "pm",
    icon: "✉",
    q: "How do private messages work?",
    a: "Open a chatter's profile and choose message. If you don't want messages from someone, ignore them — and if a PM crosses a line, report it.",
  },
  {
    id: "rooms",
    icon: "🚪",
    q: "Can I make my own room?",
    a: "VIP members can create temporary public or private rooms. Rooms unused for several hours are removed automatically.",
  },
  {
    id: "age",
    icon: "🎂",
    q: "What ages are the rooms for?",
    a: "Each room shows its age range on its page — from the closely moderated kids' room through teen, adult and senior rooms. Use the one that matches you; accounts outside a room's range are moved along.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" tagline="The answers we give most often" />
      <PageBody narrow>
        <div className="rounded-lg border bg-card px-5 py-2 shadow-sm">
          {FAQS.map((f) => (
            <FaqBlock key={f.id} id={f.id} icon={f.icon} question={f.q}>
              {f.a}
            </FaqBlock>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not covered here?{" "}
          <Link to="/contact" className="font-medium text-forum-link hover:underline">
            Contact us
          </Link>{" "}
          — and please check this page first, it keeps replies quick for everyone.
        </p>
      </PageBody>
    </>
  );
}
