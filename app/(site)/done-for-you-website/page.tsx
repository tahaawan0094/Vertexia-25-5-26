import DoneForYouHeroSection from "@/components/sections/DoneForYouHeroSection";
import DoneForYouTable from "@/components/sections/DoneForYouTable";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata = {
  title: "Done For You Website - Vertexia",
  description:
    "Get a website built for you in 7 days. Domain, hosting, security and 0% transaction fees.",
};

export default function DoneForYouWebsitePage() {
  return (
    <main className="site bg-black">
      <DoneForYouHeroSection />

      <section className="bg-[#000] pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <DoneForYouTable />
      </section>

      {/* BUTTON INSIDE COMPONENT */}
      <HowItWorksSection showButton />
    </main>
  );
}