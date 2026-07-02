import { Link } from "@tanstack/react-router";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Link
        to="/apply"
        className="flex h-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-soft"
      >
        Apply Now
      </Link>
    </div>
  );
}
