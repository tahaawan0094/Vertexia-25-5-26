const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#", hasCaret: true },
  { label: "Website Examples", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#", hasCaret: true },
  { label: "Company", href: "#", hasCaret: true }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="rainbow-bar" aria-hidden="true" />
      <nav className="nav">
        <div className="logo" aria-label="Vertexia">
          Vertexia
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link${link.hasCaret ? " has-caret" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#" className="nav-link login-link">
            Login
          </a>
          <button className="menu-button" type="button" aria-label="Open menu">
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}

