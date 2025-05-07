import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Import Card components

interface ServiceItemProps {
  imageUrl: string; // Changed from icon to imageUrl
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ imageUrl, title, description }) => (
  <Card className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full">
    <CardHeader className="pb-4 w-full"> {/* Ensure CardHeader takes full width for the image */}
      {/* Use an img tag for the image, full width, square, and object-cover */}
      <img src={imageUrl} alt={title} className="w-full aspect-square object-cover" />
    </CardHeader>
    <CardContent className="flex flex-col flex-grow pt-4"> {/* Added pt-4 for spacing after image */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
    </CardContent>
  </Card>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Ortodoncia',
      description: 'Tratamientos para corregir la alineación de los dientes y la mandíbula.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Implantes',
      description: 'Soluciones permanentes para reemplazar dientes perdidos.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Tomógrafo Dental',
      description: 'Diagnóstico por imágenes avanzado para una planificación precisa del tratamiento.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Panorámicas 3D',
      description: 'Imágenes tridimensionales detalladas de su estructura dental y maxilofacial.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Prótesis Dental',
      description: 'Restauraciones dentales para reemplazar dientes ausentes y mejorar la función masticatoria.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Blanqueamiento',
      description: 'Tratamientos para aclarar el color de sus dientes y lograr una sonrisa más brillante.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Endodoncia',
      description: 'Tratamiento de conductos para salvar dientes infectados o dañados.',
    },
    {
      imageUrl: '/placeholder.svg', // Replace with actual image path
      title: 'Cirugías',
      description: 'Procedimientos quirúrgicos dentales para tratar diversas afecciones.',
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
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
