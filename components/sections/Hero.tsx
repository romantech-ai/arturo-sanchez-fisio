"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Star, MapPin, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40 -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>5.0 en Google (39 reseñas)</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Tu recuperación,{" "}
              <span className="text-primary">nuestra prioridad</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
              Fisioterapia avanzada con las últimas tecnologías. Diagnóstico ecográfico,
              neuromodulación y tratamientos personalizados para tu bienestar.
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary-600">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Campo de Criptana, Ciudad Real</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-600">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">L-V: 9:00 - 21:00</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/34641024494?text=Hola,%20me%20gustaría%20pedir%20cita", "_blank")}
              >
                Pedir Cita por WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Image container with border */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white">
                <Image
                  src="/images/arturo-hero.png"
                  alt="Arturo Sánchez - Fisioterapeuta"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-soft-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-900">500</p>
                    <p className="text-sm text-secondary-500">Pacientes tratados</p>
                  </div>
                </div>
              </motion.div>

              {/* Logo floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-soft"
              >
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-secondary">A</span>
                  <span className="text-2xl font-bold text-primary">S</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-secondary-400">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
