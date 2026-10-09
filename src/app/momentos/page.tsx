import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Momentos | Cenas Románticas, Talleres & Eventos Sociales en Tlalpan",
  description: "Vive momentos inolvidables, cenas románticas de 4 y 6 tiempos, pedidas de mano, cenas maridaje, talleres y celebraciones sociales en Centro Cultural Quinta Soledad.",
};

export default function MomentosPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nuestros-momentos/cenas-romanticas/ccqs_cenas-romanticas02.jpg"
            alt="Cenas Románticas y Momentos en Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Sensaciones que Perduran en la Memoria
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-cantera-50 tracking-tight leading-tight">
            Nuestros Momentos
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Aquí, las celebraciones se viven con alma, los encuentros se convierten en memorias y cada instante se transforma en una experiencia entrañable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">
        {/* MOMENTOS ÍNTIMOS */}
        <section id="intimos" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5 text-rose-600" />
                Cenas Románticas & Pedidas de Mano
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Momentos Íntimos
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Celebraciones en pareja entre cantera y luz de velas
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Hay lugares donde el tiempo se detiene y todo lo que importa cabe en una mirada, una risa, un silencio compartido. Aquí, entre los jardines y muros centenarios de la casona, la intimidad florece con naturalidad.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Cada rincón guarda la promesa de un recuerdo inolvidable: una cena bajo los faroles porfirianos, un brindis entre velas o un “sí” que quedará para siempre.
              </p>
              <div className="p-3.5 rounded-xl bg-cantera-100 border border-gold-500/20 text-[11px] text-charcoal-800 font-cinzel tracking-wider">
                Cenas románticas de 4 y 6 tiempos · Pedidas de mano · Bodas boutique · Picnics en jardines.
              </div>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.cenasRomanticas}
                  text="Reservar Momento Íntimo"
                  variant="gold"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/nuestros-momentos/cenas-romanticas/ccqs_cenas-romanticas02.jpg"
                  alt="Cena romántica a la luz de las velas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MOMENTOS PARA COMPARTIR */}
        <section id="compartir" className="scroll-mt-24 bg-cantera-100/80 p-6 sm:p-12 rounded-3xl border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/25 photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/nuestros-momentos/cena-maridaje/ccqs_cena-maridaje01.jpg"
                  alt="Cena maridaje con amigos y cata de vino"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Users className="w-3.5 h-3.5 text-gold-600" />
                Conexión Auténtica & Celebración
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Momentos para Compartir
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Hay instantes que se viven mejor cuando se comparten. En Centro Cultural Quinta Soledad creamos espacios que invitan a la conexión auténtica: esa que surge sin pantallas, sin prisa y con el corazón abierto.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Disfruta de nuestras cenas maridaje, catas de cerveza artesanal, mezcal o vino, o redescubre el placer de crear con tus propias manos en nuestros talleres de pizza artesanal o sushi con chefs invitados.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.talleresCocina}
                  text="Consultar Talleres & Maridajes"
                  variant="gold"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA DE NUESTROS MOMENTOS (Sin título, solo fotos) */}
        <section className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/cenas-romanticas/ccqs_cenas-romanticas04.jpeg"
                alt="Cenas románticas exclusivas en Quinta Soledad"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/taller-pizzas/ccqs_taller-de-pizza03.jpg"
                alt="Talleres de pizza artesanal en hornos tradicionales"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/picnic/ccqs_picnic01.png"
                alt="Picnics al aire libre en jardines centenarios"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/taller-de-pintura/ccqs_taller-de-pintura01.jpg"
                alt="Talleres de pintura y expresión artística"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/cena-maridaje/ccqs_cena-maridaje04.webp"
                alt="Cenas maridaje y catas guiadas de vinos"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/cenas-romanticas/ccqs_cenas_romanticas08.jpeg"
                alt="Veladas románticas a la luz de las velas"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/taller-pizzas/ccqs_taller-de-pizza11.jpg"
                alt="Experiencias gastronómicas y cocina interactiva"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
              <Image
                src="/images/nuestros-momentos/picnic/ccqs_picnic_familiar03.jpg"
                alt="Convivencia y picnics familiares en áreas verdes"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ORIGEN SPA ENLACE */}
      <OrigenSpaSection />
    </div>
  );
}
