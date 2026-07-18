"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="bg-gradient-to-r from-primary via-accent to-secondary text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-semibold tracking-wide">
          <span className="inline-block px-8">⚡ Free shipping on orders over $100 &mdash; Serving since 2012 ⚡</span>
          <span className="inline-block px-8">⚡ Free shipping on orders over $100 &mdash; Serving since 2012 ⚡</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="PrecisionCraft" className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex">
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" className="inline-flex ml-2">
              <Button size="sm">Get Quote</Button>
            </Link>
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="inline-flex">
                    <Button variant="ghost" className="w-full justify-start text-base">
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex mt-2">
                  <Button className="w-full">Get Quote</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
