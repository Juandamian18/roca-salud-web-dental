
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "María González",
      comment: "Excelente atención en cardiología. El personal es muy profesional y las instalaciones son modernas y limpias.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      comment: "Los especialistas son muy buenos. Me atendieron rápido y el diagnóstico fue preciso. Muy recomendable.",
      rating: 5
    },
    {
      name: "Laura Pérez",
      comment: "El servicio de laboratorio es eficiente y rápido. Los resultados fueron entregados en tiempo y forma.",
      rating: 4
    },
    {
      name: "Juan Martínez",
      comment: "Muy conforme con la atención en odontología. Profesionales capacitados y tecnología de primera.",
      rating: 5
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
