"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-br from-primary to-secondary"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Shield
                className={`w-5 h-5 transition-colors ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              />
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Sentinel Security
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href={getWhatsAppUrl()}
              external
              variant={isScrolled ? "primary" : "secondary"}
              size="sm"
            >
              <Phone className="w-4 h-4" />
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-card"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  href={getWhatsAppUrl()}
                  external
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <Phone className="w-4 h-4" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
