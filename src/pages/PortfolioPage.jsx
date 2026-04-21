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

const items = [
  { 
    id: 1,  
    src: w1,     
    alt: 'Grand country house wedding reception', 
    category: 'Weddings',      
    loc: 'Wentworth Woodhouse', 
    date: 'Summer 2024',
    brief: 'A grand, traditional celebration for 150 guests in a Grade I listed building.',
    outcome: 'Successfully coordinated with 12 vendors to deliver a seamless 14-hour event timeline.'
  },
  { 
    id: 2,  
    src: w2,     
    alt: 'Vibrant garden wedding',                
    category: 'Weddings',      
    loc: 'Sheffield Botanical Gardens', 
    date: 'Spring 2024',
    brief: 'An intimate, nature-inspired ceremony focused on sustainability and local florals.',
    outcome: 'Created a zero-waste event plan that maintained high luxury standards.'
  },
  { 
    id: 3,  
    src: corp,   
    alt: 'Modern corporate gala',                  
    category: 'Corporate',     
    loc: 'The Kelham Island Museum', 
    date: 'Winter 2023',
    brief: 'Annual milestone celebration for a Sheffield tech firm requiring industrial-chic styling.',
    outcome: 'Transformed a museum space into a high-energy gala environment within a 4-hour setup window.'
  },
  { 
    id: 4,  
    src: dinner, 
    alt: 'Intimate rooftop proposal',              
    category: 'Private',       
    loc: 'Private Rooftop, Sheffield', 
    date: 'Autumn 2023',
    brief: 'A high-stakes, private proposal requiring maximum discretion and romantic atmosphere.',
    outcome: 'Executed a flawless surprise reveal with 360-degree city views and bespoke catering.'
  },
  { 
    id: 5,  
    src: anniversary,  
    alt: 'Luxury Ruby Wedding Anniversary',           
    category: 'Weddings',  
    loc: 'Lost & Found, Leeds', 
    date: 'Summer 2024',
    brief: 'An elegant Ruby Anniversary celebration for a couple wanting to recreate their wedding magic.',
    outcome: 'Curated a bespoke nostalgic experience with red floral accents and personalized storytelling.'
  },
  { 
    id: 7,  
    src: w3,     
    alt: 'Elegant floral reception',              
    category: 'Weddings',      
    loc: 'Whirlowbrook Hall', 
    date: 'Winter 2024',
    brief: 'A winter wonderland theme focusing on warmth, candlelight, and white florals.',
    outcome: 'Managed complex indoor logistics during extreme weather with no impact on guest experience.'
  },
  { 
    id: 6,  
    src: about,  
    alt: 'The Founder at a venue',                
    category: 'Weddings',      
    loc: 'Sheffield Cathedral', 
    date: 'Autumn 2024',
    brief: 'Showcasing our ability to work within historic and sacred architectural spaces.',
    outcome: 'Negotiated sensitive logistics with cathedral heritage teams for a successful event.'
  },
];

const FILTERS = ['All', 'Weddings', 'Corporate', 'Private'];
const PAGE_SIZE = 6;

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
        subtitle="Browse our recent projects across weddings, corporate events, and bespoke private celebrations."
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
              <div key={item.id} className="portfolio-full-item reveal">
                <div className="pf-img-box">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="pf-overlay">
                    <span className="eyebrow eyebrow-light">{item.category}</span>
                  </div>
                </div>
                <div className="pf-info">
                  <div className="pf-header">
                    <h3>{item.alt}</h3>
                    <div className="pf-meta">
                      <span>{item.loc}</span>
                      <span className="pf-dot"></span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <div className="pf-story">
                    <div className="pf-story-item">
                      <strong>The Brief:</strong>
                      <p>{item.brief}</p>
                    </div>
                    <div className="pf-story-item">
                      <strong>The Outcome:</strong>
                      <p>{item.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
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
