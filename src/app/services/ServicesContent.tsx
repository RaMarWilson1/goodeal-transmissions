/* Animated services content — client component so Framer Motion works */
/* To add a service: copy one item in the `services` array and fill it in */
"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: <TransmissionRepairIcon />,
    title: "Transmission Repair",
    description:
      "Slipping gears, hard or delayed shifting, unusual noises, fluid leaks, or a complete failure — we diagnose it and fix it right the first time. Our technicians have worked on every major transmission design for over 40 years. We service all makes and models, foreign and domestic.",
  },
  {
    icon: <RebuildIcon />,
    title: "Transmission Rebuild",
    description:
      "When a repair isn't enough, a full rebuild is often the most cost-effective long-term solution. Every rebuild is done in-house — not sent out — so we control the quality from start to finish. We replace all worn components, seals, gaskets, and friction materials with new internals and back our work with a full warranty.",
  },
  {
    icon: <ReplacementIcon />,
    title: "Transmission Replacement",
    description:
      "Sometimes a complete swap is the right call — especially when a unit has too many miles or has suffered catastrophic damage. We source quality OEM and aftermarket replacement transmissions and handle the full installation on-site.",
  },
  {
    icon: <ClutchIcon />,
    title: "Clutch Repair & Replacement",
    description:
      "Driving a manual? A slipping, chattering, or sticking clutch is a safety issue, not just an annoyance. We handle full clutch diagnosis, cable or hydraulic adjustment, and complete clutch assembly replacement. All vehicles, all makes.",
  },
  {
    icon: <BrakeIcon />,
    title: "Brakes",
    description:
      "Grinding, squealing, a soft pedal, or a vehicle that pulls to one side — brake problems don't fix themselves. We service the complete brake system: pads, rotors, calipers, drums, brake lines, and master cylinders. Call us and we'll tell you exactly what your car needs.",
  },
  {
    icon: <OilIcon />,
    title: "Oil Changes & Routine Maintenance",
    description:
      "Keeping up with oil changes and scheduled maintenance is the single best thing you can do to extend the life of your vehicle. We offer conventional and synthetic oil changes, filter replacements, fluid top-offs, and full routine service checkups.",
  },
  {
    icon: <DiagIcon />,
    title: "Check Engine Light / Electrical Diagnostics",
    description:
      "A check engine light means your car's computer detected a fault — but reading the code is only step one. We use advanced scan tools to properly diagnose the root cause, not just clear the light and send you on your way. Electrical gremlins, sensor faults, module issues — we find them.",
  },
  {
    icon: <ACIcon />,
    title: "AC Repair",
    description:
      "Blowing warm air, weak airflow, or a system that won't turn on — AC problems are miserable in a South Jersey summer. We handle full AC diagnosis, refrigerant recharge, leak detection, compressor replacement, and complete system service.",
  },
  {
    icon: <QuoteIcon />,
    title: "Call for a Quote",
    description:
      "Every job is different. Rather than give you a number that doesn't apply to your vehicle, we'd rather talk to you. Call us at (609) 567-0900 or stop by and we'll walk you through exactly what's wrong and what it'll take to fix it — before any work begins.",
    isCta: true,
  },
];

export default function ServicesContent() {
  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── Page Header ── */}
      <section
        className="section-padding"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
        aria-label="Services page header"
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              What We Offer
            </p>
            <h1
              className="mb-4 text-5xl font-extrabold uppercase leading-none md:text-7xl"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Transmission &amp; Auto
              <br />
              <span style={{ color: "var(--accent)" }}>Repair Services</span>
            </h1>
            <p
              className="max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--text-body)" }}
            >
              Full-service transmission shop and complete auto care facility.
              All major and minor mechanical repairs. All makes and models. Full
              warranty on every job. Located on Route 30 in Hammonton, NJ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="section-padding" aria-label="Service details">
        <div className="container-wide">
          <div className="flex flex-col gap-6">
            {services.map((svc, i) => (
              <motion.article
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex flex-col gap-4 rounded-lg p-8 sm:flex-row sm:gap-6"
                style={{
                  background: svc.isCta ? "var(--surface-2)" : "var(--surface)",
                  border: svc.isCta
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border)",
                  borderLeft: "4px solid var(--accent)",
                }}
                aria-label={`Service: ${svc.title}`}
              >
                {/* Icon */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--background)" }}
                  aria-hidden="true"
                >
                  {svc.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h2
                    className="text-2xl font-extrabold uppercase"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  >
                    {svc.title}
                  </h2>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--text-body)" }}
                  >
                    {svc.description}
                  </p>
                  {svc.isCta && (
                    <a
                      href="tel:+16095670900"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded px-5 py-2.5 text-sm font-bold uppercase tracking-wide"
                      style={{ background: "var(--accent)", color: "#000" }}
                      aria-label="Call us at (609) 567-0900"
                    >
                      Call (609) 567-0900
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Service Icons (inline SVG) ─────────────────────────────────────────── */
function TransmissionRepairIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}
function RebuildIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function ReplacementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  );
}
function ClutchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function OilIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 10a6 6 0 11-12 0z" />
    </svg>
  );
}
function DiagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
function ACIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
    </svg>
  );
}
function QuoteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
