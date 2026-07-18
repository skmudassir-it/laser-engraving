import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "PrecisionCraft Laser Engraving | Custom Engraving & Industrial Marking",
  description: "Professional laser engraving services — custom designs, industrial marking, awards, signage, and personalized gifts. Precision craftsmanship since 2012.",
};

export default function HomePage() {
  return <HomeClient />;
}
