import {
  Link,
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { roomGridItems } from "@/data/rooms";
import { Logo } from "@/components/landing/Logo";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="hero-band flex flex-col items-center px-4 py-12 text-center">
        <Logo tone="white" className="mb-4" />
        <h1 className="text-3xl font-bold text-white md:text-4xl">Error: 404</h1>
        <p className="mt-2 text-white/90">The page you requested could not be found.</p>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-center text-xl font-semibold">
          Were you looking for one of these rooms?
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {roomGridItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center justify-center rounded-md bg-primary px-3 py-3.5 text-center text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/chat"
            className="inline-flex items-center justify-center rounded-md bg-cta px-6 py-2.5 text-sm font-semibold text-cta-foreground transition hover:brightness-110"
          >
            Enter the Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "321.Chat — Free Chat Rooms" },
      {
        name: "description",
        content:
          "321.Chat is a free online community with moderated chat rooms for every age and interest — no download, no registration required.",
      },
      { property: "og:title", content: "321.Chat — Free Chat Rooms" },
      {
        property: "og:description",
        content:
          "Free, moderated chat rooms for every age and interest. Talk in your browser on phone, tablet or desktop — nothing to install.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
