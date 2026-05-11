/* Reusable Button component — supports two variants: primary (amber) and outline */
"use client";

import { motion } from "framer-motion";

type Variant = "primary" | "outline";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  "aria-label"?: string;
  "aria-busy"?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--accent)] text-black hover:bg-[var(--accent-dim)] focus-visible:outline-[var(--accent)]",
    outline:
      "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black focus-visible:outline-[var(--accent)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  const { type = "button", disabled, onClick } = props;

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={props["aria-label"]}
      aria-busy={props["aria-busy"]}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
