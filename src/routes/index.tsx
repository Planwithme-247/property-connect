import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ClipboardCheck, Search, ShieldCheck, Sparkles, CalendarCheck } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { TrustBar } from "@/components/site/TrustBar";
import { PropertyCard } from "@/components/site/PropertyCard";
import { featured, properties } from "@/lib/properties";
import { useT } from "@/lib/i18n";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rentals in Maryland, DC & Virginia | Affordable Property Marketing" },
      { name: "description", content: "Find your next home with confidence. Verified rentals and professional tenant placement across MD, DC, and VA." },
      { property: "og:title", content: "Rentals in Maryland, DC & Virginia | Affordable Property Marketing" },
      { property: "og:description", content: "Verified rentals and professional tenant placement across MD, DC, and VA." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Affordable Property Marketing Management LLC",
          areaServed: ["Maryland", "Washington DC", "Virginia"],
          knowsLanguage: ["English", "Spanish"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Modern residential home at dusk"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="container-tight pt-14 pb-20 md:pt-24 md:pb-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Maryland • DC • Virginia
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Find Your Next Home With Confidence
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Professional tenant placement and property marketing services across Maryland, DC, and Virginia — verified listings, fast response, English & Spanish support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/rentals"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              Browse Available Rentals <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/list-property"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-7 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* FEATURED */}
      <section className="container-tight py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured Rentals</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Homes ready to tour</h2>
          </div>
          <Link to="/rentals" className="hidden text-sm font-semibold text-primary sm:inline-flex">
            View all {properties.length} →
          </Link>
        </div>

        {/* Mobile: swipeable */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden">
          {featured.map((p, i) => (
            <div key={p.id} className="w-[85%] shrink-0 snap-start">
              <PropertyCard p={p} priority={i === 0} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} p={p} priority={i === 0} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link to="/rentals" className="text-sm font-semibold text-primary">
            View all {properties.length} rentals →
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/50 py-14 md:py-20">
        <div className="container-tight">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">A simple path to your next home</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: Search, title: "Browse verified rentals", body: "Explore homes across MD, DC, and VA — all screened and market-ready." },
              { icon: ClipboardCheck, title: "Apply in minutes", body: "Submit your application online. We respond fast, in English or Spanish." },
              { icon: HomeIcon, title: "Move in with confidence", body: "Sign, get keys, and settle in — with a team that stands behind the listing." },
            ].map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER CTA */}
      <section className="container-tight py-14 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-soft sm:p-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
                <Building2 className="h-3.5 w-3.5" /> For Property Owners
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Need a qualified tenant?</h2>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                We help property owners reduce vacancy through professional marketing, screening, and tenant placement services.
              </p>
              <div className="mt-6">
                <Link
                  to="/list-property"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  List Your Property <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 text-sm">
              {[
                "Professional listing marketing",
                "Comprehensive applicant screening",
                "Faster time to lease",
                "Transparent communication",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRIVACY NOTICE */}
      <section className="container-tight pb-16">
        <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">Privacy first.</strong>{" "}
          For the safety of our residents and owners, exact property addresses are provided after qualification, prequalification, or a scheduled tour.
        </div>
      </section>
    </Layout>
  );
}
