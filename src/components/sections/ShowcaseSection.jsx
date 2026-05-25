const logos = [
  {
    name: "Entrepreneur",
    src: "/logos/65b935dbde54cfc9bbc79d31_logo-entrepeneur.png",
    className: "logo-entrepreneur"
  },
  {
    name: "BBC News",
    src: "/logos/65b935db616755e2ada9770e_logo-bbcnews.png",
    className: "logo-bbc"
  },
  {
    name: "The Telegraph",
    src: "/logos/65b935db02743b6b9206d166_logo-thetelegraph.png",
    className: "logo-telegraph"
  },
  {
    name: "Business Insider",
    src: "/logos/65b935db233f9838e4d844ad_logo-businessinsider.png",
    className: "logo-business"
  },
  {
    name: "Forbes",
    src: "/logos/65b935dbd242099be76e34b2_logo-forbes.png",
    className: "logo-forbes"
  },
  {
    name: "Markets Insider",
    src: "/logos/690e42af06af1d65c532dfbb_markets-insider-w.svg",
    className: "logo-markets"
  },
  {
    name: "Fortune",
    src: "/logos/690e42af98dd1ed4422ea1d7_fortune-w.svg",
    className: "logo-fortune"
  },
  {
    name: "USA Today",
    src: "/logos/694225b3caa0190fc7b3d9e3_usa-today.svg",
    className: "logo-usa"
  }
];

export default function ShowcaseSection() {
  return (
    <section className="showcase">
      <div className="showcase-inner">
        <div className="showcase-card">
          <img
            className="showcase-base"
            src="/pics/65cbb4964d0da94b9227b173_editor-base.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="showcase-site" aria-hidden="true" />
          <img
            className="showcase-domain"
            src="/pics/65cbb4960b332d68ab229ff0_domain-celestial.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-left"
            src="/pics/65cbb49650e79f42be394d5a_editor-left.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-right"
            src="/pics/65cbb496129dab171442adf9_editor-right.svg"
            alt=""
            aria-hidden="true"
          />
          <img className="showcase-nav" src="/pics/1.png" alt="" aria-hidden="true" />
          <img
            className="showcase-red"
            src="/pics/65df7e9b9c2c5a335d4955dd_img-red.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="showcase-content"
            src="/pics/65cbb4966b74c2eb7ed7bc70_onnor-content.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-bookings"
            src="/pics/65cbb4962e5467e6fedefd3e_bookings.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-sell"
            src="/pics/65cbb496fd59cb86f266ffb0_selll-products.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-publish"
            src="/pics/65cbb496398c881b16497e7a_publish.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="showcase-blue"
            src="/pics/65df7e9b39dc347faabf702a_pic-blue.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="showcase-badge">
            <img
              className="badge-image"
              src="/65b93f200281a540d037b3f6_mb-badge-content.svg"
              alt="Money back guarantee"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="press">
        <div className="press-inner">
          <div className="press-logos" aria-label="Featured in">
            {logos.map((logo) => (
              <span key={logo.name} className={`press-logo-item ${logo.className}`}>
                <img
                  className="logo-media press-logo-image"
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                />
              </span>
            ))}
          </div>
          <blockquote className="press-quote">
            &ldquo;Vertexia helps you generate more sales, bookings, and leads with a
            gorgeous website that&apos;s built for you at a reasonable price. No
            expensive agencies, no complicated DIY web design builders {"\u2014"}{" "}
            <span className="press-highlight">just a product that works for you.</span>
            &rdquo;
          </blockquote>
          <div className="press-source">Entrepreneur Magazine</div>
          <div className="press-didyouknow">
          <p className="didyouknow-kicker">DID YOU KNOW?</p>
          <h2 className="didyouknow-title">
            <span className="didyouknow-em">2 out of 3</span> small business owners
            don&apos;t have a website or don&apos;t like the one they do have.
          </h2>
          <div className="didyouknow-why" aria-hidden="true">
            <img
              src="/images%201/65c388735d187a04baf6553a_why-script.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="didyouknow-cards">
            <img
              className="didyouknow-card"
              src="/images%201/65df73f5d59ccfc4e532a7bd_Quote-1.webp"
              alt="Testimonial from Joana B."
              loading="lazy"
            />
            <img
              className="didyouknow-card"
              src="/images%201/65df73f5e51ac2b72aecb558_Quote-2.webp"
              alt="Testimonial from Fred Z."
              loading="lazy"
            />
            <img
              className="didyouknow-card"
              src="/images%201/65df73f57cb49d72457d7c0e_Quote-3.webp"
              alt="Testimonial from Troy M."
              loading="lazy"
            />
          </div>
          <img
            className="didyouknow-arrow"
            src="/images%201/65b95f22abefc846c3b38bf1_white-bottom-arrow.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

