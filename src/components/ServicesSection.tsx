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
      imageUrl: '/servicios/Ortodoncia.jpeg',
      title: 'Ortodoncia',
      description: 'Tratamientos para corregir la alineación de los dientes y la mandíbula.',
    },
    {
      imageUrl: '/servicios/Implantes.jpg',
      title: 'Implantes',
      description: 'Soluciones permanentes para reemplazar dientes perdidos.',
    },
    {
      imageUrl: '/servicios/Tomógrafo-Dental.jpg',
      title: 'Tomógrafo Dental',
      description: 'Diagnóstico por imágenes avanzado para una planificación precisa del tratamiento.',
    },
    {
      imageUrl: '/servicios/Panorámicas-3D.jpg',
      title: 'Panorámicas 3D',
      description: 'Imágenes tridimensionales detalladas de su estructura dental y maxilofacial.',
    },
    {
      imageUrl: '/servicios/Prótesis-Dental.jpg',
      title: 'Prótesis Dental',
      description: 'Restauraciones dentales para reemplazar dientes ausentes y mejorar la función masticatoria.',
    },
    {
      imageUrl: '/servicios/Blanqueamiento.jpg',
      title: 'Blanqueamiento',
      description: 'Tratamientos para aclarar el color de sus dientes y lograr una sonrisa más brillante.',
    },
    {
      imageUrl: '/servicios/Endodoncia.webp',
      title: 'Endodoncia',
      description: 'Tratamiento de conductos para salvar dientes infectados o dañados.',
    },
    {
      imageUrl: '/servicios/Cirugías.webp',
      title: 'Cirugías',
      description: 'Procedimientos quirúrgicos dentales para tratar diversas afecciones.',
    },
    {
      imageUrl: '/servicios/Ortopedia-maxilar.webp',
      title: 'Ortopedia maxilar',
      description: 'Tratamientos para guiar el crecimiento y desarrollo de los maxilares en niños y adolescentes.',
    },
    {
      imageUrl: '/servicios/Diseño-de-sonrisa.jpg',
      title: 'Diseño de sonrisa',
      description: 'Planificación y ejecución de tratamientos estéticos para lograr la sonrisa deseada.',
    },
    {
      imageUrl: '/servicios/placa-de-bruxismo.jpg',
      title: 'Placas de descanso',
      description: 'Dispositivos para proteger los dientes del desgaste por bruxismo y aliviar la tensión muscular.',
    },
    {
      imageUrl: '/servicios/botox.webp',
      title: 'Botox',
      description: 'Aplicación de toxina botulínica con fines terapéuticos y estéticos en odontología.',
    },
    {
      imageUrl: '/servicios/bruxismo-tratamiento.jpg',
      title: 'Tratamiento de bruxismo',
      description: 'Soluciones para el rechinamiento o apretamiento involuntario de los dientes.',
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
