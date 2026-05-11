/* About page — server component with metadata + client animated content */
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export const metadata: Metadata = buildMetadata({
  title: "About Us | 40 Years of Trusted Auto Repair in Hammonton, NJ",
  description:
    "Goodeal Discount Transmissions has served South Jersey for over 40 years. Family-owned, honest work, full warranty. Located at 261 N White Horse Pike, Hammonton NJ.",
  openGraph: {
    title: "About Goodeal Discount Transmissions | Hammonton, NJ",
    description:
      "40+ years of honest transmission repair and auto service in South Jersey. Family-owned. Full warranty. Route 30, Hammonton NJ.",
    url: "https://goodealtransmissions.com/about",
  },
});

export default function AboutPage() {
  return <AboutContent />;
}
