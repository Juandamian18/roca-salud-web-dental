
import React from 'react';
import LocationCard from './LocationCard';

const LocationsSection = () => {
  const locations = [
    {
      title: "Consultorios Caballito",
      address: "Ambrosetti 698, Caballito, CABA"
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nuestra Sede</h2>
        <div className="max-w-md mx-auto">
          {locations.map((location, index) => (
            <LocationCard 
              key={index} 
              title={location.title} 
              address={location.address} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
