import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cibershieldcr.com"),
  title: "CiberShield CR | Cámaras de Seguridad en Costa Rica",
  description:
    "Proteja su hogar y negocio en Costa Rica con cámaras de seguridad profesionales. Monitoreo 24/7 desde su celular, instalación rápida y garantía incluida. Solicite su diagnóstico gratis.",
  keywords: [
    "cámaras de seguridad Costa Rica",
    "instalación de cámaras",
    "monitoreo desde celular",
    "CCTV Costa Rica",
    "cámaras para hogar",
    "cámaras para negocio",
    "seguridad residencial",
    "videovigilancia",
    "cámaras HD",
    "sistema de seguridad",
  ],
  authors: [{ name: "CiberShield CR" }],
  creator: "CiberShield CR",
  publisher: "CiberShield CR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://cibershieldcr.com",
    siteName: "CiberShield CR",
    title: "CiberShield CR | Cámaras de Seguridad Profesionales",
    description:
      "Proteja su hogar y negocio con cámaras de seguridad inteligentes. Monitoreo 24/7 desde su celular. Instalación profesional en Costa Rica.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CiberShield CR - Cámaras de Seguridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CiberShield CR | Cámaras de Seguridad",
    description:
      "Proteja su hogar y negocio con cámaras de seguridad profesionales en Costa Rica.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cibershieldcr.com",
  },
  category: "Security Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
