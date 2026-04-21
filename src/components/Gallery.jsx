import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal';

import w1 from '../assets/gallery-wedding-1.png';
import w2 from '../assets/gallery-wedding-2.png';
import corp from '../assets/gallery-corporate.png';
import dinner from '../assets/gallery-private-dinner.png';
import anniversary from '../assets/gallery-anniversary.png';
import about from '../assets/about.png';
import w3 from '../assets/gallery-wedding-3.png';

const items = [
  { id: 1, src: w1,     alt: 'Grand country house wedding reception', rowSpan: 2, colSpan: 2 },
  { id: 2, src: w2,     alt: 'Vibrant South Asian wedding mandap',    rowSpan: 1, colSpan: 1 },
  { id: 3, src: corp,   alt: 'Sleek corporate gala dinner setup',     rowSpan: 1, colSpan: 1 },
  { id: 4, src: dinner, alt: 'Intimate rooftop proposal dinner',      rowSpan: 1, colSpan: 1 },
  { id: 5, src: anniversary,  alt: 'Luxury wedding anniversary celebration', rowSpan: 1, colSpan: 2 },
];

const Gallery = () => {
  const headRef = useScrollReveal({ threshold: 0.2 });
  const gridRef = useScrollRevealAll({ threshold: 0.06 });

  return (
    <section className="section bg-light" id="portfolio" aria-label="Portfolio Gallery">
      <div className="container">
        <div className="section-header reveal" ref={headRef}>
          <span className="eyebrow">Portfolio</span>
          <h2>A Glimpse Into<br /><em className="display-italic">Our Events</em></h2>
        </div>

        {/* Preview Grid - 5 Item Mosaic */}
        <div className="gallery-grid stagger-children" ref={gridRef}>
          {items.map(({ id, src, alt, rowSpan, colSpan }) => (
            <div
              key={id}
              className={`gallery-item reveal row-${rowSpan} col-${colSpan}`}
              role="img"
              aria-label={alt}
            >
              <img src={src} alt={alt} loading="lazy" />
              <Link to="/portfolio" className="gallery-overlay">
                <span className="gallery-overlay-text">View Gallery</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="gallery-footer reveal" style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Link to="/portfolio" className="btn btn-outline">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
