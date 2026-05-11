/* Individual customer review card — used in the Reviews section on the homepage */
"use client";

import { motion } from "framer-motion";
import StarRating from "./StarRating";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex flex-col gap-4 rounded-lg p-6"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      aria-label={`Review by ${review.name}`}
    >
      {/* Stars */}
      <StarRating rating={review.rating} size="sm" />

      {/* Review text */}
      <p
        className="flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-body)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        {/* Avatar initials */}
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
          style={{ background: "var(--accent)" }}
          aria-hidden="true"
        >
          {review.avatar}
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--text-heading)" }}
          >
            {review.name}
          </p>
          <time
            dateTime={review.date}
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {new Date(review.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </motion.article>
  );
}
