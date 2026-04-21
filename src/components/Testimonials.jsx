import React from 'react';
import './Testimonials.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const Testimonials = () => {
  const ref = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="testimonials" aria-label="Client Testimonials">
      {/* Decorative background diamonds */}
      <div className="testimonials-bg-pattern" aria-hidden="true" />

      <div className="container testimonials-inner reveal" ref={ref}>
        <div className="testimonials-quote-col" aria-hidden="true">
          <span className="giant-quote">"</span>
        </div>

        <div className="testimonials-content">
          <span className="eyebrow eyebrow-light">What Clients Say</span>

          <div className="stars" aria-label="Five star rating">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>

          <blockquote className="testimonial-quote">
            Working with Opal Events was the best decision we made for our wedding!
            Not only was it the most beautiful day, it was done within our incredibly
            short timeframe. Our planner understood our vision and really brought it to
            life. So so many of our friends and family said it was the best wedding
            they had ever been to!
          </blockquote>

          <footer className="testimonial-footer">
            <cite className="testimonial-author">T &amp; O</cite>
            <span className="testimonial-detail">Wedding Clients · 2025</span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
