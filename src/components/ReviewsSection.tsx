
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Laura Gómez",
      comment: "Excelente atención en Centro Dental Roca. Me realicé una limpieza y blanqueamiento, ¡los resultados son increíbles! Muy profesionales y amables.",
      rating: 5
    },
    {
      name: "Carlos Pérez",
      comment: "Llevé a mis hijos para un control y el trato con los niños fue espectacular. El odontopediatra tiene mucha paciencia. ¡Recomendadísimo!",
      rating: 5
    },
    {
      name: "Sofía Rodríguez",
      comment: "Tenía terror de ir al dentista, pero en Centro Dental Roca me sentí muy cómoda. Me explicaron todo el tratamiento de conducto y no sentí dolor.",
      rating: 5
    },
    {
      name: "Javier Torres",
      comment: "Muy satisfecho con la ortodoncia. El equipo es muy profesional y siempre puntuales con las citas. ¡Mi sonrisa cambió por completo!",
      rating: 4
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
