import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  Sparkles,
  Landmark,
  Award,
  ArrowRight,
  Compass,
  Calendar,
  Building2,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia de 1870 | Línea del Tiempo | Centro Cultural Quinta Soledad",
  description:
    "Descubre la apasionante cronología de Centro Cultural Quinta Soledad: desde 1870 como Quinta Escandón atribuida a Antonio Rivas Mercado, el banquete de Don Porfirio Díaz, la Casa Madre de los Hermanos Maristas en 1922, hasta su rescate patrimonial contemporáneo.",
};

const TIMELINE_EVENTS = [
  {
    year: "1870",
    era: "Siglo XIX · Esplendor Porfiriano",
    title: "Nace Quinta Escandón: Don Guillermo y Antonio Rivas Mercado",
    subtitle: "Residencia aristocrática de recreo en la Villa de Tlalpan",
    image: "/images/arquitectura-y-detalles/ccqs_arquitectura_detalles13.jpeg",
    imageAlt: "Arquitectura Neorrenacentista y cantera de Quinta Escandón",
    imageCaption: "Arquitectura Neorrenacentista Italiana · Atribuida a Antonio Rivas Mercado",
    description:
      "Su origen se remonta a finales del siglo XIX, cuando Don Guillermo de Landa y Escandón —prominente empresario, político, gobernador del Distrito Federal y cercano colaborador del presidente Porfirio Díaz— eligió la pacífica Villa de Tlalpan para edificar su casona de descanso, conocida originalmente como Quinta Escandón.",
    extraInfo:
      "Con una monumental arquitectura de inspiración renacentista italiana, arquerías en cantera labrada y salones de techos altos, la obra es atribuida al célebre arquitecto Antonio Rivas Mercado (autor del Ángel de la Independencia). El recinto fue escenario de selectas tertulias diplomáticas y encuentros de la sociedad cosmopolita de la época.",
    highlight:
      "«Entre sus salones resonaron valses vieneses y conversaciones sobre modernidad y progreso en el México de la Belle Époque.»",
    tags: ["Antonio Rivas Mercado", "Don Guillermo de Landa", "Villa de Tlalpan"],
  },
  {
    year: "1907",
    era: "1907 · Encuentro de Estado",
    title: "El Célebre Banquete de Don Porfirio Díaz",
    subtitle: "La velada del cumpleaños 77 del presidente",
    image: "/images/nuestros-espacios/salon-capitular/ccqs_salon_capitular03.png",
    imageAlt: "Salón Capitular y banquetes históricos en Quinta Soledad",
    imageCaption: "Salón de Gala · Escenario de la histórica celebración presidencial",
    description:
      "La memoria histórica y la tradición oral de Tlalpan resguardan una de las veladas más fascinantes de la hacienda: el cumpleaños número 77 del presidente Porfirio Díaz, celebrado con distinguida solemnidad en los salones y jardines de la quinta.",
    extraInfo:
      "El general Díaz acudió acompañado por su esposa, doña Carmen Romero Rubio, su familia cercana y ministros del gabinete diplomático. La reunión fue engalanada por la orquesta dirigida por el maestro Miguel Lerdo de Tejada, entre faroles porfirianos, finas vajillas y copas que brindaban por la paz del país.",
    highlight:
      "«Una noche legendaria que quedó grabada en la memoria viva de la casona y en el legado cultural de Tlalpan.»",
    tags: ["Porfirio Díaz", "Carmen Romero Rubio", "Miguel Lerdo de Tejada"],
  },
  {
    year: "1922",
    era: "1922 · Fundación Marista",
    title: "La Llegada Marista y Nace el Nombre 'Quinta Soledad'",
    subtitle: "Casa Madre de los Hermanos Maristas en México",
    image: "/images/nuestros-espacios/pasillo-de-los-forjadores/ccqs_forjadores01.jpg",
    imageAlt: "Pasillo de los Forjadores en Centro Cultural Quinta Soledad",
    imageCaption: "Pasillo de los Forjadores · Casa Madre Marista en México (1922)",
    description:
      "Tras los turbulentos años revolucionarios, la casona permaneció en sosiego hasta que en 1922 fue adquirida por Don Francisco Llory, quien abrió generosamente sus puertas a la Congregación de los Hermanos Maristas.",
    extraInfo:
      "A partir de entonces recibió el nombre oficial de Quinta Soledad, en homenaje a la quietud, el silencio reflexivo y el recogimiento espiritual que propiciaba su naturaleza. Quinta Soledad se erigió como la Casa Madre Marista en México, guiada por el ideario de San Marcelino Champagnat de educar para la vida, el servicio y la verdad.",
    highlight:
      "«La casona abrió sus puertas al saber, convencida de que el conocimiento y los valores éticos son las herramientas más poderosas para transformar comunidades.»",
    tags: ["Casa Madre Marista", "San Marcelino Champagnat", "Francisco Llory"],
  },
  {
    year: "1940 - 1985",
    era: "Mediados del Siglo XX · Época de Oro",
    title: "La Era de los Forjadores & La Capilla Consagrada",
    subtitle: "Décadas de vocación, pensamiento y asambleas capitulares",
    image: "/images/nuestros-espacios/capilla/ccqs_capilla06.png",
    imageAlt: "Capilla Consagrada y Altar en Centro Cultural Quinta Soledad",
    imageCaption: "Capilla Consagrada Centenaria · Atmósfera de recogimiento y fe",
    description:
      "Durante más de medio siglo, generaciones de estudiantes, novicios y educadores recorrieron los claustros, la biblioteca, el antiguo seminario y la Capilla consagrada. Se forjó aquí una comunidad comprometida con la justicia social y el bien común.",
    extraInfo:
      "En el Salón Capitular se celebraban los capítulos religiosos: asambleas de escucha, discernimiento y elección representativa. Esta herencia de deliberación en fraternidad es la que hoy inspira al Restaurante Capitular, donde compartir la mesa es una celebración comunitaria.",
    highlight:
      "«Pasos que llenaron de alma cada rincón, dejando una huella imborrable que todavía se respira en sus muros de cantera.»",
    tags: ["Capilla Consagrada", "Salón Capitular", "Pasillo de los Forjadores"],
  },
  {
    year: "Presente",
    era: "Siglo XXI · El Renacimiento",
    title: "Grupo Orgánico Hoteles Boutique: La Memoria que se Vive",
    subtitle: "Centro cultural, hotelería de autor y santuario gastronómico",
    image: "/images/nuestros-espacios/jardines/ccqs_jardines01.png",
    imageAlt: "Jardines centenarios y Casona de Centro Cultural Quinta Soledad",
    imageCaption: "Centro Cultural Quinta Soledad · Patrimonio vivo en Tlalpan Centro",
    description:
      "Más de un siglo después de su origen, Grupo Orgánico Hoteles Boutique emprende la restauración y rescate meticuloso de este patrimonio histórico nacional para abrirlo como un Centro Cultural y Hotel Boutique de clase mundial.",
    extraInfo:
      "Hoy, Quinta Soledad alberga los hoteles boutique Utopía y Hermitage, más de 12 salones históricos (Auditorio Pierre Damian, Capilla, Oval, Ministerio, Concilio, Capitular, La Valla, Basilio), experiencias culinarias en Restaurante Capitular, Restaurante La Mal Querida, Cafetería Los Establos y Bar Alpestre, además de la división corporativa OTAM y el santuario de bienestar Origen Spa.",
    highlight:
      "«Un recinto con alma donde la memoria porfiriana, la mística marista y la hospitalidad contemporánea dialogan para crear experiencias memorables.»",
    tags: ["Grupo Orgánico", "Hoteles Boutique", "Patrimonio Restaurado"],
  },
];

export default function NuestraHistoriaPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-28 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nuestros-espacios/pasillo-de-los-forjadores/ccqs_forjadores01.jpg"
            alt="Pasillo de los Forjadores - Historia de Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 text-[10px] font-cinzel tracking-widest uppercase border border-gold-500/30">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            Crónica Centenaria · Más de 150 Años de Memoria
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
            Nuestra Historia
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            En el corazón del centro histórico de Tlalpan se alza una casona emblemática donde el esplendor porfiriano, la vocación formativa marista y la hospitalidad contemporánea convergen en un solo espacio con alma.
          </p>
        </div>
      </section>

      {/* HISTORICAL STATS / BADGES BAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-charcoal-900/95 backdrop-blur-md border border-gold-500/40 p-4 sm:p-5 rounded-2xl shadow-xl text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-bold block">1870</span>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-cantera-300 block">
              Quinta Escandón
            </span>
            <p className="text-[10px] text-cantera-400 font-light">Diseño atribuido a Antonio Rivas Mercado</p>
          </div>

          <div className="bg-charcoal-900/95 backdrop-blur-md border border-gold-500/40 p-4 sm:p-5 rounded-2xl shadow-xl text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-bold block">1907</span>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-cantera-300 block">
              Banquete de Estado
            </span>
            <p className="text-[10px] text-cantera-400 font-light">Cumpleaños 77 de Don Porfirio Díaz</p>
          </div>

          <div className="bg-charcoal-900/95 backdrop-blur-md border border-gold-500/40 p-4 sm:p-5 rounded-2xl shadow-xl text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-bold block">1922</span>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-cantera-300 block">
              Casa Madre Marista
            </span>
            <p className="text-[10px] text-cantera-400 font-light">Adquisición por Francisco Llory</p>
          </div>

          <div className="bg-charcoal-900/95 backdrop-blur-md border border-gold-500/40 p-4 sm:p-5 rounded-2xl shadow-xl text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-serif text-gold-400 font-bold block">Hoy</span>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-cantera-300 block">
              Centro Cultural
            </span>
            <p className="text-[10px] text-cantera-400 font-light">Grupo Orgánico Hoteles Boutique</p>
          </div>
        </div>
      </section>

      {/* TIMELINE PRINCIPAL LLAMATIVO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
          <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-700 font-semibold">
            Cronología Viva de Nuestra Casona
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
            Línea del Tiempo Histórica
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-charcoal-600 text-xs sm:text-sm font-light leading-relaxed">
            Un recorrido cronológico por los sucesos, personalidades y transformaciones que convirtieron a Quinta Soledad en un santuario patrimonial de México.
          </p>
        </div>

        {/* CONTENEDOR DEL TIMELINE CON LÍNEA CENTRAL / LATERAL */}
        <div className="relative">
          {/* Línea Vertical Central (Escritorio) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-gold-500/20 via-gold-400/80 to-gold-500/20 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

          {/* Línea Vertical Lateral (Móvil) */}
          <div className="md:hidden absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold-500/30 via-gold-400/80 to-gold-500/30 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]" />

          {/* LISTA DE HITOS HISTÓRICOS */}
          <div className="space-y-12 sm:space-y-20">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.year} className="relative flex flex-col md:flex-row items-center">
                  {/* Nodo / Badge Circular con el Año */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-charcoal-950 border-2 border-gold-400 flex flex-col items-center justify-center text-gold-300 shadow-xl ring-4 ring-gold-500/20 group-hover:scale-110 transition-transform">
                      <span className="text-[10px] sm:text-xs font-cinzel font-bold text-center leading-none px-1">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Tarjeta de Contenido */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-14 sm:pl-16 md:pl-0 ${
                      isEven ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
                    }`}
                  >
                    <div className="bg-cantera-100/90 border border-gold-500/35 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-gold-500/80 hover:-translate-y-1 transition-all duration-300 group">
                      {/* Era Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase font-semibold border border-gold-500/30">
                          <Calendar className="w-3 h-3 text-gold-600" />
                          {event.era}
                        </span>
                        <span className="text-xs font-serif text-gold-700/80 font-bold hidden sm:inline">
                          Capítulo {index + 1}
                        </span>
                      </div>

                      {/* Título & Subtítulo */}
                      <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900 group-hover:text-gold-800 transition-colors leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs font-cinzel tracking-wider text-charcoal-500 mt-1 uppercase">
                        {event.subtitle}
                      </p>

                      {/* Fotografía de Época */}
                      <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden my-4 border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in">
                        <Image
                          src={event.image}
                          alt={event.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 text-cantera-100 text-[10px] sm:text-[11px] font-cinzel tracking-wider backdrop-blur-md bg-charcoal-950/60 p-2 rounded-lg border border-gold-500/25">
                          {event.imageCaption}
                        </div>
                      </div>

                      {/* Textos Históricos */}
                      <div className="space-y-3 text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed font-light">
                        <p>{event.description}</p>
                        <p>{event.extraInfo}</p>
                      </div>

                      {/* Cita / Testimonio Histórico */}
                      <div className="mt-4 p-3.5 rounded-xl bg-white/70 border-l-4 border-gold-500 border border-gold-500/20 italic text-charcoal-900 text-xs sm:text-[13px] leading-relaxed">
                        {event.highlight}
                      </div>

                      {/* Etiquetas de Época */}
                      <div className="mt-4 pt-4 border-t border-gold-500/20 flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-cantera-200/60 text-charcoal-800 text-[10px] font-cinzel tracking-wider"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANNER CTA: VIVE LA HISTORIA EN PERSONA */}
      <section className="bg-charcoal-950 text-cantera-50 py-16 sm:py-20 border-t border-gold-500/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/arquitectura-y-detalles/ccqs_arquitectura_detalles13.jpeg"
            alt="Detalles arquitectónicos de Quinta Soledad"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-cinzel tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            Recorridos & Visitas en Tlalpan
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-cantera-50 leading-tight">
            Ven a Caminar por Más de 150 Años de Historia Viva
          </h2>
          <p className="text-cantera-300 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
            Te invitamos a recorrer sus salones porfirianos, la capilla consagrada, los jardines arbolados y disfrutar de nuestra gastronomía en el corazón de Tlalpan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              text="Agendar Visita Guiada por WhatsApp"
              variant="gold"
              className="w-full sm:w-auto"
            />
            <Link
              href="/hoteles"
              className="btn-luxury text-xs px-6 py-3 tracking-widest text-center justify-center w-full sm:w-auto"
            >
              <span>Hospedarse en la Historia</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
