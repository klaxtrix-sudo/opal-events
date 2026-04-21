import React from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ContactForm = () => {
  const infoRef = useScrollReveal({ threshold: 0.2 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section" id="contact" aria-label="Book a Consultation">
      <div className="container contact-container">

        {/* Left Info Panel */}
        <div className="contact-info reveal-left" ref={infoRef}>
          <span className="eyebrow">Get In Touch</span>
          <h2>Ready to Create<br /><em className="display-italic">Something Special?</em></h2>
          <p className="contact-intro">
            Fill in the form and we'll be in touch to arrange your free consultation.
            Prefer to message? Reach us directly on WhatsApp.
          </p>

          <div className="contact-methods-wrapper">
            <div className="contact-detail-card">
              <div className="contact-detail-icon"><EmailIcon /></div>
              <div>
                <span className="contact-detail-label">Email</span>
                <a href="mailto:contact@opalevents.co.uk" className="contact-detail-value">
                  contact@opalevents.co.uk
                </a>
              </div>
            </div>

            <div className="contact-vr" aria-hidden="true"></div>

            <a
              href="https://wa.me/447544782266"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-btn"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          <p className="contact-note">
            Sheffield &amp; Yorkshire based
          </p>
        </div>

        {/* Simplified for Home */}
        <div className="contact-form-wrap reveal-right" ref={formRef}>
          <div className="contact-teaser-card">
            <h3>Send an Enquiry</h3>
            <p>Tell us about your event vision and let's bring it to life together.</p>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Open Consultation Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
