"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Logo Arturo Sánchez"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-secondary leading-tight">Clínica Arturo Sánchez</p>
              <p className="text-xs text-secondary-500">Fisioterapia Avanzada</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+34641024494" className="flex items-center gap-2 text-secondary-600 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">641 024 494</span>
            </a>
            <Button
              size="sm"
              onClick={() => window.open("https://wa.me/34641024494?text=Hola,%20me%20gustaría%20pedir%20cita", "_blank")}
            >
              Pedir Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-secondary-100"
          >
            <Container>
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-secondary-600 hover:text-primary transition-colors text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-secondary-100 space-y-3">
                  <a href="tel:+34641024494" className="flex items-center gap-2 text-secondary-600">
                    <Phone className="w-4 h-4" />
                    <span>641 024 494</span>
                  </a>
                  <Button
                    className="w-full"
                    onClick={() => window.open("https://wa.me/34641024494?text=Hola,%20me%20gustaría%20pedir%20cita", "_blank")}
                  >
                    Pedir Cita por WhatsApp
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
