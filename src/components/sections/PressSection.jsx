const logos = [
  { name: "Entrepreneur", className: "logo-entrepreneur" },
  { name: "BBC News", className: "logo-bbc" },
  { name: "The Telegraph", className: "logo-telegraph" },
  { name: "Business Insider", className: "logo-business" },
  { name: "Forbes", className: "logo-forbes" },
  { name: "Markets Insider", className: "logo-markets" },
  { name: "Fortune", className: "logo-fortune" },
  { name: "USA Today", className: "logo-usa" }
];

export default function PressSection() {
  return (
    <section className="press">
      <div className="press-inner">
        <div className="press-logos" aria-label="Featured in">
          {logos.map((logo) => (
            <span key={logo.name} className={`press-logo ${logo.className}`}>
              {logo.name}
            </span>
          ))}
        </div>
        <blockquote className="press-quote">
          “Vertexia helps you generate more sales, bookings, and leads with a
          gorgeous website that&apos;s built for you at a reasonable price. No
          expensive agencies, no complicated DIY web design builders —{" "}
          <span className="press-highlight">just a product that works for you.</span>”
        </blockquote>
        <div className="press-source">Entrepreneur Magazine</div>
      </div>
    </section>
  );
}

