import { useEffect, useState } from "react";

/**
 * Cookie notice matching the reference chat entry screen: small icon,
 * short explanation and an OK button that dismisses it for the session.
 */
export function CookieNotice() {
  const [dismissed, setDismissed] = useState(true);
  useEffect(() => {
    setDismissed(sessionStorage.getItem("cookie-notice-ok") === "1");
  }, []);
  if (dismissed) return null;
  return (
    <div className="sticky bottom-0 z-50 border-t bg-card px-4 py-3">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <span aria-hidden="true" className="text-xl">
          🍪
        </span>
        <p className="text-xs leading-relaxed text-muted-foreground">
          We use cookies to provide necessary site functionality, such as keeping
          you logged in. Using the site means you accept this and our privacy
          policy.
        </p>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("cookie-notice-ok", "1");
            setDismissed(true);
          }}
          className="ml-auto rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background"
        >
          OK
        </button>
      </div>
    </div>
  );
}
