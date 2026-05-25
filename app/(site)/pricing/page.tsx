import PricingSection from "@/components/sections/PricingSection";
import TrustpilotSection from "@/components/sections/TrustpilotSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export const metadata = {
  title: "Pricing - Vertexia",
  description: "Affordable website pricing plans for your business. Launch, manage, and grow your business online with our transparent pricing.",
};

export default function PricingPage() {
  return (
    <main className="site">
      <PricingSection />
      <TrustpilotSection />
      <FaqSection />
      <ProfessionalWebSection />
      <FooterLinksSection />
    </main>
  );
}
