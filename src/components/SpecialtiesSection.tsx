
import React from 'react';
import SpecialtyCard from './SpecialtyCard';
import { Activity, Heart, Flower2, Stethoscope, RadioTower, ThermometerSnowflake, Sparkles, Droplets, Bone, Syringe, TestTube } from 'lucide-react';

const SpecialtiesSection = () => {
  const specialties = [
    { name: "Clínico", icon: Activity },
    { name: "Cardiología", icon: Heart },
    { name: "Terapia Alternativa", icon: Flower2 },
    { name: "Urología", icon: Stethoscope },
    { name: "Radiografía", icon: RadioTower },
    { name: "Alergista", icon: ThermometerSnowflake },
    { name: "Odontología Pediátrica", icon: Sparkles },
    { name: "Ecografía", icon: Droplets },
    { name: "Odontología", icon: Bone },
    { name: "Traumatología", icon: Bone },
    { name: "Diabetología", icon: Syringe },
    { name: "Laboratorio", icon: TestTube }
  ];

  return (
    <section id="especialidades" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Especialidades Médicas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} name={specialty.name} Icon={specialty.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
