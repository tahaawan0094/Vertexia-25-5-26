"use client";

import PricingSection from "@/components/sections/PricingSection";
import PageTransition from "@/components/animations/PageTransition";

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="site">
        <PricingSection />
      </main>
    </PageTransition>
  );
}
