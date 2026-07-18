import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs, pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for laser engraving services. From $10/item for personalization to custom industrial quotes.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Pricing Plans</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing for every need — from single items to high-volume production.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <Card key={i} className={`glass-card ${i === 1 ? "ring-2 ring-primary shadow-lg" : ""}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                    {tier.unit && <span className="text-sm text-muted-foreground ml-1">{tier.unit}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full">
                    <Button variant={i === 1 ? "default" : "outline"} className="w-full">
                      {tier.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need a Custom Quote?</h2>
          <p className="text-muted-foreground mb-8">Every project is unique. Contact us for a free, no-obligation quote tailored to your specific requirements.</p>
          <Link href="/contact" className="inline-flex"><Button size="lg">Request Custom Quote</Button></Link>
        </div>
      </section>
    </>
  );
}
