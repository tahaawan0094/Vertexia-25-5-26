import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Website Development Pricing Pakistan | Vertexia",
  description: "Affordable custom website development packages for businesses in Pakistan.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="site">
      <PricingSection />
    </main>
  );
}
