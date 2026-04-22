import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal';

/* Inline SVG icons — themed per service */
const icons = {
  planning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
      <path d="M5 17L5.87 20.13L9 21L5.87 21.87L5 25L4.13 21.87L1 21L4.13 20.13L5 17Z" opacity="0.5" />
    </svg>
  ),
  coordination: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14l2 2 4-4" strokeWidth="2" />
    </svg>
  ),
  venue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  consultation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" opacity="0.6" />
    </svg>
  ),
  meetings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" opacity="0.7" />
      <path d="M17 11l2 2 4-4" strokeWidth="2" />
    </svg>
  ),
  timeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  concept: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  styling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
};

const services = [
  { key: 'planning', num: '01', title: 'Full Wedding / Event Planning', description: 'From consultation to post event communications, we can be with you every step of the way. Venue, date, suppliers, budget, design and includes coordination on the day.' },
  { key: 'coordination', num: '02', title: 'Wedding / Event Coordination', description: 'While this is primarily about ensuring the day runs smoothly, it starts 2-6 weeks prior (timeframe dependant on event type and scale). It includes attending final meetings, creating timeline for the day and coordinating suppliers.' },
  { key: 'venue', num: '03', title: 'Venue & Supplier Sourcing', description: "You've got it all under control but need a bit of guidance on best venues and suppliers that not only fit your vibe but your budget too, we do that too." },
  { key: 'consultation', num: '04', title: 'Consultation Meeting', description: "A free consultation to meet, chat and see if we're the right fit. We will discuss your vision, your budget and your expectations." },
  { key: 'meetings', num: '05', title: 'Planning & Update Meetings', description: 'We can check-in as regularly as you like to see what’s going on, amend any plans and discuss any challenges.' },
  { key: 'timeline', num: '06', title: 'Complete Event Timelines', description: 'No event runs smoothly without a run of events. This allows all staff, suppliers and event hosts to be in sync with the plan.' },
  { key: 'concept', num: '07', title: 'Concept Creation', description: "Want to host an event but not sure on theme or style? We can work with you to pull a concept together and put a plan in place on how to bring it to life." },
  { key: 'styling', num: '08', title: 'Room Styling', description: 'Got the vision but need someone to bring it to life? We can work together to breathe life into the concept whether its simple & elegant or magnificent & maximalist.' },
];

const Services = () => {
  const headRef = useScrollReveal({ threshold: 0.2 });
  const gridRef = useScrollRevealAll({ threshold: 0.08 });
  const footRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section bg-warm" id="services" aria-label="Our Services">
      <div className="container">
        <div className="section-header reveal" ref={headRef}>
          <span className="eyebrow">What We Offer</span>
          <h2>Exceptional Services</h2>
          <p>Bespoke planning experiences designed to exceed your expectations at every stage.</p>
        </div>

        <div className="services-grid stagger-children" ref={gridRef}>
          {services.slice(0, 4).map(({ key, title, description }) => (
            <Link
              to={`/services#${key}`}
              className="service-card reveal"
              key={key}
              aria-label={`Explore ${title}`}
            >
              <div className="service-icon" aria-hidden="true">
                {icons[key]}
              </div>
              <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-footer reveal" ref={footRef}>
          <Link to="/services" className="services-cta-link">
            <span>Discover all our specialized planning services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
