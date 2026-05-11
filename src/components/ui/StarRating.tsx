/* Renders filled star SVG icons for a given rating (1–5) */

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

/* Pixel sizes mapped from the original text-base/xl/3xl scale */
const sizeMap = { sm: 16, md: 20, lg: 28 };

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const px = sizeMap[size];

  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={px}
          height={px}
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--accent)" : "var(--border)"}
          stroke={i < rating ? "var(--accent)" : "var(--border)"}
          strokeWidth={1}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
