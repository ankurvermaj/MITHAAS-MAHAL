import React from 'react';
import TraditionSection from '../components/TraditionSection';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-secondary-beige">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-serif font-bold text-primary-deep mb-6">Our Story</h1>
        <p className="text-primary-deep/70 max-w-3xl mx-auto text-lg leading-relaxed">
          Founded in 1947, Mithaas Mahal began as a small sweet shop in the heart of Delhi. 
          For over seven decades, our family has dedicated itself to preserving the authentic 
          flavors of traditional Indian mithai, using recipes passed down through generations.
        </p>
      </div>
      <TraditionSection />
    </div>
  );
};

export default About;
