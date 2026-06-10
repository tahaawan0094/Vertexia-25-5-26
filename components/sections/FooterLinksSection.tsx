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
  { label: "Refund Policy", href: "/refund-policy" },
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
                <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-white">
                  Socials
                </p>
                <ul className="mt-5 flex gap-4">
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/vertexia-io-b03923410/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61589778596884" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/vertexia.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.217.666c-.688.266-1.228.648-1.768 1.187-.54.54-.92 1.079-1.187 1.768-.333.688-.534 1.559-.594 2.837C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.594 2.837.267.688.648 1.228 1.187 1.768.54.54 1.079.92 1.768 1.187.688.333 1.559.534 2.837.594C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.837-.594.688-.267 1.228-.648 1.768-1.187.54-.54.92-1.079 1.187-1.768.333-.688.534-1.559.594-2.837.057-1.277.072-1.694.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.594-2.837-.267-.688-.648-1.228-1.187-1.768-.54-.54-1.079-.92-1.768-1.187-.688-.333-1.559-.534-2.837-.594C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zm0 3.678c-3.405 0-6.162 2.758-6.162 6.162 0 3.405 2.758 6.162 6.162 6.162 3.405 0 6.162-2.758 6.162-6.162 0-3.405-2.758-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm4.915-10.584c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://x.com/vertexiadev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gray-400 transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.807-5.989 6.807H2.423l7.723-8.835L1.029 2.25h6.847l4.708 6.231 5.439-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </li>
             
                  
                  <li>
                    <a 
                      href="mailto:reach.vertexia@gmail.com" 
                      className="hover:text-yellow-400 transition-colors"
                      aria-label="Email"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
