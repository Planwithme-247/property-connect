import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function Layout({ children, hideStickyCTA = false }: { children: ReactNode; hideStickyCTA?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      {!hideStickyCTA && <StickyCTA />}
    </div>
  );
}
