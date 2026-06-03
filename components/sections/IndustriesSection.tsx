"use client";

import FadeIn from "@/components/animations/FadeIn";

const categories = [
  "Professional Services",
  "Hair & Beauty",
  "Building & Maintenance",
  "Clothes & Accessories",
  "Shopping & Retail",
  "Transportation & Automotive",
  "Arts & Design",
  "Health & Wellness",
  "Events",
  "Restaurants",
  "Coming Soon"
];

const exampleCards = [
  {
    title: "Estate Agent",
    image: "/images%204/fast-loading-responsive-business-website.webp"
  },
  {
    title: "Business Consultant",
    image: "/images%204/scalable-custom-website-solutions.webp"
  }
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#040404] px-6 pb-32 pt-24 text-white max-[640px]:pt-8">
      <FadeIn>
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[clamp(2.2rem,4.6vw,3.9rem)] font-medium leading-tight">
          We&apos;ve built{" "}
          <span className="box-decoration-clone inline-block border-l-4 border-[#FF5A4E] bg-[linear-gradient(-50deg,rgba(255,90,78,0)_22%,rgba(255,90,78,0.65))] px-2 text-white">
            7,000 websites
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-[820px] text-lg text-white/55">
          Whether your business is new or established, local business or
          e-commerce, we are here to serve you. Over 1,000 business categories
          served.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3 max-[640px]:gap-2">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`rounded-[10px] px-5 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.25)] max-[640px]:px-3 max-[640px]:py-2 max-[640px]:text-xs ${
                index === 0
                  ? "bg-[#15157a] text-white"
                  : "bg-[#cfe6ff] text-[#1d6bff]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {exampleCards.map((card) => (
            <div key={card.title} className="text-left">
              <div className="group relative h-[280px] overflow-hidden rounded-[18px] shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-[1.08] object-cover blur-[1px]"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 flex h-full items-center justify-between gap-6 px-10 max-[640px]:gap-3 max-[640px]:px-4 max-[640px]:flex-col max-[640px]:items-start max-[640px]:justify-center">
                  <div className="flex items-center gap-3 text-white/85">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                        <path d="M12 5c5.5 0 9.5 5.2 9.5 7s-4 7-9.5 7S2.5 14.8 2.5 12 6.5 5 12 5zm0 3.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6z" />
                      </svg>
                    </span>
                    <span className="text-base font-medium">
                      See full Example
                    </span>
                    <span className="h-px flex-1 bg-white/40 max-[640px]:hidden" />
                  </div>
                  <a
                    href="/pricing"
                    className="inline-flex rounded-[10px] bg-[#FF5A4E] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition group-hover:-translate-y-0.5"
                  >
                    Get a site like this
                  </a>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
