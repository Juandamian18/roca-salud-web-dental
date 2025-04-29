import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué documentación debo llevar para el apto físico de mi hijo?",
    answer:
      "Debe traer el DNI del menor, el formulario solicitado por la institución educativa si lo hubiera, y cualquier estudio médico previo relevante. El menor debe asistir acompañado por un adulto responsable.",
  },
  {
    question:
      "¿Cuál es la diferencia entre un apto físico escolar y uno competitivo?",
    answer:
      "El apto físico escolar es básico y cumple con los requisitos mínimos exigidos por las escuelas. El apto físico competitivo es más exhaustivo e incluye electrocardiograma y otras pruebas específicas para deportistas que compiten regularmente.",
  },
  {
    question: "¿Cuánto tiempo de validez tiene el certificado?",
    answer:
      "Los certificados de aptitud física tienen generalmente una validez de un año, aunque esto puede variar según los requerimientos de cada institución o federación deportiva.",
  },
  {
    question: "¿Necesito sacar turno previo o puedo asistir sin cita?",
    answer:
      "Es necesario sacar turno previo para garantizar una atención adecuada y evitar tiempos de espera. Puede solicitar su turno a través de nuestro formulario de contacto o por teléfono.",
  },
  {
    question: "¿Qué estudios incluye el apto físico de alto rendimiento?",
    answer:
      "El apto físico de alto rendimiento incluye historia clínica completa, examen físico, electrocardiograma, prueba de esfuerzo, análisis de sangre, evaluación nutricional y, en algunos casos, estudios complementarios según la disciplina deportiva.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros servicios de aptitud
            física
          </p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
