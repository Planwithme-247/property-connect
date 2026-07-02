import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Field, Select, TextArea, TextInput } from "@/components/site/Field";

export const Route = createFileRoute("/list-property")({
  head: () => ({
    meta: [
      { title: "List Your Property | Affordable Property Marketing" },
      { name: "description", content: "Reduce vacancy with professional marketing, applicant screening, and tenant placement across MD, DC, and VA." },
      { property: "og:title", content: "List Your Property with Affordable Property Marketing" },
      { property: "og:description", content: "Professional tenant placement across MD, DC, VA." },
      { property: "og:url", content: "/list-property" },
    ],
    links: [{ rel: "canonical", href: "/list-property" }],
  }),
  component: ListPropertyPage,
});

function ListPropertyPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-tight py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Building2 className="h-3.5 w-3.5" /> For Property Owners
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Need a qualified tenant?</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            We help property owners reduce vacancy through professional marketing, applicant screening, and tenant placement services.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-8 py-10 md:py-14 lg:grid-cols-[1fr_1.3fr]">
        <aside className="space-y-3">
          {[
            "Professional listing marketing across major platforms",
            "Comprehensive applicant screening (credit, income, background)",
            "Faster time to lease with a qualified pipeline",
            "Transparent communication throughout the process",
            "Bilingual reach — English and Spanish audiences",
          ].map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm text-foreground/90">{x}</p>
            </div>
          ))}
        </aside>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <h2 className="font-display text-2xl font-semibold">Thank you</h2>
              <p className="mt-2 text-muted-foreground">A specialist will reach out to discuss your property and next steps.</p>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Full Name"><TextInput required /></Field>
              <Field label="Phone"><TextInput required type="tel" /></Field>
              <div className="sm:col-span-2"><Field label="Email"><TextInput required type="email" /></Field></div>
              <Field label="Property Location (City / State)"><TextInput required placeholder="e.g. Silver Spring, MD" /></Field>
              <Field label="Property Type">
                <Select>
                  <option>Single-family home</option>
                  <option>Townhome</option>
                  <option>Condo</option>
                  <option>Apartment / Multi-unit</option>
                  <option>Other</option>
                </Select>
              </Field>
              <Field label="Vacancy Status">
                <Select>
                  <option>Currently vacant</option>
                  <option>Vacant within 30 days</option>
                  <option>Vacant within 60+ days</option>
                  <option>Currently occupied</option>
                </Select>
              </Field>
              <Field label="Target Monthly Rent (optional)"><TextInput inputMode="numeric" placeholder="$" /></Field>
              <div className="sm:col-span-2"><Field label="Message (optional)"><TextArea placeholder="Tell us about the property..." /></Field></div>
              <button className="mt-2 h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft sm:col-span-2">
                Request a Callback
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
