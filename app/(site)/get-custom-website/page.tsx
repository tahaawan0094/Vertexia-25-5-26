import type { Metadata } from "next";
import Link from "next/link";
import CustomWebsiteHeroSection from "@/components/sections/CustomWebsiteHeroSection";
// CustomWebsiteTable ka import remove kar diya hai
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import ProfessionalWebSection from "@/components/sections/ProfessionalWebSection";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "Get Custom Website | Vertexia - Professional Web Design & Development",
  description:
    "Professional custom website design and development service handled from start to finish. Get a fully built, SEO-optimized website with ecommerce, bookings, and unlimited edits by our team. Starting at just $599 setup fee.",
  keywords: [
    "custom website design",
    "web development service",
    "professional website",
    "ecommerce website",
    "website design company",
    "website development",
    "done-for-you website",
    "custom domain",
    "web design services",
  ],
  alternates: {
    canonical: "https://vertexiaio.vercel.app/get-custom-website",
  },
  openGraph: {
    title: "Get Custom Website | Vertexia - Professional Web Design & Development",
    description:
      "Professional custom website design and development service handled from start to finish. Fully built, SEO-optimized websites with ecommerce, bookings, and unlimited edits.",
    url: "https://vertexiaio.vercel.app/get-custom-website",
    type: "website",
    siteName: "Vertexia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function DoneForYouWebsitePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(147,51,234,0.35)_0%,rgba(147,51,234,0)_62%),radial-gradient(68%_58%_at_50%_62%,rgba(126,34,206,0.55)_0%,rgba(126,34,206,0)_72%),linear-gradient(180deg,#5b21b6_0%,#7c3aed_42%,#a855f7_62%,#5b21b6_82%,#1a1a2e_100%)]">
      <CustomWebsiteHeroSection />

      {/* Table Section yahan se completely remove kar di gayi hai */}

      {/* BUTTON INSIDE COMPONENT */}
      <HowItWorksSection showButton />

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">  
          <div className="mt-20 pt-20 bg-black rounded-lg px-8 py-12 border-t-0">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What features are included in your Vertexia website?</h2>
              <p className="text-white/70 text-lg">All the essentials to run a successful website or online store</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/custom-fitness-website-design-vertexia-done-for-you-website.webp"
                    alt="Custom fitness website landing page designed by Vertexia featuring a modern gym and wellness theme with bold typography, responsive UI design, vibrant orange and navy color palette, and professional fitness branding for done-for-you website services."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Done-for-you website design & copy</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Visually upselling design and engaging layouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Device-responsive website design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Compatible content for products, services, blogs, events and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>SEO copy and built-in tools to rank your business on Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Website set up to convert visitors into customers</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/modern-product-showcase-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern ecommerce product showcase interface designed by Vertexia featuring a minimalist candle product layout, glassmorphism UI elements, responsive web design, secure domain display, and premium done-for-you website styling for online brands."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom domain name & professional email</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Custom domain name or connect on existing domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Matching email address (e.g., yourname@business.com)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>New logo aligned with your brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>SSL certificate to keep your site secure</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/creative-mobile-app-ui-design-vertexia-done-for-you-websi.webp"
                    alt="Modern mobile app UI concept designed by Vertexia featuring a creative profile editor interface, custom color palette controls, premium typography elements, and responsive app design visuals for done-for-you website and brand"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy-to-use editor & unlimited edits done by us</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>User-friendly website editor so you easily edit anything anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Add or update pages, products, portfolio, FAQs, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Bloggers content to increase traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Bonus service: unlimited edits done by us for the first 30 days to ensure you love the site you launch</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/luxury-fashion-ecommerce-ui-design-vertexia-done-for-you-website.webp"
                    alt="Luxury fashion ecommerce website interface designed by Vertexia featuring a premium shopping cart UI, modern apparel showcase, stylish model photography, responsive ecommerce layout, and conversion-focused done-for-you website design."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Unlimited sales with 0% commission</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Sales results from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Unlimited shopping cart with unlimited products/data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Multiple payment methods: credit & debit cards PayPal, Stripe—0% UENI commission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Efficient and secure order products with unlimited product listings</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/modern-restaurant-booking-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern restaurant reservation website UI designed by Vertexia featuring elegant dining booking interface, premium food showcase, table reservation card, responsive hospitality web design, and conversion-focused done-for-you restaurant website layout."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Take appointments 24/7/365</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Appointment system ready-to-use from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>24/7 appointment management with on-site booking or third-party integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Email confirmation & calendar sync for all bookings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Business Vault access to manage and adjust bookings</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src="/Done-for-you-images/feature-images/online-coaching-website-ui-design-vertexia-done-for-you-website.webp"
                    alt="Modern online coaching website interface designed by Vertexia featuring live mentor sessions, professional coaching dashboard UI, responsive course platform layout, interactive learning experience, and premium done-for-you website design for coaches and consultants."
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1-to-1 call before website launch</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Personalized 30-min call to finalize your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Discussed any changes desired before the website launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Training on the easy-to-use website editor for future updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Onboarding on UENI features that will help your business grow</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Pricing Section */}
          <div className="mt-20 pt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How much does this website cost?</h2>
              <p className="text-white/70 text-lg">$599 Rs.22 one-time setup fee to build & launch your website and then $24.99 per month to run your website</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Setup Fee Card */}
              <div className="rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/10">
                <div className="bg-purple-1000 px-6 py-6">
                  <h3 className="text-2xl font-bold text-white">The Rs.30,000 one-time setup fee includes:</h3>
                  <hr className="border-t border-white/20 mt-3" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Fully built multi-page website, easy to edit anytime</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Personalized design & SEO content</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Ecommerce & bookings functionality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Website launched in 1 week</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">1-to-1 launch call to make any changes you need</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">30 days of unlimited edits by our team</span>
                  </div>
                </div>
              </div>

              {/* Monthly Fee Card */}
              <div className="rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/10">
                <div className="bg-purple-1000 px-6 py-6">
                  <h3 className="text-2xl font-bold text-white">The Rs.4,500 monthly fee includes:</h3>
                  <hr className="border-t border-white/20 mt-3" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Domain name & pro email inbox</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Fast, secure hosting & SSL</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Unlimited sales, bookings & leads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">0% fees on any transactions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Ongoing platform upgrades</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-white">Premium support</span>
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

      {/* Related Resources Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore More Vertexia Services</h2>
            <p className="text-lg text-slate-600 mb-8">Learn about our other website solutions and resources to help you make the right choice for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/done-for-you-website" className="text-blue-600 hover:text-blue-800">
                  Done-For-You Website
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Get a fully built website without any effort on your part. Perfect for businesses that want a hands-off solution.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/pricing" className="text-blue-600 hover:text-blue-800">
                  View Our Pricing
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Transparent pricing with no hidden fees. See exactly what you get with our website packages.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/faqs" className="text-blue-600 hover:text-blue-800">
                  FAQs
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Get answers to common questions about our services, process, and support.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                  Get In Touch
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Have questions? Contact our team to discuss your website needs and get started today.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/refund-policy" className="text-blue-600 hover:text-blue-800">
                  Refund Policy
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Learn about our 30-day money-back guarantee and satisfaction guarantee.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                <Link href="/about-us" className="text-blue-600 hover:text-blue-800">
                  About Vertexia
                </Link>
              </h3>
              <p className="text-slate-600 mb-4">Discover our story, mission, and why businesses trust Vertexia for their web solutions.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Looking for WordPress Website Solutions?</h3>
            <p className="text-slate-600 mb-4">We also offer <a href="https://vertexiaio.vercel.app/get-wordpress-website" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">WordPress website development</a> for those who prefer open-source solutions.</p>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <FooterLinksSection />

    </main>
    </PageTransition>
  );
}