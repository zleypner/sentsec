"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/constants";

const faqs = [
  {
    question: "¿Funciona sin internet?",
    answer:
      "Sí, las cámaras continúan grabando localmente en un disco duro incluso sin conexión a internet. Sin embargo, para ver el video en vivo desde su celular, necesita conexión a internet tanto en el sistema como en su dispositivo móvil.",
  },
  {
    question: "¿Se puede ver desde cualquier lugar?",
    answer:
      "Absolutamente. Con nuestra aplicación móvil puede acceder a sus cámaras desde cualquier parte del mundo, siempre que tenga conexión a internet. Compatible con iOS y Android.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer:
      "La mayoría de las instalaciones se completan en un solo día. Dependiendo de la cantidad de cámaras y la complejidad del cableado, puede tomar entre 3 a 8 horas.",
  },
  {
    question: "¿Qué garantía tienen los equipos?",
    answer:
      "Todos nuestros equipos incluyen garantía de fábrica de 1 a 2 años según el fabricante. Además, ofrecemos garantía en la instalación y soporte técnico continuo.",
  },
  {
    question: "¿Qué pasa si necesito agregar más cámaras después?",
    answer:
      "Nuestros sistemas son escalables. Puede comenzar con pocas cámaras y agregar más cuando lo necesite. Le asesoramos sobre la mejor configuración inicial pensando en futuras expansiones.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Resolvemos sus dudas
            </span>
          </div>
        </div>

        <SectionHeading
          title="Preguntas Frecuentes"
          subtitle="Todo lo que necesita saber antes de proteger su propiedad."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}

          {/* CTA inline - Más preguntas */}
          <div className="mt-8 p-6 bg-secondary/5 border border-secondary/20 rounded-2xl text-center">
            <p className="text-foreground font-medium mb-4">
              ¿Tiene más preguntas? Estamos para ayudarle
            </p>
            <Button
              variant="secondary"
              href={getWhatsAppUrl("Hola, tengo algunas preguntas sobre el servicio.")}
              external
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
