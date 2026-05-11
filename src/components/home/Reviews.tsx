/* Customer reviews section — shows star average and review cards */
"use client";

import { motion } from "framer-motion";
import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface)" }}
      aria-label="Customer reviews"
    >
      <div className="container-wide">
        {/* Heading + aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Google Reviews
            </p>
            <h2
              className="text-4xl font-extrabold uppercase md:text-5xl"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              What Our Customers Say
            </h2>
          </div>

          {/* Aggregate rating display */}
          <div
            className="flex items-center gap-4 rounded-lg px-6 py-4"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p
                className="text-5xl font-extrabold leading-none"
                style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  color: "var(--accent)",
                }}
                aria-label="4.7 star average rating"
              >
                4.7
              </p>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                out of 5 stars
              </p>
            </div>
            <div className="border-l pl-4" style={{ borderColor: "var(--border)" }}>
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth={1}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                97 reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* CTA to leave a review */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Goodeal+Discount+Transmissions/@39.6541804,-74.8007049,17z/data=!3m1!4b1!4m6!3m5!1s0x89c1286bf80c8575:0x1ac946384fa2b24b!8m2!3d39.6541804!4d-74.79813!16s%2Fg%2F1th0cbk0?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-[var(--accent)] hover:text-black"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            aria-label="Leave us a review on Google (opens Google Maps)"
          >
            Leave Us a Review on Google ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
