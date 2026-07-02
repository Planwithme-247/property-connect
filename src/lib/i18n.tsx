import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const dict = {
  en: {
    "nav.rentals": "Rentals",
    "nav.list": "List Property",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.requestTour": "Request Tour",
    "cta.browse": "Browse Properties",
    "cta.schedule": "Schedule a Tour",
    "cta.apply": "Apply Now",
    "hero.badge": "Maryland • DC • Virginia",
    "hero.title": "Find Your Next Home With Confidence",
    "hero.sub": "Browse available rental homes in Maryland, DC & Virginia. Schedule tours and apply after viewing.",
    "how.eyebrow": "How it works",
    "how.title": "Simple 3-Step Process",
    "how.s1.t": "Browse Available Properties",
    "how.s1.b": "Explore verified rentals across MD, DC, and VA — updated daily.",
    "how.s2.t": "Request a Tour",
    "how.s2.b": "No application required yet. Pick a time that works and meet us on-site.",
    "how.s3.t": "Complete Application After Tour",
    "how.s3.b": "Once you've toured, submit your application and pay the screening fee to move forward.",
    "tour.title": "Request a Tour",
    "tour.sub": "Tour first — no application required until after your visit. We respond within one business day.",
    "form.name": "Full Name",
    "form.phone": "Phone / WhatsApp",
    "form.email": "Email",
    "form.property": "Property Interested In",
    "form.date": "Preferred Tour Date",
    "form.timeline": "Move-in Timeline",
    "form.message": "Message (optional)",
    "form.submitTour": "Schedule My Tour",
    "form.sentTitle": "Tour request received",
    "form.sentBody": "We'll confirm your tour time shortly by phone, WhatsApp, or email.",
    "apply.note": "Applications are completed after a property tour. A screening fee applies at this step.",
  },
  es: {
    "nav.rentals": "Alquileres",
    "nav.list": "Publicar Propiedad",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "cta.requestTour": "Agendar Visita",
    "cta.browse": "Ver Propiedades",
    "cta.schedule": "Agendar una Visita",
    "cta.apply": "Aplicar Ahora",
    "hero.badge": "Maryland • DC • Virginia",
    "hero.title": "Encuentra Tu Próximo Hogar Con Confianza",
    "hero.sub": "Explora casas en renta en Maryland, DC y Virginia. Agenda visitas y aplica después de verla.",
    "how.eyebrow": "Cómo funciona",
    "how.title": "Proceso Simple de 3 Pasos",
    "how.s1.t": "Explora Propiedades Disponibles",
    "how.s1.b": "Rentas verificadas en MD, DC y VA — actualizadas a diario.",
    "how.s2.t": "Solicita una Visita",
    "how.s2.b": "Aún no necesitas aplicar. Elige un horario y te esperamos en el sitio.",
    "how.s3.t": "Completa la Aplicación Después de la Visita",
    "how.s3.b": "Después del tour, envía tu aplicación y paga la cuota de verificación para continuar.",
    "tour.title": "Solicitar una Visita",
    "tour.sub": "Primero la visita — no necesitas aplicar hasta después. Respondemos en un día hábil.",
    "form.name": "Nombre Completo",
    "form.phone": "Teléfono / WhatsApp",
    "form.email": "Correo Electrónico",
    "form.property": "Propiedad de Interés",
    "form.date": "Fecha Preferida de Visita",
    "form.timeline": "Plazo para Mudarte",
    "form.message": "Mensaje (opcional)",
    "form.submitTour": "Agendar Mi Visita",
    "form.sentTitle": "Solicitud de visita recibida",
    "form.sentBody": "Confirmaremos el horario pronto por teléfono, WhatsApp o correo.",
    "apply.note": "Las aplicaciones se completan después del tour. En este paso aplica una cuota de verificación.",
  },
} as const;

type Key = keyof (typeof dict)["en"];

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("apmm.lang") as Lang | null) : null;
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("apmm.lang", l);
  };
  const t = (k: Key) => dict[lang][k] ?? dict.en[k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useT() {
  return useContext(Ctx);
}
