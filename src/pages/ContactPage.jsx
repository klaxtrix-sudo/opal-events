import React from 'react';
import PageHero from '../components/PageHero';
import './ContactPage.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactPage = () => {
  const formRef = useScrollReveal({ threshold: 0.1 });
  const infoRef1 = useScrollReveal({ threshold: 0.1 });
  const infoRef2 = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="contact-page">
      <PageHero
        eyebrow="Contact Us"
        title={<span>Let's Start <em>Planning</em></span>}
        subtitle="Ready to discuss your vision? Fill out the form below or message us directly on WhatsApp."
      />

      <section className="section bg-soft-gradient">
        <div className="container contact-page-grid">
          <div className="contact-page-form-wrap reveal-left" ref={formRef}>
            <div className="cp-form-header">
              <h2>Enquiry Form</h2>
              <p>Tell us a little about your event and we'll get back to you shortly.</p>
            </div>
            
            <form className="contact-page-form">
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label htmlFor="cp-name">Full Name *</label>
                  <input type="text" id="cp-name" required placeholder="Your name" />
                </div>
                <div className="cp-form-group">
                  <label htmlFor="cp-email">Email Address *</label>
                  <input type="email" id="cp-email" required placeholder="you@example.com" />
                </div>
              </div>

              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label htmlFor="cp-phone">Phone Number *</label>
                  <input type="tel" id="cp-phone" required placeholder="07XXX XXXXXX" />
                </div>
                <div className="cp-form-group">
                  <label htmlFor="cp-event-type">Event Type *</label>
                  <select id="cp-event-type" required>
                    <option value="">Select type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="cp-form-group">
                <label htmlFor="cp-date">Preferred Event Date</label>
                <input type="date" id="cp-date" />
              </div>

              <div className="cp-form-group">
                <label htmlFor="cp-message">Tell us about your vision *</label>
                <textarea id="cp-message" rows="5" required placeholder="Date, guests, venue, style ideas..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary cp-submit">
                <span>Send Enquiry</span>
                <span className="shimmer"></span>
              </button>
            </form>
          </div>

          <div className="contact-page-info">
            <div className="cp-info-card reveal-right" ref={infoRef1}>
              <h3>Direct Contact</h3>
              <p>Reach out to us and we'll get back to you within 24 hours.</p>

              <div className="cp-contact-links">
                <a href="mailto:contact@opalevents.co.uk" className="cp-link">
                  <span className="cp-label">Email</span>
                  <span className="cp-value">contact@opalevents.co.uk</span>
                </a>
                <a href="https://wa.me/447544782266" className="cp-link-wa">
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="cp-info-card cp-location-card reveal-right" ref={infoRef2}>
              <h3>Our Location</h3>

              <div className="cp-loc-badge">
                📍 Sheffield, UK
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;
