/* Homepage hero section — shop exterior background with bold headline and CTAs */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Returns inline animation props for a staggered fade-up on load */
function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function Hero() {
  return (
    <section
      className="hero-noise relative overflow-hidden"
      aria-label="Hero — South Jersey's Transmission Experts"
    >
      {/* ── Background: shop exterior photo ── */}
      <Image
        src="/images/shop-exterior.webp"
        alt="Goodeal Discount Transmissions shop exterior on White Horse Pike in Hammonton, NJ"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* ── Dark overlay so text stays readable ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(0,0,0,0.65)" }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="container-wide relative z-10 py-24 md:py-36">
        <div className="max-w-3xl">
          {/* Amber eyebrow label */}
          <motion.p
            {...fadeUp(0)}
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Hammonton, NJ · Est. 40+ Years
          </motion.p>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-6 text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl"
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              color: "var(--text-heading)",
            }}
          >
            South Jersey&apos;s
            <br />
            <span style={{ color: "var(--accent)" }}>Transmission</span>
            <br />
            Experts
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-8 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--text-body)" }}
          >
            Transmissions rebuilt and installed on-site. All makes and models.
            Full warranty on every job. Trusted by the South Jersey community
            for over 40 years.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
            <motion.a
              href="tel:+16095670900"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors"
              style={{ background: "var(--accent)", color: "#000" }}
              aria-label="Call Goodeal Discount Transmissions at (609) 567-0900"
            >
              <PhoneIcon />
              Call Us: (609) 567-0900
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded border px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-[var(--accent)] hover:text-black"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Google Rating Badge */}
          <motion.div {...fadeUp(0.45)} className="mt-8">
            <a
              href="https://www.google.com/maps/place/Goodeal+Discount+Transmissions/@39.6541804,-74.8007049,17z/data=!3m1!4b1!4m6!3m5!1s0x89c1286bf80c8575:0x1ac946384fa2b24b!8m2!3d39.6541804!4d-74.79813!16s%2Fg%2F1th0cbk0?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-opacity hover:opacity-80"
              style={{
                background: "rgba(20,23,22,0.85)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(4px)",
              }}
              aria-label="4.7 star rating on Google — 97 reviews (opens Google Maps)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth={1} aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span
                className="text-lg font-bold"
                style={{ color: "var(--accent)" }}
              >
                4.7
              </span>
              <span className="text-sm" style={{ color: "var(--text-body)" }}>
                · 97 Google Reviews
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Amber divider at section bottom */}
      <div className="amber-divider relative z-10" />
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
