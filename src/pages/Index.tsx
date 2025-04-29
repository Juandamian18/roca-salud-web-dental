
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { ProcessSection } from "@/components/ProcessSection"; // Added import
// import AboutSection from '@/components/AboutSection'; // Removed
import LocationsSection from '@/components/LocationsSection';
import ContactSection from '@/components/ContactSection';
// import SpecialtiesSection from '@/components/SpecialtiesSection'; // Removed
// import AptoFisicoSection from '@/components/AptoFisicoSection'; // Removed
import ReviewsSection from '@/components/ReviewsSection';
import { ServicesSection } from '@/components/ServicesSection'; // Corrected import
import { FaqSection } from "@/components/FaqSection";
import Footer from '@/components/Footer';

const Index = () => {
  // Implement lazy loading for images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            image.src = image.dataset.src || image.src;
            imageObserver.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection /> {/* Added this line */}
        <ProcessSection /> {/* Added ProcessSection */}
        {/* <AboutSection /> */} {/* Removed */}
        {/* <SpecialtiesSection /> */} {/* Removed */}
        {/* <AptoFisicoSection /> */} {/* Removed */}
        <ReviewsSection />
        <FaqSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
