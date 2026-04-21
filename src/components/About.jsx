import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImg from '../assets/about.png';



const About = () => {
  const imgRef = useScrollReveal({ threshold: 0.15 });
  const textRef = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="section" id="about" aria-label="About Opal Events">
      <div className="container about-grid">

        {/* Image column */}
        <div className="about-image-wrap reveal-left" ref={imgRef}>
          <Link to="/about" className="about-image-link">
            <img src={aboutImg} alt="Opal Events founder in an elegant venue" className="about-img" loading="lazy" />
            <div className="about-badge" aria-hidden="true">
              <span>✦</span>
              <span>Est. 2023</span>
            </div>
          </Link>
        </div>

        {/* Text column */}
        <div className="about-text-col reveal-right" ref={textRef}>
          <span className="eyebrow">Our Story</span>
          <Link to="/about" className="about-heading-link">
            <h2>A Journey <em className="display-italic">of Passion</em></h2>
          </Link>

          <p className="about-lead">
            Isn't being a wedding planner every girl's dream? I just decided to follow mine...
          </p>

          <div className="about-body">
            <p>
              In 2020, while working full-time, I did an online Wedding Planning course
              which delved into weddings of different cultures such as Nigerian, South Asian,
              and Slovakian. It also looked at how to run your own wedding planning business—I
              spent months debating how someone with so much passion but little experience
              in the industry could start that business. In the end, what made the most sense
              to me was to at least start in the industry, so in 2023 I quit my job and
              started working freelance as a Wedding Coordinator for a venue.
            </p>
            <p>
              That's when I realised what it takes to succeed in weddings and events: hard
              work and long hours, but also passion, great customer service, and connections.
              It solidified that this was what I wanted to do. I moved to a venue close to
              the city centre and within 18 months I had been promoted twice—from Wedding &
              Venue Assistant to Wedding & Event Coordinator, and from Coordinator to
              Hospitality Manager.
            </p>
          </div>

          <div className="about-cta" style={{ marginTop: 'var(--space-8)' }}>
            <Link to="/about" className="btn btn-outline">
              Discover Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
