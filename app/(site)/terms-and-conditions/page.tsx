"use client";

import type { Metadata } from "next";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

const metadata: Metadata = {
  title: "Terms and Conditions | Vertexia",
  description:
    "Vertexia Terms and Conditions governing the use of web development and digital services.",
  alternates: {
    canonical: "https://vertexiaio.vercel.app/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <PageTransition>
      <main className="site bg-white text-slate-900 font-body">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#2563eb] font-accent">
            Terms & Conditions
          </p>
          <h1 className="text-4xl font-display font-bold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
            Vertexia Terms and Conditions
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Effective Date: January 1st, 2026
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Welcome to Vertexia. These Terms and Conditions (“Terms”) govern the use of services provided by Vertexia (“Company”, “we”, “us”, or “our”). By purchasing, accessing, or using our services, you (“Client”, “you”, or “your”) agree to comply with and be legally bound by these Terms.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            If you do not agree with any part of these Terms, you must not use our services.
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
              <p><strong>Support Email:</strong> office@matjarx.com</p>
              <p><strong>Phone / WhatsApp:</strong> +92 303 3720953</p>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">2. Services Offered</h2>
            <p className="text-slate-600">
              Vertexia provides digital services including but not limited to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>WordPress website development</li>
              <li>Shopify store development</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>GEO (AI Search Optimization)</li>
              <li>Technical SEO</li>
              <li>Local SEO</li>
              <li>Link building and guest posting</li>
              <li>Social media management</li>
              <li>Website maintenance and support</li>
              <li>Hosting management</li>
              <li>Security monitoring</li>
              <li>Plugin and theme updates</li>
              <li>Content edits and backup management</li>
            </ul>
            <p className="text-slate-600">
              All websites developed by Vertexia are primarily theme-based unless otherwise agreed in writing.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">3. Pricing and Plans</h2>
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-xl font-semibold text-[#0f172a]">Website Development Plans</h3>
                <div className="mt-4 space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                  <div>
                    <p className="font-semibold text-[#0f172a]">Launch Plan</p>
                    <p>One-Time Setup Fee: PKR 22,500</p>
                    <p>Monthly Maintenance Fee: PKR 4,500</p>
                    <p>Includes up to 5–10 pages</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a]">Boost Plan</p>
                    <p>One-Time Setup Fee: PKR 22,500</p>
                    <p>Monthly Maintenance Fee: PKR 15,600</p>
                    <p>Includes up to 20–30 pages</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a]">Growth Plan</p>
                    <p>One-Time Setup Fee: PKR 22,500</p>
                    <p>Monthly Maintenance Fee: PKR 27,000</p>
                    <p>Includes up to 50 pages</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a]">Platinum Ecommerce Plan</p>
                    <p>One-Time Setup Fee: PKR 140,000</p>
                    <p>Monthly Maintenance Fee: PKR 55,000</p>
                    <p>Includes ecommerce management, SEO, social media management, 10 blogs per month, and 20 social media post designs.</p>
                  </div>
                </div>
              </div>
              <p>
                Additional requirements outside the agreed scope may incur additional charges.
              </p>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">4. Payment Terms</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>All payments are accepted via bank transfer only.</li>
              <li>All prices are charged in Pakistani Rupees (PKR).</li>
              <li>Monthly subscriptions are billed in advance.</li>
              <li>Monthly billing dates are based on the original signup date.</li>
              <li>Clients are provided a 5-day grace period for overdue invoices.</li>
              <li>Failure to make payment within the grace period may result in service suspension.</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">5. Refund Policy</h2>
            <div className="space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-[#0f172a]">Setup Fees</p>
                <p>Setup fees are non-refundable once work has started.</p>
                <p>Refund requests may only be submitted within 24 hours of payment if the project has not substantially started.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Custom Projects</p>
                <p>For custom projects:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Refunds may be considered under specific conditions if the client is dissatisfied.</li>
                  <li>Operational costs, service fees, purchased assets, plugins, themes, and third-party expenses will be deducted.</li>
                  <li>Remaining refundable amounts, if applicable, will be processed within 30 days.</li>
                  <li>Upon refund processing, project files may be delivered to the client in their current state.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Approved Work</p>
                <p>Any work approved verbally or in writing by the client becomes non-refundable.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Monthly Subscriptions</p>
                <p>Monthly subscription payments are non-refundable once the billing cycle has started.</p>
              </div>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">6. Cancellation Policy</h2>
            <p className="text-slate-600">
              Clients may cancel services at any time by providing at least 30 days written notice.
            </p>
            <p className="text-slate-600">
              Upon cancellation:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Monthly services will continue until the end of the active billing period.</li>
              <li>Clients may request website files and migration assistance.</li>
              <li>Vertexia is not responsible for third-party migration issues.</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">7. Non-Payment and Suspension</h2>
            <p className="text-slate-600">In case of non-payment:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Vertexia will attempt to contact the client through calls, messages, emails, or meetings.</li>
              <li>Services may be suspended after the grace period expires.</li>
              <li>Websites and hosting services may be taken offline after 3 months of non-payment.</li>
              <li>Website data may be permanently deleted after 1 year of inactivity or non-payment.</li>
              <li>Restoration of suspended projects may require repayment of setup fees and maintenance costs.</li>
              <li>After 1 year, projects may require complete redevelopment.</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">8. Delivery Timelines</h2>
            <p className="text-slate-600">Estimated delivery timelines:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Launch Plan: 7 business days</li>
              <li>Boost Plan: 7–14 business days</li>
              <li>Growth Plan: 7–14 business days</li>
              <li>Platinum Plan: 30–45 business days</li>
            </ul>
            <p className="text-slate-600">Custom project timelines are defined separately within signed service agreements.</p>
            <p className="text-slate-600">Delivery timelines may be delayed due to:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Delayed approvals</li>
              <li>Missing content or credentials</li>
              <li>Third-party service delays</li>
              <li>Platform restrictions or outages</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">9. Website Ownership</h2>
            <p className="text-slate-600">
              Clients receive full ownership rights to their website only after all invoices and dues are fully cleared.
            </p>
            <p className="text-slate-600">Upon completion and full payment:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>WordPress admin access may be shared</li>
              <li>Shopify collaborator or admin access may be shared</li>
              <li>Hosting credentials and website files may be provided upon request</li>
              <li>Clients may migrate their website to another hosting provider</li>
            </ul>
            <p className="text-slate-600">
              Vertexia reserves the right to suspend access in cases of unpaid invoices.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">10. SEO and Marketing Disclaimer</h2>
            <p className="text-slate-600">Vertexia does not guarantee:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Specific Google rankings</li>
              <li>Website traffic</li>
              <li>Sales</li>
              <li>Leads</li>
              <li>Revenue growth</li>
            </ul>
            <p className="text-slate-600">
              SEO and digital marketing results depend on multiple external factors including competition, search engine algorithm changes, market conditions, and client participation.
            </p>
            <p className="text-slate-600">
              While we apply industry best practices and optimization strategies, all results are estimates and cannot be guaranteed.
            </p>
            <p className="text-slate-600">
              Vertexia may use hybrid AI-assisted and human-generated content creation methods.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">11. Support Policy</h2>
            <div className="space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-[#0f172a]">Support Hours</p>
                <p>Monday to Saturday</p>
                <p>11:00 AM – 8:00 PM Pakistan Standard Time (PKT)</p>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Support Channels</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>WhatsApp: Sales and general support</li>
                  <li>Email: Billing, refunds, contracts, and documentation</li>
                  <li>Phone Support: VIP and Platinum clients only</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Response Time</p>
                <p>Average response time is within 24 business hours.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Emergency Support</p>
                <p>Emergency support may include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Website downtime</li>
                  <li>Malware issues</li>
                  <li>Critical website functionality errors</li>
                </ul>
                <p>Emergency phone support is prioritized for VIP and Platinum clients.</p>
              </div>
            </div>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">12. Client Responsibilities</h2>
            <p className="text-slate-600">Clients are responsible for:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Providing accurate information</li>
              <li>Sharing required access credentials</li>
              <li>Reviewing and approving work on time</li>
              <li>Maintaining lawful website content</li>
              <li>Ensuring they own rights to submitted materials</li>
            </ul>
            <p className="text-slate-600">
              Delays caused by missing approvals or incomplete submissions may affect project timelines.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">13. Third-Party Services</h2>
            <p className="text-slate-600">
              Vertexia may integrate or work with third-party services including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Shopify</li>
              <li>WordPress plugins</li>
              <li>Hosting providers</li>
              <li>Google services</li>
              <li>Meta platforms</li>
              <li>Payment gateways</li>
              <li>SEO tools</li>
            </ul>
            <p className="text-slate-600">
              We are not liable for outages, policy changes, pricing changes, suspensions, or failures caused by third-party services.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">14. Intellectual Property</h2>
            <p className="text-slate-600">
              All custom work created by Vertexia remains the property of Vertexia until full payment is received.
            </p>
            <p className="text-slate-600">Clients retain ownership of their logos, trademarks, and original content.</p>
            <p className="text-slate-600">
              Vertexia reserves the right to display completed projects in portfolios and marketing materials unless otherwise agreed in writing.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">15. Limitation of Liability</h2>
            <p className="text-slate-600">Vertexia shall not be liable for:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Indirect or consequential losses</li>
              <li>Loss of profits or revenue</li>
              <li>Data loss caused by third-party providers</li>
              <li>Search engine ranking fluctuations</li>
              <li>Cybersecurity incidents beyond reasonable control</li>
              <li>Delays caused by external services</li>
            </ul>
            <p className="text-slate-600">
              Our total liability shall not exceed the total amount paid by the client for the affected service.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">16. Termination of Services</h2>
            <p className="text-slate-600">Vertexia reserves the right to terminate services if:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>The client violates these Terms</li>
              <li>Payments remain unpaid</li>
              <li>The client engages in abusive, illegal, or fraudulent activity</li>
              <li>The website content violates applicable laws</li>
            </ul>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">17. Governing Law</h2>
            <p className="text-slate-600">
              These Terms shall be governed and interpreted in accordance with the laws of Pakistan.
            </p>
            <p className="text-slate-600">
              Any disputes arising from these Terms shall fall under the jurisdiction of the courts of Karachi, Pakistan.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">18. Changes to Terms</h2>
            <p className="text-slate-600">
              Vertexia reserves the right to update or modify these Terms at any time without prior notice.
            </p>
            <p className="text-slate-600">
              Continued use of services after updates constitutes acceptance of the revised Terms.
            </p>
          </article>

          <article className="space-y-4 rounded-[32px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)]">
            <h2 className="text-2xl font-semibold text-[#0f172a]">19. Contact Information</h2>
            <div className="space-y-2 text-slate-600">
              <p>For legal, billing, or support inquiries:</p>
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
