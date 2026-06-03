"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "two-year">("monthly");

  return (
    <section
      id="pricing"
      className="relative overflow-visible flex flex-col items-center justify-center pt-24 pb-24 px-4 text-center max-[640px]:pb-16 max-[640px]:pt-20"
    >
      {/* Background gradient matching hero section */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0.95)_0%,rgba(8,8,8,0)_100%)]"
        aria-hidden="true"
      />

      <StaggerContainer className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Header Label */}
        <StaggerItem>
          <p className="mb-6 text-[14px] uppercase tracking-[0.15em] text-white/70 max-[640px]:text-[0.75rem]">
            Vertexia WEBSITE PRICING
          </p>
        </StaggerItem>

        {/* Main Heading */}
        <StaggerItem>
          <h1 className="mb-8 text-balance text-[72px] font-medium leading-[90px] text-white max-[960px]:text-[56px] max-[960px]:leading-[68px] max-[640px]:text-[clamp(2.5rem,8vw,3.2rem)] max-[640px]:leading-tight">
            Launch, Manage & Grow Your Business Online
          </h1>
        </StaggerItem>

        {/* Benefits Row */}
        <StaggerItem>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 max-[640px]:flex-col max-[640px]:gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">Done for you service</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">5-star support</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/Pricing page  images/check icon.svg"
                alt="Check"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-[16px] md:text-[17px] font-medium">No hidden costs</span>
            </div>
          </div>
        </StaggerItem>

        {/* Pricing Toggle with "2 months free" label */}
        <StaggerItem>
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-6">
              <img
                src="/Pricing page  images/2-months-free.svg"
                alt="2 months free"
                className="mx-auto h-12 w-auto mb-2"
              />
              <svg
                className="mx-auto h-6 w-6 text-[#00b67a] animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="inline-flex rounded-lg border border-white/20 bg-white/5 backdrop-blur-md p-1.5">
              {(["monthly", "yearly", "two-year"] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-8 py-3 rounded-md transition-all font-semibold whitespace-nowrap ${
                    billingCycle === cycle
                      ? "bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {cycle === "two-year" ? "Two-year" : cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </StaggerItem>

        {/* Pricing Cards */}
        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            {/* Card 1 - Growth */}
            <div className="relative bg-white rounded-3xl p-8 max-[640px]:p-4 flex flex-col">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/Pricing page  images/card-icon-1.svg"
                  alt="Growth"
                  className="h-10 w-10 mb-3"
                />
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Growth</h3>
              <p className="text-gray-600 text-sm mb-6">We grow your business online</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-black">Pkr</span>
                <span className="text-4xl font-bold text-black ml-1">22,500</span>
                <span className="text-gray-600 ml-2">/Mo</span>
              </div>
              <p className="text-gray-500 text-xs mb-2">billed annually +Rs 22,500</p>
              <p className="text-red-600 text-sm mb-6 line-through">Pkr 180,000</p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg mb-4 transition">
                Contact Us
              </button>
              <p className="text-gray-600 text-xs mb-6">Save Rs 54,000 with yearly billing →</p>
              <div className="border-t pt-4 text-left">
                <p className="text-gray-600 text-xs mb-3 font-semibold">Everything in Plus, and:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Dedicated VIP Growth Team</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Marketing plan for your business</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">1-on-1 monthly marketing sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Marketing advice: email, social media, online ads, SEO, reputation, and more</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">2,000 words of fresh content created for you</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Plus */}
            <div className="relative bg-white rounded-3xl p-8 max-[640px]:p-4 flex flex-col">
              <div className="flex justify-center mb-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <img
                src="/Pricing page  images/card-icon-2.svg"
                alt="Plus"
                className="h-10 w-10 mx-auto mb-3"
              />
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Plus</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">We manage your online presence</p>
              <div className="mb-2 text-center">
                <span className="text-4xl font-bold text-black">Pkr</span>
                <span className="text-4xl font-bold text-black ml-1">12,600</span>
                <span className="text-gray-600 ml-2">/Mo</span>
              </div>
              <p className="text-gray-500 text-xs mb-2 text-center">billed annually</p>
              <p className="text-red-600 text-sm mb-6 line-through text-center">Pkr 160,000 +Rs 22,500 setup fee</p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg mb-4 transition">
                Contact Us
              </button>
              <p className="text-gray-600 text-xs mb-6 text-center">Save Rs 105,900 with two yearly billing →</p>
              <div className="border-t pt-4 text-left">
                <p className="text-gray-600 text-xs mb-3 font-semibold">Everything in Launch, and:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">4 email addresses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Advanced SEO to rank on Google</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Unlimited done-for-you edits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Integrations to convert visitors into customers: 3rd party integrations such as live chat, advanced designs, load forms, multimedia &more</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Promote your products on Google, Facebook &Instagram</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">VIP phone support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Website Launch */}
            <div className="relative bg-white rounded-3xl p-8 max-[640px]:p-4 flex flex-col">
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/Pricing page  images/card-icon-3.svg"
                  alt="Website Launch"
                  className="h-10 w-10 mb-3"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Website Launch</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">We build launch your website</p>
              <div className="mb-2 text-center">
                <span className="text-4xl font-bold text-black">Pkr</span>
                <span className="text-4xl font-bold text-black ml-1">3,640</span>
                <span className="text-gray-600 ml-2">/Mo</span>
              </div>
              <p className="text-gray-500 text-xs mb-2 text-center">billed annually</p>
              <p className="text-red-600 text-sm mb-6 line-through text-center">Pkr 160,000 +Rs 22,500 setup fee</p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg mb-4 transition">
                Contact Us
              </button>
              <p className="text-gray-600 text-xs mb-6 text-center">Save Rs 10,320 with yearly billing →</p>
              <div className="border-t pt-4 text-left">
                <p className="text-gray-600 text-xs mb-3 font-semibold">Included in all plans:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Built-for-you website / online store</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Personalized design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Fast loading to rank on Google</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Ready in 7 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Custom domain name or connect one you already have</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Professional email address</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Easy-to-use editor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">0% fees on sales &bookings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">1-to-1 launch &training call</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">Secure hosting &SSL certificate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">30-Day Money-back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}