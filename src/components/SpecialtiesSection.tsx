
import React from 'react';
import SpecialtyCard from './SpecialtyCard';
// Import Font Awesome icons
import { 
  faUserMd, faHeartPulse, faXRay, faFlaskVial, faDroplet, faEye, 
  faSyringe, faBone, faTooth, faChild, faHeadSideVirus, faVenus, 
  faWeightScale, faLeaf 
} from '@fortawesome/free-solid-svg-icons';

const SpecialtiesSection = () => {
  // Updated specialties list with Font Awesome icons
  const specialties = [
    { 
      name: "Clínico",
      icon: faUserMd,
      description: "Atención médica integral para adultos."
    },
    { 
      name: "Cardiología",
      icon: faHeartPulse,
      description: "Enfermedades del corazón y sistema circulatorio."
    },
    { 
      name: "Cirugia Vascular y Cardiaca", // New
      icon: faHeartPulse, // Reusing icon
      description: "Tratamientos quirúrgicos cardiovasculares."
    },
    { 
      name: "Imagenes diagnosticas", // Updated name
      icon: faXRay,
      description: "Ecografía, Doppler, Tomografía, Rayos X, Resonancia Magnética."
    },
    { 
      name: "Laboratorio",
      icon: faFlaskVial,
      description: "Análisis clínicos para diagnóstico médico."
    },
    { 
      name: "Urologia",
      icon: faDroplet,
      description: "Enfermedades del sistema urinario y reproductor masculino."
    },
    { 
      name: "Oftalmologia", // New
      icon: faEye,
      description: "Cuidado de la salud visual y enfermedades oculares."
    },
    { 
      name: "Diabetologia",
      icon: faSyringe,
      description: "Control y tratamiento de la diabetes."
    },
    { 
      name: "Traumatologia",
      icon: faBone,
      description: "Lesiones y enfermedades del sistema músculo-esquelético."
    },
    { 
      name: "Odontologia y Ortodoncia", // Updated name
      icon: faTooth,
      description: "Salud bucal, dental y corrección de mordida."
    },
    { 
      name: "Odontologia Pediatrica",
      icon: faChild,
      description: "Cuidado dental especializado para niños."
    },
    { 
      name: "Gastroenterologia", // New
      icon: faUserMd, // Using general medical icon
      description: "Enfermedades del sistema digestivo."
    },
    { 
      name: "Hemodinamia", // New
      icon: faHeartPulse, // Reusing icon
      description: "Estudio del movimiento de la sangre."
    },
    { 
      name: "Tratamiento del Dolor", // New
      icon: faHeadSideVirus, // Using related icon
      description: "Manejo y alivio del dolor crónico y agudo."
    },
    { 
      name: "Ginecologia", // New
      icon: faVenus,
      description: "Salud del sistema reproductor femenino."
    },
    { 
      name: "Tratamiento de la obesidad", // New
      icon: faWeightScale,
      description: "Manejo integral del sobrepeso y la obesidad."
    },
    { 
      name: "Alergista",
      icon: faLeaf, // Using alternative icon
      description: "Diagnóstico y tratamiento de alergias."
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
              icon={specialty.icon} // Changed prop name from Icon to icon
              description={specialty.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
