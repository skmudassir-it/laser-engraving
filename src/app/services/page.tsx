import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive laser engraving services — custom engraving, industrial marking, awards, signage, personalization, corporate gifts, and rapid prototyping.",
};

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">From rapid prototyping to high-volume industrial production, we deliver precision engraving for every need.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="glass-card transition-shadow hover:shadow-lg overflow-hidden group">
              <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                  <FontAwesomeIcon icon={service.icon} className="size-5" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.map((f) => (
                    <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{service.price}</span>
                  <Link href={`/services/${service.slug}`} className="inline-flex">
                    <Button variant="ghost" size="sm" className="text-primary">
                      Details <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
