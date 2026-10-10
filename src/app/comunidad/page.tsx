import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Landmark, Compass, MapPin, Store, Building, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidad & Guía Cultural de Tlalpan | Centro Cultural Quinta Soledad",
  description: "Descubre la riqueza cultural del centro histórico de Tlalpan: San Agustín de las Cuevas, Mercado de La Paz, Museo de Historia y Zona Arqueológica de Cuicuilco.",
};

const SITIOS_TLALPAN = [
  {
    title: "Iglesia de San Agustín de las Cuevas",
    periodo: "Siglo XVII",
    icon: Landmark,
    desc: "Este emblemático complejo religioso se construyó en el siglo XVII y fue el núcleo en torno al cual se trazó la fisonomía de Tlalpan. Hoy podemos admirar su templo principal, el convento, tres capillas, baptisterio, sacristía y un claustro colonial de gran valor histórico.",
  },
  {
    title: "Mercado de Tlalpan (Mercado de La Paz)",
    periodo: "1900 · Época Porfiriana",
    icon: Store,
    desc: "Ubicado a espaldas de la alcaldía y de la Plaza de la Constitución, el Mercado de La Paz es uno de los mercados más antiguos y bellos de la Ciudad de México. Combina identidad culinaria, herrería porfiriana y el encanto provinciano que distingue a esta zona del sur.",
  },
  {
    title: "Museo de Historia de Tlalpan",
    periodo: "Centro Histórico",
    icon: Building,
    desc: "Un recinto dedicado a salvaguardar y exhibir la memoria histórica y cultural de una de las alcaldías más antiguas de la capital. Alberga colecciones fotográficas, documentos inéditos y exposiciones artísticas temporales.",
  },
  {
    title: "Zona Arqueológica de Cuicuilco",
    periodo: "800 a.C. · Mesoamérica",
    icon: Compass,
    desc: "Uno de los asentamientos urbanos más antiguos de la cuenca de México. Famoso por su gran pirámide circular y su museo de sitio que ilustra el florecimiento previo a la erupción del volcán Xitle, punto de partida de la historia sureña.",
  },
];

export default function ComunidadPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arquitectura-y-detalles/ccqs_arquitectura_detalles13.jpeg"
            alt="Comunidad y Centro Histórico de Tlalpan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Identidad, Barrio & Tradición
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
            Nuestra Comunidad: Tlalpan
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Celebramos y apoyamos la riqueza cultural del centro histórico de Tlalpan, promoviendo el encuentro con su historia, su gente y sus tradiciones vivas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-700 font-semibold uppercase">
            Guía de Alrededores
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
            Rincones Emblemáticos de Tlalpan
          </h2>
          <p className="text-charcoal-600 text-xs sm:text-sm font-light">
            Al hospedarte en Quinta Soledad, el centro histórico de Tlalpan se convierte en una extensión de tu experiencia cultural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SITIOS_TLALPAN.map((sitio) => {
            const Icon = sitio.icon;
            return (
              <div
                key={sitio.title}
                className="bg-cantera-100/70 border border-gold-500/25 rounded-2xl p-6 sm:p-7 hover:border-gold-500/60 hover:shadow-lg transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-cinzel tracking-wider px-2.5 py-0.5 bg-cantera-50 border border-gold-500/20 rounded-full text-gold-800 font-semibold uppercase">
                    {sitio.periodo}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-charcoal-900">
                  {sitio.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed font-light">
                  {sitio.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cita cultural */}
        <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-950 text-cantera-50 border border-gold-500/30 text-center space-y-3">
          <p className="text-[10px] font-cinzel tracking-widest text-gold-400 uppercase">
            Un Destino que Conserva su Alma
          </p>
          <p className="text-base sm:text-lg font-serif italic text-cantera-100 max-w-2xl mx-auto">
            &quot;Caminar por las calles empedradas de Tlalpan y cruzar el portón de Quinta Soledad es retroceder en el tiempo hacia una época de paz y elegancia.&quot;
          </p>
          <div className="pt-3">
            <Link
              href="/contacto"
              className="btn-luxury text-xs px-6 py-2.5 tracking-widest"
            >
              <span>Planea tu Visita</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
