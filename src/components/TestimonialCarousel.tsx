"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialItem } from "@/lib/data";

export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="mx-auto max-w-6xl">
      <CarouselContent>
        {items.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-5 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
