import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* Diamond sparkle SVG (matches logo star motif) */
const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Decorative sparkle">
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
);

const Hero = () => {
  const contentRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="hero" id="home" aria-label="Hero">
      {/* Background Image */}
      <img src={heroImg} alt="Elegant wedding ceremony setup" className="hero-bg" />

      {/* Bottom-up gradient overlay — preserves photo at top */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Floating sparkle motifs */}
      <Sparkle className="sparkle sparkle-1" />
      <Sparkle className="sparkle sparkle-2" />
      <Sparkle className="sparkle sparkle-3" />

      {/* Content — anchored bottom-left */}
      <div className="container hero-content reveal hero-stagger" ref={contentRef}>
        <div className="hero-content-inner">
          <div className="hero-eyebrow-wrapper">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span>Diamond experiences, without the price tag</span>
              <span className="eyebrow-line" />
            </div>
          </div>

          <div className="hero-title-wrapper">
            <h1 className="hero-heading">
              Wedding &amp;<br />
              <span className="display-italic">Event Services</span>
            </h1>
          </div>

          <div className="hero-text-wrapper">
            <p className="hero-sub">
              Providing exceptional planning experiences tailored to your needs<br />
              Sheffield, Yorkshire &amp; beyond
            </p>
          </div>

          <div className="hero-actions-wrapper">
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary" id="hero-cta-btn">
                <span>Book a Consultation</span>
              </a>
              <a href="#services" className="btn btn-glass" id="hero-explore-btn">
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-label">Scroll</span>
        <svg viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 4 L8 16 M4 12 L8 16 L12 12" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
