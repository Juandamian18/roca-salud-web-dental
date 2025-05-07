import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faUserMd, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mx-auto text-blue-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900">Tecnología de Punta</h3>
            <p className="mt-5 text-base text-gray-600">
              Utilizamos las últimas innovaciones y tecnología avanzada para ofrecerte tratamientos precisos y eficientes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <FontAwesomeIcon icon={faUserMd} className="w-12 h-12 mx-auto text-blue-600" />
            <h3 className="mt-12 text-xl font-bold text-gray-900">Equipo Profesional</h3>
            <p className="mt-5 text-base text-gray-600">
              Contamos con un equipo de dentistas altamente calificados y con experiencia, dedicados a tu bienestar.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="w-12 h-12 mx-auto text-blue-600" />
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
