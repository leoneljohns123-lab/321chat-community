import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/rules")({
  head: () => ({
    meta: [
      { title: "Chat Rules — 321.Chat" },
      {
        name: "description",
        content:
          "The rules that apply across every 321.Chat room: conduct, privacy, reporting and how moderation works.",
      },
      { property: "og:title", content: "Chat Rules — 321.Chat" },
      {
        property: "og:description",
        content: "The rules that apply across every 321.Chat room.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RulesPage,
});

const RULES: { heading: string; items: { label?: string; text: string }[] }[] = [
  {
    heading: "Room Culture",
    items: [
      {
        label: "Be decent",
        text: "Treat people politely. Typing in all caps reads as shouting, so don't.",
      },
      {
        label: "Respect PM space",
        text: "If someone doesn't answer your private message, leave them be.",
      },
      {
        label: "Try ignore first",
        text: "Someone bothering you? Use the ignore button before calling for a moderator.",
      },
      {
        label: "Follow mod instructions",
        text: "When a moderator asks you to change your behavior, name or posting habits, do it straight away. Arguing the decision can earn a ban.",
      },
      {
        label: "Report what's illegal",
        text: "Report illegal content you see or receive — including in private messages — and anyone you believe is under a room's age limit. Not reporting can itself cost you the account.",
      },
      {
        label: "No gold farming",
        text: "Running multiple accounts to accumulate chat gold counts as exploitation and will get actioned.",
      },
    ],
  },
  {
    heading: "Conduct Across the Site",
    items: [
      {
        label: "Moderators keep the site safe",
        text: "Cooperate with them; they're here for everyone's benefit.",
      },
      { label: "No trolling or flooding", text: "Deliberate disruption gets removed." },
      {
        label: "No hacking or exploiting",
        text: "Attacking the service or its users, by technical means or otherwise, is out.",
      },
      {
        label: "No offensive language",
        text: "Keep it clean enough for the youngest room on the site.",
      },
      {
        label: "No impersonation",
        text: "Don't pose as staff, moderators or other members.",
      },
      {
        label: "No harassment",
        text: "Targeting anyone after they've asked you to stop is a ban.",
      },
      {
        label: "No spam",
        text: "Unsolicited links, repeated posting or advertising without permission.",
      },
      {
        label: "No illegal content or links",
        text: "Anything unlawful has no place here, in rooms or in private messages.",
      },
      {
        label: "No sharing personal details",
        text: "Yours or other people's — full names, addresses, phone numbers and the like stay out of open rooms.",
      },
      {
        label: "Age honesty",
        text: "Use the room that matches your age. Underage and overage accounts are moved or removed.",
      },
      {
        label: "No sexual content involving minors — ever",
        text: "This is reported to the authorities without exception, alongside anything that endangers a child.",
      },
    ],
  },
  {
    heading: "Privacy & Safety",
    items: [
      {
        label: "Protect your identity",
        text: "Use a nickname, not your real name. Photos you post can identify you — think before you share.",
      },
      {
        label: "Protect other people",
        text: "Never post someone else's pictures or information without their consent.",
      },
      {
        label: "Trust your gut",
        text: "If a conversation feels wrong, ignore the person and report them. Staff would always rather look at a false alarm than miss a real one.",
      },
    ],
  },
  {
    heading: "Moderation & Appeals",
    items: [
      {
        label: "No warning owed",
        text: "Moderators may act without warning. You're not entitled to one before action is taken on your account.",
      },
      {
        label: "Moderator discretion",
        text: "This list doesn't cover everything. Action can be taken over anything harmful, disruptive or unsafe, even if it isn't written here.",
      },
      {
        label: "Appeals",
        text: "Banned? You can submit the ban appeal form — though repeated violations can make the ban permanent.",
      },
    ],
  },
];

function RulesPage() {
  return (
    <>
      <PageHero
        title="Chat Rules"
        tagline="Please read through all our rules"
      />
      <PageBody narrow>
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a question first? Check the{" "}
            <Link to="/rules/faq" className="font-medium text-forum-link hover:underline">
              FAQ
            </Link>{" "}
            before contacting us — it answers most of what we get asked. These
            rules cover the situations we meet most often, not every one, and
            moderators may take whatever action keeps the site safe and
            enjoyable.
          </p>
        </div>

        {RULES.map((group) => (
          <section key={group.heading} className="mt-8">
            <h2 className="text-xl font-bold">{group.heading}</h2>
            <ol className="mt-3 space-y-3">
              {group.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-bold text-primary"
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.label && (
                      <strong className="font-semibold text-foreground">
                        {item.label}:{" "}
                      </strong>
                    )}
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="mt-10 rounded-lg border bg-section p-5 text-center">
          <p className="text-sm font-semibold">If you have been banned</p>
          <p className="mt-1 text-sm text-muted-foreground">
            You may submit a ban appeal — but repeated violations can mean the
            ban is permanent.
          </p>
          <Link
            to="/contact/banned"
            className="mt-4 inline-flex rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Ban appeal form
          </Link>
        </div>
      </PageBody>
    </>
  );
}
