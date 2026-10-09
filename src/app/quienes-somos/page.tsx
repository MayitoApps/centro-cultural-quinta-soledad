import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Dog, MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | Centro Cultural Quinta Soledad",
  description: "Conoce el manifiesto, ubicación y espacios Pet Friendly de Centro Cultural Quinta Soledad en Tlalpan Centro, Ciudad de México.",
};

export default function QuienesSomosPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/entradas/ccqs_entradacafeteria01.png"
            alt="Entrada a Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Identidad & Vocación Cultural
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-cantera-50 tracking-tight leading-tight">
            ¿Quiénes Somos?
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Historia viva. Arquitectura con alma. Gastronomía que abraza el tiempo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Manifiesto */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
              Nuestra Esencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
              Un Refugio Cultural en el Corazón de Tlalpan
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
              Ubicado sobre la calle Moneda 15, en el corazón del centro histórico de Tlalpan, Centro Cultural Quinta Soledad es un recinto donde el tiempo transcurre sin prisa. Somos un centro cultural, hotel boutique y polo gastronómico dedicado a crear experiencias que conectan a las personas con el patrimonio y el arte del buen vivir.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
              Formamos parte de <strong>Grupo Orgánico Hoteles Boutique</strong>, un consorcio enfocado en rescatar destinos extraordinarios con autenticidad, respeto a la naturaleza e identidad cultural.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                message={WA_MESSAGES.general}
                text="Contactar Concierge por WhatsApp"
                variant="gold"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group">
              <Image
                src="/images/arquitectura-y-detalles/ccqs_arquitectura_detalles06.jpg"
                alt="Detalles de arquitectura en Quinta Soledad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Pet Friendly */}
        <section className="bg-cantera-100/80 p-6 sm:p-10 rounded-3xl border border-gold-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
              <Dog className="w-3.5 h-3.5 text-gold-700" />
              Tu Mejor Amigo es Bienvenido
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900">
              Espacios Pet Friendly con Alma
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
              En Centro Cultural Quinta Soledad sabemos que tu mascota es parte fundamental de tu familia. Por eso abrimos nuestras puertas para que disfruten juntos de una tarde de café o un paseo en nuestros jardines.
            </p>
            <div className="p-3 bg-cantera-50 rounded-xl border border-gold-500/20 text-xs text-charcoal-800 font-cinzel tracking-wider">
              Áreas Pet Friendly Habilitadas: <strong>Rotonda de Capitular</strong> y <strong>Cafetería y Vivero Los Establos</strong>.
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-gold-500/20">
              <Image
                src="/images/nuestros-espacios/cafeteria-los-establos/ccqs_cafeteria_losestablos01.png"
                alt="Cafetería y Jardines Pet Friendly Los Establos"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Conectividad & Accesibilidad Vial */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cantera-100/70 p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-3">
            <div className="w-9 h-9 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
              <Navigation className="w-4 h-4" />
            </div>
            <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
              Accesibilidad & Conexión Vial
            </h3>
            <p className="text-xs text-charcoal-700 leading-relaxed font-sans font-light">
              Excelente conexión vehicular rápida con las arterias más importantes del sur de la CDMX: <strong>Insurgentes Sur, Periférico Sur, Viaducto Tlalpan y Calzada de Tlalpan</strong>. Acceso cómodo tanto desde el centro y poniente de la ciudad como desde la salida a Cuernavaca.
            </p>
          </div>

          <div className="bg-cantera-100/70 p-6 sm:p-8 rounded-2xl border border-gold-500/20 space-y-3">
            <div className="w-9 h-9 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
              Transporte Público Inmediato
            </h3>
            <p className="text-xs text-charcoal-700 leading-relaxed font-sans font-light">
              Muévete con total facilidad gracias a nuestra cercanía a las estaciones de <strong>Metrobús Línea 1: Fuentes Brotantes y Ayuntamiento</strong>, a pocas cuadras del kiosco y la plaza principal de Tlalpan.
            </p>
          </div>
        </section>
      </div>

      {/* Origen Spa Section */}
      <OrigenSpaSection />
    </div>
  );
}
