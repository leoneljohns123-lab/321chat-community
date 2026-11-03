import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — 321.Chat" },
      { name: "description", content: "The terms governing use of 321.Chat." },
      { property: "og:title", content: "Terms of Use — 321.Chat" },
      { property: "og:description", content: "The terms governing use of the service." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" tagline="The short version: be decent, follow the rules" />
      <PageBody narrow>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">1. The service</h2>
            <p className="mt-2">
              321.Chat provides free, moderated chat rooms accessible from a web
              browser. The service is provided as-is, and we may change, suspend
              or discontinue any part of it at any time.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">2. Your account</h2>
            <p className="mt-2">
              You are responsible for activity on your account and for keeping
              your credentials private. Guest access is provided on the same
              terms. Accounts may be suspended or removed for breaking the{" "}
              <a href="/rules" className="text-forum-link hover:underline">chat rules</a>.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">3. Acceptable use</h2>
            <p className="mt-2">
              You agree not to post unlawful, hateful, harassing or sexually
              explicit content, not to impersonate others, not to spam or
              disrupt the rooms, and not to attempt to attack or exploit the
              service. The chat rules form part of these terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">4. Content you post</h2>
            <p className="mt-2">
              You keep ownership of what you post and grant us the license
              needed to display it within the service. Rooms are public;
              anything you post can be read by everyone present.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">5. Paid features</h2>
            <p className="mt-2">
              The optional VIP upgrade is a one-time purchase that does not
              expire. Purchases are handled by a payment processor; this demo
              build does not yet process payments.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">6. Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, we are not liable for
              indirect or consequential loss arising from use of the service, or
              for content posted by other users.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">7. Changes</h2>
            <p className="mt-2">
              These terms may be updated; continued use after a change means you
              accept it. Material changes will be announced in the rooms or on
              the site.
            </p>
          </section>
        </div>
      </PageBody>
    </>
  );
}
