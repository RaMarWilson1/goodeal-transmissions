/* Contact / location strip — address, hours, and embedded Google Map */
"use client";

import { motion } from "framer-motion";

export default function ContactStrip() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--background)" }}
      aria-label="Contact and location information"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Find Us
          </p>
          <h2
            className="text-4xl font-extrabold uppercase md:text-5xl"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Come See Us in Hammonton
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--surface)" }}
                aria-hidden="true"
              >
                <PhoneIcon />
              </div>
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+16095670900"
                  className="text-xl font-bold transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-heading)" }}
                  aria-label="Call us at (609) 567-0900"
                >
                  (609) 567-0900
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--surface)" }}
                aria-hidden="true"
              >
                <PinIcon />
              </div>
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Address
                </p>
                <address className="not-italic leading-snug" style={{ color: "var(--text-heading)" }}>
                  261 N White Horse Pike
                  <br />
                  Hammonton, NJ 08037
                </address>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--surface)" }}
                aria-hidden="true"
              >
                <ClockIcon />
              </div>
              <div>
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Hours
                </p>
                <table className="text-sm" style={{ color: "var(--text-body)" }}>
                  <tbody>
                    <tr>
                      <td className="pr-6 py-0.5 font-medium" style={{ color: "var(--text-heading)" }}>
                        Mon – Fri
                      </td>
                      <td>8:00 AM – 4:30 PM</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-0.5 font-medium" style={{ color: "var(--text-heading)" }}>
                        Saturday
                      </td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-0.5 font-medium" style={{ color: "var(--text-heading)" }}>
                        Sunday
                      </td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Google Maps embed — lazy loaded for performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-lg"
            style={{ border: "1px solid var(--border)" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=261+N+White+Horse+Pike,+Hammonton,+NJ+08037&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goodeal Discount Transmissions location on Google Maps"
              aria-label="Google Maps showing 261 N White Horse Pike, Hammonton NJ"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Inline Icons ───────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
