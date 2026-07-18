"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-primary mb-6" />
          <h1 className="text-3xl font-bold tracking-tight mb-4">Thank You!</h1>
          <p className="text-muted-foreground mb-8">Your quote request has been received. We'll get back to you within 24 hours with a detailed estimate.</p>
          <Button onClick={() => { setSubmitted(false); setName(""); setEmail(""); setPhone(""); setService(""); setMessage(""); }}>
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get a Free Quote</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Tell us about your project and we'll provide a detailed estimate within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name *</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service Interest *</label>
                      <Select value={service} onValueChange={(v: string | null) => setService(v || "")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Project Description *</label>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project — material, quantity, timeline, and any design ideas..." rows={5} required />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                    {loading ? "Sending..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader><CardTitle className="text-lg">Contact Info</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="size-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">1420 Industrial Blvd, Suite 300<br/>Denver, CO 80204</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="size-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(303) 555-0187</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="size-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">info@precisioncraft.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader><CardTitle className="text-lg">Business Hours</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Mon - Fri</span><span className="font-medium">8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">9:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">Closed</span></div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader><CardTitle className="text-lg">Quick Links</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Badge key={s.slug} variant="secondary">{s.title}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
