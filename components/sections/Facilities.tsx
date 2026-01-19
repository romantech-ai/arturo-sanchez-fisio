"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Monitor, Armchair, Accessibility, Sparkles } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Ecógrafo de Alta Gama",
    description: "Diagnóstico ecográfico preciso para evaluaciones certeras",
  },
  {
    icon: Armchair,
    title: "Camillas Profesionales",
    description: "Equipamiento ergonómico para tu máximo confort",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad Total",
    description: "Acceso para sillas de ruedas y parking adaptado",
  },
  {
    icon: Sparkles,
    title: "Ambiente Moderno",
    description: "Diseño contemporáneo para una experiencia agradable",
  },
];

export default function Facilities() {
  return (
    <section id="instalaciones" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestras Instalaciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Tecnología de <span className="text-primary">vanguardia</span>
          </h2>
          <p className="text-lg text-secondary-600">
            Nuestra clínica cuenta con equipamiento de última generación para ofrecerte
            los mejores tratamientos en un ambiente moderno y acogedor.
          </p>
        </motion.div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/instalaciones-1.jpg"
              alt="Sala de tratamiento con ecógrafo"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/instalaciones-2.jpg"
              alt="Equipamiento de fisioterapia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Exterior image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/fachada.png"
              alt="Fachada de la Clínica Arturo Sánchez"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl font-semibold mb-1">Clínica Arturo Sánchez</p>
              <p className="text-white/80">C. Convento, 17 - Campo de Criptana, Ciudad Real</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
