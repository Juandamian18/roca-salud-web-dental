import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faUserMd, faSmile, faBaby, IconDefinition } from '@fortawesome/free-solid-svg-icons'; // Updated icons
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Import Card components

interface ServiceItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
  // key prop removed - it's handled by React during mapping
}

// Removed ServiceItemProps from React.FC type as key is not a prop
const ServiceItem: React.FC<Omit<ServiceItemProps, 'key'>> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full">
    <CardHeader className="pb-4">
      <div className="text-4xl text-primary">
        <FontAwesomeIcon icon={icon} />
      </div>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
    </CardContent>
  </Card>
);

export const ServicesSection: React.FC = () => {
  // Removed the explicit ServiceItemProps[] type annotation, TS can infer it
  const services = [
    {
      icon: faTooth,
      title: 'Odontología General',
      description: 'Consultas, limpiezas, obturaciones (empastes), extracciones simples y prevención de enfermedades bucales.',
    },
    {
      icon: faUserMd, // Using faUserMd as a placeholder for specialist
      title: 'Ortodoncia',
      description: 'Corrección de la posición de los dientes y maxilares para mejorar la estética y funcionalidad de tu sonrisa.',
    },
    {
      icon: faSmile, // Using faSmile for aesthetics
      title: 'Estética Dental',
      description: 'Blanqueamientos dentales, carillas, coronas y otros tratamientos para embellecer tu sonrisa.',
    },
    {
      icon: faBaby, // Using faBaby for pediatric dentistry
      title: 'Odontopediatría',
      description: 'Atención dental especializada para bebés, niños y adolescentes, enfocada en la prevención y tratamiento temprano.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nuestros Servicios Odontológicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En Centro Dental Roca, te ofrecemos una atención odontológica integral y personalizada para cuidar de tu salud bucal y la de tu familia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index} // Pass index as key
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
