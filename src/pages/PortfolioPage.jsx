import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import './PortfolioPage.css';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

// Assets
import w1 from '../assets/gallery-wedding-1.png';
import w2 from '../assets/gallery-wedding-2.png';
import corp from '../assets/gallery-corporate.png';
import dinner from '../assets/gallery-private-dinner.png';
import anniversary from '../assets/gallery-anniversary.png';
import about from '../assets/about.png';
import w3 from '../assets/gallery-wedding-3.png';
import pWeddingTO from '../assets/portfolio_wedding_TO.jpg';
import pWeddingTO2 from '../assets/portfolio_wedding_TO_2.jpg';
import pCorpSVCE from '../assets/portfolio_corp_SVCE.jpg';
import pCorpSVCE2 from '../assets/portfolio_corp_SVCE_2.jpg';
import pAnniversaryDR from '../assets/portfolio_anniversary_DR.jpg';
import pAnniversaryDR2 from '../assets/portfolio_anniversary_DR_2.jpg';
import pAnniversaryDR3 from '../assets/portfolio_anniversary_DR_3.jpg';
import pNina1 from '../assets/portfolio_nina_draws.jpg';
import pNina2 from '../assets/portfolio_nina_draws_2.jpg';
import pNina3 from '../assets/portfolio_nina_draws_3.jpg';
import pDessertComp from '../assets/portfolio_dessert_composite.jpg';
import pDessert1C from '../assets/portfolio_dessert_1_crop.jpg';
import pDessert2C from '../assets/portfolio_dessert_2_crop.jpg';
import pGuestSeatComp from '../assets/portfolio_guest_seat_composite.jpg';
import pGuestbookC from '../assets/portfolio_guestbook_crop.jpg';
import pSeatingC from '../assets/portfolio_seating_plan_crop.jpg';
import pFounder from '../assets/portfolio_founder_1610.jpg';

const items = [
  { 
    id: 1,  
    images: [pWeddingTO, pWeddingTO2],     
    alt: 'T & O Ceremony 2025', 
    category: 'Weddings',      
  },
  { 
    id: 2,  
    images: [pCorpSVCE, pCorpSVCE2],     
    alt: 'SVCE Event 2026',                
    category: 'Corporate',     
  },
  { 
    id: 3,  
    images: [pAnniversaryDR, pAnniversaryDR2, pAnniversaryDR3],   
    alt: 'D&R Anniversary 2025',                  
    category: 'Others',     
  },
  { 
    id: 4,  
    images: [pNina1, pNina3], 
    alt: 'Nina Draws',              
    category: 'Others',       
  },
  { 
    id: 5,  
    images: [pDessertComp, pDessert1C, pDessert2C],  
    alt: 'Dessert Table',           
    category: 'Weddings',  
  },
  { 
    id: 7,  
    images: [pGuestSeatComp, pGuestbookC, pSeatingC],     
    alt: 'Guestbook & Seating Plan',              
    category: 'Others',      
  },
  { 
    id: 6,  
    images: [pFounder],  
    alt: 'The Founder at a venue',                
    category: 'Weddings',      
  },
];

const FILTERS = ['All', 'Weddings', 'Corporate', 'Others'];
const PAGE_SIZE = 6;

const PortfolioItem = ({ item }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = item.images || [];
  const hasMultiple = images.length > 1;
  const timeoutRef = React.useRef(null);

  const resetTimer = React.useCallback(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    if (hasMultiple) {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
  }, [hasMultiple, images.length]);

  React.useEffect(() => {
    resetTimer();
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [resetTimer]);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  return (
    <div className="portfolio-full-item reveal">
      <div className="pf-img-box">
        <div className="pf-slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`${item.alt} - view ${idx + 1}`} loading="lazy" />
          ))}
        </div>
        
        <div className="pf-overlay">
          <span className="eyebrow eyebrow-light">{item.category}</span>
        </div>

        {hasMultiple && (
          <>
            <div className="pf-slider-nav">
              <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="slider-arrow next" onClick={nextSlide} aria-label="Next image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
            <div className="pf-slider-dots">
              {images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="pf-info">
        <h3>{item.alt}</h3>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [active, setActive] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useScrollRevealAll({ threshold: 0.1 });
  const ctaRef = useScrollRevealAll({ threshold: 0.1 });
  const scrollAnchorRef = useRef(null);

  const visible = active === 'All'
    ? items
    : items.filter(i => i.category === active);

  const totalPages = Math.ceil(visible.length / PAGE_SIZE);
  const paginatedItems = visible.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  // Scroll to top of grid on page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (scrollAnchorRef.current) {
      const offset = 120; // Offset for fixed navbar
      const elementPosition = scrollAnchorRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio-page">
      <PageHero
        eyebrow="Portfolio"
        title={<span>A Glimpse Into <em>Our Events</em></span>}
        subtitle="Browse our recent projects across weddings, corporate events, and other bespoke celebrations."
      />

      <section className="section bg-light" style={{ paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <div ref={scrollAnchorRef} style={{ position: 'absolute', top: '100vh' }}></div>

          {/* Filter tabs */}
          <div className="portfolio-filters" role="tablist" aria-label="Filter events">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`p-filter-tab${active === f ? ' active' : ''}`}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-full-grid" ref={gridRef}>
            {paginatedItems.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="portfolio-pagination">
              <button 
                className="pg-btn pg-arrow" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous page"
              >
                <span aria-hidden="true">←</span>
              </button>
              
              <div className="pg-numbers">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    className={`pg-btn pg-num${currentPage === i + 1 ? ' active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                    aria-current={currentPage === i + 1 ? 'page' : undefined}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                className="pg-btn pg-arrow" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next page"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="portfolio-cta-modern">
        <div className="container" ref={ctaRef}>
          <div className="p-cta-flex reveal">
            <div className="p-cta-left">
              <span className="eyebrow eyebrow-light">Let's Connect</span>
              <h2>Inspired by <em>Our Work?</em></h2>
            </div>
            <div className="p-cta-right">
              <p>Every event starts with a single idea. Let's discuss yours and create something truly exceptional together.</p>
              <div className="p-cta-actions">
                <a href="/contact" className="btn btn-premium">
                  <span>Discuss Your Event Vision</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-cta-glimmer"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
