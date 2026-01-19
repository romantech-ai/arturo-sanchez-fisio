"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import {
  Hand,
  Activity,
  Scan,
  Bone,
  Dumbbell,
  Zap,
  Target,
  HeartPulse,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Terapia Manual",
    description: "Técnicas manuales especializadas para el tratamiento de dolor y disfunciones musculoesqueléticas.",
  },
  {
    icon: Scan,
    title: "Diagnóstico Ecográfico",
    description: "Evaluación precisa de tejidos mediante ecografía para un diagnóstico certero y seguimiento del tratamiento.",
  },
  {
    icon: Bone,
    title: "Osteopatía",
    description: "Tratamiento integral del sistema musculoesquelético para restaurar el equilibrio y la movilidad del cuerpo.",
  },
  {
    icon: Activity,
    title: "Neuromodulación",
    description: "Técnica avanzada para el tratamiento del dolor y la recuperación funcional mediante estimulación nerviosa.",
  },
  {
    icon: Dumbbell,
    title: "Fisioterapia Deportiva",
    description: "Prevención, tratamiento y recuperación de lesiones deportivas para optimizar tu rendimiento.",
  },
  {
    icon: Zap,
    title: "EPI / EPTE",
    description: "Electrólisis Percutánea Intratisular para el tratamiento de tendinopatías y lesiones de tejidos blandos.",
  },
  {
    icon: Target,
    title: "Punción Seca",
    description: "Tratamiento de puntos gatillo miofasciales para aliviar el dolor muscular y mejorar la movilidad.",
  },
  {
    icon: HeartPulse,
    title: "Ejercicio Terapéutico",
    description: "Programas de ejercicio personalizados para tu rehabilitación activa y prevención de recaídas.",
  },
  {
    icon: Sparkles,
    title: "Electrolisis",
    description: "Técnica regenerativa para el tratamiento de lesiones tendinosas y musculares crónicas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary-50">
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
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Tratamientos especializados para tu{" "}
            <span className="text-primary">recuperación</span>
          </h2>
          <p className="text-lg text-secondary-600">
            Ofrecemos una amplia gama de servicios de fisioterapia avanzada,
            utilizando las últimas tecnologías y técnicas para tu bienestar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-600 mb-4">
            ¿No encuentras lo que buscas? Consúltanos sin compromiso.
          </p>
          <a
            href="https://wa.me/34641024494?text=Hola,%20tengo%20una%20consulta%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
          >
            Contactar por WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
