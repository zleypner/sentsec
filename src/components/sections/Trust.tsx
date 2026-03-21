import { BadgeCheck, Award, Shield, Headphones } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Técnicos Certificados",
    description:
      "Personal con capacitación profesional en sistemas CCTV y redes.",
  },
  {
    icon: Award,
    title: "+10 años de experiencia",
    description:
      "Más de una década instalando sistemas de seguridad en Costa Rica.",
  },
  {
    icon: Shield,
    title: "Garantía Completa",
    description:
      "Garantía en equipos e instalación. Si algo falla, lo resolvemos.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description:
      "Atención post-venta y soporte técnico cuando lo necesite.",
  },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Title and 2x2 grid */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Confíe en los expertos
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              No somos una tienda de tecnología. Somos especialistas en seguridad que protegen familias y negocios reales.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Installer image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/install.jpg"
              alt="Técnico instalando cámara de seguridad"
              width={550}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
