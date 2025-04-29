
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-white to-accent">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Apto Físico Escolar y de Alto Rendimiento
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600">
            Realizamos Apto Físico Escolar, Competitivo y de Alto Rendimiento.
          </h2>
          {/* <h3 className="text-lg md:text-xl text-gray-500">
            Todas las especialidades
          </h3> */}
          <div className="pt-4">
            <a 
              href="https://wa.me/541127756496" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Reservá tu turno por WhatsApp
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1589953605483-a2964c38d415?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profesionales médicos en consultorio" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
