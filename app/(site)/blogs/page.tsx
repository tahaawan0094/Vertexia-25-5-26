"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import PageTransition from "@/components/animations/PageTransition";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export default function BlogsPage() {
  const words = ["Tradespeople", "Professionals", "Small Business"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const updateText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);

      setDisplayText(updateText);

      if (!isDeleting && updateText === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, words]);

  return (
    <PageTransition>
      <div id="top" className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" 
          aria-hidden="true" 
        />
        <StaggerContainer className="max-w-[1200px] mx-auto">
          <StaggerItem>
            <h1 className="text-[clamp(1.5rem,8vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-8 sm:whitespace-nowrap">
              Helping{" "}
              <span className="text-[#FF5A4E]">
                {displayText}
                <span className="animate-pulse border-r-4 border-[#FF5A4E] ml-1" />
              </span>{" "}
              Grow Online
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[clamp(0.9rem,2.5vw,1.3rem)] text-white/90 font-medium max-w-[900px] mx-auto leading-relaxed">
              We deliver your website and give you the skills to master the online world
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
      
      {/* New White Background Section */}
      <section className="w-full bg-white pb-20 md:pb-32 px-6">
        <div className="max-w-[1000px] mx-auto relative z-10 -mt-50 md:-mt-42">
          <div className="bg-[#111111] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] p-4 bg-[#0a0a0a]">
              <img 
                src="/Blog images/Pillar.png" 
                alt="Why every small business needs a website"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-8 md:p-20 text-center flex flex-col items-center">
              <h2 className="text-[clamp(1.5rem,6vw,3.2rem)] font-bold text-white mb-6 md:mb-8 leading-[1.15] max-w-[850px]">
                What is Vertexia? <br />
                <span className="text-white/60 text-[0.6em] block mt-4">A Modern Web Development & SEO Growth Partner for Businesses</span>
              </h2>
              <p className="text-[clamp(1rem,3vw,1.5rem)] text-white/70 font-medium mb-10 md:mb-12 max-w-[750px] leading-relaxed">
                Discover what Vertexia is, how it helps businesses build high-performance websites, improve online visibility, and create scalable digital growth systems.
              </p>
              
              <Link href="/what-is-vertexia">
                <button className="bg-[#FF5A4E] hover:bg-[#ff4438] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all shadow-xl shadow-red-500/20 active:scale-95">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterLinksSection />
    </div>
    </PageTransition>
  );
}
