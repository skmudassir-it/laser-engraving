import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of laser engraving projects — corporate awards, industrial marking, signage, and personalized gifts.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
