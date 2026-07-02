import { useT } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 text-xs font-semibold ${className}`}>
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
