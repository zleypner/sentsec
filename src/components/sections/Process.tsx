import { MessageCircle, Phone, Wrench } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/constants";

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctenos",
    description:
      "Escríbanos por WhatsApp o llene el formulario. Respondemos en minutos.",
  },
  {
    icon: Phone,
    title: "Asesoría Gratuita",
    description:
      "Evaluamos su propiedad y le recomendamos la mejor solución sin compromiso.",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description:
      "Nuestro equipo instala y configura todo. Usted solo se conecta desde su celular.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-card">
      <Container>
        <SectionHeading
          title="Instalación sin complicaciones"
          subtitle="En 3 simples pasos, su propiedad estará protegida."
        />

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-secondary/40 z-0" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Icon */}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Step Number */}
                <p className="text-sm font-semibold text-secondary mb-2">
                  Paso {index + 1}
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outdoor camera image */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/assets/campalm.jpg"
            alt="Cámara de seguridad exterior"
            width={900}
            height={400}
            className="rounded-2xl shadow-xl w-full max-w-4xl object-cover"
          />
        </div>

        {/* CTA - Iniciar el proceso */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">Comience hoy mismo con el Paso 1</p>
          <Button
            variant="secondary"
            size="lg"
            href={getWhatsAppUrl("Hola, quiero iniciar el proceso de instalación.")}
            external
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar mi proceso
          </Button>
        </div>
      </Container>
    </section>
  );
}
