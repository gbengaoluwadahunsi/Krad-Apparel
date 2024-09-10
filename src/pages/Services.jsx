// src/pages/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section className="min-h-screen bg-white py-12">
      
      <div className="container mx-auto">
        <h2 className="text-4xl text-royalBlue font-bold text-center mb-8">Our Services</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-ash p-6 rounded-lg shadow-md">
            <h3 className="text-2xl text-royalBlue font-semibold">Custom Tailoring</h3>
            <p className="text-ash mt-2">Personalized tailoring services to fit your unique style.</p>
          </div>
          <div className="bg-ash p-6 rounded-lg shadow-md">
            <h3 className="text-2xl text-royalBlue font-semibold">Fashion Design</h3>
            <p className="text-ash mt-2">Bespoke fashion designs crafted by our expert designers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
