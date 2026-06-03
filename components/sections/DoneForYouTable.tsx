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

const tableData = [
  { feature: "Cost of launching your website", vertexia: "100%", others: "100%" },
  { feature: "Done-for-you design & development", vertexia: "✓", others: "✗" },
  { feature: "Free custom domain to get you online fast", vertexia: "✓", others: "✗" },
  { feature: "Free onboarding & training call", vertexia: "✓", others: "✗" },
  { feature: "Access to our easy-to-use website editor", vertexia: "✓", others: "✗" },
  { feature: "Free premium one-on-one support", vertexia: "✓", others: "✗" },
  { feature: "Free secure hosting included", vertexia: "✓", others: "✗" },
  { feature: "Website launch in a week", vertexia: "✓", others: "✗" },
  { feature: "Free unlimited edits for 30 days", vertexia: "✓", others: "✗" },
  { feature: "Customer frustration", vertexia: "Not finding us sooner", others: "Hard to use and risky" },
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
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto rounded-[24px] border-2 border-[#ff5a4e]/30 bg-black/40">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#ff5a4e]/20">
              <th className="px-6 py-4 text-lg font-semibold text-white/90 w-[40%]">Features</th>
              <th className="px-6 py-4 text-lg font-semibold text-[#ff5a4e] text-center">VERTEXIA</th>
              <th className="px-6 py-4 text-lg font-semibold text-white/60 text-center">Others</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className="border-b border-[#ff5a4e]/10 hover:bg-[#ff5a4e]/5 transition">
                <td className="px-6 py-4 text-base text-white/80">{row.feature}</td>
                <td className="px-6 py-4 text-center text-white/90">
                  {row.vertexia === "✓" ? (
                    <span className="text-[#00ff88] text-xl">✓</span>
                  ) : row.vertexia === "✗" ? (
                    <span className="text-[#ff5a4e] text-xl">✗</span>
                  ) : (
                    <span className="text-white/80">{row.vertexia}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-white/60">
                  {row.others === "✓" ? (
                    <span className="text-[#00ff88] text-xl">✓</span>
                  ) : row.others === "✗" ? (
                    <span className="text-[#ff5a4e] text-xl">✗</span>
                  ) : (
                    <span className="text-white/60">{row.others}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-3">
        {tableData.map((row, idx) => (
          <div key={idx} className="border border-[#ff5a4e]/30 rounded-lg bg-black/40 p-4">
            <div className="text-sm font-semibold text-white/90 mb-3">{row.feature}</div>
            <div className="flex gap-4 justify-between">
              <div className="flex-1 text-center">
                <div className="text-xs text-white/60 mb-1">VERTEXIA</div>
                {row.vertexia === "✓" ? (
                  <span className="text-[#00ff88] text-lg">✓</span>
                ) : row.vertexia === "✗" ? (
                  <span className="text-[#ff5a4e] text-lg">✗</span>
                ) : (
                  <span className="text-white/80 text-xs">{row.vertexia}</span>
                )}
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-white/60 mb-1">Others</div>
                {row.others === "✓" ? (
                  <span className="text-[#00ff88] text-lg">✓</span>
                ) : row.others === "✗" ? (
                  <span className="text-[#ff5a4e] text-lg">✗</span>
                ) : (
                  <span className="text-white/60 text-xs">{row.others}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Showcase Images */}
      <div className="relative mx-auto max-w-[1440px] mt-12">
        <img
          className="mx-auto w-full rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] max-[768px]:rounded-[16px] max-[640px]:rounded-[12px]"
          src="/Done-for-you-images/Done-for-you-website-from vertexia.svg"
          alt="Done for you website showcase"
          loading="eager"
        />

        <img
          className="pointer-events-none absolute left-[1%] top-[100px] z-10 hidden h-[340px] w-auto opacity-90 sm:block max-[1024px]:h-[240px] max-[768px]:h-[180px]"
          src="/Done-for-you-images/Left-element.svg"
          alt="Left decorative element"
          loading="lazy"
        />
        <img
          className="pointer-events-none absolute right-[1%] bottom-[6%] z-10 hidden h-[340px] w-auto opacity-90 sm:block max-[1024px]:h-[240px] max-[768px]:h-[180px]"
          src="/Done-for-you-images/Right-element.svg"
          alt="Right decorative element"
          loading="lazy"
        />
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-[18%] bottom-[4%] z-20 overflow-hidden rounded-[20px] max-[768px]:left-[5%] max-[768px]:right-[5%] max-[768px]:rounded-[12px]">
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
