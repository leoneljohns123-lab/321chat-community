import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { RoomHero } from "@/components/landing/RoomHero";
import { RoomGrid } from "@/components/landing/RoomGrid";
import { ContentSection } from "@/components/landing/ContentSection";
import { rooms, roomBySlug, type Room } from "@/data/rooms";

export const Route = createFileRoute("/_landing/rooms/$slug")({
  loader: ({ params }) => {
    const room = roomBySlug(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    const room = loaderData?.room;
    return {
      meta: [
        { title: `${room?.label ?? "Chat Room"} — 321.Chat` },
        {
          name: "description",
          content: `${room?.label ?? "Chat room"} on 321.Chat: ${room?.subtitle ?? ""} Free, moderated, no download required.`,
        },
        { property: "og:title", content: `${room?.label ?? "Chat Room"} — 321.Chat` },
        {
          property: "og:description",
          content: `${room?.subtitle ?? "Free, moderated chat"} Free, moderated, no download required.`,
        },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: RoomLandingPage,
});

function RoomLandingPage() {
  const { room } = Route.useLoaderData();
  if (!room) throw notFound();

  return (
    <>
      <RoomHero
        title={room.label}
        tagline={room.tagline}
        subtitle={room.subtitle}
        ctaLabel={`Enter ${room.label}`}
      />

      {/* Intro + room picker */}
      <section className="bg-section">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {room.descriptionTitle}
            </h2>
            {room.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <RoomGrid title="Which Chat Room Would You Like To Enter?" />
        </div>
      </section>

      {room.sections.map((section, i) => (
        <ContentSection
          key={i}
          title={section.title}
          image={section.image ?? "features"}
          side={i % 2 === 0 ? "left" : "right"}
          tinted={i % 2 === 1}
          paragraphs={section.paragraphs}
        />
      ))}

      {/* Cross-link to the next room, as the reference does between pages */}
      <div className="bg-background py-10 text-center">
        <p className="text-sm text-muted-foreground">
          Not quite the room you had in mind?
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {rooms
            .filter((r) => r.slug !== room.slug)
            .slice(0, 5)
            .map((r) => (
              <Link
                key={r.slug}
                to="/rooms/$slug"
                params={{ slug: r.slug }}
                className="rounded-md border px-3 py-1.5 text-sm font-medium text-foreground/80 transition hover:border-primary hover:text-primary"
              >
                {r.label}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
