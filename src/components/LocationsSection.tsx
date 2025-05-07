import React from 'react';
import LocationCard from './LocationCard';
import { Button } from './ui/button';

const LocationsSection = () => {
  const locations = [
    {
      title: "Consultorios Caballito",
      address: "Ambrosetti 698, Caballito, CABA",
      mapsEmbedUrl: "https://maps.google.com/maps?q=Ambrosetti%20698%2C%20Caballito%2C%20CABA&t=&z=15&ie=UTF8&iwloc=&output=embed",
      reviewUrl: "https://g.page/r/CS0EDOwOdeQnEAE/review",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ambrosetti+698%2C+Caballito%2C+CABA" // Added directions URL
    }
  ];

  const location = locations[0]; // Assuming only one location

  return (
    <section className="py-12 md:py-20 bg-gray-50"> {/* Added a light background */}
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10 md:mb-12">Dónde Nos Encontramos</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

          {/* Left Column: Details */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"> {/* Changed md:w-1/2 to md:w-1/3 */}
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md mb-6">
              <LocationCard
                title={location.title}
                address={location.address}
              />
            </div>
            {/* Buttons Container */}
            {/* Added max-w-md w-full to match card width */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start max-w-md w-full"> 
              <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg">
                  Deja una reseña
                </Button>
              </a>
              <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg"> {/* Added Como Llegar button */}
                  Cómo llegar
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full md:w-2/3 h-80 md:h-96 rounded-lg overflow-hidden shadow-md"> {/* Changed md:w-1/2 to md:w-2/3 */}
            <iframe
              src={location.mapsEmbedUrl}
              width="100%"
              height="100%"
              className="border-0" // Removed background-specific classes
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Roca Salud Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
