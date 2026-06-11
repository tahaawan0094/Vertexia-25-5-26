import type { Metadata } from "next";
import Link from "next/link";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "Refund Policy | Vertexia - 30-Day Money-Back Guarantee",
  description:
    "Vertexia's 30-day refund guarantee for web development services. Learn our complete refund policy, terms, eligibility requirements, and how to request a refund for custom website projects.",
  keywords: [
    "refund policy",
    "money-back guarantee",
    "web development refund",
    "website design refund",
    "customer satisfaction",
    "vertexia refund",
  ],
  alternates: {
    canonical: "https://vertexiaio.vercel.app/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | Vertexia - 30-Day Money-Back Guarantee",
    description:
      "Vertexia's 30-day refund guarantee for web development services. Learn our complete refund policy, terms, eligibility requirements, and how to request a refund for custom website projects.",
    url: "https://vertexiaio.vercel.app/refund-policy",
    type: "website",
    siteName: "Vertexia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RefundPolicyPage() {
  return (
    <PageTransition>
      <main className="site bg-white text-slate-900 font-body">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#2563eb] font-accent">
            Refund Policy
          </p>
          <h1 className="text-4xl font-display font-bold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
            Vertexia Refund Policy
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Effective Date: January 1st, 2026
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            At Vertexia, we stand behind our work and want to ensure your satisfaction. This Refund Policy outlines the terms and conditions for requesting refunds on our services. Learn about <Link href="/get-custom-website" className="text-[#2563eb] hover:text-[#1d4ed8] underline">our custom website services</Link>, view our <Link href="/pricing" className="text-[#2563eb] hover:text-[#1d4ed8] underline">transparent pricing</Link>, or explore <Link href="/get-wordpress-website" className="text-[#2563eb] hover:text-[#1d4ed8] underline">our WordPress website solutions</Link>.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">1. 30-Day Refund Guarantee</h2>
            <p className="text-slate-600">
              As a new customer, you may request a refund within 30 calendar days of the Date of Purchase for any reason. The Date of Purchase is defined as the date you have paid the Setup Fee, which is the one-time fee paid by new customers for Vertexia to build a website. The Refund Period is defined as the 30-day period from the Date of Purchase.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">2. Questionnaire Requirement</h2>
            <p className="text-slate-600">
              You must complete a questionnaire about your business in order for Vertexia to be able to create your business website. If you have not completed the questionnaire, you will not receive a business website. You may request a refund at any time within the Refund Period whether or not you have completed the questionnaire and/or received the business website.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">3. Refund Eligibility</h2>
            <p className="text-slate-600">
              Subject to clause 4 of this Refund Policy, you are ineligible for a refund after the Refund Period, irrespective of whether you have completed the questionnaire and/or received the business website. Failure to complete the questionnaire required for Vertexia to build the business website does not automatically extend the Refund Period. Outside the Refund Period, all sales are final and non-refundable.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">4. Refund Period Extension</h2>
            <p className="text-slate-600">
              If Vertexia has not delivered the website within 7 days of your completing the questionnaire, then Vertexia will extend the Refund Period according to the number of days Vertexia was delayed. For example, if Vertexia delivered your business website 8 days after you completed the questionnaire, then your Refund Period would be extended by 1 day.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">5. Refund Scope for Services</h2>
            <p className="text-slate-600">
              Subject to clause 1, if you have purchased Services from Vertexia, then the refund shall include the full amount paid less the cost of the custom domain name if one has been selected. If no custom domain name has been selected, then the recurring plan subscription shall be refunded in full.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">6. How to Request a Refund</h2>
            <p className="text-slate-600 mb-4">
              To request a refund, please contact us through any of the following channels during the Refund Period:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>
                <strong>Phone / WhatsApp:</strong> <a href="https://wa.me/923352831551" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:text-[#1d4ed8] underline">+92 3352831551</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:reach.vertexia@gmail.com" className="text-[#2563eb] hover:text-[#1d4ed8] underline">reach.vertexia@gmail.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+923352831551" className="text-[#2563eb] hover:text-[#1d4ed8] underline">+92 3352831551</a>
              </li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">7. Refund Processing Timeline</h2>
            <p className="text-slate-600">
              Once your refund request is approved, we will process the refund within 7–14 business days. The funds will be returned to the original payment method used for the purchase.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">8. Non-Refundable Items</h2>
            <p className="text-slate-600 mb-4">
              The following items are non-refundable:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Custom domain names (if selected)</li>
              <li>Premium plugins and theme purchases</li>
              <li>Additional services beyond the setup fee</li>
              <li>Monthly maintenance fees (if billing cycle has started)</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">9. Related Policies</h2>
            <p className="text-slate-600 mb-4">
              For more information about our services and terms, please review the following:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>
                <Link href="/terms-and-conditions" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://vertexiaio.vercel.app/pricing" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Pricing
                </a>
              </li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">10. Contact Us</h2>
            <div className="space-y-2 text-slate-600">
              <p>If you have any questions about this Refund Policy, please contact us:</p>
              <p><strong>Vertexia</strong></p>
              <p>B6, 4th Street, Zamzama, Clifton, Karachi, Pakistan</p>
              <p>
                <strong>Email:</strong> <a href="mailto:admin.vertexia@gmail.com" className="text-[#2563eb] hover:text-[#1d4ed8] underline">admin.vertexia@gmail.com</a>
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong> <a href="https://wa.me/923352831551" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:text-[#1d4ed8] underline">+92 3352831551</a>
              </p>
              <p>
                <strong>Last Updated:</strong> 27 July 2023
              </p>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">11. More Resources</h2>
            <p className="text-slate-600 mb-4">
              Explore additional information about Vertexia's services and policies:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>
                <Link href="/" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/get-custom-website" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Get Custom Website
                </Link>
              </li>
              <li>
                <Link href="/get-wordpress-website" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Get WordPress Website
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#2563eb] hover:text-[#1d4ed8] underline">
                  About Vertexia
                </Link>
              </li>
              <li>
                <a href="https://vertexiaio.vercel.app" className="text-[#2563eb] hover:text-[#1d4ed8] underline" target="_blank" rel="noopener noreferrer">
                  Vertexia Official Website
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <FooterLinksSection />
    </main>
    </PageTransition>
  );
}
