"use client";
import FadeIn from "@/components/animations/FadeIn";

export default function ProfessionalWebSection() {
  return (
    <section className="relative overflow-visible bg-[linear-gradient(135deg,#1a75ff_0%,#1a2ce2_45%,#2a2fe8_100%)] px-6 pb-2 pt-20 text-white max-[640px]:pb-20">
      <img
        src="/images%209/66030a8f80bb3baa5b0aaa1b_detail-mkt-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-[220px] opacity-50"
      />

      <FadeIn>
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] max-[960px]:gap-8 max-[960px]:px-4">
        <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
          <h2 className="font-body text-[56px] font-medium leading-[73px] max-[960px]:text-[46px] max-[960px]:leading-[60px] max-[640px]:text-[34px] max-[640px]:leading-[44px] max-[420px]:text-[28px] max-[420px]:leading-[36px]">
            Professional
            <span className="block">website done for</span>
            <span className="block">you. 7-day</span>
            <span className="block">turnaround.</span>
          </h2>
          <p className="mt-6 max-w-[520px] font-accent text-[24px] leading-[31px] text-white/90 max-[960px]:text-[20px] max-[960px]:leading-[28px] max-[640px]:text-[16px] max-[640px]:leading-[22px]">
            Completely zero-risk. Unmatched customer service.
          </p>
          <button
            className="mt-10 rounded-[12px] bg-[#FF5A4E] px-10 py-4 text-base font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:px-12 max-[640px]:py-5 max-[640px]:text-lg max-[420px]:px-8"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="relative flex min-h-[460px] items-center justify-center lg:min-h-[620px] max-[960px]:min-h-[520px] max-[640px]:hidden">
          <img
            src="/images 9/business-growth-website-development.webp"
            alt="Website examples collage"
            sizes="(max-width: 991px) 100vw, 980px"
            className="w-[min(980px,100vw)] max-w-full rotate-[-6deg] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
