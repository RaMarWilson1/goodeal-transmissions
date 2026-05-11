/* Services icon strip — 6 core services shown as icon + label tiles */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { icon: <TransmissionIcon />, label: "Transmission Repair" },
  { icon: <RebuildIcon />, label: "Transmission Rebuild" },
  { icon: <ClutchIcon />, label: "Clutch Repair" },
  { icon: <BrakeIcon />, label: "Brakes & Maintenance" },
  { icon: <DiagIcon />, label: "Check Engine / Diagnostics" },
  { icon: <OilIcon />, label: "Oil Changes & AC" },
];

export default function ServicesStrip() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface)" }}
      aria-label="Our services"
    >
      <div className="container-wide">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl font-extrabold uppercase md:text-5xl"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            Full-Service Auto Repair
          </h2>
        </motion.div>

        {/* Service tiles grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-lg px-4 py-6 text-center transition-colors"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "var(--background)" }}
                aria-hidden="true"
              >
                {svc.icon}
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-wide leading-tight"
                style={{ color: "var(--text-heading)" }}
              >
                {svc.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA to full services page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[var(--text-heading)]"
            style={{ color: "var(--accent)" }}
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Service Icons (inline SVG) ─────────────────────────────────────────── */
function TransmissionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}

function RebuildIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ClutchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="2" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function BrakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function DiagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H3m6 0h12m0 0V9m0 6v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    </svg>
  );
}

function OilIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 10a6 6 0 11-12 0l4-10z" />
    </svg>
  );
}
