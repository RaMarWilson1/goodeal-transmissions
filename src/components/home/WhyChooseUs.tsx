/* "Why Choose Us" trust signal cards */
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Card Icon SVGs ─────────────────────────────────────────────────────── */
function AwardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 01-2-2V9l3-6h14l3 6v6a2 2 0 01-2 2h-2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

interface TrustCard {
  icon: ReactNode;
  title: string;
  body: string;
}

const trustCards: TrustCard[] = [
  {
    icon: <AwardIcon />,
    title: "40+ Years in Business",
    body: "We've been a fixture on Route 30 in Hammonton since before most shops opened. That longevity means something.",
  },
  {
    icon: <ShieldIcon />,
    title: "Full Warranty on All Work",
    body: "Every transmission repair, rebuild, and replacement comes backed by a full warranty. We stand behind what we do.",
  },
  {
    icon: <CarIcon />,
    title: "All Makes & Models",
    body: "Domestic, import, trucks, SUVs — automatic and manual. If it drives, we work on it.",
  },
  {
    icon: <TruckIcon />,
    title: "Towing Available",
    body: "Can't drive it in? No problem. We can arrange towing to get your vehicle to our shop safely.",
  },
  {
    icon: <PhoneIcon />,
    title: "Call for a Quote",
    body: "Every job is different. Call us and we'll give you a straight answer on what it'll take — no surprises.",
  },
  {
    icon: <CreditCardIcon />,
    title: "All Major Credit Cards",
    body: "Visa, Mastercard, AmEx, Discover — we make it easy to pay however works best for you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--background)" }}
      aria-label="Why choose Goodeal Discount Transmissions"
    >
      <div className="container-wide">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Why Goodeal
          </p>
          <h2
            className="text-4xl font-extrabold uppercase md:text-5xl"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Honest Work,
            <br />
            <span style={{ color: "var(--accent)" }}>Every Time</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex flex-col gap-3 rounded-lg p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* SVG icon in a circular background */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "var(--background)" }}
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3
                className="text-lg font-bold uppercase"
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  color: "var(--text-heading)",
                }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
