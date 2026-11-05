import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { InquiryForm } from "@/components/landing/InquiryForm";

export const Route = createFileRoute("/_landing/contact_/administrator")({
  head: () => ({
    meta: [
      { title: "Webmaster Contact — 321.Chat" },
      {
        name: "description",
        content: "For advertisers, professional organizations, law enforcement and webmasters.",
      },
      { property: "og:title", content: "Webmaster Contact — 321.Chat" },
      { property: "og:description", content: "Business and official contact form." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AdministratorPage,
});

function AdministratorPage() {
  return (
    <>
      <PageHero
        title="Webmaster Contact Form"
        tagline="Advertisers, professional organizations, law enforcement and webmasters"
      />
      <PageBody narrow>
        <div className="mb-5 rounded-md border border-primary/40 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> complaints about
          mods, bans &amp; chat drama sent through this form will be ignored —
          use the feedback form instead.
        </div>
        <InquiryForm
          title="Webmaster contact"
          subjectLabel="Who are you?"
          subjects={[
            "Advertiser",
            "Professional organization",
            "Law enforcement",
            "Webmaster / site owner",
            "Other",
          ]}
        />
      </PageBody>
    </>
  );
}
