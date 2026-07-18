"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTrophy, faIndustry, faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { services, projects, testimonials } from "@/lib/data";

export function HomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Serving Since 2012</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                Precision Laser<br />
                <span className="text-primary">Engraving</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                From custom designs to high-volume industrial marking, we bring your vision to life with cutting-edge laser technology and expert craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg">Get Free Quote</Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button variant="outline" size="lg">Our Services</Button>
                </Link>
              </div>
              <div className="flex gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> 10+ Years</div>
                <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> 5000+ Projects</div>
                <div className="flex items-center gap-1"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" /> ISO Certified</div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="glass-card overflow-hidden">
                <img src="/images/hero/laser-engraving.jpg" alt="Laser engraving process" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">From personal keepsakes to industrial-scale production, we offer a full spectrum of laser engraving services.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
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
                  <Link href={`/services/${service.slug}`} className="inline-flex">
                    <Button variant="ghost" size="sm" className="text-primary">
                      Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "5,000+", label: "Projects Completed" },
              { num: "200+", label: "Business Clients" },
              { num: "100%", label: "Satisfaction Rate" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{stat.num}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">See how we've helped businesses and individuals bring their ideas to life.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.slug} className="glass-card overflow-hidden group">
                <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
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
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free quote within 24 hours. Whether you need one custom piece or 10,000 industrial parts, we're ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Request a Quote</Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
