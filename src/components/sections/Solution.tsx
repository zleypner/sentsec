import { Video, Smartphone, Wifi } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const solutions = [
  {
    icon: Video,
    title: "Cámaras de Alta Definición",
    description: "Grabación continua en HD con visión nocturna incluida.",
  },
  {
    icon: Smartphone,
    title: "App en su Celular",
    description: "Acceda al video en vivo desde cualquier lugar, en cualquier momento.",
  },
  {
    icon: Wifi,
    title: "Conexión Inteligente",
    description: "Sistema conectado por WiFi o cable con respaldo ante cortes de energía.",
  },
];

export function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <Container>
        <SectionHeading
          title="Su seguridad en la palma de su mano"
          subtitle="Un sistema completo de vigilancia inteligente diseñado para proteger lo que más importa."
        />

        {/* Two column layout: image left, features right */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone image */}
          <div className="flex justify-center">
            <Image
              src="/assets/camhouse.jpg"
              alt="App de monitoreo en celular"
              width={550}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Right - Feature list */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-secondary" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered camera image */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/assets/cam.jpg"
            alt="Cámara de seguridad HD"
            width={500}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
