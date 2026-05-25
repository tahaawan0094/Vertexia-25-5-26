import HeroSection from "@/components/sections/HeroSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import AlternativesSection from "@/components/sections/AlternativesSection";
import ThankfulSection from "@/components/sections/ThankfulSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StepsSection from "@/components/sections/StepsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import RoiSection from "@/components/sections/RoiSection";
import TrustpilotSection from "@/components/sections/TrustpilotSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export default function HomePage() {
  return (
    <main className="site">
      <HeroSection />
      <ShowcaseSection />
      <AlternativesSection />
      <ThankfulSection />
      <ComparisonSection />
      <IndustriesSection />
      <HowItWorksSection />
      <StepsSection />
      <WhyChooseSection />
      <RoiSection />
      <TrustpilotSection />
      <FaqSection />
      <ProfessionalWebSection />
      <FooterLinksSection />
    </main>
  );
}
