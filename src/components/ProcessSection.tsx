import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert"; // Added Alert imports
import { Info } from "lucide-react"; // Added Info icon import

export function ProcessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Proceso de Atención</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conoce el paso a paso para obtener tu certificado de aptitud física
            </p>
          </div>
        </div>
        {/* Updated layout to match the image */}
        <div className="mx-auto flex flex-col max-w-2xl items-start gap-8 mt-12">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-left">Solicitud de Turno</h3>
              <p className="text-sm text-muted-foreground text-left">
                Complete el formulario de contacto o llame para programar su evaluación médica.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-left">Asistencia a la Consulta</h3>
              <p className="text-sm text-muted-foreground text-left">
                Acuda a la cita con su documento de identidad. Para menores, deben asistir con un adulto responsable.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-left">Evaluación Médica</h3>
              <p className="text-sm text-muted-foreground text-left">
                Nuestros profesionales realizarán todos los exámenes necesarios según el tipo de certificación requerida.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-left">Entrega de Certificado</h3>
              <p className="text-sm text-muted-foreground text-left">
                Una vez completada la evaluación, se emitirá el certificado de aptitud física correspondiente.
              </p>
            </div>
          </div>
        </div>
        {/* Updated "Importante" note styling */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Importante:</strong> Para realizar el apto físico, es recomendable venir con ropa cómoda. En caso de necesitar estudios complementarios, le informaremos durante la consulta.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
