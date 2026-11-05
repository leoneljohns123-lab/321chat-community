import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { InquiryForm } from "@/components/landing/InquiryForm";

export const Route = createFileRoute("/_landing/contact/moderator-application")({
  head: () => ({
    meta: [
      { title: "Moderator Application — 321.Chat" },
      {
        name: "description",
        content: "Apply to volunteer as a chat moderator on 321.Chat.",
      },
      { property: "og:title", content: "Moderator Application — 321.Chat" },
      { property: "og:description", content: "Apply to volunteer as a chat moderator." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ModeratorApplicationPage,
});

function ModeratorApplicationPage() {
  return (
    <>
      <PageHero
        title="Apply to be a Moderator"
        tagline="Volunteer role — even-handed, thick-skinned and fair"
      />
      <PageBody narrow>
        <InquiryForm
          title="Moderator application"
          intro="Tell us who you are in the chat, how long you've been around, and why you'd make a good moderator. Rough availability helps too."
          fields={[
            { name: "nickname", label: "Your chat nickname", required: true },
            { name: "email", label: "Your email address", type: "email", required: true },
            { name: "experience", label: "How long have you used 321.Chat?" },
            { name: "hours", label: "Roughly when are you usually online?" },
          ]}
          messageLabel="Why you, and anything we should know?"
        />
      </PageBody>
    </>
  );
}
