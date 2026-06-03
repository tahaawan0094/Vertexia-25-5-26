"use client";
import FadeIn from "@/components/animations/FadeIn";

export default function AlternativesSection() {
  return (
    <section id="services" className="bg-[#040404] px-6 pb-32 pt-28 text-white max-[640px]:pt-2 max-[640px]:pb-10">
      <FadeIn>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-24 max-[640px]:gap-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] max-[640px]:flex max-[640px]:flex-col-reverse">
            <div className="max-[640px]:text-center">
              <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-tight">
                Do-It-Yourself
                <span className="block">Website Builders</span>
              </h2>
              <p className="mt-4 max-w-[520px] text-lg font-normal text-white/60 max-[640px]:mx-auto">
                give you a toolbox, not a finished website
              </p>
              <div className="mt-6 flex max-[640px]:justify-center">
                <img
                  src="/images%202/65ba48f99773a346a00c2c66_special-text-1.svg"
                  alt="Most of these sites never get finished."
                  className="w-[min(520px,100%)] max-[640px]:w-[80%]"
                />
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end overflow-hidden">
              <img
                src="/images%202/futuristic-ui-responsive-web-design.webp"
                alt="Futuristic responsive website design"
                className="w-[min(520px,100%)] rounded-[24px]"
              />
              <img
                src="/images%202/65df7e37e94e6f591756cda2_emoji-1.webp"
                alt=""
                aria-hidden="true"
                className="absolute -left-0 top-20 w-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] max-[640px]:-left-3 max-[640px]:top-4 max-[640px]:w-10"
              />
              <img
                src="/images%202/65df7e3709bbbd9c999aaa00_emoji-2.webp"
                alt=""
                aria-hidden="true"
                className="absolute bottom-4 -right-5 w-14 drop-shadow-[0_12px_22px_rgba(0,0,0,0.35)] max-[640px]:-right-4 max-[640px]:bottom-2 max-[640px]:w-12"
              />
            </div>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] max-[640px]:flex max-[640px]:flex-col">
            <div className="relative flex justify-center lg:justify-start overflow-hidden">
              <img
                src="/images%202/seo-optimized-custom-website-development.webp"
                alt="SEO optimized custom website development"
                className="w-[min(520px,100%)] rounded-[24px]"
              />
              <img
                src="/images%202/65df7e376d9cb2f9df32dbe9_emoji-3.webp"
                alt=""
                aria-hidden="true"
                className="absolute -left-6 top-14 w-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] max-[640px]:-left-3 max-[640px]:top-4 max-[640px]:w-9"
              />
              <img
                src="/images%202/65df7e37060444b71034f8f3_emoji-4.webp"
                alt=""
                aria-hidden="true"
                className="absolute -bottom-2 right-8 w-12 drop-shadow-[0_12px_22px_rgba(0,0,0,0.35)] max-[640px]:-right-2 max-[640px]:bottom-2 max-[640px]:w-11"
              />
            </div>
            <div className="max-[640px]:text-center">
              <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-tight">
                Website
                <span className="block">Agencies</span>
              </h2>
              <p className="mt-4 max-w-[520px] text-lg font-normal text-white/60 max-[640px]:mx-auto">
                are expensive and you still need to learn how to maintain your
                website
              </p>
              <div className="mt-6 flex max-[640px]:justify-center">
                <img
                  src="/images%202/65ba48f9de18767047993f6a_special-text-2.svg"
                  alt="Most of these sites are not updated."
                  className="w-[min(500px,100%)] max-[640px]:w-[80%]"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
