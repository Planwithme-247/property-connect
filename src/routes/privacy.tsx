import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Affordable Property Marketing" },
      { name: "description", content: "How Affordable Property Marketing handles your information." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How Affordable Property Marketing handles your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <section className="container-tight py-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Privacy</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
        <div className="prose prose-sm mt-8 max-w-2xl space-y-4 text-sm text-muted-foreground">
          <p>
            This page is maintained by Affordable Property Marketing Management LLC to explain how we collect and use information submitted through our website.
          </p>
          <h2 className="mt-6 font-display text-lg font-semibold text-foreground">What we collect</h2>
          <p>Information you submit through rental applications, inquiry forms, and property owner forms — including name, contact details, and details relevant to qualification.</p>
          <h2 className="mt-6 font-display text-lg font-semibold text-foreground">How we use it</h2>
          <p>To respond to inquiries, evaluate applications, and connect qualified tenants with property owners. We do not sell your personal information.</p>
          <h2 className="mt-6 font-display text-lg font-semibold text-foreground">Property address privacy</h2>
          <p>For the safety of our residents and owners, exact property addresses are shared only after qualification, prequalification, or a scheduled tour.</p>
          <h2 className="mt-6 font-display text-lg font-semibold text-foreground">Contact</h2>
          <p>Questions? Email info@affordablepm.com.</p>
        </div>
      </section>
    </Layout>
  );
}
