const socials = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "YouTube",
    href: "#",
  },
  {
    label: "X",
    href: "https://x.com/vertexiadev",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589778596884",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vertexia.io/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 pb-10 text-white/60" id="company">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-sm">
        <span>© 2022–2026 Vertexia All rights reserved</span>

        <div className="flex items-center gap-4 text-white/70">
          {socials.map((item) => {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition duration-300 hover:text-white"
              >
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}