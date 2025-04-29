import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const AptoFisicoSection = () => {
  return (
    <section id="apto-fisico" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Realizamos Apto Fisico Escolar Competitivo y de Alto Rendimiento
            </h2>
            <p className="text-lg text-gray-600">
              El apto físico es una evaluación médica fundamental para garantizar que niños, adolescentes y adultos puedan realizar actividades deportivas de forma segura, detectando posibles condiciones preexistentes que podrían representar un riesgo. Ofrecemos evaluaciones completas para el ámbito escolar, competitivo y de alto rendimiento.
            </p>
            <a href="https://aptofisico.com.ar/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4"> {/* Wrap Button with <a> */}
              <Button size="lg"> {/* Removed asChild */}
                Más información
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Persona realizando ejercicio físico"
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

export default AptoFisicoSection;
