"use client";
import FadeIn from "@/components/animations/FadeIn";

const productLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Examples", href: "#" },
  { label: "FAQs", href: "/faqs" },
];
const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
const accountLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "#" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
const compareLinks = ["Vertexia vs GoDaddy", "Vertexia vs Squarespace"];

export default function FooterLinksSection() {
  return (
    <section className="footer-links bg-[#040404] px-6 pb-14 pt-20 text-white max-[640px]:pt-12">
      <FadeIn>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10">
            <div className="grid grid-cols-2 gap-x-20 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 max-[640px]:gap-y-8">
              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Product
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {productLinks.map((item) => (
                    <li key={item.label}>
                      <a className="hover:text-white transition-colors" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Company
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {companyLinks.map((item) => (
                    <li key={item.label}>
                      <a className="hover:text-white transition-colors" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Account
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 text-[14px] text-white/60 max-[640px]:grid-cols-2">
                  {accountLinks.map((item) => (
                    <li key={item.label}>
                      <a className="hover:text-white transition-colors" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
             
                <ul className="mt-5 flex flex-col gap-y-4 text-[14px] text-white/60">
              
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 max-[640px]:mt-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 max-[640px]:gap-y-8">
              <div>
               
                
              </div>

              <div className="lg:col-span-2">
                
                
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
