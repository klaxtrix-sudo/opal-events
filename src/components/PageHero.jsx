import React from 'react';
import './PageHero.css';

/**
 * PageHero — Full-width branded banner for inner pages.
 * @param {string} eyebrow   — small label above the title (e.g. "Our Services")
 * @param {string} title     — main heading (can include JSX / <em>)
 * @param {string} subtitle  — optional supporting sentence
 */
const PageHero = ({ eyebrow, title, subtitle }) => (
  <section className="page-hero" aria-label={eyebrow}>
    {/* Decorative sparkles */}
    <svg className="ph-sparkle ph-sparkle--1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
    <svg className="ph-sparkle ph-sparkle--2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>

    <div className="container page-hero-inner">
      {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
      <h1 className="page-hero-title">{title}</h1>
      {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
