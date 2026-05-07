import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal';

import pWeddingTO from '../assets/portfolio_wedding_TO.jpg';
import pCorpSVCE from '../assets/portfolio_corp_SVCE.jpg';
import pNina from '../assets/portfolio_nina_draws.jpg';
import pDessert from '../assets/portfolio_dessert_composite.jpg';
import pGuestbook from '../assets/portfolio_guest_seat_composite.jpg';

const items = [
  { id: 1, src: pWeddingTO,  alt: 'T & O Ceremony 2025',             rowSpan: 2, colSpan: 2 },
  { id: 2, src: pCorpSVCE,   alt: 'SVCE Event 2026',                 rowSpan: 1, colSpan: 1 },
  { id: 3, src: pNina,       alt: 'Nina Draws Live Event Art',       rowSpan: 1, colSpan: 1 },
  { id: 4, src: pDessert,    alt: 'Luxury Dessert Table Display',    rowSpan: 1, colSpan: 1 },
  { id: 5, src: pGuestbook,  alt: 'Guestbook & Seating Plan Setup',  rowSpan: 1, colSpan: 2 },
];

const Gallery = () => {
  const headRef = useScrollReveal({ threshold: 0.2 });
  const gridRef = useScrollRevealAll({ threshold: 0.06 });
  const footRef = useScrollReveal({ threshold: 0.1 });

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

        <div className="gallery-footer reveal" ref={footRef}>
          <Link to="/portfolio" className="btn btn-outline">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
