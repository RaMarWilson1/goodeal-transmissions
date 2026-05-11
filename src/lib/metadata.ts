/* Shared Open Graph defaults — imported by each page's generateMetadata */
import type { Metadata } from "next";

export const BASE_URL = "https://www.goodealdiscounttransmissions.com";

export const SITE_NAME = "Goodeal Discount Transmissions";

/* Merge page-level metadata with shared OG defaults */
export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      ...overrides.openGraph,
    },
    robots: { index: true, follow: true },
    ...overrides,
  };
}
