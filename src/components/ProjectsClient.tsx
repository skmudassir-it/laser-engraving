"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Projects</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of our finest work across industries and applications.</p>
        </div>

        <Tabs value={filter} onValueChange={(v: string | null) => setFilter(v || "All")} className="mb-12">
          <TabsList className="flex-wrap justify-center">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card key={project.slug} className="glass-card overflow-hidden group">
              <div className="w-full h-52 bg-muted flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex">
            <Button size="lg">Start Your Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
