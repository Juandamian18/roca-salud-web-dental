
import React from 'react';
import SpecialtyCard from './SpecialtyCard';

const SpecialtiesSection = () => {
  const specialties = [
    "Clínico",
    "Cardiología",
    "Terapia Alternativa",
    "Urología", 
    "Radiografía",
    "Alergista",
    "Odontología Pediátrica",
    "Ecografía",
    "Odontología",
    "Traumatología",
    "Diabetología",
    "Laboratorio"
  ];

  return (
    <section id="especialidades" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Especialidades Médicas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} name={specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
