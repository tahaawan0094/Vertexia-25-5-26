import type { Metadata } from "next";
import Link from "next/link";
import DoneForYouHeroSection from "@/components/sections/DoneForYouHeroSection";
import DoneForYouTable from "@/components/sections/DoneForYouTable";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";

export const metadata: Metadata = {
  title: "Done For You Website Service | Vertexia",
  description:
    "Complete website design and development service handled from start to finish.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/done-for-you-website",
  },
};

export default function DoneForYouWebsitePage() {
  return (
    <main className="site bg-black">
      <DoneForYouHeroSection />

      <section className="bg-[#000] pt-10 pb-10 px-4 sm:px-6 lg:px-8 max-[640px]:pt-6 max-[640px]:pb-6">
        <DoneForYouTable />
      </section>

      {/* BUTTON INSIDE COMPONENT */}
      <HowItWorksSection showButton />

      {/* Comparison Table Section */}
      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 max-[640px]:py-12">
        <style>{`
          @keyframes movingLight {
            0% {
              conic-gradient-position: 0deg;
            }
            100% {
              conic-gradient-position: 360deg;
            }
          }
          
          .animated-table-border {
            position: relative;
            background: linear-gradient(black, black) padding-box,
              conic-gradient(from var(--rotation, 0deg), #FF5A4E, #00FF88, #FF5A4E) border-box;
            border: 2px solid transparent;
            animation: rotateBorder 4s linear infinite;
          }
          
          @keyframes rotateBorder {
            0% {
              --rotation: 0deg;
              filter: drop-shadow(0 0 10px rgba(255, 90, 78, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 15px rgba(0, 255, 136, 0.6));
            }
            100% {
              --rotation: 360deg;
              filter: drop-shadow(0 0 10px rgba(255, 90, 78, 0.6));
            }
          }
          
          .table-glow-effect {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            background: black;
            border: 2px solid;
            border-image: linear-gradient(45deg, #FF5A4E, #00FF88, #FF5A4E, #FF5A4E) 1;
            animation: borderGlow 4s ease-in-out infinite;
          }
          
          @keyframes borderGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 90, 78, 0.5), inset 0 0 20px rgba(255, 90, 78, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.1);
            }
          }
          
          .table-glow-effect::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: conic-gradient(from 0deg, #FF5A4E, #00FF88, #FF5A4E);
            opacity: 0;
            animation: glowRotate 4s linear infinite;
            border-radius: 12px;
            z-index: -1;
            pointer-events: none;
          }
          
          @keyframes glowRotate {
            0% {
              opacity: 0.3;
              transform: rotate(0deg);
            }
            50% {
              opacity: 0.6;
            }
            100% {
              opacity: 0.3;
              transform: rotate(360deg);
            }
          }
          
          .animated-table-border table {
            background: black;
          }

          /* Mobile table styles */
          @media (max-width: 768px) {
            .table-wrapper {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }

            .table-wrapper table {
              min-width: 700px;
            }

            .table-wrapper th,
            .table-wrapper td {
              padding: 12px 8px !important;
              font-size: 13px;
            }

            .table-wrapper thead tr th:first-child {
              min-width: 140px;
            }
          }

          @media (max-width: 640px) {
            .table-wrapper th,
            .table-wrapper td {
              padding: 10px 6px !important;
              font-size: 11px;
            }

            .table-wrapper thead tr th:first-child {
              min-width: 110px;
            }
          }
        `}</style>
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 max-[640px]:mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 max-[768px]:text-3xl max-[640px]:text-2xl max-[640px]:mb-3">What makes Vertexia different?</h2>
            <p className="text-white/70 text-lg max-[768px]:text-base max-[640px]:text-sm">Say goodbye to DIY builders and web agencies and get the best of both</p>
          </div>

          {/* Table */}
          <div className="relative rounded-lg overflow-hidden table-glow-effect">
            <div className="table-wrapper">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="flex justify-center mb-2">
                      <span className="text-2xl whitespace-nowrap">VERTEXIA</span>
                    </div>
                    <div className="text-sm text-white/70">100% - 10-20%</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="mb-2">DIY</div>
                    <div className="text-sm text-white/70">100%</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <div className="mb-2">Hire an Agency</div>
                    <div className="text-sm text-white/70">100%</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Chances of launching your website</td>
                  <td className="text-center py-4 px-6">100%</td>
                  <td className="text-center py-4 px-6">10-20%</td>
                  <td className="text-center py-4 px-6">100%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Done-for-you design & content</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Use any domain to get started fast</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Launch & training call</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Edit with easy-to-use website editor</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Custom one-on-one support</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Fast, secure hosting</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Launch in a week</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Unlimited edits for 30 days</td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                  <td className="text-center py-4 px-6"><svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Biggest frustration</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">not finding, us sooner</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">hard to use and difficult to launch & site you're happy with</td>
                  <td className="text-center py-4 px-6 text-sm text-white/70">high cost & hard to maintain since you're dependent</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 pt-20 bg-black rounded-lg px-8 py-12 border-t-0 max-[768px]:mt-12 max-[768px]:pt-12 max-[768px]:px-6 max-[768px]:py-8 max-[640px]:mt-8 max-[640px]:pt-8 max-[640px]:px-4">
            <div className="text-center mb-16 max-[768px]:mb-12 max-[640px]:mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 max-[768px]:text-3xl max-[640px]:text-2xl max-[640px]:mb-3">What features are included in your Vertexia website?</h2>
              <p className="text-white/70 text-lg max-[768px]:text-base max-[640px]:text-sm">All the essentials to run a successful website or online store</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-[768px]:gap-6 max-[640px]:gap-4">
              {/* Feature 1 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/custom-fitness-website-design-vertexia-done-for-you-website.webp"
                    alt="Custom fitness website landing page designed by Vertexia featuring a modern gym and wellness theme with bold typography, responsive UI design, vibrant orange and navy color palette, and professional fitness branding for done-for-you website services."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">Done-for-you website design & copy</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Visually upselling design and engaging layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Device-responsive website design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Compatible content for products, services, blogs, events and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>SEO copy and built-in tools to rank your business on Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Website set up to convert visitors into customers</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/modern-product-showcase-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern ecommerce product showcase interface designed by Vertexia featuring a minimalist candle product layout, glassmorphism UI elements, responsive web design, secure domain display, and premium done-for-you website styling for online brands."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">Custom domain name & professional email</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Custom domain name or connect on existing domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Matching email address (e.g., yourname@business.com)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>New logo aligned with your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>SSL certificate to keep your site secure</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/creative-mobile-app-ui-design-vertexia-done-for-you-websi.webp"
                    alt="Modern mobile app UI concept designed by Vertexia featuring a creative profile editor interface, custom color palette controls, premium typography elements, and responsive app design visuals for done-for-you website and brand"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">Easy-to-use editor & unlimited edits done by us</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>User-friendly website editor so you easily edit anything anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Add or update pages, products, portfolio, FAQs, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Bloggers content to increase traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Bonus service: unlimited edits done by us for the first 30 days to ensure you love the site you launch</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/luxury-fashion-ecommerce-ui-design-vertexia-done-for-you-website.webp"
                    alt="Luxury fashion ecommerce website interface designed by Vertexia featuring a premium shopping cart UI, modern apparel showcase, stylish model photography, responsive ecommerce layout, and conversion-focused done-for-you website design."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">Unlimited sales with 0% commission</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Sales results from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited shopping cart with unlimited products/data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Multiple payment methods: credit & debit cards PayPal, Stripe—0% UENI commission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Efficient and secure order products with unlimited product listings</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/modern-restaurant-booking-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern restaurant reservation website UI designed by Vertexia featuring elegant dining booking interface, premium food showcase, table reservation card, responsive hospitality web design, and conversion-focused done-for-you restaurant website layout."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">Take appointments 24/7/365</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Appointment system ready-to-use from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>24/7 appointment management with on-site booking or third-party integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Email confirmation & calendar sync for all bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Business Vault access to manage and adjust bookings</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl max-[768px]:mb-4">
                  <img
                    src="/Done-for-you-images/feature-images/online-coaching-website-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern online coaching website interface designed by Vertexia featuring live mentor sessions, professional coaching dashboard UI, responsive course platform layout, interactive learning experience, and premium done-for-you website design for coaches and consultants."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 max-[768px]:h-48 max-[640px]:h-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 max-[768px]:text-lg max-[768px]:mb-2 max-[640px]:text-base">1-to-1 call before website launch</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Personalized 30-min call to finalize your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Discussed any changes desired before the website launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Training on the easy-to-use website editor for future updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Onboarding on UENI features that will help your business grow</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Pricing Section */}
          <div className="mt-20 pt-20 max-[768px]:mt-12 max-[768px]:pt-12 max-[640px]:mt-8 max-[640px]:pt-8">
            <div className="text-center mb-16 max-[768px]:mb-12 max-[640px]:mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 max-[768px]:text-3xl max-[640px]:text-2xl max-[640px]:mb-3">How much does this website cost?</h2>
              <p className="text-white/70 text-lg max-[768px]:text-base max-[640px]:text-sm">$599 $79 one-time setup fee to build & launch your website and then $24.99 per month to run your website</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-[768px]:gap-6 max-[640px]:gap-4">
              {/* Setup Fee Card */}
              <div className="rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/10">
                <div className="bg-blue-600 px-6 py-6 max-[768px]:px-4 max-[768px]:py-4">
                  <h3 className="text-2xl font-bold text-white max-[768px]:text-xl max-[640px]:text-lg">The $79 one-time setup fee includes:</h3>
                </div>
                <div className="p-8 space-y-4 max-[768px]:p-6 max-[768px]:space-y-3 max-[640px]:p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Fully built multi-page website, easy to edit anytime</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Personalized design & SEO content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Ecommerce & bookings functionality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Website launched in 1 week</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">1-to-1 launch call to make any changes you need</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">30 days of unlimited edits by our team</span>
                  </div>
                </div>
              </div>

              {/* Monthly Fee Card */}
              <div className="rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/10">
                <div className="bg-blue-600 px-6 py-6 max-[768px]:px-4 max-[768px]:py-4">
                  <h3 className="text-2xl font-bold text-white max-[768px]:text-xl max-[640px]:text-lg">The $24.99 monthly fee includes:</h3>
                </div>
                <div className="p-8 space-y-4 max-[768px]:p-6 max-[768px]:space-y-3 max-[640px]:p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Domain name & pro email inbox</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Fast, secure hosting & SSL</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Unlimited sales, bookings & leads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">0% fees on any transactions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Ongoing platform upgrades</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-white text-sm max-[768px]:text-xs">Premium support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Professional Web Section */}
      <ProfessionalWebSection centered />

      {/* Footer Links Section */}
      <FooterLinksSection />

    </main>
  );
}