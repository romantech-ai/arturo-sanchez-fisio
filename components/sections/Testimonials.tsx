"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Irene Abengózar",
    text: "Muy buen profesional, y un trato humano increíble por parte de Arturo. A parte de quitarme el dolor me explicó todas las dudas sobre mi lesión de espalda. La clínica cuenta con instalaciones muy modernas.",
    rating: 5,
  },
  {
    name: "David Galán",
    text: "Mejor clínica de la zona. El trato profesional y cercano de Arturo hace que vuelvas sin ninguna duda. Equipamiento de 10 y facilidad de concertar cita acorde con tu necesidad.",
    rating: 5,
  },
  {
    name: "Fernando Juan",
    text: "Acudí a la clínica por un problema crónico en la lumbar y cada sesión que tengo en el centro es mejor. Un acierto seguro, Arturo y su equipo son grandes profesionales.",
    rating: 5,
  },
  {
    name: "Borja Soriano",
    text: "Arturo es un gran profesional, llevaba visitando fisios mucho tiempo por un problema de hombro y me ha conseguido recuperar. Ahora estoy entrenando de nuevo después de mucho tiempo. Muy recomendable!",
    rating: 5,
  },
  {
    name: "Helena Quintanar",
    text: "Muy profesional en su trabajo, te alivia las dolencias desde el minuto 1. Además se preocupa mucho por el estado de sus pacientes, hace seguimiento de cómo te vas encontrando días posteriores.",
    rating: 5,
  },
  {
    name: "Chechu",
    text: "Arturo es un profesional indiscutiblemente, me ayudó con una fascitis que no me dejaba casi andar. Además, me dejó varias recomendaciones de ejercicios que me ayudaron mucho. Totalmente recomendable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-secondary-50 to-white">
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
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Lo que dicen nuestros <span className="text-primary">pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-secondary-900">5.0</span>
            <span className="text-secondary-500">(+30 reseñas en Google)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary-100" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-secondary-600 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">Reseña de Google</p>
                </div>
                {/* Google icon */}
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Arturo+Sanchez+Fisioterapia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
          >
            Ver todas las reseñas en Google
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
