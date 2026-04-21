import React from 'react';
import './VenueTrust.css';

const VENUES = [
  'Wentworth Woodhouse',
  'Kelham Island Museum',
  'Whirlowbrook Hall',
  'Sheffield Cathedral',
  'Cutlers Hall',
  'Kenwood Hall Hotel',
  'The Mowbray',
  'Wortley Hall'
];

const VenueTrust = () => {
  return (
    <section className="venue-trust" aria-label="Venues we work with">
      <div className="container">
        <div className="venue-header">
          <span className="eyebrow">Local Expertise</span>
          <h3>Trusted at Premium Yorkshire Venues</h3>
        </div>
        <div className="venue-track-wrap">
          <div className="venue-track">
            {/* Double the list for infinite-feeling scroll if implemented with CSS */}
            {[...VENUES, ...VENUES].map((venue, index) => (
              <div key={index} className="venue-item">
                <span className="venue-name">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueTrust;
