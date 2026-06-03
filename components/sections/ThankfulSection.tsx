"use client";

import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const cards = [
  {
    src: "/images%203/modern-nextjs-website-development.webp",
    alt: "Modern Next.js website development preview",
    sizeClass: "w-[min(520px,88vw)] max-[960px]:w-[min(420px,86vw)] max-[640px]:w-[92vw]",
    from: { x: -16, y: 8, rotate: -3, scale: 0.98 },
    to: { x: -160, y: -22, rotate: -5, scale: 1.08 }
  },
  {
    src: "/images%203/premium-dark-business-website-interface.webp",
    alt: "Premium dark business website interface",
    sizeClass: "w-[min(520px,88vw)] max-[960px]:w-[min(420px,86vw)] max-[640px]:w-[92vw]",
    from: { x: 0, y: 12, rotate: 0, scale: 1 },
    to: { x: 0, y: -34, rotate: 0, scale: 1.05 }
  },
  {
    src: "/images%203/professional-digital-branding-web-experience.webp",
    alt: "Professional digital branding web experience",
    sizeClass: "w-[min(520px,88vw)] max-[960px]:w-[min(420px,86vw)] max-[640px]:w-[92vw]",
    from: { x: 16, y: 8, rotate: 3, scale: 0.96 },
    to: { x: 160, y: -22, rotate: 5, scale: 1.06 }
  }
];

type CardMotion = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
};

const useCardMotion = (
  progress: MotionValue<number>,
  motion: {
    from: CardMotion;
    to: CardMotion;
  }
) => {
  const x = useTransform(progress, [0, 1], [motion.from.x, motion.to.x]);
  const y = useTransform(progress, [0, 1], [motion.from.y, motion.to.y]);
  const rotate = useTransform(progress, [0, 1], [motion.from.rotate, motion.to.rotate]);
  const scale = useTransform(progress, [0, 1], [motion.from.scale, motion.to.scale]);

  return { x, y, rotate, scale };
};

export default function ThankfulSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "start 25%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const leftMotion = useCardMotion(smoothProgress, {
    from: cards[0].from,
    to: cards[0].to
  });
  const centerMotion = useCardMotion(smoothProgress, {
    from: cards[1].from,
    to: cards[1].to
  });
  const rightMotion = useCardMotion(smoothProgress, {
    from: cards[2].from,
    to: cards[2].to
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0f10] px-6 py-24 text-white max-[640px]:py-16 max-[640px]:pb-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(150%_120%_at_50%_60%,rgba(112,190,180,0.85)_0%,rgba(11,15,16,0.12)_50%,rgba(11,15,16,0.95)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(11,15,16,0.9)_0%,rgba(11,15,16,0.4)_55%,rgba(11,15,16,0)_100%)]" />
      <div className="relative mx-auto grid min-h-[340px] max-w-[1500px] items-center gap-16 lg:grid-cols-[0.85fr_1.45fr] max-[640px]:flex max-[640px]:flex-col-reverse max-[640px]:text-center max-[420px]:gap-10">
        <FadeIn>
        <div className="max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center">
          <h2 className="text-[clamp(2.6rem,4.6vw,4.3rem)] font-medium leading-tight max-[420px]:text-[2.4rem]">
            Thankfully,
            <span className="block">there is Vertexia.</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-lg font-accent font-normal text-white/70">
            The truly affordable done-for-you website solution.
          </p>
          <a
            href="/pricing"
            className="mt-10 inline-flex rounded-[12px] bg-[#FF5A4E] px-12 py-5 text-lg font-medium text-white shadow-[0_12px_26px_rgba(255,90,78,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(255,90,78,0.45)] max-[640px]:w-full max-[640px]:max-w-[320px]"
          >
            Get Started
          </a>
        </div>
        </FadeIn>
        <div className="relative flex items-center justify-center max-[640px]:mt-20 max-[640px]:h-[500px] max-[640px]:w-full">
          <div className="relative flex items-center justify-center max-[640px]:h-full max-[640px]:w-full">
            <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[0].src}
                alt={cards[0].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[0].sizeClass}`}
                style={{ ...leftMotion, willChange: "transform", translateZ: 0 }}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[1].src}
                alt={cards[1].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[1].sizeClass}`}
                style={{ ...centerMotion, willChange: "transform", translateZ: 0 }}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={cards[2].src}
                alt={cards[2].alt}
                className={`rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${cards[2].sizeClass}`}
                style={{ ...rightMotion, willChange: "transform", translateZ: 0 }}
              />
            </div>
            <div className="h-[520px] w-[540px] opacity-0 max-[960px]:h-[460px] max-[960px]:w-[92vw] max-[640px]:h-[420px] max-[640px]:w-full max-[420px]:h-[380px]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

