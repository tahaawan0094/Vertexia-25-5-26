"use client";

import PricingSection from "@/components/sections/PricingSection";
import PageTransition from "@/components/animations/PageTransition";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import TrustpilotSection from "@/components/sections/TrustpilotSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="site">
        <PricingSection />
        <TrustpilotSection />
        <FaqSection />
        <ProfessionalWebSection />
        <FooterLinksSection />
      </main>
    </PageTransition>
  );
}
