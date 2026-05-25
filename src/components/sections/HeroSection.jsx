const stars = Array.from({ length: 5 });

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">STRUGGLING TO LAUNCH A WEBSITE YOU LOVE?</p>
        <h1 className="hero-title">
          We&apos;ll build your <span className="highlight">small business</span>{" "}
          <span className="highlight">website</span> in 7 days for RS.22,000
        </h1>
        <p className="hero-subtitle">
          Then we&apos;ll help grow your business. Agency service at a fraction of the
          price.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button">
            Get Started
          </button>
          <a className="text-link" href="#">
            Are our websites any good?
          </a>
        </div>
        <div className="hero-rating">
          <span className="rating-text">RATED 4.8 EXCELLENT</span>
          <div className="rating-stars" aria-label="5 out of 5 stars">
            {stars.map((_, index) => (
              <span key={index} className="star-tile" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
                </svg>
              </span>
            ))}
          </div>
          <div className="trustpilot">
            <span className="trustpilot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
              </svg>
            </span>
            <span>Trustpilot</span>
          </div>
        </div>
        <p className="hero-community">JOIN OUR COMMUNITY OF 7,000+ BUSINESS OWNERS</p>
      </div>
    </section>
  );
}
