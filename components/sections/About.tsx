"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { GraduationCap, Award, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Pacientes" },
  { icon: Award, value: "5.0", label: "Valoración" },
  { icon: GraduationCap, value: "Graduado", label: "en Fisioterapia" },
  { icon: Heart, value: "100%", label: "Compromiso" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/arturo-about.png"
                alt="Arturo Sánchez en la clínica"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/30 to-transparent" />
            </div>

            {/* Floating treatment images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white"
            >
              <Image
                src="/images/arturo-tratando1.jpg"
                alt="Arturo tratando paciente"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-8 -right-4 w-28 h-28 rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white"
            >
              <Image
                src="/images/arturo-tratando2.jpg"
                alt="Tratamiento de fisioterapia"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-4 right-20 bg-white rounded-2xl p-4 shadow-soft-xl"
            >
              <div className="grid grid-cols-4 gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-bold text-secondary-900">{stat.value}</p>
                    <p className="text-[10px] text-secondary-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Mí
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Arturo Sánchez
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              Fisioterapeuta y Entrenador Personal
            </p>

            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                Soy Arturo Sánchez, fisioterapeuta graduado con una pasión por ayudar a las personas
                a recuperar su bienestar y calidad de vida. Mi enfoque combina las técnicas más
                avanzadas de fisioterapia con un trato cercano y personalizado.
              </p>
              <p>
                En mi clínica de Campo de Criptana, utilizo tecnología de vanguardia como el
                diagnóstico ecográfico y la neuromodulación para ofrecer tratamientos precisos
                y efectivos. Cada paciente es único, y por eso diseño planes de tratamiento
                personalizados adaptados a sus necesidades específicas.
              </p>
              <p>
                Mi formación continua y mi compromiso con la excelencia me permiten ofrecer
                los mejores resultados. Tu recuperación es mi prioridad.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Trato personalizado</p>
                  <p className="text-sm text-secondary-500">Cada paciente es único</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Tecnología avanzada</p>
                  <p className="text-sm text-secondary-500">Equipamiento moderno</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Formación continua</p>
                  <p className="text-sm text-secondary-500">Siempre actualizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">Resultados probados</p>
                  <p className="text-sm text-secondary-500">+500 pacientes satisfechos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
