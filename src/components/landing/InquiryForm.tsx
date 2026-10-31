import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable inquiry form for the contact pages: validated fields, a
 * loading state and a success state. Submissions are stored locally
 * for this demo build — no backend is wired up yet.
 */
export function InquiryForm({
  title,
  intro,
  fields = [
    { name: "nickname", label: "Your chat nickname", required: true },
    { name: "email", label: "Your email address", type: "email", required: true },
  ],
  subjectLabel,
  subjects,
  messageLabel = "Your message",
  messageRequired = true,
  extra,
}: {
  title: string;
  intro?: string;
  fields?: { name: string; label: string; type?: string; required?: boolean }[];
  subjectLabel?: string;
  subjects?: readonly string[];
  messageLabel?: string;
  messageRequired?: boolean;
  extra?: React.ReactNode;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (name: string, v: string) =>
    setValues((vals) => ({ ...vals, [name]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !values[f.name]?.trim())
        next[f.name] = `${f.label} is required.`;
      if (f.type === "email" && values[f.name] && !values[f.name].includes("@"))
        next[f.name] = "Enter a valid email address.";
    });
    if (messageRequired && !values.message?.trim())
      next.message = `${messageLabel} is required.`;
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    // Demo build: keep the message locally, no backend call.
    setTimeout(() => setStatus("sent"), 600);
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
        <p className="text-3xl" aria-hidden="true">
          ✅
        </p>
        <h2 className="mt-3 text-lg font-bold">Message received</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks — your {title.toLowerCase()} has been recorded. In this demo
          build it stays on your device; on the live site it would land with the
          team. Replies go to the email you gave.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({});
            setStatus("idle");
          }}
          className="mt-5 rounded-md border px-4 py-2 text-sm font-semibold hover:bg-accent"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border bg-card p-5 shadow-sm md:p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      {intro && <p className="mt-2 text-sm text-muted-foreground">{intro}</p>}
      {extra}
      <div className="mt-5 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className="grid gap-1.5">
              <span className="text-sm font-medium">
                {f.label}
                {f.required && <span className="text-primary"> *</span>}
              </span>
              <input
                type={f.type ?? "text"}
                value={values[f.name] ?? ""}
                onChange={(e) => set(f.name, e.target.value)}
                className={cn(
                  "rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring",
                  errors[f.name] ? "border-destructive" : "border-input"
                )}
              />
              {errors[f.name] && (
                <span className="text-xs text-destructive">{errors[f.name]}</span>
              )}
            </label>
          ))}
        </div>
        {subjects && subjectLabel && (
          <label className="grid gap-1.5">
            <span className="text-sm font-medium">{subjectLabel}</span>
            <select
              value={values.subject ?? ""}
              onChange={(e) => set("subject", e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Choose one…</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        )}
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">
            {messageLabel}
            {messageRequired && <span className="text-primary"> *</span>}
          </span>
          <textarea
            rows={6}
            value={values.message ?? ""}
            onChange={(e) => set("message", e.target.value)}
            className={cn(
              "rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring",
              errors.message ? "border-destructive" : "border-input"
            )}
          />
          {errors.message && (
            <span className="text-xs text-destructive">{errors.message}</span>
          )}
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="justify-self-start rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
