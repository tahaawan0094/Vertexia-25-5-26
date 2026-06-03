"use client";
import FadeIn from "@/components/animations/FadeIn";

export default function TrustpilotSection() {
  return (
    <section className="relative overflow-hidden bg-[#000] bg-[radial-gradient(circle_at_0_100%,#080808,#9dd569_0%,#0c593b_39%,#080808_74%,#080808)] px-6 pb-28 pt-24 text-white">

      <img
        src="/images%208/65baa0e47a71efc583902bc2_detail_blocks_white_left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[min(180px,40vw)] opacity-60"
      />
      <img
        src="/images%208/65baa0e396987128cbe64b76_detail_blocks_white_right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-[min(180px,40vw)] opacity-60"
      />

      <FadeIn>
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[0.4fr_1.2fr]">
        <div className="flex items-center gap-4 lg:translate-y-1">
          <img
            src="/images%208/65baa0e3ee18dbb984c2de23_trustpilot_logo.svg"
            alt="Trustpilot"
            className="h-16 w-auto"
          />
        </div>

        <div className="max-w-[860px] text-left pt-10">
          <p className="font-accent text-[16px] font-normal uppercase tracking-[0.35em] text-white leading-[21px] lg:whitespace-nowrap">
            JOIN OUR COMMUNITY OF 7,000+ BUSINESS OWNERS
          </p>
          <h2 className="mt-4 font-body text-[56px] font-medium leading-[73px] max-[960px]:text-[46px] max-[960px]:leading-[60px] max-[640px]:text-[34px] max-[640px]:leading-[44px]">
            It&apos;s the hassle-free way to
            <span className="block">grow your business online.</span>
          </h2>
          <p className="mt-5 font-accent text-[24px] font-normal leading-[31px] text-white max-[960px]:text-[20px] max-[960px]:leading-[28px] max-[640px]:text-[16px] max-[640px]:leading-[22px]">
            Source: every Vertexia customer
          </p>
          <div className="mt-5 flex items-center gap-2 font-display text-[16px] font-semibold leading-[22px] text-white">
            <span>Rated</span>
            <span className="text-[#00ff74]">4.8 Excellent</span>
          </div>
          <img
            src="/images%208/65baa0e4d1439b067b75b559_5-stars.svg"
            alt="5 star rating"
            className="mt-3 h-6 w-auto"
          />
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

