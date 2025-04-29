
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Medal, Trophy, HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid columns */}
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Profesionales Expertos</h3>
                <p className="text-muted-foreground">
                  Contamos con un equipo de especialistas altamente calificados y con amplia experiencia en sus respectivas áreas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Medal className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tecnología de Punta</h3>
                <p className="text-muted-foreground">
                  Equipamiento médico moderno y actualizado para diagnósticos precisos y tratamientos efectivos.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Brindamos un servicio centrado en el paciente, con seguimiento personalizado y trato cordial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New Card for Planes de salud ambulatoria */}
          <Card className="bg-white/80 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <HeartHandshake className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Planes de Salud Ambulatoria</h3>
                <p className="text-muted-foreground">
                  Ofrecemos cobertura médica ambulatoria adaptada a tus necesidades.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
