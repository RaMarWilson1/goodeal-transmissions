/* Animated about page content — client component */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── Page Header ── */}
      <section
        className="section-padding"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
        aria-label="About page header"
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </p>
            <h1
              className="text-5xl font-extrabold uppercase leading-none md:text-7xl"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              40 Years of
              <br />
              <span style={{ color: "var(--accent)" }}>Honest Work</span>
              <br />
              in Hammonton, NJ
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: copy + office photo ── */}
      <section className="section-padding" aria-label="About Goodeal Discount Transmissions">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Story copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-6"
            >
              <div
                className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ color: "var(--text-body)" }}
              >
                <p>
                  Goodeal Discount Transmissions has been a fixture on the White
                  Horse Pike in Hammonton, New Jersey for over four decades. What
                  started as a transmission shop has grown into a full-service
                  auto repair facility — but the core hasn&apos;t changed: do
                  the job right, charge a fair price, stand behind your work.
                </p>
                <p>
                  Ken Baldino and his team have seen it all. From routine
                  maintenance to full transmission rebuilds on trucks, imports,
                  fleet vehicles, and performance cars — every vehicle gets the
                  same care. The staff have been here for years. Customers come
                  back because they trust us.
                </p>
                <p>
                  We&apos;re not a chain. We don&apos;t upsell you on things you
                  don&apos;t need. We give you a straight answer on what&apos;s
                  wrong and what it&apos;ll take to fix it. That&apos;s been our
                  approach since day one.
                </p>
                <p>
                  One look at the office — covered wall to wall with decades of
                  photos, thank-you cards, and community memories — tells you
                  everything you need to know. This is more than a shop.
                  It&apos;s a South Jersey institution.
                </p>
              </div>

              {/* Call to action */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+16095670900"
                  className="inline-flex items-center gap-2 rounded px-5 py-3 text-sm font-bold uppercase tracking-wide"
                  style={{ background: "var(--accent)", color: "#000" }}
                  aria-label="Call us at (609) 567-0900"
                >
                  Call (609) 567-0900
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded border px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-[var(--accent)] hover:text-black"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                  }}
                >
                  Send a Message
                </a>
              </div>
            </motion.div>

            {/* Office photo + trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Ken Baldino office photo */}
              <figure className="flex flex-col gap-2">
                <div
                  className="overflow-hidden rounded-lg"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image
                    src="/images/kenny-office.webp"
                    alt="Ken Baldino, owner of Goodeal Discount Transmissions, at his desk in Hammonton NJ"
                    width={640}
                    height={480}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption
                  className="text-xs text-center"
                  style={{ color: "var(--text-muted)" }}
                >
                  Ken Baldino at Goodeal Discount Transmissions — Hammonton, NJ
                </figcaption>
              </figure>

              {/* Trust signals */}
              <div
                className="grid grid-cols-2 gap-4"
                aria-label="Trust signals"
              >
                {[
                  { label: "Google Rating", value: "4.7 / 5" },
                  { label: "Reviews", value: "97" },
                  { label: "Years in Business", value: "40+" },
                  { label: "Warranty", value: "Full" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-lg p-4"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p
                      className="text-2xl font-extrabold"
                      style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        color: "var(--accent)",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Towing badge */}
              <div
                className="rounded-lg p-4 text-sm"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-body)",
                }}
              >
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-heading)" }}
                >
                  Towing available.
                </span>{" "}
                Can&apos;t drive it in? We can arrange towing to get your
                vehicle to our shop safely.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Shop Exterior Photo ── */}
      <section
        className="pb-20"
        style={{ background: "var(--background)" }}
        aria-label="Shop exterior"
      >
        <div className="container-wide">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-3"
          >
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: "1px solid var(--border)" }}
            >
              <Image
                src="/images/shop-exterior.webp"
                alt="Goodeal Discount Transmissions full service auto repair shop in Hammonton NJ"
                width={1280}
                height={640}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <figcaption
              className="text-xs text-center"
              style={{ color: "var(--text-muted)" }}
            >
              261 N. White Horse Pike, Hammonton, NJ
            </figcaption>
          </motion.figure>
        </div>
      </section>
    </div>
  );
}
