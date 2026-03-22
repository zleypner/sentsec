import { Clock, Bell, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    icon: Clock,
    title: "Monitoreo 24/7",
    description: "Vigilancia continua sin interrupciones, los 365 días del año.",
  },
  {
    icon: Bell,
    title: "Alertas Inmediatas",
    description: "Notificaciones al instante en su celular ante cualquier movimiento sospechoso.",
  },
  {
    icon: Globe,
    title: "Control Total",
    description: "Vea sus cámaras desde cualquier lugar del mundo con conexión a internet.",
  },
  {
    icon: Zap,
    title: "Instalación Rápida",
    description: "Nuestros técnicos instalan su sistema en menos de un día.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-card">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Title and 2x2 grid */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Monitoreo 24/7
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Todo lo que necesita para mantener su propiedad segura, en un solo sistema.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white border border-border hover:border-secondary/20 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-secondary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Monitoring center image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/central.jpg"
              alt="Centro de monitoreo de seguridad"
              width={550}
              height={450}
              className="rounded-2xl shadow-xl w-auto h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
