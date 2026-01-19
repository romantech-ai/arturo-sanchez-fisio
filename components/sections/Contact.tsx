"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "C. Convento, 17\n13610 Campo de Criptana\nCiudad Real",
    action: {
      label: "Ver en Google Maps",
      href: "https://www.google.com/maps/place/Arturo+Sanchez+Fisioterapia/@39.4035,-3.1247,17z",
    },
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "641 024 494",
    action: {
      label: "Llamar ahora",
      href: "tel:+34641024494",
    },
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Viernes: 9:00 - 21:00\nSábado: 9:00 - 14:00\nDomingo: Cerrado",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@sanchez.arturo98",
    action: {
      label: "Seguir en Instagram",
      href: "https://www.instagram.com/sanchez.arturo98/",
    },
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-secondary-50">
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
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            ¿Listo para empezar tu <span className="text-primary">recuperación</span>?
          </h2>
          <p className="text-lg text-secondary-600">
            Ponte en contacto con nosotros y pide tu cita. Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-secondary-600 text-sm whitespace-pre-line mb-3">
                  {info.content}
                </p>
                {info.action && (
                  <a
                    href={info.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:text-primary-600 transition-colors"
                  >
                    {info.action.label} →
                  </a>
                )}
              </div>
            ))}
          </motion.div>

          {/* Map & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.5!2d-3.1247!3d39.4035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI0JzEyLjYiTiAzwrAwNyc0OC45Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Pide tu cita ahora
              </h3>
              <p className="text-primary-100 mb-6">
                La forma más rápida de contactarnos es por WhatsApp.
                Te responderemos lo antes posible.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-primary hover:bg-secondary-50"
                onClick={() => window.open("https://wa.me/34641024494?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20clínica", "_blank")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
