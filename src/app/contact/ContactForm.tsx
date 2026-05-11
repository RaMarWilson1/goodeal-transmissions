/* Contact form — client component that calls the server action */
"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

/* Initial state before any form submission */
const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} noValidate aria-label="Contact form">
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            disabled={isPending}
            className="rounded px-4 py-3 text-sm outline-none transition-colors focus:ring-1"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
            aria-required="true"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Phone <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(xxx) xxx-xxxx"
            disabled={isPending}
            className="rounded px-4 py-3 text-sm outline-none transition-colors focus:ring-1"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
            aria-required="true"
          />
        </div>

        {/* Email (optional) */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Email{" "}
            <span className="font-normal normal-case tracking-normal" style={{ color: "var(--text-muted)" }}>
              (optional)
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            disabled={isPending}
            className="rounded px-4 py-3 text-sm outline-none transition-colors focus:ring-1"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
          />
        </div>

        {/* Vehicle */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="vehicle"
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Vehicle Year / Make / Model{" "}
            <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            required
            placeholder="e.g. 2018 Jeep Grand Cherokee"
            disabled={isPending}
            className="rounded px-4 py-3 text-sm outline-none transition-colors focus:ring-1"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
            aria-required="true"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Describe the Issue{" "}
            <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what's going on with your vehicle..."
            disabled={isPending}
            className="resize-none rounded px-4 py-3 text-sm outline-none transition-colors focus:ring-1"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
            aria-required="true"
          />
        </div>

        {/* Status messages */}
        {state.status === "success" && (
          <div
            role="alert"
            className="rounded px-4 py-3 text-sm font-semibold"
            style={{
              background: "rgba(232,160,32,0.12)",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
          >
            {state.message}
          </div>
        )}
        {state.status === "error" && (
          <div
            role="alert"
            className="rounded px-4 py-3 text-sm font-semibold"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid #ef4444",
              color: "#f87171",
            }}
          >
            {state.message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="rounded px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-opacity disabled:opacity-60"
          style={{ background: "var(--accent)", color: "#000" }}
          aria-busy={isPending}
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>{" "}
          Required fields
        </p>
      </div>
    </form>
  );
}
