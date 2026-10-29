import { Link } from "@tanstack/react-router";
import { roomGridItems } from "@/data/rooms";

/**
 * The grid of orange room buttons shown on every landing page:
 * two columns on mobile, four on desktop.
 */
export function RoomGrid({ title = "Pick A Room To Enter" }: { title?: string }) {
  return (
    <section className="w-full">
      <h2 className="text-center text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {roomGridItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex items-center justify-center rounded-md bg-primary px-3 py-4 text-center text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 hover:shadow"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
