import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

const serviceMap = Object.fromEntries(services.map((s) => [s.slug, s]));

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) return { title: "Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) notFound();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex mb-8">
          <Button variant="ghost" size="sm">
            <FontAwesomeIcon icon={faArrowLeft} className="size-4 mr-2" /> Back to Services
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <FontAwesomeIcon icon={service.icon} className="size-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{service.title}</h1>
            <p className="text-lg text-muted-foreground mb-2">{service.tagline}</p>
            <div className="gradient-divider w-24 mb-6" />
            <p className="text-base leading-relaxed mb-6">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((f) => (
                <Badge key={f} variant="secondary">{f}</Badge>
              ))}
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="font-semibold text-lg mb-3">Service Details</h2>
              <ul className="space-y-2">
                {service.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="text-base px-4 py-2">{service.price}</Badge>
              <Link href="/contact" className="inline-flex">
                <Button>Request This Service</Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="glass-card overflow-hidden">
              <div className="w-full h-72 bg-muted flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>

            <Separator className="my-8" />

            <h2 className="font-semibold text-lg mb-4">Related Services</h2>
            <div className="grid gap-3">
              {services.filter(s => s.slug !== slug).slice(0, 3).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="glass-card p-4 flex items-center gap-4 hover:shadow-md transition-shadow group">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <FontAwesomeIcon icon={s.icon} className="size-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
