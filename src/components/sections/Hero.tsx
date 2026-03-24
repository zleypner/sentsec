import { Shield, MessageCircle, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">
                CiberShield CR
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Proteja su Hogar y Negocio en Costa Rica{" "}
              <span className="text-secondary">
                desde su Celular
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl lg:max-w-none">
              Cámaras de seguridad inteligentes con monitoreo en vivo las 24 horas.
              Instalación profesional. Alerta inmediata en su teléfono.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={getWhatsAppUrl()}
                external
                variant="secondary"
                size="lg"
                className="group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Contactar por WhatsApp
              </Button>

              <Button
                href="#como-funciona"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900"
              >
                Ver cómo funciona
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start text-slate-400">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-sm">Respuesta en menos de 5 minutos</span>
            </div>
          </div>

          {/* Hero Image - Phone with security camera view */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <Image
                src="/assets/1.jpg"
                alt="Monitoreo de seguridad desde celular"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-24 text-background"
          viewBox="0 0 1440 74"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,74 960,74 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </section>
  );
}
