import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageBody } from "@/components/landing/PageChrome";
import { InquiryForm } from "@/components/landing/InquiryForm";

export const Route = createFileRoute("/_landing/contact/banned")({
  head: () => ({
    meta: [
      { title: "Ban Appeal — 321.Chat" },
      { name: "description", content: "Appeal a ban placed on your 321.Chat account." },
      { property: "og:title", content: "Ban Appeal — 321.Chat" },
      { property: "og:description", content: "Appeal a ban placed on your account." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BannedPage,
});

function BannedPage() {
  return (
    <>
      <PageHero title="Ban Appeal" tagline="Tell us your side of it" />
      <PageBody narrow>
        <InquiryForm
          title="Appeal a ban"
          intro="Include the nickname the ban is on, the room, and roughly when it happened. One appeal per ban — sending several won't speed it up."
          fields={[
            { name: "nickname", label: "Banned nickname", required: true },
            { name: "email", label: "Your email address", type: "email", required: true },
            { name: "room", label: "Room you were banned from", required: true },
            { name: "date", label: "Approximate date/time of the ban" },
          ]}
          messageLabel="What happened?"
        />
      </PageBody>
    </>
  );
}
