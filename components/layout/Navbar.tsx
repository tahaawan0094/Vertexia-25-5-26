"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  href: string;
  icon: string;
};

type NavLink = {
  label: string;
  href: string;
  hasCaret?: boolean;
  dropdown?: boolean;
  items?: DropdownItem[];
};

const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "#services",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Get a wordpress website",
        href: "/get-wordpress-website",
        icon: "globe",
      },
      {
        label: "Get custom website",
        href: "/get-custom-website",
        icon: "globe",
      },
      {
        label: "Concierge services",
        href: "#services",
        icon: "user-check",
      },
    ],
  },
  {
    label: "Our Customers",
    href: "#customers",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Website examples",
        href: "#customers",
        icon: "layout",
      },
      {
        label: "Success stories",
        href: "#customers",
        icon: "star",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#resources",
    hasCaret: true,
    dropdown: true,
    items: [
      {
        label: "Our Partners",
        href: "#partners",
        icon: "users",
      },
      {
        label: "FAQs",
        href: "#faqs",
        icon: "help",
      },
      {
        label: "Videos",
        href: "#videos",
        icon: "play",
      },
      {
        label: "Vertexia blogs",
        href: "/blogs",
        icon: "book",
      },
    ],
  },
];

const Icon = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    globe: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />,
    "user-check": (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </>
    ),
    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/70"
    >
      {icons[name] || null}
    </svg>
  );
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-navbar sticky top-0 z-50 bg-[#050505] shadow-lg shadow-black/20 font-body">
      <div
        className="h-1 bg-[linear-gradient(90deg,#ff6b6b,#f6d84c,#74ff7c,#64e2ff,#7f63ff)]"
        aria-hidden="true"
      />

      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 text-[0.95rem] sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="/" className="flex items-center gap-3" aria-label="Vertexia">
            <img
              src="/new-header-logo.png"
              alt="Vertexia"
              className="block h-10 sm:h-12 lg:h-16 w-auto"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="flex flex-1 items-center justify-center gap-12 max-[1024px]:hidden">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative py-4"
              onMouseEnter={() =>
                link.dropdown && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 whitespace-nowrap text-white/90 transition hover:text-white"
              >
                <span>{link.label}</span>

                {link.hasCaret ? (
                  <span
                    className={`inline-block h-[5px] w-[5px] -translate-y-[1px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-white/70 transition-transform duration-300 ${
                      activeDropdown === link.label
                        ? "rotate-[225deg] translate-y-[1px]"
                        : ""
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
              </a>

              {/* Dropdown */}
              <AnimatePresence>
                {activeDropdown === link.label &&
                  link.dropdown &&
                  link.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-2"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-2 shadow-2xl">
                        <div className="flex flex-col">
                          {link.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-[1rem] font-medium text-white/90 transition hover:bg-white/5 hover:text-white"
                            >
                              <div className="transition-colors group-hover:text-white">
                                <Icon name={item.icon} />
                              </div>

                              <span>{item.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex flex-shrink-0 items-center justify-end gap-4 sm:gap-6">
          {/* Call Section */}
          <div className="flex items-center gap-3 text-white/90 max-[960px]:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="whitespace-nowrap text-[0.95rem] font-semibold">
                Call Us: (92) 336-8240877
              </span>

              <span className="whitespace-nowrap text-[0.65rem] tracking-tight text-white/50">
                Mon-Fri 9am-8pm{" "}
                <span className="font-bold uppercase text-green-500/80">
                  Opened
                </span>
              </span>
            </div>
          </div>

          {/* Login + Menu */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-white/90 transition hover:text-white sm:text-base"
            >
              Login
            </a>

            <button
              className="hidden text-white transition hover:text-white/70 max-[1024px]:inline-flex"
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((state) => !state)}
            >
              <span className="flex h-4 w-4 flex-col justify-between sm:h-5 sm:w-5">
                <span className="block h-[2px] w-full rounded-full bg-white" />
                <span className="block h-[2px] w-full rounded-full bg-white" />
                <span className="block h-[2px] w-full rounded-full bg-white" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-[#050505] shadow-2xl"
          >
            <div className="mx-auto flex w-full flex-col gap-2 px-4 py-3 text-white max-[1024px]:flex hidden max-[425px]:gap-1 max-[425px]:px-2 max-[425px]:py-2">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-1">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg bg-white/5 px-3 py-2 text-base font-medium text-white transition hover:bg-white/10"
                  >
                    {link.label}
                  </a>

                  {link.dropdown && link.items ? (
                    <div className="space-y-0 rounded-xl bg-white/5 px-2 py-1.5">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                          <Icon name={item.icon} />

                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block rounded-lg bg-[#FF5A4E] px-3 py-2 text-center font-semibold text-white transition hover:bg-[#ff6b5c]"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}