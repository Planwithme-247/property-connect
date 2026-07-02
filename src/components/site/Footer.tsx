import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="container-tight grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Home className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">Affordable Property Marketing</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Professional tenant placement and property marketing across Maryland, DC, and Virginia.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Serving MD • DC • VA · English & Spanish support
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/rentals" className="hover:text-foreground">Available Rentals</Link></li>
            <li><Link to="/apply" className="hover:text-foreground">Apply</Link></li>
            <li><Link to="/list-property" className="hover:text-foreground">List Property</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container-tight flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Affordable Property Marketing Management LLC. All rights reserved.</p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
