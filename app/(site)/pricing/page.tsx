"use client";

import PricingSection from "@/components/sections/PricingSection";
import PageTransition from "@/components/animations/PageTransition";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="site">
        <PricingSection />
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}
