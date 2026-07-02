import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Field, TextArea, TextInput } from "@/components/site/Field";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Affordable Property Marketing" },
      { name: "description", content: "Reach the Affordable Property Marketing team. Serving Maryland, DC, and Virginia. English & Spanish support." },
      { property: "og:title", content: "Contact Affordable Property Marketing" },
      { property: "og:description", content: "Reach us for rentals, applications, or property listings." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">We're here to help</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Questions about a listing, application, or listing your property? Reach out — we respond fast, in English or Spanish.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-8 py-10 md:py-14 lg:grid-cols-[1fr_1.3fr]">
        <aside className="space-y-3">
          <a href="tel:+12405550100" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-primary">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Call us</p>
              <p className="font-semibold">(240) 555-0100</p>
            </div>
          </a>
          <a href="mailto:info@affordablepm.com" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-primary">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold">info@affordablepm.com</p>
            </div>
          </a>
          <a href="https://wa.me/12405550100" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-primary">
            <MessageCircle className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="font-semibold">Message us instantly</p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Service area</p>
              <p className="font-semibold">Maryland • Washington, DC • Virginia</p>
            </div>
          </div>
        </aside>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <h2 className="font-display text-2xl font-semibold">Message sent</h2>
              <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Name"><TextInput required /></Field>
              <Field label="Phone"><TextInput required type="tel" /></Field>
              <div className="sm:col-span-2"><Field label="Email"><TextInput required type="email" /></Field></div>
              <div className="sm:col-span-2"><Field label="How can we help?"><TextArea required /></Field></div>
              <button className="h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft sm:col-span-2">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
