import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Bed, 
  UtensilsCrossed, 
  GlassWater, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  Dog, 
  Clock,
  Wine
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";
import GrupoOrganicoSection from "@/components/GrupoOrganicoSection";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import DiaDeMuertosModal from "@/components/DiaDeMuertosModal";
import { WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const SALONES_GALLERY = [
  {
    name: "Auditorio Pierre Damian",
    capacity: "Hasta 100 Personas",
    badge: "Auditorio & Salón Principal",
    image: "/images/nuestros-espacios/auditorio-pierre-damian/ccqs_auditorio_pierredamian03.png",
  },
  {
    name: "Salón Guadalupe",
    capacity: "Hasta 50 Personas",
    badge: "Luz Natural & Jardines",
    image: "/images/nuestros-espacios/salon-guadalupe/ccqs_salon_guadalupe01.png",
  },
  {
    name: "Salón Concilio",
    capacity: "Hasta 45 Personas",
    badge: "Conferencias & Simposios",
    image: "/images/nuestros-espacios/salon-concilio/ccqs_salon_concilio01.png",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-cantera-50">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal-950 text-cantera-50 overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Background Image with Cinematic Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nuestros-espacios/jardines/ccqs_jardines01.png"
            alt="Centro Cultural Quinta Soledad - Casona Porfiriana y Jardines en Tlalpan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center py-16 sm:py-20 flex flex-col items-center">
          {/* Main Title - Imposing Cultural Heritage Hero */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel tracking-wider md:tracking-widest text-cantera-50 leading-tight uppercase max-w-5xl 2xl:max-w-6xl drop-shadow-md font-medium">
            Así se siente la historia, <br className="hidden sm:inline" />
            <span className="text-gold-400 font-serif italic normal-case tracking-normal block mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal drop-shadow-sm">
              Así se siente Centro Cultural Quinta Soledad.
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-cantera-200 font-sans font-light max-w-3xl leading-relaxed">
            Donde la historia, la arquitectura neorrenacentista y la gastronomía se unen para ofrecer una experiencia de buen vivir en el corazón de Tlalpan.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-cinzel font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-500/20 active:scale-[0.98]"
              aria-label="Reservar en Centro Cultural Quinta Soledad"
            >
              <span>Reservar</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <Link
              href="/quienes-somos"
              className="btn-luxury w-full sm:w-auto px-6 py-3 text-[11px] tracking-widest border-gold-500/50"
            >
              <span>Explorar el Lugar</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MANDATED: UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE (INMEDIATAMENTE DESPUÉS DEL HERO) */}
      <GrupoOrganicoSection />

      {/* 3. CULTURAL MANIFESTO & HERITAGE HIGHLIGHT */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1536px] mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-[11px] uppercase tracking-widest text-gold-700 font-cinzel font-semibold">
            Un Legado Centenario
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-snug">
            El único complejo cultural y hotel en el corazón de Tlalpan
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-4" />
          <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed font-sans font-light">
            Construida en 1870, Quinta Soledad fue escenario de tertulias diplomáticas, celebraciones porfirianas del presidente Porfirio Díaz y encuentros maristas que forjaron su carácter. Hoy, esta casona te invita a disfrutar el arte del buen vivir entre jardines frondosos, más de 12 salones patrimoniales y gastronomía de autor.
          </p>
        </div>

        {/* Galería Histórica: La Virgen y Salón Emblemático */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Foto 1: La Virgen en la Casona */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-md">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/arquitectura-y-detalles/ccqs_arquitectura_detalles13.jpeg"
                alt="Escultura de la Virgen frente a los arcos iluminados de Quinta Soledad"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Foto 2: Salón Histórico */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-md">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/nuestros-espacios/salon-guadalupe/ccqs_salon_guadalupe05.png"
                alt="Salón histórico de Centro Cultural Quinta Soledad con vitrales y candiles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Experience Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-cantera-100/60 border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-cinzel font-semibold text-charcoal-900 tracking-wider uppercase">
                Historia & Arquitectura
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                Atribuida al célebre arquitecto Antonio Rivas Mercado. Conserva cantera original, capilla consagrada, biblioteca y el histórico Pasillo de los Forjadores.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/nuestra-historia"
                className="inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-gold-700 group-hover:text-gold-600 font-semibold uppercase"
              >
                <span>Conoce la Historia</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-cantera-100/60 border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
                <Bed className="w-5 h-5" />
              </div>
              <h3 className="text-base font-cinzel font-semibold text-charcoal-900 tracking-wider uppercase">
                Hospedaje de Autor
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                Dos conceptos de hospedaje pensados para cada viajero: el arte sensorial de <strong>Utopía Hotel Boutique</strong> y el confort práctico de <strong>Hotel Express Hermitage</strong>.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/hoteles"
                className="inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-gold-700 group-hover:text-gold-600 font-semibold uppercase"
              >
                <span>Ver Habitaciones</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-cantera-100/60 border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="text-base font-cinzel font-semibold text-charcoal-900 tracking-wider uppercase">
                Gastronomía & Mixología
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                Restaurante Capitular, Restaurante La Mal Querida, el speakeasy Bar Alpestre, panadería Los Establos y Buffet de Fin de Semana.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/nuestra-gastronomia"
                className="inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-gold-700 group-hover:text-gold-600 font-semibold uppercase"
              >
                <span>Descubre Sabores</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOTELES BOUTIQUE SHOWCASE */}
      <section className="py-16 sm:py-20 bg-charcoal-950 text-cantera-50 border-t border-gold-500/20">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-400 font-semibold">
                Hospedaje Boutique
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-cantera-50">
                Utopía & Hotel Express Hermitage
              </h2>
            </div>
            <Link
              href="/hoteles"
              className="text-xs font-cinzel tracking-widest text-gold-400 hover:text-gold-300 underline underline-offset-4"
            >
              Ver todas las habitaciones ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Utopia Card */}
            <div className="bg-charcoal-900 border border-gold-500/30 rounded-xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/habitaciones/utopia/ccqs_utopia17.png"
                    alt="Utopía Hotel Boutique"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300">
                    Experiencia Signature
                  </div>
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-serif text-cantera-50">
                      Utopía Hotel Boutique
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-serif font-bold text-gold-400">$1,392.00</span>
                      <span className="text-[10px] text-cantera-300 font-sans block">MXN / noche</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-cantera-300 leading-relaxed font-light">
                    Un refugio íntimo donde la calma, el arte y la historia se encuentran. Habitaciones con alma propia, batas exclusivas en Utopía, Smart TV 32&quot; y desayuno continental incluido (plancha y secadora disponibles en recepción).
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex gap-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
                >
                  <span>Reservar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/hoteles#utopia"
                  className="btn-luxury px-4 py-2.5 text-[10px] tracking-wider border-cantera-300/30"
                >
                  Detalles
                </Link>
              </div>
            </div>

            {/* Hermitage Card */}
            <div className="bg-charcoal-900 border border-gold-500/30 rounded-xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/habitaciones/hermitage-doble/ccq_shermitage-doble01.jpg"
                    alt="Hotel Express Hermitage - Habitación Doble"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300">
                    Confort & Hospitales Tlalpan
                  </div>
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-serif text-cantera-50">
                      Hotel Express Hermitage
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-gold-300 font-cinzel block uppercase tracking-wider">Desde $928.00</span>
                      <span className="text-[10px] text-cantera-300 font-sans block">MXN / noche</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-cantera-300 leading-relaxed font-light">
                    Habitaciones Queen ($928.00) y KING ($1,044.00) por noche. Baño privado completo, room service y desayuno continental (plancha y secadora se piden en recepción). Tarifas preferenciales para zona de hospitales de Tlalpan.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex gap-3">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
                >
                  <span>Reservar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <WhatsAppButton
                  message={WA_MESSAGES.hospitales}
                  text="Tarifa Hospitales"
                  variant="light"
                  className="px-3 text-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GASTRONOMÍA & MIXOLOGÍA SHOWCASE (INCLUYE LA MAL QUERIDA) */}
      <section className="py-20 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-700 font-semibold">
            Sabores & Coctelería de Autor
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
            Gastronomía & Mixología
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-charcoal-600 text-xs sm:text-sm font-light">
            Cocina tradicional y contemporánea, speakeasy entre muros centenarios y panadería artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Capitular */}
          <div className="bg-cantera-100/70 border border-gold-500/20 rounded-xl p-5 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-md group">
            <div className="space-y-3">
              <div className="relative h-40 w-full rounded-lg overflow-hidden photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/restaurante-capitular/ccqs_restaurante-capitular02.png"
                  alt="Espacio y Comedor de Restaurante Capitular"
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                  Cocina Tradicional Mexicana
                </span>
                <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
                  Restaurante Capitular
                </h3>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Ubicado en un salón de origen porfiriano. Conserva la memoria de los encuentros maristas e invita a comer con calma, agradecer lo recibido y disfrutar de la comunidad. Compartir la mesa también es una forma de buen vivir.
              </p>
            </div>
            <div className="pt-4">
              <WhatsAppButton
                message={WA_MESSAGES.capitular}
                text="Reservar Mesa"
                variant="light"
                className="w-full text-xs"
              />
            </div>
          </div>

          {/* Restaurante La Mal Querida */}
          <div className="bg-cantera-100/70 border border-gold-500/20 rounded-xl p-5 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-md group">
            <div className="space-y-3">
              <div className="relative h-40 w-full rounded-lg overflow-hidden photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_platillos_destacados11.jpg"
                  alt="Restaurante La Mal Querida"
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                  Cocina de Barrio
                </span>
                <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
                  Restaurante La Mal Querida
                </h3>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Restaurante sencillo, cálido y sin pretensiones dentro de la cafetería de Quinta Soledad. Sabores de siempre: recetas mexicanas, ingredientes familiares, comida honesta y hospitalidad genuina.
              </p>
            </div>
            <div className="pt-4">
              <WhatsAppButton
                message={WA_MESSAGES.laMalQuerida}
                text="Reservar La Mal Querida"
                variant="light"
                className="w-full text-xs"
              />
            </div>
          </div>

          {/* Bar Alpestre */}
          <div className="bg-cantera-100/70 border border-gold-500/20 rounded-xl p-5 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-md group">
            <div className="space-y-3">
              <div className="relative h-40 w-full rounded-lg overflow-hidden photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/bar-alpestre/ccqs_bar_alpestre01.png"
                  alt="Bar Alpestre Speakeasy"
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                  Mixología Histórica
                </span>
                <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
                  Bar Alpestre
                </h3>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Inspirado en la antigua tradición marista del destilado del Hermitage a base de hierbas aromáticas. Hierbas, frutos, especias y destilados se encuentran para crear sabores que evocan naturaleza, memoria y hospitalidad.
              </p>
            </div>
            <div className="pt-4">
              <WhatsAppButton
                message={WA_MESSAGES.alpestre}
                text="Reservar Alpestre"
                variant="light"
                className="w-full text-xs"
              />
            </div>
          </div>

          {/* Cafetería Los Establos */}
          <div className="bg-cantera-100/70 border border-gold-500/20 rounded-xl p-5 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-md group">
            <div className="space-y-3">
              <div className="relative h-40 w-full rounded-lg overflow-hidden photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/cafeteria-los-establos/ccqs_cafeteria_losestablos01.png"
                  alt="Cafetería Los Establos"
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                  Café y Tradición
                </span>
                <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
                  Cafetería Los Establos
                </h3>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Nace en la parte más sencilla y auténtica de la hacienda. Un lugar sin pretensiones para hacer una pausa, con aroma a café recién preparado, pan sobre la mesa y sabores de pueblo, memoria y origen. Espacio Pet Friendly.
              </p>
            </div>
            <div className="pt-4">
              <WhatsAppButton
                message={WA_MESSAGES.losEstablos}
                text="Reservar Mesa"
                variant="light"
                className="w-full text-xs"
              />
            </div>
          </div>

          {/* Buffet de Fin de Semana */}
          <div className="bg-cantera-100/70 border border-gold-500/20 rounded-xl p-5 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-md group sm:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <div className="relative h-40 w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_platillos_destacados15.jpg"
                  alt="Platillos Tradicionales del Gran Buffet de Fin de Semana"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-cinzel font-semibold text-charcoal-900">
                Gran Buffet de Fin de Semana (Sábados y Domingos 9:00 am - 5:00 pm)
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Cocina mexicana en vivo en los jardines de Quinta Soledad: guisados, antojitos tradicionales, cortes y postres en un ambiente familiar al aire libre.
              </p>
            </div>
            <div className="pt-4 flex gap-3">
              <WhatsAppButton
                message={WA_MESSAGES.buffet}
                text="Reservar Buffet por WhatsApp"
                variant="gold"
                className="flex-1 text-xs"
              />
              <Link
                href="/nuestra-gastronomia"
                className="btn-luxury px-4 py-2.5 text-[10px] tracking-wider"
              >
                Ver Menús
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MÁS DE 12 SALONES HISTÓRICOS & JARDINES */}
      <section className="py-20 bg-cantera-200/40 border-t border-b border-gold-500/20">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header & Descripción de Salones */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
            <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-700 font-semibold">
              Celebraciones, Convenciones & Eventos Corporativos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-900">
              Más de 12 Salones Históricos & Jardines
            </h2>
            <div className="gold-divider max-w-xs mx-auto my-3" />
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              Resguardados en una señorial casona de finales del siglo XIX atribuida al célebre arquitecto Antonio Rivas Mercado, Quinta Soledad alberga más de 12 salones independientes con muros de cantera original, techos altos de madera noble y vistas a exuberantes jardines centenarios. Diseñados para adaptarse con distinción a magnas convenciones empresariales, congresos de alta dirección, simposios académicos, juntas de consejo, aniversarios y bodas de ensueño, todos los espacios cuentan con versatilidad de montajes, soporte audiovisual y alta gastronomía mexicana.
            </p>
          </div>

          {/* Galería de 3 Salones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {SALONES_GALLERY.map((salon) => (
              <div
                key={salon.name}
                className="group relative rounded-xl overflow-hidden bg-charcoal-900 border border-gold-500/30 hover:border-gold-500/70 shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={salon.image}
                    alt={salon.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Badge de Capacidad */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-cinzel tracking-wider px-2.5 py-1 bg-charcoal-950/85 backdrop-blur-md text-gold-300 border border-gold-500/30 rounded-md uppercase font-semibold">
                      {salon.capacity}
                    </span>
                  </div>

                  {/* Detalle del Salón */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 space-y-1 text-cantera-50">
                    <h3 className="text-base sm:text-lg font-cinzel font-semibold text-cantera-100 group-hover:text-gold-300 transition-colors leading-tight">
                      {salon.name}
                    </h3>
                    <p className="text-xs text-cantera-300 font-sans tracking-wide">
                      {salon.badge}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón para Ver Todos los Salones */}
          <div className="text-center pt-2">
            <Link
              href="/eventos"
              className="btn-luxury inline-flex items-center gap-2.5 px-8 py-3.5 text-xs tracking-widest uppercase font-cinzel font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <span>Ver Todos los Salones & Espacios</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ORIGEN CENTRO HOLISTICO Y SPA */}
      <OrigenSpaSection />

      {/* 8. UBICACIÓN & HORARIOS */}
      <section className="py-16 bg-cantera-50 border-t border-cantera-200">
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cantera-100/80 p-6 rounded-xl border border-gold-500/20 space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-cinzel font-semibold text-charcoal-900">
                Ubicación
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed font-light">
                Calle Moneda 15, Tlalpan Centro I, CDMX. Cerca de Insurgentes Sur y Metrobús Fuentes Brotantes.
              </p>
            </div>

            <div className="bg-cantera-100/80 p-6 rounded-xl border border-gold-500/20 space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
                <Dog className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-cinzel font-semibold text-charcoal-900">
                Pet Friendly
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed font-light">
                Tu mascota es bienvenida en la Rotonda de Capitular y en la Cafetería y Vivero Los Establos.
              </p>
            </div>

            <div className="bg-cantera-100/80 p-6 rounded-xl border border-gold-500/20 space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-cinzel font-semibold text-charcoal-900">
                Horarios
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed font-light">
                Dom a Jue: 9:00 am – 8:00 pm.<br />
                Vie y Sáb: 9:00 am – 10:00 pm.<br />
                Seguridad 24/7 y estacionamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Festivo Día de Muertos 2026 */}
      <DiaDeMuertosModal />
    </div>
  );
}
