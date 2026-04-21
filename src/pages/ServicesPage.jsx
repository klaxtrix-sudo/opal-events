import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './ServicesPage.css';
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal';

// Event Images
import weddingsImg from '../assets/events-weddings.png';
import celebrationsImg from '../assets/events-celebrations.png';
import corporateImg from '../assets/events-corporate.png';
import proposalsImg from '../assets/events-proposals.png';

const allServices = [
  {
    id: 'planning',
    eyebrow: '01',
    title: 'Full Wedding / Event Planning',
    description: 'From consultation to post-event communications, we can be with you every step of the way. Venue, date, suppliers, budget, design — and includes full coordination on the day itself.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M6 4h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" strokeLinecap="round"/>
        <path d="M10 2v4M22 2v4" strokeLinecap="round"/>
        <path d="M4 12h24" strokeLinecap="round"/>
        <path d="M10 18h12M10 23h8" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'coordination',
    eyebrow: '02',
    title: 'Wedding / Event Coordination',
    description: 'Ensuring the day runs smoothly, starting 2–6 weeks prior. It includes attending final meetings, creating a detailed day timeline, and coordinating all suppliers.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="16" cy="16" r="12" strokeLinecap="round"/>
        <path d="M16 8v8l5 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'sourcing',
    eyebrow: '03',
    title: 'Venue & Supplier Sourcing',
    description: "Got it all under control but need guidance on best venues and suppliers that fit your vibe and your budget? We do that too.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="14" cy="14" r="8" strokeLinecap="round"/>
        <path d="M20 20l6 6" strokeLinecap="round"/>
        <path d="M11 14h6M14 11v6" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'consultation',
    eyebrow: '04',
    title: 'Consultation Meeting',
    description: 'A free consultation to meet, chat and see if we\'re the right fit. We will discuss your vision, your budget and your expectations.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M28 6H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6l6 4 6-4h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14h12M10 19h8" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'update-meetings',
    eyebrow: '05',
    title: 'Planning & Update Meetings',
    description: 'We check in as regularly as you like — reviewing progress, amending plans, and meeting any challenges together so you always feel supported.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round"/>
        <path d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16" strokeLinecap="round"/>
        <path d="M4 16l3-3M4 16l3 3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 16l-3-3M28 16l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 'timelines',
    eyebrow: '06',
    title: 'Complete Timeline for Event',
    description: 'No event runs smoothly without a clear run-of-show. We create comprehensive timelines that keep staff, suppliers, and hosts perfectly in sync.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M6 8h20M6 14h14M6 20h18M6 26h11" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'concept',
    eyebrow: '07',
    title: 'Concept Creation',
    description: 'Want to host an event but unsure on a theme or style? We work with you to pull a concept together and build a plan to bring it to life with flair.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M16 4a8 8 0 0 1 8 8c0 3-1.5 5.5-4 7v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3c-2.5-1.5-4-4-4-7a8 8 0 0 1 8-8Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 27h8" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'styling',
    eyebrow: '08',
    title: 'Room Styling',
    description: 'Got the vision but need someone to bring it to life? From simple & elegant to magnificent & maximalist, we breathe life into your concept on the day.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M4 28h24" strokeLinecap="round"/>
        <path d="M10 28V16M22 28V16" strokeLinecap="round"/>
        <path d="M7 16h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" strokeLinecap="round"/>
      </svg>
    )
  },
];

const ServicesPage = () => {
  const coreHeaderRef = useScrollReveal({ threshold: 0.1 });
  const coreGridRef = useScrollRevealAll({ threshold: 0.1 });
  const eventsHeaderRef = useScrollReveal({ threshold: 0.1 });
  const eventsGridRef = useScrollRevealAll({ threshold: 0.05 });

  return (
    <div className="services-page">
      <PageHero
        eyebrow="Our Offerings"
        title={<span>Services Built for <em>Your Vision</em></span>}
        subtitle="Every service is designed to give you peace of mind — from the first conversation to the final toast."
      />

      {/* All Services */}
      <section className="section bg-light" aria-label="All Services">
        <div className="container">
          <div className="section-header text-center mb-16 reveal" ref={coreHeaderRef}>
            <span className="eyebrow">Full-Service Packages</span>
            <h2>Our <em className="display-italic">Core Services</em></h2>
          </div>

          <div className="core-services-grid" ref={coreGridRef}>
            {allServices.map((service) => (
              <div key={service.id} id={service.id} className="core-card reveal">
                <div className="core-card-header">
                  <span className="service-eyebrow">{service.eyebrow}</span>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="core-card-title">{service.title}</h3>
                <p className="core-card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Cover */}
      <section className="section bg-light" aria-label="Events We Cover">
        <div className="container">
          <div className="section-header text-center mb-16 reveal" ref={eventsHeaderRef}>
            <span className="eyebrow">Events We Cover</span>
            <h2>The Occasions We <em className="display-italic">Specialise In</em></h2>
          </div>
          <div className="events-grid" ref={eventsGridRef}>

            {/* Weddings */}
            <div className="event-card-visual reveal">
              <img src={weddingsImg} alt="Luxury Wedding Reception" className="event-bg-img" />
              <div className="event-overlay">
                <div className="event-content">
                  <h3 className="event-title-visual">Weddings</h3>
                  <p className="event-note-visual">inc. South Asian &amp; Nigerian</p>
                </div>
              </div>
            </div>

            {/* Celebrations */}
            <div className="event-card-visual reveal">
              <img src={celebrationsImg} alt="Sophisticated Milestone Party" className="event-bg-img" />
              <div className="event-overlay">
                <div className="event-content">
                  <h3 className="event-title-visual">Celebrations &amp; Milestone Parties</h3>
                </div>
              </div>
            </div>

            {/* Corporate */}
            <div className="event-card-visual reveal">
              <img src={corporateImg} alt="Premium Corporate Away Day" className="event-bg-img" />
              <div className="event-overlay">
                <div className="event-content">
                  <h3 className="event-title-visual">Corporate Away Days &amp; Team Building</h3>
                </div>
              </div>
            </div>

            {/* Proposals */}
            <div className="event-card-visual reveal">
              <img src={proposalsImg} alt="Romantic Marriage Proposal Setting" className="event-bg-img" />
              <div className="event-overlay">
                <div className="event-content">
                  <h3 className="event-title-visual">Proposals &amp; Private Dinners</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA — Let's Connect */}
      <section className="portfolio-cta-modern">
        <div className="container">
          <div className="p-cta-flex">
            <div className="p-cta-left">
              <span className="eyebrow eyebrow-light">Let's Connect</span>
              <h2>Ready to Plan <em className="display-italic">Your Event?</em></h2>
            </div>
            <div className="p-cta-right">
              <p>Every event starts with a single idea. Let's discuss yours and create something truly exceptional together.</p>
              <div className="p-cta-actions">
                <Link to="/contact" className="btn btn-premium">
                  <span>Book a Free Consultation</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-cta-glimmer"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
