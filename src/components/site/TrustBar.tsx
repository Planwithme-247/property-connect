import { ShieldCheck, Zap, BadgeCheck, Languages, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Tenant Screening" },
  { icon: Zap, label: "Fast Response" },
  { icon: BadgeCheck, label: "Verified Listings" },
  { icon: Languages, label: "English & Spanish" },
  { icon: MapPin, label: "MD • DC • VA" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-secondary/50">
      <div className="container-tight flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 md:justify-center md:overflow-visible">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex shrink-0 snap-start items-center gap-2 text-sm font-medium text-foreground/80"
          >
            <Icon className="h-4 w-4 text-primary" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
