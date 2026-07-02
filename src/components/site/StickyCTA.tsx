import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function StickyCTA() {
  const { t } = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Link
        to="/rentals"
        className="flex h-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-soft"
      >
        {t("cta.requestTour")}
      </Link>
    </div>
  );
}
