import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Field, Select, TextArea, TextInput } from "@/components/site/Field";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply for a Rental | Affordable Property Marketing" },
      { name: "description", content: "Submit your full rental application. Fast response, English & Spanish support, serving MD, DC, and VA." },
      { property: "og:title", content: "Apply for a Rental" },
      { property: "og:description", content: "Full rental application — fast response across MD, DC, VA." },
      { property: "og:url", content: "/apply" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rental Application</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Apply for your next home</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Complete this application to start the qualification process. Our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="container-tight grid gap-8 py-10 md:py-14 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-4">
          {[
            "Comprehensive tenant screening",
            "Fast turnaround — usually within 24 hours",
            "English & Spanish support",
            "Verified listings across MD, DC, VA",
          ].map((x) => (
            <div key={x} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm text-foreground/90">{x}</p>
            </div>
          ))}
          <div className="flex items-start gap-2 rounded-xl border border-dashed border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
            Your information is used only for tenant qualification and is never shared publicly.
          </div>
        </aside>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <h2 className="font-display text-2xl font-semibold">Application received</h2>
              <p className="mt-2 text-muted-foreground">Thanks — a placement specialist will contact you shortly.</p>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Full Name"><TextInput required /></Field>
              <Field label="Phone"><TextInput required type="tel" /></Field>
              <Field label="Email"><TextInput required type="email" /></Field>
              <Field label="Preferred Move-in Date"><TextInput required type="date" /></Field>
              <Field label="Monthly Household Income"><TextInput required inputMode="numeric" placeholder="$" /></Field>
              <Field label="Employment Status">
                <Select>
                  <option>Employed — full time</option>
                  <option>Employed — part time</option>
                  <option>Self-employed</option>
                  <option>Student</option>
                  <option>Retired</option>
                </Select>
              </Field>
              <Field label="Household Size"><TextInput required type="number" min={1} /></Field>
              <Field label="Pets">
                <Select>
                  <option>None</option>
                  <option>1 cat</option>
                  <option>1 dog</option>
                  <option>2+ pets</option>
                </Select>
              </Field>
              <Field label="Preferred Area">
                <Select>
                  <option>Maryland — Any</option>
                  <option>Baltimore area</option>
                  <option>Silver Spring / Bethesda</option>
                  <option>Bowie / Laurel</option>
                  <option>Washington, DC</option>
                  <option>Northern Virginia</option>
                </Select>
              </Field>
              <Field label="Property ID (optional)"><TextInput placeholder="APM-000" /></Field>
              <div className="sm:col-span-2">
                <Field label="Anything we should know? (optional)"><TextArea /></Field>
              </div>
              <button className="mt-2 h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft sm:col-span-2">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
