import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const DentalServicesSection = () => {
  return (
    <section id="servicios-dentales" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Odontología General y Especializada para toda la Familia
            </h2>
            <p className="text-lg text-gray-600">
              En Centro Dental Roca, ofrecemos una amplia gama de servicios odontológicos para cuidar la salud bucal de niños, adolescentes y adultos. Contamos con especialistas en diversas áreas para brindarte una atención integral y personalizada.
            </p>
            <a href="#contacto" className="inline-block mt-4"> {/* Wrap Button with <a> */}
              <Button size="lg"> {/* Removed asChild */}
                Solicitar Turno
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Consultorio dental moderno y equipado"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-lg shadow-lg object-cover"
              loading="lazy" // Add lazy loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalServicesSection;
