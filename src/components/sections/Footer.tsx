import { Shield, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl, PHONE_NUMBER, EMAIL } from "@/lib/constants";

const quickLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo Funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas Frecuentes" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <Container className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Ciber Shield CR</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              Protegemos hogares y negocios en Costa Rica con sistemas de
              cámaras de seguridad de alta calidad. Más de 10 años de
              experiencia respaldan nuestro trabajo.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{PHONE_NUMBER}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{EMAIL}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Cámaras de Seguridad</li>
              <li>Instalación Profesional</li>
              <li>Monitoreo 24/7</li>
              <li>Soporte Técnico</li>
              <li>Mantenimiento</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <Container className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              {currentYear} Ciber Shield CR. Todos los derechos reservados.
            </p>
            <p>Costa Rica</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
