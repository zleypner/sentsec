import { Shield, Clock, Users, CheckCircle, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/constants";

const highlights = [
  { icon: Clock, text: "Instalación en 24 horas" },
  { icon: Users, text: "Solo 5 cupos esta semana" },
  { icon: CheckCircle, text: "Asesoría 100% gratuita" },
];

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[length:32px_32px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white/90">
              Oferta por tiempo limitado
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Diagnóstico de Seguridad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400">
              Gratis
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Evaluamos su propiedad sin costo y le presentamos una solución a su
            medida. Sin compromiso.
          </p>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/80"
              >
                <highlight.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              href={getWhatsAppUrl("Hola, me gustaría solicitar un diagnóstico de seguridad gratuito.")}
              external
              variant="secondary"
              size="lg"
              className="text-lg px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Diagnóstico Gratis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
