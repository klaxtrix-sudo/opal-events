import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',          label: 'Home',      end: true },
  { to: '/services',  label: 'Services' },
  { to: '/about',     label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact',   label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // On inner pages the navbar should always show the solid white style
  const isInnerPage = pathname !== '/';

  useEffect(() => {
    if (isInnerPage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); // run immediately
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isInnerPage]);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
        <div className="container nav-container">

          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="Opal Events — Home" onClick={handleNavClick}>
            <img
              src="/opal-events-logo-white.png"
              alt="Opal Events"
              className="nav-logo-img nav-logo-img--white"
            />
            <img
              src="/opal-events-logo-transparent.png"
              alt="Opal Events"
              className="nav-logo-img nav-logo-img--colour"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="btn btn-primary nav-cta" id="nav-cta-btn" onClick={handleNavClick}>
            Book a Consultation
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="ham-bar" />
            <span className="ham-bar" />
            <span className="ham-bar" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Subtle radial glow instead of large watermark */}
        <div className="mm-glow" aria-hidden="true" />

        <div className="mobile-menu-container">
          {/* Navigation */}
          <nav className="mm-nav" aria-label="Mobile Navigation">
            <ul className="mm-links" role="list">
              {NAV_LINKS.map(({ to, label, end }, index) => (
                <li key={to} style={{ '--index': index }}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) => `mm-link${isActive ? ' mm-link--active' : ''}`}
                    onClick={handleNavClick}
                  >
                    <span className="mm-accent" aria-hidden="true">✦</span>
                    <span className="mm-label">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn btn-primary mobile-cta"
              onClick={handleNavClick}
            >
              Book a Consultation
            </Link>
          </nav>

          {/* Footer info panel */}
          <div className="mm-footer">
            <div className="mm-contact-row">
              <a href="mailto:contact@opalevent.co.uk" className="mm-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                contact@opalevent.co.uk
              </a>
              <a href="tel:+447544782266" className="mm-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +44 7544 782266
              </a>
            </div>

            <div className="mm-social-row">
              <a href="https://www.instagram.com/_opal.events_/" target="_blank" rel="noopener noreferrer" className="mm-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/people/Opal-Events-Ltd/61575393159059/#" target="_blank" rel="noopener noreferrer" className="mm-social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/opal-events-sheff/" target="_blank" rel="noopener noreferrer" className="mm-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
            </div>

            <span className="mm-tagline">Est. 2023 ✦ Sheffield, UK</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
