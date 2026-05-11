/* Homepage — assembles all home sections in order */
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata: Metadata = buildMetadata({
  title:
    "Transmission Repair Hammonton NJ | Goodeal Discount Transmissions",
  description:
    "Goodeal Discount Transmissions in Hammonton, NJ — trusted transmission repair, rebuild & auto service for 40+ years. Serving all of South Jersey. Call (609) 567-0900.",
  openGraph: {
    title: "Goodeal Discount Transmissions | South Jersey's Transmission Experts",
    description:
      "Transmissions rebuilt and installed on-site. All makes and models. Full warranty. Serving South Jersey for 40+ years.",
    url: "https://www.goodealdiscounttransmissions.com",
  },
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <WhyChooseUs />
      <Reviews />
      <ContactStrip />
    </>
  );
}
