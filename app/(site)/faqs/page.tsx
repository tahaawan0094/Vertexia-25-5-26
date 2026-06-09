"use client";

import { useState } from "react";
import FooterLinksSection from "@/components/sections/FooterLinksSection";
import PageTransition from "@/components/animations/PageTransition";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Is my website guaranteed to go live, stress-free, in just 7 days with Vertexia?",
    answer: "Yes! We deliver fully functional, professionally designed websites in 7 days. Our streamlined process removes the stress and complexity of traditional web development. We handle everything from design to deployment, so you can launch with confidence."
  },
  {
    id: 2,
    question: "Will my Vertexia website be personalized to reflect my unique brand identity?",
    answer: "Absolutely. We create custom websites tailored to your brand. We incorporate your colors, logo, messaging, and unique value proposition to ensure your website stands out and truly represents your business."
  },
  {
    id: 3,
    question: "Will my Vertexia website rank in search results on Google?",
    answer: "Yes. We build websites with SEO best practices built-in from the start. This includes optimized page structure, fast loading speeds, mobile responsiveness, and search engine-friendly architecture to help you rank on Google."
  },
  {
    id: 4,
    question: "Will my website be mobile-friendly and work seamlessly on all devices?",
    answer: "100%. Every Vertexia website is fully responsive and tested across all devices—desktop, tablet, and mobile. We ensure your site provides an excellent user experience regardless of screen size."
  },
  {
    id: 5,
    question: "Will Vertexia save me hundreds of hours and thousands of dollars?",
    answer: "Absolutely. Traditional web development can take months and cost thousands. Vertexia delivers your website in 7 days at an affordable price. You save countless hours of work, extensive hiring costs, and project management headaches."
  },
  {
    id: 6,
    question: "Will Vertexia handle all the design, copywriting, tech, and SEO for my website?",
    answer: "Yes. We manage the entire process—from strategy and design to copywriting, technical setup, and SEO optimization. You don't need to hire multiple freelancers or agencies. We handle it all."
  },
  {
    id: 7,
    question: "Can I request unlimited changes to my website before it goes live?",
    answer: "Yes. We offer unlimited revisions during the initial 30 days to ensure you're completely satisfied with your website. Your feedback drives our refinements until the site is perfect for your launch."
  },
  {
    id: 8,
    question: "Does Vertexia offer all the essential features to run my online business?",
    answer: "Yes. Our websites include everything you need: e-commerce functionality, appointment booking, contact forms, analytics integration, email setup, and more. All essential features are included."
  },
  {
    id: 9,
    question: "Do all Vertexia websites come with e-commerce functionality?",
    answer: "Yes. Every website includes built-in e-commerce capabilities with unlimited products, secure payment processing, and 0% commission on transactions. Start selling immediately after launch."
  },
  {
    id: 10,
    question: "Does Vertexia include a custom domain name on all plans?",
    answer: "Yes. All Vertexia websites come with a custom domain name included. You can choose a new domain or transfer an existing one to us—it's your choice."
  },
  {
    id: 11,
    question: "Can I connect an existing domain name to my Vertexia website?",
    answer: "Of course. If you already own a domain, we'll connect it to your Vertexia website. The process is seamless and takes just a few minutes."
  },
  {
    id: 12,
    question: "Does Vertexia include a custom email address on all plans?",
    answer: "Yes. Get professional email addresses (like hello@yourbusiness.com) included with your website. Communicate with customers and clients professionally from day one."
  },
  {
    id: 13,
    question: "Does Vertexia include appointment booking on all websites?",
    answer: "Yes. All Vertexia websites include 24/7 appointment booking functionality. Customers can schedule appointments directly on your site, and confirmations are sent automatically."
  },
  {
    id: 14,
    question: "Will a Vertexia website help me get more customers and grow my business?",
    answer: "That's the goal! A professional, fast, SEO-optimized website that converts visitors into customers is the foundation of online growth. We build websites designed to generate results for your business."
  }
];

function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const additionalFaqItems: FAQItem[] = [
    {
      id: 15,
      question: "Does Vertexia offer a 30-day money-back guarantee?",
      answer: "Yes! We're confident in our service. If you're not completely satisfied within 30 days, we'll refund your money. No questions asked."
    },
    {
      id: 16,
      question: "Can I easily downgrade or upgrade my plan at any time?",
      answer: "Absolutely. You can upgrade or downgrade your plan anytime from your dashboard. Changes take effect immediately with prorated billing."
    },
    {
      id: 17,
      question: "Can I cancel my plan from my dashboard at any time?",
      answer: "Yes. You have complete control. Cancel anytime from your dashboard with no cancellation fees or penalties."
    },
    {
      id: 18,
      question: "Can I easily edit my Vertexia website, even if I'm not great with computers?",
      answer: "Yes! Our drag-and-drop editor is designed to be simple. No coding required. Anyone can edit their website in minutes."
    },
    {
      id: 19,
      question: "Can I change the layout and design of my website with one click?",
      answer: "Yes. Switch between professional templates instantly. Change colors, fonts, layouts, and more without any technical knowledge."
    },
    {
      id: 20,
      question: "Can Vertexia's Concierge Team edit my site if I prefer not to do it myself?",
      answer: "Absolutely. Our team can handle all edits and updates for you. Just let us know what you need changed."
    },
    {
      id: 21,
      question: "Can Vertexia help me with email marketing?",
      answer: "Yes. We help you set up email campaigns, build subscriber lists, and create effective email strategies to grow your business."
    },
    {
      id: 22,
      question: "Can Vertexia help me with social media?",
      answer: "Yes. We provide guidance on social media strategy, content creation, and audience engagement to maximize your reach."
    },
    {
      id: 23,
      question: "Can Vertexia help me grow my 5-star reviews?",
      answer: "Yes. We implement review generation strategies and help you collect positive customer feedback to build trust and credibility."
    },
    {
      id: 24,
      question: "Can Vertexia help me meet my marketing goals?",
      answer: "That's our mission! We align your website and marketing strategy with your business goals for measurable results."
    },
    {
      id: 25,
      question: "Can Vertexia pair me with a dedicated growth marketer?",
      answer: "Yes. Depending on your plan, you may have access to a dedicated growth strategist to help scale your business."
    },
    {
      id: 26,
      question: "Does Vertexia offer ongoing human support after my website launch?",
      answer: "Yes. We provide 24/7 customer support via chat, email, and phone. Our team is always here to help."
    },
    {
      id: 27,
      question: "Do I get a free consultation with a small business tax expert?",
      answer: "Yes. Qualified customers receive a free consultation to discuss tax strategies and business growth planning."
    }
  ];

  const ueniFaqItems: FAQItem[] = [
    {
      id: 28,
      question: "Are all of my sales on UENI commissions free? Like, really, 0%?",
      answer: "Yes! 100% of your sales are commission-free. We don't take any percentage of your revenue. You keep everything you earn."
    },
    {
      id: 29,
      question: "Can I showcase unlimited products and services on my UENI website?",
      answer: "Absolutely. Showcase as many products and services as you want. No limits on inventory or listings."
    },
    {
      id: 30,
      question: "Can I offer promotions and coupon codes?",
      answer: "Yes. Create unlimited promotions, discounts, and coupon codes to drive sales and customer loyalty."
    },
    {
      id: 31,
      question: "Can I manage my inventory and offer multiple product or service variations?",
      answer: "Yes. Manage stock levels, track inventory in real-time, and offer multiple product variations (sizes, colors, etc.) effortlessly."
    },
    {
      id: 32,
      question: "Will my customers be able to pay with credit & debit cards, PayPal, and cash?",
      answer: "Yes. Accept all major payment methods including credit cards, debit cards, PayPal, and cash payments for maximum flexibility."
    },
    {
      id: 33,
      question: "Can UENI make me a website like one of the example websites?",
      answer: "Yes. We create custom websites tailored to your vision and business needs, inspired by examples you admire."
    },
    {
      id: 34,
      question: "Can I upload high-quality images and videos to my website?",
      answer: "Absolutely. Upload unlimited high-quality images and videos to showcase your products and services beautifully."
    },
    {
      id: 35,
      question: "Can UENI automatically connect my website with FB, Insta and Google Shopping?",
      answer: "Yes. We integrate your website with Facebook, Instagram, and Google Shopping so you can sell across multiple platforms automatically."
    },
    {
      id: 36,
      question: "Can I upload custom HTML code to my website?",
      answer: "Yes. For advanced users, add custom HTML code to extend functionality and create unique features."
    },
    {
      id: 37,
      question: "Can I export my leads, orders and customer data?",
      answer: "Yes. Export all your data anytime—customers, orders, leads. Your data is yours to use and analyze."
    },
    {
      id: 38,
      question: "Can I connect my own Google Analytics or tracking pixels?",
      answer: "Yes. Add Google Analytics, Facebook Pixels, and other tracking codes to monitor performance and optimize marketing."
    },
    {
      id: 39,
      question: "Can I add Facebook Messenger or WhatsApp to my website?",
      answer: "Yes. Add Facebook Messenger and WhatsApp chat widgets for direct customer communication and support."
    },
    {
      id: 40,
      question: "Does UENI ensure my website remains secure and up-to-date?",
      answer: "Yes. We maintain security, handle updates, and manage hosting so your website is always secure and running smoothly."
    },
    {
      id: 41,
      question: "Can I integrate my website with popular tools and applications?",
      answer: "Yes. Integrate with hundreds of popular tools for email marketing, CRM, accounting, shipping, and more."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <PageTransition>
    <main className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-black px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),_transparent_50%)]" />
        
        <div className="relative max-w-[1200px] mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <svg className="w-16 md:w-20 h-16 md:h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 font-display">
            With Vertexia, it's a <span className="text-blue-400 italic">yes!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-[800px] mx-auto font-body">
            Too good to be true? No, Vertexia is just truly good. See how much it can do for your business.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="perspective">
          {/* Tilted White Card */}
          <div className="transform -skew-y-2 bg-white shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              {/* YES Header */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 flex items-center gap-3 mb-2 font-display">
                  <span>YES!</span>
                  <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full flex items-start justify-between gap-4 hover:text-blue-600 transition-colors text-left group"
                    >
                      <span className="font-medium text-base md:text-lg text-slate-800 leading-relaxed group-hover:text-blue-600 font-body">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                          openId === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>

                    {openId === item.id && (
                      <div className="mt-3 pl-4 text-slate-700 text-sm md:text-base leading-relaxed border-l-2 border-blue-500 font-body">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Tilted White Card */}
        <div className="perspective mt-8 md:mt-12">
          <div className="transform -skew-y-2 bg-white shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              {/* YES Header with Smiley */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 flex items-center gap-3 mb-2 font-display">
                  <span>YES!</span>
                  <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
                    <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
                    <path d="M8 14c2 2 4 2 8 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </h2>
              </div>

              {/* Additional FAQ Items */}
              <div className="space-y-4">
                {additionalFaqItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full flex items-start justify-between gap-4 hover:text-blue-600 transition-colors text-left group"
                    >
                      <span className="font-medium text-base md:text-lg text-slate-800 leading-relaxed group-hover:text-blue-600 font-body">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                          openId === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>

                    {openId === item.id && (
                      <div className="mt-3 pl-4 text-slate-700 text-sm md:text-base leading-relaxed border-l-2 border-blue-500 font-body">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Tilted White Card - UENI */}
        <div className="perspective mt-8 md:mt-12">
          <div className="transform -skew-y-2 bg-white shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              {/* YES Header with Lightning Bolt */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 flex items-center gap-3 mb-2 font-display">
                  <span>YES!</span>
                  <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </h2>
              </div>

              {/* UENI FAQ Items */}
              <div className="space-y-4">
                {ueniFaqItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full flex items-start justify-between gap-4 hover:text-blue-600 transition-colors text-left group"
                    >
                      <span className="font-medium text-base md:text-lg text-slate-800 leading-relaxed group-hover:text-blue-600 font-body">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                          openId === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>

                    {openId === item.id && (
                      <div className="mt-3 pl-4 text-slate-700 text-sm md:text-base leading-relaxed border-l-2 border-blue-500 font-body">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#FF5A4E] to-[#ff2d20] text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Still have questions?</h2>
          <p className="text-white/90 mb-8 max-w-[600px] mx-auto font-body">
            Get in touch with our team. We're here to answer any questions and help you get started.
          </p>
          <button className="bg-white text-[#FF5A4E] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>

      <FooterLinksSection />
    </main>
    </PageTransition>
  );
}

export default FAQPage;
