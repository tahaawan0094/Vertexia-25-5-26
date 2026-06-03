"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AnimatePresence, motion } from "framer-motion";

const logos = [
  {
    name: "Entrepreneur",
    src: "/logos/65b935dbde54cfc9bbc79d31_logo-entrepeneur.png",
    className: "logo-entrepreneur"
  },
  {
    name: "BBC News",
    src: "/logos/65b935db616755e2ada9770e_logo-bbcnews.png",
    className: "logo-bbc"
  },
  {
    name: "The Telegraph",
    src: "/logos/65b935db02743b6b9206d166_logo-thetelegraph.png",
    className: "logo-telegraph"
  },
  {
    name: "Business Insider",
    src: "/logos/65b935db233f9838e4d844ad_logo-businessinsider.png",
    className: "logo-business"
  },
  {
    name: "Forbes",
    src: "/logos/65b935dbd242099be76e34b2_logo-forbes.png",
    className: "logo-forbes"
  },
  {
    name: "Markets Insider",
    src: "/logos/690e42af06af1d65c532dfbb_markets-insider-w.svg",
    className: "logo-markets"
  },
  {
    name: "Fortune",
    src: "/logos/690e42af98dd1ed4422ea1d7_fortune-w.svg",
    className: "logo-fortune"
  },
  {
    name: "USA Today",
    src: "/logos/694225b3caa0190fc7b3d9e3_usa-today.svg",
    className: "logo-usa"
  }
];

const didYouKnowCards = [
  {
    src: "/images%201/65df73f5d59ccfc4e532a7bd_Quote-1.webp",
    alt: "Testimonial from Joana B.",
    className:
      "justify-self-start -translate-y-2 max-[960px]:translate-y-0 max-[960px]:justify-self-center"
  },
  {
    src: "/images%201/65df73f5e51ac2b72aecb558_Quote-2.webp",
    alt: "Testimonial from Fred Z.",
    className: "translate-y-[110px] max-[960px]:translate-y-0"
  },
  {
    src: "/images%201/65df73f57cb49d72457d7c0e_Quote-3.webp",
    alt: "Testimonial from Troy M.",
    className:
      "justify-self-end translate-y-5 max-[960px]:translate-y-0 max-[960px]:justify-self-center"
  }
];

export default function ShowcaseSection({ hideImages }: { hideImages?: boolean }) {
  const [isRedMain, setIsRedMain] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRedMain((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="examples" className="relative overflow-visible pb-24 max-[640px]:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_26%,rgba(38,67,255,0.22),rgba(4,6,20,0)_72%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[68%] bottom-0 bg-[linear-gradient(180deg,rgba(2,4,15,0)_0%,rgba(1,2,10,0.82)_48%,#010207_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 flex justify-center px-5 max-[640px]:px-0">
        {/* Desktop View */}
        <div className="relative hidden aspect-[1226/652] w-[min(1226px,94vw)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] min-[960px]:block">
          {!hideImages && (
            <img
              className="relative z-0 h-full w-full rounded-[18px]"
              src="/pics/65cbb4964d0da94b9227b173_editor-base.svg"
              alt=""
              aria-hidden="true"
            />
          )}
          <div
            className="absolute left-[8.5%] top-[18%] z-[1] h-[75%] w-[83%] rounded-[12px] bg-[#1c1c1c]"
            aria-hidden="true"
          />
          {!hideImages && (
            <img
              className="absolute left-1/2 top-[2%] z-[3] w-[28%] -translate-x-1/2"
              src="/pics/65cbb4960b332d68ab229ff0_domain-celestial.svg"
              alt=""
              aria-hidden="true"
            />
          )}
          {!hideImages && (
            <>
              <img
                className="absolute left-[2%] top-[11%] z-[4] w-[5.8%]"
                src="/pics/65cbb49650e79f42be394d5a_editor-left.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="absolute right-[1.2%] top-[50%] z-[4] w-[5.8%]"
                src="/pics/65cbb496129dab171442adf9_editor-right.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="absolute left-[11.5%] top-[18.5%] z-[3] w-[70%]"
                src="/pics/1.png"
                alt=""
                aria-hidden="true"
              />
            </>
          )}
          <div className="absolute left-[8.5%] top-[18%] z-[2] h-[75%] w-[42%] overflow-hidden rounded-[12px]">
            <AnimatePresence initial={false}>
              {!hideImages && (
                <motion.img
                  key={isRedMain ? "red" : "blue"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ willChange: "transform" }}
                  src={
                    isRedMain
                      ? "/new images/high-performance-business-website.webp"
                      : "/pics/vertexia-modern-web-development-agency.webp"
                  }
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              )}
            </AnimatePresence>
          </div>
          {!hideImages && (
            <>
              <img
                className="absolute left-[30%] top-[30.5%] z-[3] w-[38%]"
                src="/pics/65cbb4966b74c2eb7ed7bc70_onnor-content.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="absolute left-[5.5%] top-[58%] z-[4] w-[18%]"
                src="/pics/65cbb4962e5467e6fedefd3e_bookings.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="absolute left-[33%] top-[88.5%] z-[4] w-[14%]"
                src="/pics/65cbb496fd59cb86f266ffb0_selll-products.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="absolute right-[5%] top-[28%] z-[4] w-[9%]"
                src="/pics/65cbb496398c881b16497e7a_publish.svg"
                alt=""
                aria-hidden="true"
              />
            </>
          )}
          <div
            onClick={() => setIsRedMain(!isRedMain)}
            className="absolute bottom-[-12%] right-[10%] z-[4] w-[20%] cursor-pointer transition-transform hover:scale-105"
          >
            <div className="relative rounded-[10px] shadow-[0_24px_40px_rgba(0,0,0,0.35)]">
              {/* Editor UI Overlay */}
              <div className="pointer-events-none absolute inset-[-2px] z-10 border-[2px] border-[#00e5ff]">
                {/* Corner handles */}
                <div className="absolute -left-1 -top-1 h-2 w-2 border-[1.5px] border-[#00e5ff] bg-white" />
                <div className="absolute -right-1 -top-1 h-2 w-2 border-[1.5px] border-[#00e5ff] bg-white" />
                <div className="absolute -bottom-1 -left-1 h-2 w-2 border-[1.5px] border-[#00e5ff] bg-white" />

                {/* CHANGE IMAGE tag */}
                <div className="absolute bottom-[-2px] right-[-2px] flex items-center gap-[4px] bg-[#00e5ff] px-[6px] py-[3px] text-[0.55rem] font-semibold tracking-wide text-black">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[10px] w-[10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  CHANGE IMAGE
                </div>
              </div>

              <img
                className="w-full aspect-[4/3] rounded-[10px] object-cover"
                src={
                  isRedMain
                    ? "/pics/vertexia-modern-web-development-agency.webp"
                    : "/new images/high-performance-business-website.webp"
                }
                alt="Swap Image"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Mobile View */}
  {/* Mobile View */}
<div
  className="relative flex w-full justify-center overflow-hidden min-[961px]:hidden px-2"
  onClick={() => setIsRedMain(!isRedMain)}
>
  <AnimatePresence mode="wait">
    {!hideImages && (
      <motion.img
        key={isRedMain ? "mob1" : "mob2"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
       className={`
    h-auto
    w-[102vw]
    max-w-[560px]
    object-contain
    drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]
    ${!isRedMain ? "translate-x-[18px]" : ""}
  `}
        src={
          isRedMain
            ? "/mobile images/advanced-custom-website-development.webp"
            : "/mobile images/modern-dark-themed-ui-design.webp"
        }
        alt="Mobile Showcase"
        loading="lazy"
      />
    )}
  </AnimatePresence>
</div>
      </div>
      <div className="relative z-10 bg-[linear-gradient(180deg,rgba(4,6,30,0)_0%,rgba(4,6,30,0.55)_16%,rgba(4,6,30,0.92)_32%,#040404_48%,#040404_100%)] pb-[120px] pt-[140px] max-[640px]:pt-[40px]">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <FadeIn>
            <div
              className="mb-16 flex min-h-[104px] flex-wrap items-center justify-center gap-x-12 gap-y-8 max-[640px]:mb-8 max-[640px]:gap-x-6 max-[640px]:gap-y-6"
              aria-label="Featured in"
            >
              {logos.map((logo) => (
                <span key={logo.name} className={`${logo.className} flex items-center justify-center`}>
                  {!hideImages && (
                    <img
                      className="h-8 max-h-[26px] w-auto object-contain max-[640px]:max-h-[20px]"
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                    />
                  )}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <blockquote className="mx-auto mb-9 max-w-[940px] font-accent text-[30px] font-normal leading-[42px] text-white max-[640px]:text-[22px] max-[640px]:leading-[32px]">
              &ldquo;Vertexia helps businesses grow online with professional web
              development services in Pakistan. Vertexia helps you generate more
              sales, bookings, and leads with a gorgeous website that&apos;s built for
              you at a reasonable price.{" "}
              {"\u2014"}{" "}
              <span className="box-decoration-clone inline border-l-4 border-[#FF5A4E] bg-[linear-gradient(-50deg,rgba(255,90,78,0)_22%,rgba(255,90,78,0.65))] px-2 text-white">
                just a product that works for you.
              </span>
              &rdquo;
            </blockquote>
            <div className="font-serif text-[1.1rem] text-white">
              Trusted Web Development Company in Karachi, Pakistan
            </div>
          </FadeIn>
          <div className="relative pt-[180px] text-center text-white max-[640px]:pt-[60px]">
            <FadeIn delay={0.3}>
              <p className="mb-6 text-[0.8rem] uppercase tracking-[0.3em] text-white/60">
                DID YOU KNOW?
              </p>
              <h2 className="mx-auto mb-7 max-w-[980px] text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-tight">
                <span className="font-semibold text-[#2d6bff]">2 out of 3</span>{" "}
                small business owners don&apos;t have a website or don&apos;t like the
                one they do have.
              </h2>
              <div className="mb-10 flex justify-center max-[640px]:hidden">
                {!hideImages && (
                  <img
                    className="h-auto w-[120px]"
                    src="/images%201/65c388735d187a04baf6553a_why-script.svg"
                    alt=""
                    loading="lazy"
                  />
                )}
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-3 items-center justify-items-center gap-10 max-[960px]:grid-cols-2 max-[640px]:hidden">
              {didYouKnowCards.map((card) => (
                <StaggerItem key={card.src}>
                  {!hideImages && (
                    <img
                      className={`w-full max-w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] ${card.className}`}
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                    />
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
            {!hideImages && (
              <img
                className="pointer-events-none absolute bottom-[-200px] left-[18%] w-[160px] opacity-90 max-[960px]:left-[8%] max-[960px]:w-[120px] max-[640px]:hidden"
                src="/images%201/65b95f22abefc846c3b38bf1_white-bottom-arrow.svg"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

