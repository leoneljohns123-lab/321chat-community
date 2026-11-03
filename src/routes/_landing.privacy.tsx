import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — 321.Chat" },
      { name: "description", content: "How 321.Chat handles data, cookies and your privacy." },
      { property: "og:title", content: "Privacy Policy — 321.Chat" },
      { property: "og:description", content: "How we handle data, cookies and your privacy." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" tagline="Plain-language summary of how we handle data" />
      <PageBody narrow>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">What we collect</h2>
            <p className="mt-2">
              We collect the minimum needed to run the service: the nickname you
              choose, an email address if you register, the messages you post in
              rooms and private messages, and standard technical logs (IP
              address, browser type, timestamps) that keep the service secure.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">How we use it</h2>
            <p className="mt-2">
              To operate the chat, moderate the rooms, prevent abuse, answer
              support requests and — if you opt in — send occasional service
              announcements. We do not sell your personal information, and we do
              not share it with advertisers.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Cookies</h2>
            <p className="mt-2">
              Essential cookies keep you logged in and remember your
              preferences. Analytics cookies, if enabled, are anonymous and used
              only to understand traffic. You can clear or block cookies in your
              browser; the chat may then sign you out between visits.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Moderation & logs</h2>
            <p className="mt-2">
              Chat rooms are public and moderated. Room logs may be reviewed by
              the moderation team when investigating reports, enforcing rules or
              cooperating with law enforcement, which we do where the law
              requires.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Children</h2>
            <p className="mt-2">
              Age-specific rooms exist for younger users, and we moderate them
              closely. Accounts found to be misstating their age are removed. If
              you are a parent with a concern, contact us through the feedback
              form.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Your choices</h2>
            <p className="mt-2">
              You may request deletion of your account and its data at any time
              through the contact page. This demo build does not yet operate a
              live account system; when it does, this policy will be updated
              with the full details of that processing.
            </p>
          </section>
        </div>
      </PageBody>
    </>
  );
}
