import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clínica Arturo Sánchez | Fisioterapia Avanzada en Campo de Criptana",
  description: "Fisioterapia avanzada en Campo de Criptana, Ciudad Real. Diagnóstico ecográfico, neuromodulación, terapia manual, punción seca y más. Pide tu cita: 641 024 494",
  keywords: [
    "fisioterapia",
    "fisioterapeuta",
    "Campo de Criptana",
    "Ciudad Real",
    "neuromodulación",
    "diagnóstico ecográfico",
    "terapia manual",
    "punción seca",
    "osteopatía",
    "fisioterapia deportiva",
    "Arturo Sánchez",
  ],
  authors: [{ name: "Arturo Sánchez" }],
  creator: "Román Tech",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://arturosanchezfisio.es",
    siteName: "Clínica Arturo Sánchez",
    title: "Clínica Arturo Sánchez | Fisioterapia Avanzada",
    description: "Fisioterapia avanzada en Campo de Criptana. Diagnóstico ecográfico, neuromodulación y tratamientos personalizados.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Arturo Sánchez - Fisioterapia Avanzada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Arturo Sánchez | Fisioterapia Avanzada",
    description: "Fisioterapia avanzada en Campo de Criptana. Diagnóstico ecográfico, neuromodulación y tratamientos personalizados.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arturosanchezfisio.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2dd4bf" />

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://arturosanchezfisio.es",
              name: "Clínica Arturo Sánchez",
              alternateName: "Arturo Sánchez Fisioterapia",
              description: "Fisioterapia avanzada en Campo de Criptana. Diagnóstico ecográfico, neuromodulación, terapia manual, punción seca y tratamientos personalizados.",
              url: "https://arturosanchezfisio.es",
              telephone: "+34641024494",
              image: "https://arturosanchezfisio.es/images/og-image.jpg",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C. Convento, 17",
                addressLocality: "Campo de Criptana",
                addressRegion: "Ciudad Real",
                postalCode: "13610",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.4035,
                longitude: -3.1247,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "39",
              },
              sameAs: [
                "https://www.instagram.com/sanchez.arturo98/",
              ],
              medicalSpecialty: [
                "Fisioterapia",
                "Fisioterapia Deportiva",
                "Neuromodulación",
                "Osteopatía",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
