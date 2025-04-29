
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Familia González",
      comment: "Hicimos el apto físico escolar para nuestros hijos aquí. El proceso fue rápido, organizado y el personal muy amable con los niños.",
      rating: 5
    },
    {
      name: "Martín López (Deportista)",
      comment: "Necesitaba un apto físico de alto rendimiento para competir. La evaluación fue completa y los médicos me dieron buenas recomendaciones.",
      rating: 5
    },
    {
      name: "Ana Fernández",
      comment: "Excelente atención para el apto físico. Me explicaron cada paso y resolvieron todas mis dudas. Muy profesionales.",
      rating: 5
    },
    {
      name: "Club Atlético Tucumán (Inferiores)",
      comment: "Traemos a nuestros juveniles para los aptos físicos cada temporada. Siempre un servicio eficiente y confiable.",
      rating: 4 // Adjusted slightly for variety
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Opiniones de Nuestros Pacientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              comment={review.comment}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
