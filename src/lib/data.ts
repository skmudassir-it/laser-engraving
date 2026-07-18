import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBolt, faIndustry, faTrophy, faSignHanging, faGift, faBuilding, faFlask } from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  details: string[];
  price: string;
}

export const services: ServiceItem[] = [
  {
    slug: "custom-engraving", title: "Custom Engraving", tagline: "Your design, perfectly etched",
    description: "Bring any design to life on wood, metal, acrylic, glass, and more. From personal keepsakes to one-of-a-kind gifts.",
    icon: faBolt, image: "/images/services/custom-engraving.jpg",
    features: ["Wood & Bamboo", "Metal & Stainless Steel", "Acrylic & Glass", "Leather & Fabric"],
    details: ["High-resolution engraving up to 1200 DPI", "Multi-material capability", "Bulk pricing for 10+ items", "Free design consultation and digital proof", "Typical turnaround: 2-5 business days"],
    price: "From $15/item"
  },
  {
    slug: "industrial-marking", title: "Industrial Marking", tagline: "Permanent, precise, compliant",
    description: "Durable part marking for traceability, compliance, and branding. Serial numbers, barcodes, QR codes, and logos.",
    icon: faIndustry, image: "/images/services/industrial-marking.jpg",
    features: ["Serial Numbers & UIDs", "Barcode & QR Code", "Logo & Brand Marking", "Regulatory Compliance"],
    details: ["FDA/ISO-compliant marking", "Deep engraving for harsh environments", "Automated batch processing", "ERP system integration", "Typical turnaround: 1-3 business days"],
    price: "From $0.50/part"
  },
  {
    slug: "awards-trophies", title: "Awards & Trophies", tagline: "Recognition that lasts",
    description: "Custom awards, plaques, and trophies for corporate events, sports leagues, and academic achievements.",
    icon: faTrophy, image: "/images/services/awards-trophies.jpg",
    features: ["Crystal & Glass Awards", "Metal Plaques", "Acrylic Trophies", "Custom Shapes"],
    details: ["Full-color UV printing available", "Mix of materials", "Rush service for events", "Design templates provided", "Typical turnaround: 5-7 business days"],
    price: "From $35/award"
  },
  {
    slug: "signage", title: "Business Signage", tagline: "Make your mark visible",
    description: "Professional indoor and outdoor signage. Office signs, directional signs, ADA-compliant signage, and lobby displays.",
    icon: faSignHanging, image: "/images/services/signage.jpg",
    features: ["ADA-Compliant Signs", "Lobby & Reception", "Wayfinding Signs", "Custom Dimensions"],
    details: ["ADA-compliant braille and tactile", "Weather-resistant outdoor signs", "LED-backlit illuminated panels", "Mounting hardware included", "Typical turnaround: 3-5 business days"],
    price: "From $25/sign"
  },
  {
    slug: "personalization", title: "Gift Personalization", tagline: "Make every gift unforgettable",
    description: "Add names, dates, messages, and artwork to gifts. Perfect for weddings, anniversaries, and special occasions.",
    icon: faGift, image: "/images/services/personalization.jpg",
    features: ["Names & Monograms", "Dates & Messages", "Photo Engraving", "Custom Artwork"],
    details: ["Personalize customer-supplied items", "Wedding favor bulk pricing", "Photo-to-engraving conversion", "Gift wrapping & direct shipping", "Typical turnaround: 3-5 business days"],
    price: "From $10/item"
  },
  {
    slug: "corporate-gifts", title: "Corporate Gifts", tagline: "Branded excellence for your team",
    description: "Premium branded merchandise, executive gifts, and employee recognition items that showcase your brand identity.",
    icon: faBuilding, image: "/images/services/corporate-gifts.jpg",
    features: ["Executive Gift Sets", "Branded Merchandise", "Employee Recognition", "Client Appreciation"],
    details: ["Full brand integration", "Premium materials: walnut, leather", "Fulfillment services included", "Holiday gift program scheduling", "Typical turnaround: 7-10 business days"],
    price: "From $30/gift"
  },
  {
    slug: "prototyping", title: "Rapid Prototyping", tagline: "From concept to reality in hours",
    description: "Quick-turn prototype engraving for product designers, inventors, and manufacturers. Test before full production.",
    icon: faFlask, image: "/images/services/prototyping.jpg",
    features: ["Same-Day Service", "Multi-Material Testing", "Design Iteration", "Production Handoff"],
    details: ["Same-day prototype engraving", "Test multiple techniques at once", "Unlimited revisions in session", "Production settings report", "Typical turnaround: Same day to 24 hours"],
    price: "From $50/session"
  }
];

export interface ProjectItem {
  slug: string; title: string; category: string; description: string; image: string;
}

export const projects: ProjectItem[] = [
  { slug: "corporate-awards", title: "Annual Corporate Awards", category: "Awards", description: "500+ custom crystal awards for Fortune 500 annual gala", image: "/images/projects/corporate-awards.jpg" },
  { slug: "industrial-parts", title: "Industrial Parts Marking", category: "Industrial", description: "100K+ aerospace components with serialized traceability", image: "/images/projects/industrial-parts.jpg" },
  { slug: "wedding-gifts", title: "Wedding Gift Collection", category: "Personalization", description: "Custom engraved gifts for 200-guest destination wedding", image: "/images/projects/wedding-gifts.jpg" },
  { slug: "retail-signage", title: "Retail Signage Suite", category: "Signage", description: "Complete indoor/outdoor signage for 12-location chain", image: "/images/projects/retail-signage.jpg" },
  { slug: "tech-gadgets", title: "Tech Gadget Engraving", category: "Custom", description: "Branded laptop and phone engraving for 3K+ employee rollout", image: "/images/projects/tech-gadgets.jpg" },
  { slug: "memorial-plaques", title: "Memorial Plaque Series", category: "Personalization", description: "Bronze and granite memorial plaques for city heritage park", image: "/images/projects/memorial-plaques.jpg" }
];

export interface TestimonialItem { name: string; role: string; company: string; quote: string; }

export const testimonials: TestimonialItem[] = [
  { name: "Sarah Chen", role: "HR Director", company: "Apex Manufacturing", quote: "PrecisionCraft handled our employee recognition program flawlessly. The engraved awards were stunning and arrived ahead of schedule." },
  { name: "Marcus Rivera", role: "Operations Manager", company: "MedTech Solutions", quote: "Their industrial marking met all our FDA compliance requirements. We've been using them for 3 years without a single issue." },
  { name: "Emily Watson", role: "Event Planner", company: "Watson Events", quote: "The wedding favors were absolutely gorgeous. Every guest commented on the quality of the engraving. Truly exceptional work." },
  { name: "David Park", role: "Facilities Director", company: "Summit Retail Group", quote: "From lobby signs to wayfinding across 12 locations, PrecisionCraft delivered consistent quality and fast turnaround." },
  { name: "Lisa Thompson", role: "CEO", company: "Thompson Innovations", quote: "Their prototyping service saved us weeks in product development. Same-day turnaround with perfect results." }
];

export interface FAQItem { q: string; a: string; }

export const faqs: FAQItem[] = [
  { q: "What materials can you engrave?", a: "We engrave wood, metal (stainless steel, aluminum, brass, copper), acrylic, glass, leather, stone, and many plastics. Contact us for specialty materials." },
  { q: "What file formats do you accept?", a: "We accept AI, EPS, SVG, PDF, PNG, and DXF files. Vector files produce the best results. We can also work from sketches or photos." },
  { q: "What's the minimum order quantity?", a: "No minimum! We handle single-item custom orders and bulk production runs alike. Pricing scales with quantity." },
  { q: "How long does a typical order take?", a: "Standard orders: 3-7 business days. Rush service available (1-2 days). Industrial runs depend on volume." },
  { q: "Do you offer design services?", a: "Yes! Our in-house design team can create artwork from your ideas, refine existing designs, or prepare your files." },
  { q: "Can you engrave items I provide?", a: "Absolutely. We can personalize customer-supplied items. We'll test a sample first to ensure compatibility." }
];

export const pricingTiers = [
  { name: "Basic Engraving", price: "$15", unit: "/item", features: ["Single material", "Up to 3x3 inch area", "Standard depth", "Digital proof included", "3-5 day turnaround"] },
  { name: "Professional", price: "$45", unit: "/item", features: ["Multi-material", "Up to 8x8 inch area", "Variable depth", "Design refinement", "2-3 day turnaround"] },
  { name: "Industrial", price: "Custom", unit: "", features: ["High volume runs", "Any size/material", "Deep engraving", "ERP integration", "Dedicated account manager"] }
];
