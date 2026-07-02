import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, MessageSquare, ShieldCheck, Users } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Affordable Property Marketing" },
      { name: "description", content: "Professional tenant placement, verified screening, and transparent operations across Maryland, DC, and Virginia." },
      { property: "og:title", content: "About Affordable Property Marketing" },
      { property: "og:description", content: "Professional tenant placement across MD, DC, VA." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: BadgeCheck, title: "Professional placement", body: "Every tenant is thoroughly screened before we recommend a match." },
  { icon: MessageSquare, title: "Fast communication", body: "Responses within one business day — English or Spanish." },
  { icon: ShieldCheck, title: "Verified screening", body: "Credit, income, and background review on every applicant." },
  { icon: Users, title: "Serving MD, DC & VA", body: "Focused local expertise across the DMV." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-tight py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Trusted tenant placement across the DMV</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Affordable Property Marketing Management LLC connects qualified tenants with quality homes — with transparent operations and a fast, bilingual team.
          </p>
        </div>
      </section>

      <section className="container-tight py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">{v.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/rentals" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Browse Rentals</Link>
          <Link to="/list-property" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground">List Your Property</Link>
        </div>
      </section>
    </Layout>
  );
}
