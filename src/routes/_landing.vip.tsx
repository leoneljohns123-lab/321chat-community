import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { StatTile, FeatureCard } from "@/components/landing/StatTile";

export const Route = createFileRoute("/_landing/vip")({
  head: () => ({
    meta: [
      { title: "VIP Membership — 321.Chat" },
      {
        name: "description",
        content:
          "VIP on 321.Chat is $15 once and never expires: custom colors, a VIP badge, faster gold, your own rooms, chat history and more.",
      },
      { property: "og:title", content: "VIP Membership — 321.Chat" },
      {
        property: "og:description",
        content: "$15 once — custom colors, own rooms, chat history, faster gold.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VipPage,
});

const FEATURES = [
  {
    icon: "🌈",
    title: "Name & Text Colors",
    text: "Change your name and text color, including gradient effects — small perk, big difference in a busy room.",
  },
  {
    icon: "👑",
    title: "Head Of The Class",
    text: "VIP names sort to the top of the user list, so everyone sees your fancy colorful name.",
  },
  {
    icon: "✦",
    title: "VIP Badge",
    text: "A badge sits beside your name everywhere it appears: the user list, the rooms and your profile.",
  },
  {
    icon: "🎵",
    title: "Profile Music & Styling",
    text: "Put a track on your profile, style how it looks and use an animated cover image.",
  },
  {
    icon: "😀",
    title: "Special Emojis",
    text: "A rotating collection of extra emoji sets, with new packs added around the holidays.",
  },
  {
    icon: "🎙",
    title: "Audio, Video & Drawings",
    text: "Record your voice, upload video clips and sketch in the drawing tool to drop straight into chat.",
  },
  {
    icon: "▶",
    title: "Video Sharing",
    text: "Search video platforms from inside the chat and share what you find without leaving the room.",
  },
  {
    icon: "❝",
    title: "Quote & Whisper",
    text: "Quote what someone wrote so it's clear who you mean, or send a whisper only one person can see.",
  },
  {
    icon: "🪙",
    title: "Earn & Share Gold",
    text: "Earn gold 50% faster, share it with other users, and spend it on gifts and gallery slots.",
  },
  {
    icon: "🖼",
    title: "Photo Gallery Slots",
    text: "Three gallery slots free with VIP, yours to edit endlessly. More slots cost 1,000 gold each.",
  },
  {
    icon: "🚪",
    title: "Create Your Own Rooms",
    text: "Open private or public temporary rooms. Rooms unused for several hours delete themselves.",
  },
  {
    icon: "🕘",
    title: "Chat History",
    text: "Scroll back through what was posted before you entered the room.",
  },
  {
    icon: "🚫",
    title: "No Text Ads, No Spam Filter",
    text: "Text ads in the rooms switch off for VIP accounts, and the automated spam filter is bypassed.",
  },
];

function VipPage() {
  return (
    <>
      <PageHero
        title="Once a VIP, always a VIP"
        tagline="Pay once. VIP never expires."
      >
        <nav aria-label="Breadcrumb" className="mt-3 text-xs text-white/80">
          <Link to="/" className="underline decoration-white/40 hover:text-white">
            Home
          </Link>{" "}
          › VIP
        </nav>
      </PageHero>
      <PageBody>
        <div className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="inline-grid size-20 place-items-center rounded-2xl bg-vip text-3xl font-black text-white shadow-lg"
          >
            ✦
          </span>
          <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
            VIP Chat Features
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            These are the features a VIP account switches on. Upgrade your own
            account — or a friend's — for <strong>$15</strong>, one payment
            rather than a subscription, and it never expires. Everything below
            turns on the moment payment clears, in every room, on desktop and
            mobile.
          </p>
          <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-4">
            <StatTile stat="$15" caption="Once, and it never expires" />
            <StatTile stat="1.5×" caption="The rate you earn chat gold at" />
          </div>
          <p className="mt-4 inline-flex rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-foreground">
            New: VIP+ — frames, themes, double gold &amp; more
          </p>
        </div>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            ✦ The features
          </p>
          <h3 className="mt-1 text-xl font-bold md:text-2xl">
            Everything VIP turns on
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title}>
                {f.text}
              </FeatureCard>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border bg-section p-6 text-center">
          <h3 className="text-xl font-bold">Becoming VIP</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            <strong>$15, once.</strong> VIP is bought inside the chat window —
            one payment puts every feature on this page on the account, and
            leaves it there. No subscription, nothing to renew or cancel, and you
            can upgrade yourself or somebody else.
          </p>
          <div className="mx-auto mt-5 max-w-md rounded-md border bg-card p-4 shadow-sm">
            <p className="text-sm font-bold">
              Upgrade any user account to VIP instantly
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              One-time fee of $15 = VIP for life
            </p>
            <p className="mt-2 inline-flex rounded border px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
              VISA · MasterCard
            </p>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Checkout is not wired up in this demo build — the pricing and
              feature set shown here are final, payment processing comes with
              the production backend.
            </p>
          </div>
        </div>
      </PageBody>
    </>
  );
}
