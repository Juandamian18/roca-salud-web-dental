import React from 'react';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section id="differentiators" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Qué Nos Diferencia
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Descubre por qué somos la mejor opción para tu salud dental.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* Feature 1 */}
          <div className="md:p-8 lg:p-14">
            <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900">Tecnología de Punta</h3>
            <p className="mt-5 text-base text-gray-600">
              Utilizamos las últimas innovaciones y tecnología avanzada para ofrecerte tratamientos precisos y eficientes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900">Equipo Profesional</h3>
            <p className="mt-5 text-base text-gray-600">
              Contamos con un equipo de dentistas altamente calificados y con experiencia, dedicados a tu bienestar.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900">Atención Personalizada</h3>
            <p className="mt-5 text-base text-gray-600">
              Nos enfocamos en tus necesidades individuales, ofreciendo un trato cercano y planes de tratamiento a medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
