"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function ProfessionalWebSection({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <section className="relative overflow-visible bg-[linear-gradient(135deg,#1a75ff_0%,#1a2ce2_45%,#2a2fe8_100%)] px-6 pb-16 pt-20 text-white">

      {/* Background Decoration */}
      <img
        src="/images%209/66030a8f80bb3baa5b0aaa1b_detail-mkt-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-[220px] opacity-50"
      />

      <FadeIn>
        <div
          className={`relative mx-auto ${
            centered
              ? "flex max-w-[1200px] flex-col items-center justify-center text-center"
              : "grid max-w-[1500px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
          } max-[960px]:gap-8 max-[960px]:px-4`}
        >

          {/* LEFT CONTENT */}
          <div
            className={`${
              centered
                ? "mx-auto flex max-w-[1100px] flex-col items-center text-center"
                : "max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center"
            }`}
          >

            {/* HEADING */}
            <h2
              className={`font-body font-medium tracking-[-0.02em]
              ${
                centered
                  ? "text-center text-[56px] leading-[1.15]"
                  : "text-[56px] leading-[73px]"
              }
              max-[960px]:text-[46px]
              max-[960px]:leading-[60px]
              max-[640px]:text-[34px]
              max-[640px]:leading-[44px]
              max-[420px]:text-[28px]
              max-[420px]:leading-[36px]`}
            >

              <span className={`block ${centered ? "whitespace-nowrap" : ""}`}>
                Professional website done for you.
              </span>

              <span className="block">
                7-day turnaround.
              </span>

            </h2>

            {/* PARAGRAPH */}
            <p
              className={`mt-6 font-accent text-white/90
              ${
                centered
                  ? "max-w-[720px] text-center text-[24px] leading-[1.4]"
                  : "max-w-[520px] text-[24px] leading-[31px]"
              }
              max-[960px]:text-[20px]
              max-[960px]:leading-[28px]
              max-[640px]:text-[16px]
              max-[640px]:leading-[22px]`}
            >
              Completely zero-risk. Unmatched customer service.
            </p>

            {/* BUTTON */}
            <button
              className={`mt-10 rounded-[12px] bg-[#FF5A4E] text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)]
              ${
                centered
                  ? "flex items-center justify-center px-10 py-4"
                  : "px-10 py-4"
              }
              max-[640px]:w-full
              max-[640px]:max-w-[320px]
              max-[640px]:px-12
              max-[640px]:py-5
              max-[640px]:text-lg`}
              type="button"
            >
              Get Started
            </button>

          </div>

          {/* RIGHT IMAGE - ONLY FOR HOME PAGE */}
          {!centered && (
            <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[620px] max-[960px]:min-h-[520px] max-[640px]:hidden">
              <img
                src="/images 9/business-growth-website-development.webp"
                alt="Website examples collage"
                sizes="(max-width: 991px) 100vw, 980px"
                className="w-[min(980px,100vw)] max-w-full rotate-[-6deg] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
              />
            </div>
          )}

        </div>
      </FadeIn>
    </section>
  );
}