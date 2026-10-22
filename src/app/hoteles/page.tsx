import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Tv, Coffee, ShieldCheck, Heart, Sparkles, Check, Info, Maximize2, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoteles Boutique en Tlalpan | Utopía & Hotel Express Hermitage",
  description: "Descubre Utopía Hotel Boutique y Hotel Express Hermitage en Centro Cultural Quinta Soledad. Hospedaje con encanto histórico en Tlalpan, CDMX con tarifas preferenciales para zona de hospitales.",
};

export default function HotelesPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/habitaciones/utopia/ccqs_utopia17.png"
            alt="Utopía Hotel Boutique - Casona Quinta Soledad Tlalpan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Hospitalidad con Alma en Tlalpan
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
            Nuestros Hoteles Boutique
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Un refugio para quienes buscan más que un lugar donde dormir: un espacio donde la calma, el arte y la historia se encuentran para ofrecer una experiencia única.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 space-y-24">
        {/* HOTEL 1: UTOPÍA */}
        <section id="utopia" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Hotel Boutique de Arte & Historia
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Utopía Hotel Boutique
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Descanso y arte entre historia · Un lugar inexistente hecho realidad
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                En el corazón de Tlalpan, Utopía Hotel Boutique es un refugio íntimo para quienes buscan desconectar de la prisa cotidiana. Cada habitación tiene alma propia, un delicado equilibrio entre diseño contemporáneo y el encanto centenario de nuestra casona porfiriana.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Perfecta para quienes disfrutan de los pequeños placeres: un café en el jardín, un vino al atardecer o una noche tranquila entre libros y conversación.
              </p>

              {/* Amenidades */}
              <div className="bg-cantera-100 p-5 rounded-2xl border border-gold-500/20 space-y-3">
                <h3 className="text-[11px] font-cinzel tracking-widest text-charcoal-900 uppercase font-semibold">
                  Amenidades Incluidas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700 font-sans">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Desayuno continental incluido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Smart TV 32 pulgadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Batas de baño (exclusivo Utopía) y toallas premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Plancha y secadora (se piden en recepción)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Sala de estar y jardines centenarios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Seguridad privada 24/7 y estacionamiento</span>
                  </div>
                </div>
              </div>

              {/* Botón Reservar Easy-Rez */}
              <div className="pt-2">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
                >
                  <span>Reservar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {/* Imagen Principal Utopía */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/habitaciones/utopia/ccqs_utopia17.png"
                  alt="Habitación Signature Utopía Hotel Boutique con obra de Marilyn Monroe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30">
                  Suite Signature
                </div>
              </div>

              {/* Mosaico de 4 Fotos Utopía */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/utopia/ccqs_utopia01.png"
                    alt="Habitación Utopía con cabecera de madera noble"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/utopia/ccqs_utopia07.png"
                    alt="Altos techos y serenidad porfiriana en Utopía"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/utopia/ccqs_utopia10.png"
                    alt="Suite espaciosa con escritorio en Utopía"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/utopia/ccqs_utopia18.png"
                    alt="Tendido de cama y lencería fina en Utopía"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOTEL 2: HERMITAGE */}
        <section id="hermitage" className="scroll-mt-24 pt-8 border-t border-cantera-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              {/* Imagen Principal Hermitage */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/habitaciones/hermitage-doble/ccq_shermitage-doble01.jpg"
                  alt="Habitación Doble Hotel Express Hermitage con dos camas matrimoniales"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30">
                  Habitación Doble
                </div>
              </div>

              {/* Mosaico de 4 Fotos Hermitage (Doble, Sencilla y Baño) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/hermitage-doble/ccq_shermitage-doble03.png"
                    alt="Perspectiva amplia de habitación doble Hermitage"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/hermitage-sencilla/ccqs_hermitage_sencilla02.jpg"
                    alt="Habitación sencilla Hermitage con cama individual"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/hermitage-sencilla/ccqs_hermitage_sencilla04.jpg"
                    alt="Espacio funcional y mesa de noche en habitación sencilla"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-gold-500/20 group photo-zoomable">
                  <Image
                    src="/images/habitaciones/hermitage-doble/banohermitage_01.jpg"
                    alt="Baño privado completo con ducha en Hotel Express Hermitage"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Bed className="w-3.5 h-3.5 text-gold-600" />
                Confort & Práctica Ubicación
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Hotel Express Hermitage
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Confort y sencillez en el corazón de Tlalpan
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                La opción ideal para quienes buscan una estancia práctica, cómoda y accesible sin renunciar al encanto de un recinto con alma. Nuestras habitaciones seguras y funcionales cuentan con las amenidades esenciales para un descanso reparador.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Ya sea que viajes por placer, trabajo o para acompañar a un ser querido en la zona de hospitales de Tlalpan, aquí encontrarás un espacio tranquilo que te hará sentir en calma.
              </p>

              {/* Amenidades Hermitage */}
              <div className="bg-cantera-100 p-5 rounded-2xl border border-gold-500/20 space-y-3">
                <h3 className="text-[11px] font-cinzel tracking-widest text-charcoal-900 uppercase font-semibold">
                  Amenidades & Opciones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700 font-sans">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Habitaciones Sencillas y Dobles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Baño privado completo y toallas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Pantalla 32 pulgadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Desayuno continental incluido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Plancha y secadora (se piden en recepción)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Room service disponible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Estacionamiento sin costo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Seguridad privada 24/7</span>
                  </div>
                </div>
              </div>

              {/* Botón Reservar Easy-Rez */}
              <div className="pt-2">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
                >
                  <span>Reservar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ZONA DE HOSPITALES TARIFAS ESPECIALES */}
        <section className="bg-charcoal-950 text-cantera-50 rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-cinzel tracking-widest uppercase">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              Compromiso con Nuestra Comunidad
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-cantera-50">
              Tarifas Preferenciales: Zona de Hospitales de Tlalpan
            </h3>
            <p className="text-xs sm:text-sm text-cantera-300 font-sans leading-relaxed font-light">
              Entendemos la importancia de contar con un refugio tranquilo, limpio y seguro al acompañar a familiares y seres queridos durante consultas o estancias médicas en el complejo de hospitales del sur (INCMNSZ, Cardiología, Cancerología, GEA González, etc.).
            </p>
            <p className="text-xs sm:text-sm text-gold-300 font-sans">
              Contamos con precios especiales para largas estancias y acompañantes médicos, con estacionamiento sin costo y seguridad las 24 horas.
            </p>
            <div className="pt-3">
              <WhatsAppButton
                message={WA_MESSAGES.hospitales}
                text="Solicitar Tarifa Especial Hospitalaria"
                variant="gold"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
