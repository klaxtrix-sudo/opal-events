import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './AboutPage.css';
import aboutImg from '../assets/about.png';
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal';

const AboutPage = () => {
  const storyImgRef = useScrollReveal({ threshold: 0.1 });
  const storyTextRef = useScrollReveal({ threshold: 0.1 });
  const philosophyRef = useScrollReveal({ threshold: 0.1 });
  const valuesHeaderRef = useScrollReveal({ threshold: 0.1 });
  const valuesGridRef = useScrollRevealAll({ threshold: 0.1 });
  const ctaRef = useScrollRevealAll({ threshold: 0.1 });

  return (
    <div className="about-page">
      <PageHero
        eyebrow="Our Story"
        title={<span>About <em>Opal Events</em></span>}
        subtitle="Opal Events was born from a desire to bring diamond-standard planning to every celebration, regardless of size or budget."
      />

      <section className="section bg-light" aria-label="The Full Story">
        <div className="container about-page-grid">
          <div className="about-page-img reveal-left" ref={storyImgRef}>
            <div className="img-frame">
              <img src={aboutImg} alt="Opal Events Founder" loading="lazy" />
            </div>
            <div className="founder-badge">
              <strong>Est. 2023</strong>
              <span>Sheffield, UK</span>
            </div>
          </div>

          <div className="about-page-content reveal-right" ref={storyTextRef}>
            <h2>The Visionary <em className="display-italic">Journey</em></h2>
            <p className="lead">
              "Isn't being a wedding planner every girl's dream? I just decided to follow mine..."
            </p>
            <p>
              In 2020, while working full-time, I did an online Wedding Planning course which delved into weddings of different cultures, such as Nigerian, South Asian, and Slovakian. It also looked at how to run your own wedding planning business—I spent months debating how someone with so much passion but little experience in the industry could start that business.
            </p>
            <p>
              In the end, what made the most sense to me was to at least start in the industry, so in 2023, I quit my job and started working freelance as a Wedding Coordinator for a venue. That’s when I realized what it takes to succeed in weddings and events: hard work and long hours, but also passion, great customer service, and connections. It solidified that this was what I wanted to do.
            </p>
            <p>
              I moved to a venue close to the city centre and within 18 months, I had been promoted twice—from Wedding & Venue Assistant to Wedding & Event Coordinator, and then from Coordinator to Hospitality Manager. The transition into these roles felt natural and expanded my knowledge and understanding of events as a whole, as well as the detail behind planning and running not only the events but hiring, training, and leading a passionate team too.
            </p>
            <p>
              It gave me the chance to build my skills in areas such as budget management, scheduling, problem-solving, and logistics—all things that stand me in good stead for building my own business and helping my customers in their planning journey. A big part of these roles was supplier relationships, both building and maintaining them, something else that I've taken with me into my business to bring my customers a variety of options and ideas to bring their dreams to life.
            </p>
            <p>
              Again, I moved onto another venue, this time a new, unestablished one that required the events side to be built from nothing. This is where my desire to build my own wedding and event planning business became difficult to ignore... so welcome to this journey of passion!
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-warm" aria-label="Our Philosophy">
        <div className="container">
          <div className="philosophy-content reveal" ref={philosophyRef}>
            <span className="quote-mark">“</span>
            <blockquote className="philosophy-quote">
              Diamond experiences shouldn't be a luxury of the few, but a <em className="display-italic">standard for the many</em>.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" aria-label="Our Values">
        <div className="container">
          <div className="section-header reveal" ref={valuesHeaderRef}>
            <span className="eyebrow">Principles of Luxury</span>
            <h2>Our Core <em className="display-italic">Values</em></h2>
          </div>

          <div className="values-grid" ref={valuesGridRef}>
            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 3L1.5 8L12 22L22.5 8L18 3H6Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.5 8H22.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 3L12 8L18 3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22L8 8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22L16 8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We believe perfection is in the decimals. Every minute detail is Meticulously planned to ensure your day is as flawless as a rare gemstone.</p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21V5L19 2M19 2L22 5M19 2V5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3V19L5 22M5 22L2 19M5 22V19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Transparency</h3>
              <p>Clarity is luxury. From budget breakdowns to supplier honesties, we maintain total openness so you can enjoy the process without stress.</p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Creativity</h3>
              <p>Your story isn't off-the-shelf. We blend trend-setting aesthetics with traditional elegance to create something entirely, uniquely yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta-modern">
        <div className="container" ref={ctaRef}>
          <div className="p-cta-flex reveal">
            <div className="p-cta-left">
              <span className="eyebrow eyebrow-light">Let's Connect</span>
              <h2>Inspired by <em className="display-italic">Our Journey?</em></h2>
            </div>
            <div className="p-cta-right">
              <p>Every event starts with a single idea. Let's discuss yours and create something truly exceptional together.</p>
              <div className="p-cta-actions">
                <Link to="/contact" className="btn btn-premium">
                  <span>Discuss Your Event Vision</span>
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

export default AboutPage;
