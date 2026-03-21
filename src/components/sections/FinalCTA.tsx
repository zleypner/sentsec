import { Shield, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl, PHONE_NUMBER } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            ¿Listo para dormir tranquilo?
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            No espere a que algo suceda. Proteja su hogar y negocio hoy con un
            sistema profesional de cámaras de seguridad.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={getWhatsAppUrl("Hola, me gustaría solicitar una cotización gratuita.")}
              external
              variant="primary"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Cotización Gratis
            </Button>

            <Button
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              variant="outline"
              size="lg"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
