"use client";

import Container from "@/components/ui/Container";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";

const quickLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  "Fisioterapia Deportiva",
  "Neuromodulación",
  "Diagnóstico Ecográfico",
  "Terapia Manual",
  "Punción Seca",
  "Osteopatía",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">A</span>
              <span className="text-4xl font-bold text-primary">S</span>
            </div>
            <p className="text-lg font-semibold">Clínica Arturo Sánchez</p>
            <p className="text-secondary-400 text-sm">Fisioterapia Avanzada</p>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Tu bienestar es nuestra prioridad. Tratamientos personalizados con las últimas tecnologías en fisioterapia.
            </p>
            <a
              href="https://www.instagram.com/sanchez.arturo98/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-300 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@sanchez.arturo98</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-300 text-sm">
                  C. Convento, 17<br />
                  13610 Campo de Criptana<br />
                  Ciudad Real
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+34641024494" className="text-secondary-300 hover:text-primary transition-colors text-sm">
                  641 024 494
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-secondary-300 text-sm">
                  <p>L-V: 9:00 - 21:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                  <p>Dom: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Clínica Arturo Sánchez. Todos los derechos reservados.
          </p>
          <p className="text-secondary-500 text-sm">
            Diseñado por{" "}
            <a
              href="https://romantech.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-300 transition-colors font-medium"
            >
              Román Tech
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
