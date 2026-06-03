"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function HowItWorksSection({
  showButton = false,
}) {
  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 pb-32 pt-8 text-white max-[640px]:pb-8 max-[640px]:pt-4">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(80%_70%_at_70%_55%,rgba(40,72,180,0.35)_0%,rgba(5,5,5,0)_70%)]" />

      <FadeIn>
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex justify-center">
            <a
              className="font-display inline-flex items-center gap-2 border-b border-white/35 pb-1 text-[14px] font-semibold text-white/75"
              href="#"
            >
              Explore more examples
            </a>
          </div>

          <div className="mt-16 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div className="max-[640px]:mt-10 max-[640px]:text-center">
              <div className="flex items-start gap-4 max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
                <img
                  src="/images%205/65ba8d9f14728153fb66da4a_icon_shine.svg"
                  alt=""
                  aria-hidden="true"
                  className="mt-2 h-6 w-6 max-[640px]:mt-0"
                />

                <div>
                  <p className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-normal leading-tight text-white/60">
                    Your website will be ready
                  </p>

                  <p className="mt-1 text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-tight text-[#2d6bff]">
                    next Friday
                  </p>
                </div>
              </div>

              <h2 className="mt-8 text-[56px] font-medium leading-[73px] max-[960px]:text-[48px] max-[960px]:leading-[62px] max-[640px]:text-[36px] max-[640px]:leading-[46px]">
                How does it work?
              </h2>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[22px] bg-[#0b0b0b] shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet="/mobile%20images/how%20does%20it%20work"
                  />

                  <img
                    src="/images 5/modern-fashion-ecommerce-website-design-by-vertexia.png"
                    alt="Modern fashion ecommerce website design by Vertexia featuring elegant product showcase, minimalist UI, and responsive online store layout."
                    className="h-full w-full object-cover"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />

                <div className="absolute inset-0 flex items-center justify-center lg:bottom-6 lg:left-6 lg:right-6 lg:items-end lg:justify-start">
                  <div className="flex items-center gap-4 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-md max-[640px]:px-8 max-[640px]:py-4">
                    <span className="text-lg font-semibold lg:text-base">
                      Watch 2-min explainer
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2d6bff] max-[640px]:h-12 max-[640px]:w-12">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          {showButton && (
            <div className="mt-14 flex justify-center">
              <a
                href="/pricing"
                className="inline-flex min-w-[220px] justify-center rounded-[16px] bg-[#FF5A4E] px-20 py-4 text-xl font-semibold text-white shadow-[0_20px_60px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff6f58]"
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}