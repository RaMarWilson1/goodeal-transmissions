/* Site footer — update address, phone, and hours here */
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
      aria-label="Site footer"
    >
      <div className="container-wide py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* ── Brand ── */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex flex-col leading-none w-fit"
              aria-label="Goodeal Discount Transmissions homepage"
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
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Trusted by South Jersey for Over 40 Years
            </p>

            {/* Original business card — nostalgic brand element */}
            <div className="mt-1">
              <Image
                src="/images/business-card.webp"
                alt="Original Goodeal Discount Transmissions business card — Ken Baldino, Hammonton NJ"
                width={160}
                height={96}
                className="rounded opacity-80 transition-opacity hover:opacity-100"
                style={{ maxWidth: "160px" }}
              />
            </div>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Goodeal-Discount-Transmissions-100040931486985/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
              aria-label="Goodeal Discount Transmissions on Facebook (opens in new tab)"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>

          {/* ── Contact ── */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2 text-sm" style={{ color: "var(--text-body)" }}>
              <span>261 N White Horse Pike</span>
              <span>Hammonton, NJ 08037</span>
              <a
                href="tel:+16095670900"
                className="transition-colors hover:text-[var(--accent)]"
                aria-label="Call us at (609) 567-0900"
              >
                (609) 567-0900
              </a>
            </address>

            {/* Hours */}
            <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--text-body)" }}>
              <p>
                <span style={{ color: "var(--text-heading)" }}>Mon–Fri:</span>{" "}
                8:00 AM – 4:30 PM
              </p>
              <p>
                <span style={{ color: "var(--text-heading)" }}>Saturday:</span>{" "}
                Closed
              </p>
              <p>
                <span style={{ color: "var(--text-heading)" }}>Sunday:</span>{" "}
                Closed
              </p>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--text-body)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs sm:flex-row"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Goodeal Discount Transmissions. All
            rights reserved.
          </p>
          <p>Hammonton, NJ 08037</p>
        </div>
      </div>
    </footer>
  );
}

/* Inline Facebook SVG icon */
function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
