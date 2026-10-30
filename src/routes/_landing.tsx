import { Outlet } from "@tanstack/react-router";
import { EmojiMarquee } from "@/components/landing/EmojiMarquee";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { BackToTop } from "@/components/landing/BackToTop";

/**
 * Shared chrome for the public landing site: emoji marquee, sticky
 * navigation with the rooms dropdown, and the site footer.
 */
export const Route = createFileRoute("/_landing")({
  component: LandingLayout,
});

import { createFileRoute } from "@tanstack/react-router";

function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <EmojiMarquee />
      <LandingHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
