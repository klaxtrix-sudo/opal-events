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
        <ul className="mobile-links" role="list">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? 'mobile-nav-active' : ''}
                onClick={handleNavClick}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-primary mobile-cta" onClick={handleNavClick}>
              Book a Consultation
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
