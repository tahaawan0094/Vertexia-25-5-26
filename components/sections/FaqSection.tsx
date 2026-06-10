"use client";

import FadeIn from "@/components/animations/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer: (
      <>
        <p>
          Select the plan that suits you and complete the checkout. We'll direct
          you to our onboarding questionnaire. No rush, though - if you&apos;re not
          ready, fill it out at your convenience; we&apos;ll email you the link.
        </p>
        <p className="mt-4">
          Need help? Contact us anytime. And welcome aboard!
        </p>
      </>
    )
  },
  {
    question: "Which plan is right for me?",
    answer: (
      <>
        <p>
          Each of our plans is tailor-made for small businesses. On the Website
          Launch Package, you get a professional online presence, including a
          custom website, domain, email, secure hosting and fast support. The
          Plus Plan, our most popular plan, offers concierge services for
          on-demand website edits and enhanced features to attract more
          customers. The Growth Plan takes it further with 1-on-1 marketing and
          a personalized growth strategy for your business.
        </p>
        <p className="mt-4">
          Explore complete plan details{" "}
          <a href="#" className="text-[#2d6bff] underline-offset-2 hover:underline">
            here
          </a>{" "}
          and save with our yearly or two-year plans. Questions? Speak with us
          over Live Chat, email us at{" "}
          <a
            href="mailto:admin.vertexia@gmail.com"
            className="text-[#2d6bff] underline-offset-2 hover:underline"
          >
            admin.vertexia@gmail.com
          </a>
          , or call us at{" "}
          <a
            href="tel:+12055519730"
            className="text-[#2d6bff] underline-offset-2 hover:underline"
          >
            (205) 551-9730
          </a>
          . Our team is ready to guide you in choosing the best plan.
        </p>
      </>
    )
  },
  {
    question: "How does this all work?",
    answer: (
      <>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Choose &amp; Checkout: Pick your plan and proceed to checkout.
          </li>
          <li>
            Business Questionnaire: Complete a simple online form to give us
            critical details about you and your business. This step sets the
            stage for your personalized website.
          </li>
          <li>
            Launch &amp; Training Call: Book this session to unveil your website.
            We&apos;ll present your new site and make any changes that you require.
            We'll also guide you on using our intuitive editor, empowering you
            to make future updates effortlessly.
          </li>
        </ol>
        <p className="mt-4">
          Plus or Growth plan members will also receive an exclusive walkthrough
          of your plan&apos;s features, ensuring you leverage every advantage.
          Remember: our goal is that you love your website, so you can request
          as many changes as you&apos;d like during the first 30 days after you sign
          up.
        </p>
      </>
    )
  },
  {
    question: "Can I switch plans?",
    answer: (
      <p>
        Absolutely! When upgrading or downgrading your website plan, you will
        receive either a prorated charge or credits, depending on the cost of
        your new plan.
      </p>
    )
  },
  {
    question: "How do I cancel?",
    answer: (
      <p>
        Cancelling is an easy process. It&apos;s done from your Vertexia Business
        Hub. Signing up for Vertexia comes with a 30-day money-back guarantee,
        so if you are unhappy with your website or the service for any reason in
        the first 30 days, you can request a refund, no questions asked.
      </p>
    )
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="bg-[#040404] px-6 pb-32 pt-24 text-white">
      <FadeIn>
        <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="max-[640px]:hidden">
            <h2 className="text-[clamp(2.6rem,4.6vw,4.2rem)] font-medium leading-tight">
              Frequently
              <span className="block">Asked</span>
              <span className="block">Questions</span>
            </h2>
            <p className="mt-6 max-w-[420px] text-lg text-white/60">
              Everything you need to know so you can use Vertexia like a pro
            </p>
            <p className="mt-8 text-lg text-white/70">Still have questions?</p>
            <p className="mt-4 text-lg text-white/60">
              Call us:{" "}
              <span className="text-[#2d6bff]">(92) 335-2831551</span>
            </p>
            <p className="mt-6 text-lg text-[#FF5A4E]">reach.vertexia@gmail.com</p>
          </div>

          <div className="flex flex-col gap-7">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-[24px] border border-white/10 bg-[#151515] px-9 py-6 max-[640px]:px-4 max-[640px]:py-3 text-left text-white transition hover:border-white/20 hover:bg-[#1b1b1b]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-[20px] font-medium max-[640px]:text-[16px]"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4.5 w-4.5 stroke-white transition ${isOpen ? "rotate-90" : "rotate-0"
                          }`}
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="mt-5 border-t border-white/10 pt-5 text-[16px] leading-7 text-white/70">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}

            {/* Mobile-only contact info below FAQs */}
            <div className="mt-8 hidden max-[640px]:block text-center">
              <p className="text-lg text-white/70">Still have questions?</p>
              <p className="mt-4 text-lg text-white/60">
                Call us:{" "}
                <span className="text-[#2d6bff]">(92) 335-2831551</span>
              </p>
              <p className="mt-6 text-lg text-[#FF5A4E]">reach.vertexia@gmail.com</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

