"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito cita previa?",
    answer: "Sí, trabajamos con cita previa para poder ofrecerte una atención personalizada y dedicarte el tiempo necesario. Puedes pedir cita llamando al 641 024 494 o por WhatsApp.",
  },
  {
    question: "¿Cuánto dura una sesión de fisioterapia?",
    answer: "Las sesiones tienen una duración aproximada de 45-60 minutos, dependiendo del tratamiento. La primera consulta suele ser algo más larga ya que incluye una valoración completa.",
  },
  {
    question: "¿Qué debo llevar a mi primera cita?",
    answer: "Te recomendamos traer ropa cómoda y, si tienes, pruebas médicas relacionadas con tu lesión (radiografías, resonancias, informes médicos). Esto nos ayudará a hacer un diagnóstico más preciso.",
  },
  {
    question: "¿Trabajáis con seguros médicos o mutuas?",
    answer: "Actualmente trabajamos de forma privada. Te facilitaremos factura para que puedas solicitar el reembolso a tu compañía de seguros si tu póliza lo contempla.",
  },
  {
    question: "¿Qué es el diagnóstico ecográfico?",
    answer: "Es una técnica que nos permite visualizar en tiempo real el estado de tus tejidos (músculos, tendones, ligamentos). Nos ayuda a hacer un diagnóstico preciso y a ver la evolución del tratamiento.",
  },
  {
    question: "¿Qué es la neuromodulación?",
    answer: "Es una técnica avanzada que utiliza corrientes eléctricas específicas para modular la actividad del sistema nervioso, muy efectiva para el tratamiento del dolor crónico y la recuperación funcional.",
  },
  {
    question: "¿Hay parking cerca de la clínica?",
    answer: "Sí, disponemos de aparcamiento adaptado para personas con movilidad reducida y hay zonas de aparcamiento público muy cerca de la clínica.",
  },
  {
    question: "¿La clínica es accesible?",
    answer: "Sí, nuestra clínica cuenta con acceso para sillas de ruedas, parking adaptado y aseos adaptados para personas con movilidad reducida.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-secondary-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-secondary-900 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-secondary-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <Container size="md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-lg text-secondary-600">
            Resolvemos tus dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary-50 rounded-3xl p-6 sm:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-secondary-600 mb-4">
            ¿Tienes más preguntas? No dudes en contactarnos
          </p>
          <a
            href="https://wa.me/34641024494?text=Hola,%20tengo%20una%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
          >
            Pregúntanos por WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
