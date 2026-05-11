/* Contact page — server component with metadata */
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Goodeal Discount Transmissions Hammonton NJ",
  description:
    "Reach out to Goodeal Discount Transmissions at 261 N White Horse Pike, Hammonton NJ 08037. Call (609) 567-0900. Mon–Fri 8am–4:30pm.",
  openGraph: {
    title: "Contact Goodeal Discount Transmissions",
    description:
      "Call (609) 567-0900. Located at 261 N White Horse Pike, Hammonton NJ. Mon–Fri 8am–4:30pm.",
    url: "https://www.goodealdiscounttransmissions.com/contact",
  },
});

export default function ContactPage() {
  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── Page Header ── */}
      <section
        className="section-padding"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
        aria-label="Contact page header"
      >
        <div className="container-wide">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Reach Out
          </p>
          <h1
            className="mb-4 text-5xl font-extrabold uppercase leading-none md:text-7xl"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Get in <span style={{ color: "var(--accent)" }}>Touch</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
            The best way to reach us is by phone. Give us a call and we&apos;ll
            give you a straight answer.
          </p>
        </div>
      </section>

      {/* ── Two-Column Layout ── */}
      <section className="section-padding" aria-label="Contact info">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ── Left: Phone CTA ── */}
            <div>
              <h2
                className="mb-6 text-2xl font-extrabold uppercase"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Get in Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
                The best way to reach us is by phone. Give us a call and
                we&apos;ll give you a straight answer.
              </p>
              <a
                href="tel:+16095670900"
                className="text-5xl font-extrabold transition-colors hover:text-[var(--accent)] md:text-6xl"
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  color: "var(--text-heading)",
                }}
                aria-label="Call (609) 567-0900"
              >
                (609) 567-0900
              </a>
            </div>

            {/* ── Right: Contact Info ── */}
            <div className="flex flex-col gap-8">
              {/* Phone — large and prominent */}
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Call Us
                </p>
                <a
                  href="tel:+16095670900"
                  className="text-4xl font-extrabold transition-colors hover:text-[var(--accent)] md:text-5xl"
                  style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    color: "var(--text-heading)",
                  }}
                  aria-label="Call (609) 567-0900"
                >
                  (609) 567-0900
                </a>
              </div>

              {/* Address */}
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Address
                </p>
                <address
                  className="not-italic text-lg leading-snug"
                  style={{ color: "var(--text-heading)" }}
                >
                  261 N White Horse Pike
                  <br />
                  Hammonton, NJ 08037
                </address>
              </div>

              {/* Hours */}
              <div>
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Hours
                </p>
                <table
                  className="text-sm"
                  style={{ color: "var(--text-body)" }}
                  aria-label="Business hours"
                >
                  <tbody>
                    <tr>
                      <td
                        className="pb-1.5 pr-8 font-semibold"
                        style={{ color: "var(--text-heading)" }}
                      >
                        Mon – Fri
                      </td>
                      <td className="pb-1.5">8:00 AM – 4:30 PM</td>
                    </tr>
                    <tr>
                      <td
                        className="pb-1.5 pr-8 font-semibold"
                        style={{ color: "var(--text-heading)" }}
                      >
                        Saturday
                      </td>
                      <td className="pb-1.5">Closed</td>
                    </tr>
                    <tr>
                      <td
                        className="pr-8 font-semibold"
                        style={{ color: "var(--text-heading)" }}
                      >
                        Sunday
                      </td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Goodeal-Discount-Transmissions-100040931486985/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
                aria-label="Find us on Facebook (opens in new tab)"
              >
                <FacebookIcon />
                Find us on Facebook
              </a>

              {/* Google Maps embed — lazy loaded */}
              <div
                className="overflow-hidden rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=261+N+White+Horse+Pike,+Hammonton,+NJ+08037&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Goodeal Discount Transmissions location on Google Maps"
                  aria-label="Google Maps showing 261 N White Horse Pike, Hammonton NJ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
