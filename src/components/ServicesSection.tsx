import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faMedal, faChartLine, faHeartPulse, IconDefinition } from '@fortawesome/free-solid-svg-icons';
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
      icon: faSchool,
      title: 'Apto Físico Escolar',
      description: 'Evaluación médica requerida por las instituciones educativas para certificar que el alumno puede realizar actividad física.',
    },
    {
      icon: faMedal,
      title: 'Apto Físico Competitivo',
      description: 'Evaluación más completa para deportistas que participan en competencias, incluye electrocardiograma y análisis específicos.',
    },
    {
      icon: faChartLine,
      title: 'Apto Alto Rendimiento',
      description: 'Evaluación exhaustiva para atletas profesionales, incluye pruebas de esfuerzo, análisis de composición corporal y más.',
    },
    {
      icon: faHeartPulse,
      title: 'Control Cardiológico',
      description: 'Control preventivo para deportistas de todas las edades que buscan cuidar su salud cardiovascular durante la actividad física.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos diferentes tipos de certificados médicos adaptados a las necesidades de cada institución y nivel deportivo.
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
