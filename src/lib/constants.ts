export const WHATSAPP_NUMBER = "50660140366";
export const WHATSAPP_MESSAGE = "Hola, me interesa obtener información sobre cámaras de seguridad.";

export const getWhatsAppUrl = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const PHONE_NUMBER = "+506 6014 0366";
export const EMAIL = "info@cibershieldcr.com";

export const NAV_LINKS = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo Funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
] as const;
