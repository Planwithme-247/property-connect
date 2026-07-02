import { Link } from "@tanstack/react-router";
import { Bed, Bath, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/lib/properties";

const tagStyles: Record<string, string> = {
  NEW: "bg-primary text-primary-foreground",
  "MOVE-IN READY": "bg-gold text-gold-foreground",
  "PET FRIENDLY": "bg-accent text-accent-foreground",
};

export function PropertyCard({ p, priority = false }: { p: Property; priority?: boolean }) {
  return (
    <Link
      to="/rentals/$slug"
      params={{ slug: p.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={`${p.title} — rental in ${p.city}`}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${tagStyles[t]}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-background/95 px-3 py-1.5 text-sm font-semibold shadow-soft">
          ${p.rent.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {p.city}
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{p.title}</h3>
        <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Bed className="h-4 w-4" />{p.beds || "Studio"}</span>
          <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{p.baths}</span>
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{p.sqft} ft²</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-muted-foreground">Ref {p.id}</span>
          <span className="text-sm font-semibold text-primary">I'm Interested →</span>
        </div>
      </div>
    </Link>
  );
}
