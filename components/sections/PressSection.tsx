"use client";
import FadeIn from "@/components/animations/FadeIn";

const logos = [
  { name: "Entrepreneur", className: "logo-entrepreneur" },
  { name: "BBC News", className: "logo-bbc" },
  { name: "The Telegraph", className: "logo-telegraph" },
  { name: "Business Insider", className: "logo-business" },
  { name: "Forbes", className: "logo-forbes" },
  { name: "Markets Insider", className: "logo-markets" },
  { name: "Fortune", className: "logo-fortune" },
  { name: "USA Today", className: "logo-usa" }
];

export default function PressSection() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(4,6,30,0)_0%,rgba(4,6,30,0.55)_16%,rgba(4,6,30,0.92)_32%,#040404_48%,#040404_100%)] pb-[120px] pt-[140px]">
      <FadeIn>
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div
          className="mb-16 flex min-h-[104px] flex-wrap items-center justify-center gap-x-12 gap-y-5"
          aria-label="Featured in"
        >
          {logos.map((logo) => (
            <span key={logo.name} className={logo.className}>
              {logo.name}
            </span>
          ))}
        </div>
        <blockquote className="mx-auto mb-9 max-w-[940px] font-accent text-[32px] font-normal leading-[42px] text-white">
          &ldquo;Vertexia helps you generate more sales, bookings, and leads with a
          gorgeous website that&apos;s built for you at a reasonable price. No
          expensive agencies, no complicated DIY web design builders{" "}
          {"\u2014"}{" "}
          <span className="rounded-[6px] bg-[rgba(175,84,0,0.7)] px-1.5 py-0.5 text-white">
            just a product that works for you.
          </span>
          &rdquo;
        </blockquote>
        <div className="font-serif text-[1.1rem] text-white">
          Entrepreneur Magazine
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

