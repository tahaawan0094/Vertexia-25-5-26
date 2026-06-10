"use client";

import type { Metadata } from "next";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

const metadata: Metadata = {
  title: "Privacy Policy | Vertexia",
  description:
    "Vertexia Privacy Policy describing how we collect, use, store, and protect personal information.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <main className="site bg-white text-slate-900 font-body">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#2563eb] font-accent">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-display font-bold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
            Vertexia Privacy Policy
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Effective Date: January 1st, 2026
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Vertexia (“Company”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use our website, services, or communicate with us.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">1. Company Information</h2>
            <div className="space-y-2 text-slate-600">
              <p><strong>Business Name:</strong> Vertexia</p>
              <p><strong>Business Type:</strong> Sole Proprietorship</p>
              <p><strong>Business Address:</strong> B6, 4th Street, Zamzama, Clifton, Karachi, Pakistan</p>
              <p><strong>Support Email:</strong> reach.vertexia@gmail.com</p>
              <p><strong>Phone / WhatsApp:</strong> +92 3352831551</p>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">2. Information We Collect</h2>
            <p className="text-slate-600">We may collect the following types of information:</p>
            <div className="mt-4 space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-[#0f172a]">Personal Information</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business information</li>
                  <li>Website URLs</li>
                  <li>Project details and requirements</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Technical and Website Data</p>
                <p>We may receive access to or collect data related to:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>WordPress websites</li>
                  <li>Shopify stores</li>
                  <li>Google Analytics</li>
                  <li>Google Search Console</li>
                  <li>Meta Pixel</li>
                  <li>Bing Webmaster Tools</li>
                  <li>Google Business Profile</li>
                  <li>Website performance analytics</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Communication Information</p>
                <p>When you contact us through:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Website contact forms</li>
                  <li>Email</li>
                  <li>WhatsApp</li>
                  <li>Phone calls</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="mt-2">
                  we may store communication records for support, billing, legal, and operational purposes.
                </p>
              </div>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">3. How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Providing website development services</li>
              <li>Managing SEO and digital marketing campaigns</li>
              <li>Customer support and communication</li>
              <li>Processing invoices and payments</li>
              <li>Improving website performance</li>
              <li>Managing website maintenance and security</li>
              <li>Creating reports and analytics</li>
              <li>Responding to legal obligations</li>
              <li>Preventing fraud or misuse of services</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">4. Analytics and Tracking Tools</h2>
            <p className="text-slate-600">Vertexia may use third-party analytics and marketing tools including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Google Analytics</li>
              <li>Google Search Console</li>
              <li>Meta Pixel</li>
              <li>Bing Webmaster Tools</li>
              <li>Shopify analytics tools</li>
              <li>WordPress plugins and analytics systems</li>
            </ul>
            <p className="text-slate-600 mt-4">These tools may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>IP addresses</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Website usage behavior</li>
              <li>Traffic and interaction data</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We use these tools solely to improve performance, marketing, analytics, and customer experience.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">5. Payment Information</h2>
            <p className="text-slate-600">Vertexia accepts payments through bank transfers only.</p>
            <p className="text-slate-600 mt-4">We do not directly collect or store:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Credit card information</li>
              <li>Debit card information</li>
              <li>Banking passwords</li>
              <li>Financial authentication credentials</li>
            </ul>
            <p className="text-slate-600 mt-4">Clients are responsible for securely processing payments through their banking provider.</p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">6. Third-Party Services</h2>
            <p className="text-slate-600">We may use or integrate with third-party platforms including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>Shopify</li>
              <li>WordPress</li>
              <li>Hosting providers</li>
              <li>Google services</li>
              <li>Meta platforms</li>
              <li>Social media platforms</li>
              <li>SEO tools</li>
              <li>Email service providers</li>
            </ul>
            <p className="text-slate-600 mt-4">
              These third-party services may independently collect or process user data according to their own privacy policies.
            </p>
            <p className="text-slate-600">
              Vertexia is not responsible for the privacy practices of third-party platforms.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">7. Data Sharing</h2>
            <p className="text-slate-600">Vertexia does not sell personal information.</p>
            <p className="text-slate-600 mt-4">We may share information only when necessary for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Providing requested services</li>
              <li>Technical integrations</li>
              <li>Legal compliance</li>
              <li>Website hosting and maintenance</li>
              <li>SEO and marketing operations</li>
              <li>Protecting our legal rights</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Information may be shared with trusted service providers or contractors only when required for project delivery.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">8. Data Retention</h2>
            <p className="text-slate-600">We retain client information for operational, legal, accounting, and support purposes.</p>
            <p className="text-slate-600 mt-4">
              Inactive or unpaid project data may be deleted after one year of inactivity or non-payment.
            </p>
            <p className="text-slate-600">
              Communication records, invoices, and agreements may be retained for legal and business documentation purposes.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">9. Data Security</h2>
            <p className="text-slate-600">We implement reasonable security measures to protect client information and website access.</p>
            <p className="text-slate-600 mt-4">These may include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Secure password handling</li>
              <li>Access controls</li>
              <li>Backup systems</li>
              <li>Malware monitoring</li>
              <li>Security plugins and hosting protections</li>
            </ul>
            <p className="text-slate-600 mt-4">
              However, no online system is completely secure, and Vertexia cannot guarantee absolute security of digital information.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">10. Website Access and Credentials</h2>
            <p className="text-slate-600">
              Clients may provide website credentials, hosting access, analytics access, or business platform permissions for project completion.
            </p>
            <p className="text-slate-600 mt-4">
              Vertexia agrees to use such access only for authorized business purposes related to the client’s project.
            </p>
            <p className="text-slate-600 mt-4">
              Clients are responsible for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Maintaining ownership of their accounts</li>
              <li>Updating passwords after project completion if desired</li>
              <li>Reviewing granted permissions periodically</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">11. AI-Assisted Content</h2>
            <p className="text-slate-600">Vertexia may use hybrid AI-assisted and human-created content generation methods for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>SEO content</li>
              <li>Blog writing</li>
              <li>Social media content</li>
              <li>Website copywriting</li>
              <li>Optimization recommendations</li>
            </ul>
            <p className="text-slate-600 mt-4">All content is reviewed and managed as part of our service workflows.</p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">12. Client Rights</h2>
            <p className="text-slate-600">Clients may request:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Access to their information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of certain information where legally permitted</li>
              <li>Removal of website access permissions</li>
            </ul>
            <p className="text-slate-600 mt-4">Requests may be submitted via email at office@vertexia.com.</p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">13. International Data Usage</h2>
            <p className="text-slate-600">
              Although Vertexia operates in Pakistan, some third-party services used by us may process data internationally.
            </p>
            <p className="text-slate-600 mt-4">
              By using our services, you acknowledge that certain information may be processed outside Pakistan through third-party platforms.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">14. Children’s Privacy</h2>
            <p className="text-slate-600">
              Vertexia services are not intended for individuals under the age of 18.
            </p>
            <p className="text-slate-600 mt-4">
              We do not knowingly collect personal information from minors.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">15. Changes to This Privacy Policy</h2>
            <p className="text-slate-600">
              Vertexia reserves the right to update or modify this Privacy Policy at any time.
            </p>
            <p className="text-slate-600 mt-4">
              Changes become effective immediately upon publication on our website.
            </p>
            <p className="text-slate-600">
              Continued use of our services constitutes acceptance of updated policies.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">16. Contact Information</h2>
            <div className="space-y-2 text-slate-600">
              <p>For privacy-related inquiries or requests:</p>
              <p>Vertexia</p>
              <p>A St, DHA phase 6 Defence V Defence Housing Authority, Karachi, 75500</p>
              <p>Email: reach.vertexia@gmail.com</p>
              <p>Phone / WhatsApp: +92 3352831551</p>
              <p>Date: 1st January, 2026</p>
            </div>
          </article>
        </div>
      </section>

      <FooterLinksSection />
    </main>
    </PageTransition>
  );
}
