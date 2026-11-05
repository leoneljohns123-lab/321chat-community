import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { InquiryForm } from "@/components/landing/InquiryForm";

export const Route = createFileRoute("/_landing/contact_/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback & Complaints — 321.Chat" },
      {
        name: "description",
        content: "Comments, questions, suggestions and complaints for the 321.Chat team.",
      },
      { property: "og:title", content: "Feedback & Complaints — 321.Chat" },
      { property: "og:description", content: "Comments, suggestions and complaints." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  return (
    <>
      <PageHero title="Feedback" tagline="Comments, questions, suggestions and complaints" />
      <PageBody narrow>
        <InquiryForm
          title="Feedback & complaints"
          intro="Complaints about moderators, bans or chat drama belong here too — the team reads everything. Include rooms, times and nicknames so we can look into it."
          subjectLabel="What is it about?"
          subjects={[
            "A question or help request",
            "A suggestion",
            "Complaint about a user",
            "Complaint about a moderator",
            "Appealing a ban (see: Ban Appeal form)",
            "Something else",
          ]}
        />
      </PageBody>
    </>
  );
}
