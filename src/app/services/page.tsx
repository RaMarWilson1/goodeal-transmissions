/* Services page — server component so we can export metadata */
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = buildMetadata({
  title:
    "Transmission Repair & Auto Services | Goodeal Discount Transmissions Hammonton NJ",
  description:
    "Full-service transmission repair, rebuilds, clutch, brakes, oil changes, and diagnostics in Hammonton, NJ. All makes and models. Call for a quote.",
  openGraph: {
    title: "Auto Repair Services | Goodeal Discount Transmissions",
    description:
      "Transmission repair, rebuilds, clutch, brakes, AC, diagnostics & more. All makes and models. Hammonton, NJ.",
    url: "https://goodealtransmissions.com/services",
  },
});

export default function ServicesPage() {
  return <ServicesContent />;
}
