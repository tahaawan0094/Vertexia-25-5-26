"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/Done-for-you-images/modern-hospitality-website-development-services.webp",
    alt: "Hospitality website design",
  },
  {
    src: "/Done-for-you-images/custom-restaurant-and-lounge-website-design-by-vertexia.webp",
    alt: "Restaurant and lounge website design",
  },
];

export default function DoneForYouTable() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="relative mx-auto max-w-[1440px]">
        <img
          className="mx-auto w-full rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          src="/Done-for-you-images/Done-for-you-website-from vertexia.svg"
          alt="Done for you website table"
          loading="eager"
        />

        <img
          className="pointer-events-none absolute left-[1%] top-[100px] z-10 hidden h-[340px] w-auto opacity-90 sm:block"
          src="/Done-for-you-images/Left-element.svg"
          alt="Left decorative element"
          loading="lazy"
        />
        <img
          className="pointer-events-none absolute right-[1%] bottom-[6%] z-10 hidden h-[340px] w-auto opacity-90 sm:block"
          src="/Done-for-you-images/Right-element.svg"
          alt="Right decorative element"
          loading="lazy"
        />
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-[18%] bottom-[4%] z-20 overflow-hidden rounded-[20px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[activeIndex].src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              loading="lazy"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
