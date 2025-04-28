
import React from 'react';
import SpecialtyCard from './SpecialtyCard';
import { Activity, Heart, Flower2, Stethoscope, RadioTower, ThermometerSnowflake, Sparkles, Droplets, Bone, Syringe, TestTube } from 'lucide-react';

const SpecialtiesSection = () => {
  const specialties = [
    { 
      name: "Clínico",
      icon: Activity,
      description: "Atención médica integral para adultos, diagnóstico y tratamiento de enfermedades comunes."
    },
    { 
      name: "Cardiología",
      icon: Heart,
      description: "Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio."
    },
    { 
      name: "Terapia Alternativa",
      icon: Flower2,
      description: "Métodos naturales y holísticos para mejorar la salud y el bienestar."
    },
    { 
      name: "Urología",
      icon: Stethoscope,
      description: "Especialidad que trata las enfermedades del sistema urinario y reproductor masculino."
    },
    { 
      name: "Radiografía",
      icon: RadioTower,
      description: "Imágenes diagnósticas para visualizar el interior del cuerpo."
    },
    { 
      name: "Alergista",
      icon: ThermometerSnowflake,
      description: "Diagnóstico y tratamiento de alergias, asma y trastornos inmunológicos."
    },
    { 
      name: "Odontología Pediátrica",
      icon: Sparkles,
      description: "Cuidado dental especializado para niños y adolescentes."
    },
    { 
      name: "Ecografía",
      icon: Droplets,
      description: "Diagnóstico por imágenes mediante ultrasonido."
    },
    { 
      name: "Odontología",
      icon: Bone,
      description: "Cuidado integral de la salud bucal y dental."
    },
    { 
      name: "Traumatología",
      icon: Bone,
      description: "Tratamiento de lesiones y enfermedades del sistema músculo-esquelético."
    },
    { 
      name: "Diabetología",
      icon: Syringe,
      description: "Control y tratamiento de la diabetes y trastornos metabólicos."
    },
    { 
      name: "Laboratorio",
      icon: TestTube,
      description: "Análisis clínicos y estudios de laboratorio para diagnóstico médico."
    }
  ];

  return (
    <section id="especialidades" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Especialidades Médicas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard 
              key={index} 
              name={specialty.name} 
              Icon={specialty.icon}
              description={specialty.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
