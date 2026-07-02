import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/lib/properties";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Available Rentals in MD, DC & VA | Affordable Property Marketing" },
      { name: "description", content: "Browse verified rental homes and apartments across Maryland, DC, and Virginia. Tenant screening, fast response, and English & Spanish support." },
      { property: "og:title", content: "Available Rentals in MD, DC & VA" },
      { property: "og:description", content: "Verified rental homes and apartments across Maryland, DC, and Virginia." },
      { property: "og:url", content: "/rentals" },
    ],
    links: [{ rel: "canonical", href: "/rentals" }],
  }),
  component: RentalsPage,
});

const states = ["All", "MD", "DC", "VA"] as const;
const bedOptions = ["Any", "1+", "2+", "3+", "4+"] as const;

function RentalsPage() {
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [beds, setBeds] = useState<(typeof bedOptions)[number]>("Any");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (state !== "All" && p.state !== state) return false;
      if (beds !== "Any" && p.beds < parseInt(beds)) return false;
      if (q && !`${p.title} ${p.city}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [state, beds, q]);

  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Rentals</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            Available Homes & Apartments
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {properties.length} verified rentals across Maryland, DC, and Virginia. All properties are professionally marketed and tenant-screened.
          </p>

          <div className="mt-6 grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-card sm:grid-cols-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search city or title"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:col-span-3"
            />
            <select
              value={state}
              onChange={(e) => setState(e.target.value as any)}
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
            >
              {states.map((s) => (
                <option key={s} value={s}>{s === "All" ? "All areas" : s}</option>
              ))}
            </select>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value as any)}
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm"
            >
              {bedOptions.map((b) => (
                <option key={b} value={b}>{b === "Any" ? "Any beds" : `${b} beds`}</option>
              ))}
            </select>
            <div className="flex items-center justify-center rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-foreground">
              {filtered.length} results
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight py-10 md:py-14">
        {/* Mobile swipe */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden">
          {filtered.map((p, i) => (
            <div key={p.id} className="w-[85%] shrink-0 snap-start">
              <PropertyCard p={p} priority={i === 0} />
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PropertyCard key={p.id} p={p} priority={i === 0} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No matching rentals. Try widening your filters.
          </div>
        )}
      </section>
    </Layout>
  );
}
