import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bath, Bed, Check, MapPin, Ruler, ShieldAlert } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Field, Select, TextArea, TextInput } from "@/components/site/Field";
import { getProperty, properties, type Property } from "@/lib/properties";
import { useState } from "react";

export const Route = createFileRoute("/rentals/$slug")({
  loader: ({ params }): Property => {
    const p = getProperty(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }: { loaderData?: Property }) => {
    const p = loaderData;
    if (!p) return { meta: [{ title: "Rental not found" }] };
    return {
      meta: [
        { title: `${p.title} — $${p.rent}/mo | Affordable Property Marketing` },
        { name: "description", content: `${p.beds}BR / ${p.baths}BA rental in ${p.city}. ${p.description.slice(0, 140)}` },
        { property: "og:title", content: `${p.title} — $${p.rent}/mo` },
        { property: "og:description", content: `${p.beds}BR / ${p.baths}BA rental in ${p.city}.` },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/rentals/${p.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/rentals/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Apartment",
            name: p.title,
            image: p.image,
            numberOfRooms: p.beds,
            floorSize: { "@type": "QuantitativeValue", value: p.sqft, unitCode: "FTK" },
            address: { "@type": "PostalAddress", addressLocality: p.city, addressRegion: p.state, addressCountry: "US" },
            offers: { "@type": "Offer", price: p.rent, priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container-tight py-24 text-center">
        <h1 className="font-display text-3xl font-semibold">Rental not found</h1>
        <p className="mt-2 text-muted-foreground">This listing may have been leased.</p>
        <Link to="/rentals" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
          Browse all rentals
        </Link>
      </div>
    </Layout>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const p = Route.useLoaderData() as Property;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", timeframe: "1-2 months", message: "" });

  return (
    <Layout>
      <div className="container-tight py-6">
        <Link to="/rentals" className="text-sm text-muted-foreground hover:text-foreground">← All rentals</Link>
      </div>

      <section className="container-tight grid gap-8 pb-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" />
          </div>
          {p.gallery.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {p.gallery.map((g) => (
                <img key={g} src={g} alt={p.title} loading="lazy" className="aspect-[4/3] w-full rounded-2xl border border-border object-cover" />
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">{t}</span>
            ))}
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{p.title}</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {p.city} · Ref {p.id}
          </p>
          <p className="mt-4 text-3xl font-semibold">
            ${p.rent.toLocaleString()}<span className="text-base font-normal text-muted-foreground">/mo</span>
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { icon: Bed, label: p.beds ? `${p.beds} Beds` : "Studio" },
              { icon: Bath, label: `${p.baths} Baths` },
              { icon: Ruler, label: `${p.sqft} ft²` },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-3 text-center">
                <s.icon className="mx-auto h-4 w-4 text-primary" />
                <p className="mt-1 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-foreground/80">
                <Check className="h-4 w-4 text-primary" /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-2 rounded-xl border border-dashed border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            For privacy and security, the exact address is provided after qualification or a scheduled tour.
          </div>
        </div>
      </section>

      {/* TOUR REQUEST FORM */}
      <section className="container-tight pb-16">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Request a Tour</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Tour {p.title} first</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No application required yet — pick a preferred date and we'll confirm shortly. After the tour, you'll get your application link (screening fee applies at that step).
            </p>
          </div>
          <div>
            {sent ? (
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
                <h3 className="font-display text-xl font-semibold">Tour request received</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll confirm your tour time shortly by phone, WhatsApp, or email. Application comes after the tour.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-3"
              >
                <input type="hidden" value={p.id} />
                <Field label="Full Name">
                  <TextInput required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </Field>
                <Field label="Phone / WhatsApp">
                  <TextInput required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </Field>
                <Field label="Email">
                  <TextInput required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
                <Field label="Preferred Tour Date">
                  <TextInput required type="date" />
                </Field>
                <Field label="Move-in Timeline">
                  <Select value={form.timeframe} onChange={(e) => setForm({ ...form, timeframe: e.target.value })}>
                    <option>Immediately</option>
                    <option>Within 30 days</option>
                    <option>1-2 months</option>
                    <option>3+ months</option>
                  </Select>
                </Field>
                <Field label="Message (optional)">
                  <TextArea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </Field>
                <button className="mt-2 h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft">
                  Schedule My Tour (Ref {p.id})
                </button>
              </form>
            )}
          </div>
        </div>
      </section>


      {/* SIMILAR */}
      <section className="container-tight pb-16">
        <h2 className="font-display text-2xl font-semibold">Similar rentals</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.filter((x) => x.id !== p.id && x.state === p.state).slice(0, 3).map((x) => (
            <a key={x.id} href={`/rentals/${x.slug}`} className="block">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={x.image} alt={x.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs text-muted-foreground">{x.city}</p>
                  <p className="font-display text-lg font-semibold">{x.title}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">${x.rent.toLocaleString()}/mo</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
