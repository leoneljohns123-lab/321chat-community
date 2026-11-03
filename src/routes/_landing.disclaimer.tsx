import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";

export const Route = createFileRoute("/_landing/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — 321.Chat" },
      { name: "description", content: "Important notices about content and conduct on 321.Chat." },
      { property: "og:title", content: "Disclaimer — 321.Chat" },
      { property: "og:description", content: "Important notices about content and conduct." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" tagline="What to know before you log in" />
      <PageBody narrow>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground">User-generated content</h2>
            <p className="mt-2">
              Rooms contain real-time messages from other users. We moderate,
              but we cannot review every message the moment it is posted, and we
              do not endorse anything our users say. Report content that breaks
              the rules rather than relying on automated filtering.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Younger users</h2>
            <p className="mt-2">
              Age-specific rooms are closely moderated by volunteers, but no
              chat service can guarantee that nothing inappropriate will ever
              appear. Parents and guardians decide whether their children use
              the service, and we encourage them to stay involved. Suspected
              child-safety issues are reported to the authorities without
              exception.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">External links</h2>
            <p className="mt-2">
              Links posted in rooms lead to places we don't control. Follow them
              at your own judgment — and never share login details or personal
              information on other sites.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-foreground">Virtual items</h2>
            <p className="mt-2">
              Gold, gifts and gallery slots are entertainment features with no
              real-world value and cannot be exchanged for money.
            </p>
          </section>
        </div>
      </PageBody>
    </>
  );
}
