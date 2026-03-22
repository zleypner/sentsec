import { Star, Users, MapPin } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "Desde que instalaron las cámaras puedo ver mi negocio desde el celular en cualquier momento. La tranquilidad no tiene precio.",
    author: "José Rodríguez",
    location: "San José, Escazú",
    rating: 5,
  },
  {
    quote:
      "El equipo fue muy profesional. La instalación fue rápida y me explicaron todo. Ahora duermo tranquila sabiendo que mi casa está vigilada.",
    author: "María Fernández",
    location: "Heredia, Santo Domingo",
    rating: 5,
  },
  {
    quote:
      "Tuve un intento de robo y las cámaras grabaron todo. Gracias a eso pudimos actuar rápido. Totalmente recomendado.",
    author: "Carlos Mora",
    location: "Alajuela, Grecia",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-background">
      <Container>
        {/* Top section - Image and title */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - Family image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/assets/fam.jpg"
              alt="Familia satisfecha con su sistema de seguridad"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl w-auto h-auto"
            />
          </div>

          {/* Right - Badge and title */}
          <div>
            {/* Stats Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Más de 500 instalaciones exitosas en el GAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
