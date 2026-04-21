import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Footer = () => (
  <footer className="footer" role="contentinfo">
    {/* Main grid */}
    <div className="container footer-grid">

      {/* Brand col */}
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="/opal-events-logo-white.png" alt="Opal Events Logo" className="footer-logo-img" />
        </div>
        <p className="footer-tagline">Diamond experiences,<br />without the price tag.</p>
      </div>

      {/* Navigation col */}
      <div className="footer-col">
        <h4 className="footer-col-heading">Explore</h4>
        <ul className="footer-links" role="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Services col */}
      <div className="footer-col">
        <h4 className="footer-col-heading">Services</h4>
        <ul className="footer-links" role="list">
          <li><Link to="/services">Full Event Planning</Link></li>
          <li><Link to="/services">Event Coordination</Link></li>
          <li><Link to="/services">Venue Sourcing</Link></li>
          <li><Link to="/services">Concept Creation</Link></li>
          <li><Link to="/services">Room Styling</Link></li>
        </ul>
      </div>

      {/* Contact col */}
      <div className="footer-col">
        <h4 className="footer-col-heading">Contact</h4>
        <address className="footer-contact">
          <a href="mailto:contact@opalevents.co.uk">contact@opalevents.co.uk</a>
          <span>Sheffield, South Yorkshire</span>
          
          <div className="footer-social" role="list" aria-label="Social Media">
            <a href="#" className="social-icon-btn" aria-label="Instagram" role="listitem" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="#" className="social-icon-btn" aria-label="Facebook" role="listitem" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="#" className="social-icon-btn" aria-label="LinkedIn" role="listitem" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </address>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>&copy; {new Date().getFullYear()} Opal Events Ltd. All Rights Reserved.</p>
        <p className="footer-seo">
          <Link to="/">Wedding Planner Sheffield</Link> ·
          <Link to="/">Event Planner Yorkshire</Link> ·
          <Link to="/">Wedding Coordinator Sheffield</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
