import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faUsers, faCertificate, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us",
  description: "PrecisionCraft Laser Engraving — a decade of precision craftsmanship, cutting-edge technology, and dedication to quality.",
};

const values = [
  { icon: faBolt, title: "Precision First", desc: "Every project, from a single gift to 100K industrial parts, receives the same meticulous attention to detail." },
  { icon: faUsers, title: "Client Partnership", desc: "We work alongside you from concept to completion, with transparent communication at every step." },
  { icon: faCertificate, title: "Certified Quality", desc: "ISO-certified processes, FDA-compliant marking, and rigorous quality checks on every order." },
  { icon: faHeart, title: "Craftsmanship", desc: "Our team combines decades of engraving experience with state-of-the-art technology." }
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About PrecisionCraft</h1>
              <div className="gradient-divider w-24 mb-6" />
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2012, PrecisionCraft Laser Engraving has grown from a small workshop into a trusted partner for businesses and individuals nationwide.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a passion for precision craftsmanship has evolved into a full-service engraving operation. We combine decades of hands-on experience with the latest fiber and CO2 laser technology to deliver results that exceed expectations.
              </p>
              <p className="text-muted-foreground mb-6">
                From Fortune 500 corporate awards to custom wedding gifts, from aerospace part marking to retail signage — every project tells a story. We're proud to be the chapter where craftsmanship meets technology.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="inline-flex"><Button>Work With Us</Button></Link>
                <Link href="/projects" className="inline-flex"><Button variant="outline">See Our Work</Button></Link>
              </div>
            </div>
            <div className="glass-card overflow-hidden">
              <div className="w-full h-80 bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/hero/laser-engraving.jpg" alt="Our workshop" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-2">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{v.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Bring Your Vision to Life?</h2>
          <p className="text-muted-foreground mb-8">Let's discuss your project. We'll provide a free consultation and quote within 24 hours.</p>
          <Link href="/contact" className="inline-flex"><Button size="lg">Get Started</Button></Link>
        </div>
      </section>
    </>
  );
}
