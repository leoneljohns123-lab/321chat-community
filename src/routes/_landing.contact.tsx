import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 321.Chat" },
      {
        name: "description",
        content:
          "Reach the 321.Chat team: ban appeals, feedback and the webmaster contact form.",
      },
      { property: "og:title", content: "Contact — 321.Chat" },
      { property: "og:description", content: "Ban appeals, feedback and webmaster contact." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

const FORMS = [
  {
    title: "Appeal a Ban",
    to: "/contact/banned",
    description: "You have been banned and wish to appeal it.",
  },
  {
    title: "Feedback",
    to: "/contact/feedback",
    description:
      "Comments, questions, suggestions, help requests and complaints — including complaints about mods or bans.",
  },
  {
    title: "Webmaster Contact Form",
    to: "/contact/administrator",
    description:
      "For advertisers, professional organizations, law enforcement and webmasters. Complaints about mods, bans and chat drama sent here will be ignored.",
  },
  {
    title: "Moderator Application",
    to: "/contact/moderator-application",
    description: "Apply to join the volunteer moderation team.",
  },
] as const;

function ContactPage() {
  return (
    <>
      <PageHero title="Contact 321.Chat" tagline="Something to tell us? Pick the right form below" />
      <PageBody>
        <p className="text-center text-sm text-muted-foreground">
          We've spent a lot of time answering the most common questions in the{" "}
          <Link to="/rules/faq" className="font-medium text-forum-link hover:underline">
            FAQs
          </Link>{" "}
          — please review them before writing in, so replies stay quick for
          everyone.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FORMS.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group rounded-lg border bg-card p-5 shadow-sm transition hover:border-primary hover:shadow"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <span aria-hidden="true" className="text-primary">
                  ✎
                </span>
                {f.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:underline">
                Open the form →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center text-sm">
          <p className="font-semibold">Not what you needed?</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3 text-forum-link">
            <Link to="/contact/moderator-application" className="hover:underline">
              Apply to be a moderator
            </Link>
            <Link to="/rules" className="hover:underline">
              Chat rules
            </Link>
            <Link to="/rules/faq" className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </PageBody>
    </>
  );
}
