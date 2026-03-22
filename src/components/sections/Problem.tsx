import { AlertTriangle, Lock, Eye } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const problems = [
  {
    icon: AlertTriangle,
    title: "Robos en aumento",
    description:
      "Costa Rica registra miles de robos a viviendas cada año. El riesgo es real y crece constantemente.",
  },
  {
    icon: Lock,
    title: "Su propiedad desprotegida",
    description:
      "Sin un sistema de vigilancia, no tiene forma de saber qué sucede cuando usted no está presente.",
  },
  {
    icon: Eye,
    title: "Sin control ni visibilidad",
    description:
      "La incertidumbre de no poder ver su hogar o negocio genera estrés y preocupación constante.",
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        {/* Two column layout with text and image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Saber qué ocurre en su propiedad cuando no está?
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              El desconocimiento es su mayor vulnerabilidad. Cada minuto sin vigilancia es un riesgo que puede evitar.
            </p>
          </div>

          {/* Right image - Thief */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/assets/thief.png"
                alt="Intruso intentando entrar"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl w-auto h-auto"
              />
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-danger/20 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-danger" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>

              <p className="text-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
