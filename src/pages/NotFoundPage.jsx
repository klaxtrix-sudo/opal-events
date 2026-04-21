import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <PageHero 
        eyebrow="404 Error"
        title={<span>Page <em>Not Found</em></span>}
        subtitle="Oops! It looks like the page you are looking for doesn't exist or has been moved."
      />
      
      <section className="section text-center">
        <div className="container">
          <p className="lead mb-8">Let's get you back on track to planning your perfect event.</p>
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
