import DoneForYouHeroSection from "@/components/sections/DoneForYouHeroSection";
import DoneForYouTable from "@/components/sections/DoneForYouTable";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata = {
  title: "Done For You Website - Vertexia",
  description: "Get a website built for you in 7 days. Domain, hosting, security and 0% transaction fees.",
};

export default function DoneForYouWebsitePage() {
  return (
    <main className="site bg-black">
      <DoneForYouHeroSection />
      <section className="bg-[#000] pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <DoneForYouTable />
      </section>
      <HowItWorksSection />
      <section className="bg-[#000] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] justify-center">
          <a
            href="#"
            className="inline-flex min-w-[220px] justify-center rounded-[16px] bg-[#FF5A4E] px-20 py-4 text-xl font-semibold text-white shadow-[0_20px_60px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff6f58] max-[640px]:min-w-[200px] max-[640px]:px-18 max-[640px]:py-5 max-[640px]:text-2xl"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
