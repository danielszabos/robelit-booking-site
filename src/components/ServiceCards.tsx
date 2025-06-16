
import React from 'react';

const services = [
  {
    icon: "🏠",
    title: "Interior Painting",
    description: "Transform your living spaces with our premium interior painting services. We handle walls, ceilings, trim, and more.",
  },
  {
    icon: "🏢",
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with our durable, weather-resistant painting solutions.",
  },
  {
    icon: "✨",
    title: "Decorative Finishes",
    description: "Add unique textures and finishes including faux effects, murals, and specialty coatings.",
  },
  {
    icon: "🧰",
    title: "Repair & Prep",
    description: "We fix drywall, plaster, wood damage and properly prepare all surfaces before painting begins.",
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-paintGold mx-auto mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="elegant-card p-6 group relative overflow-hidden"
            >
              <div className="absolute h-1 bg-paintGold w-0 left-0 top-0 group-hover:w-full transition-all duration-300"></div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-paintBlue">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
