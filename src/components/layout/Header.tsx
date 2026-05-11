/* Sticky site navigation with mobile hamburger menu */
/* To update nav links, edit the `navLinks` array below */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Add background shadow when page is scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        background: "var(--background)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container-wide flex items-center justify-between py-4">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex flex-col leading-none focus-visible:outline-[var(--accent)]"
          aria-label="Goodeal Discount Transmissions — go to homepage"
        >
          <span
            className="text-2xl font-extrabold tracking-wide"
            style={{
              fontFamily: "var(--font-barlow), sans-serif",
              color: "var(--text-heading)",
            }}
          >
            GOODEAL
          </span>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Discount Transmissions
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-medium transition-colors hover:text-[var(--accent)] focus-visible:outline-[var(--accent)]"
                style={{ color: isActive ? "var(--accent)" : "var(--text-body)" }}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </Link>
            );
          })}

          {/* Call CTA in desktop nav */}
          <a
            href="tel:+16095670900"
            className="rounded px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-[var(--accent)]"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
            aria-label="Call Goodeal Discount Transmissions at (609) 567-0900"
          >
            (609) 567-0900
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden focus-visible:outline-[var(--accent)]"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6"
            style={{ background: "var(--text-heading)" }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6"
            style={{ background: "var(--text-heading)" }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6"
            style={{ background: "var(--text-heading)" }}
          />
        </button>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <nav
              aria-label="Mobile navigation"
              className="container-wide flex flex-col gap-1 py-4"
            >
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="rounded px-4 py-3 text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-body)",
                      background: isActive ? "var(--surface)" : "transparent",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
              <a
                href="tel:+16095670900"
                className="mt-2 rounded px-4 py-3 text-sm font-semibold text-center"
                style={{ background: "var(--accent)", color: "#000" }}
                aria-label="Call (609) 567-0900"
              >
                Call (609) 567-0900
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
