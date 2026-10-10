import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, Coffee, Calendar, Clock, Sparkles, ChefHat, Moon, Wine, GlassWater, Flame, Heart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastronomía & Mixología | Capitular, Los Establos, La Mal Querida & Bar Alpestre",
  description: "Descubre la propuesta gastronómica de Centro Cultural Quinta Soledad: Restaurante Capitular, Cafetería Los Establos, Restaurante La Mal Querida y Bar Alpestre en Tlalpan Centro.",
};

const SECTIONS_NAV = [
  { id: "capitular", label: "Restaurante Capitular" },
  { id: "los-establos", label: "Cafetería Los Establos" },
  { id: "la-mal-querida", label: "La Mal Querida" },
  { id: "bar-alpestre", label: "Bar Alpestre" },
  { id: "buffet", label: "Buffet Fin de Semana" },
  { id: "vinos", label: "Vinos Mexicanos" },
];

export default function GastronomiaPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner - Editorial & Museum Style */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nuestros-espacios/restaurante-capitular/ccqs_bebidas_mixologia11.png"
            alt="Gastronomía y Mixología en Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Cocina con Alma, Tradición & Hospitalidad
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
            Nuestros Restaurantes & Bares
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Sabores tradicionales, cocina de barrio, café con memoria y mixología histórica entre los muros centenarios de Tlalpan.
          </p>

          {/* Quick Anchor Navigation */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {SECTIONS_NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 rounded-full bg-charcoal-900/80 hover:bg-gold-500 hover:text-charcoal-950 border border-gold-500/30 text-cantera-200 text-[10px] sm:text-[11px] font-cinzel tracking-wider uppercase transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 space-y-24">
        
        {/* 1. RESTAURANTE CAPITULAR: COCINA TRADICIONAL MEXICANA */}
        <section id="capitular" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <ChefHat className="w-3.5 h-3.5 text-gold-600" />
                Cocina Tradicional Mexicana
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Restaurante Capitular
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Cocina Tradicional Mexicana · Ubicado en un salón de origen porfiriano
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                <p>
                  Capitular conserva la memoria de los encuentros en los que se han elegido representantes de la Congregación Marista.
                </p>
                <p>
                  Inspirado en los capítulos religiosos, espacios de escucha, reflexión y discernimiento, celebra la vida compartida y el valor de reunirse alrededor de la mesa.
                </p>
                <p>
                  Su cocina mexicana, tradicional y reconfortante, invita a comer con calma, agradecer lo recibido y disfrutar de la comunidad.
                </p>
                <div className="italic text-charcoal-900 border-l-2 border-gold-500 pl-4 py-2 bg-cantera-100/70 rounded-r-lg font-serif">
                  &quot;Capitular: compartir la mesa también es una forma de buen vivir.&quot;
                </div>
              </div>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.capitular}
                  text="Reservar Mesa en Capitular"
                  variant="gold"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/restaurante-capitular/ccqs_restaurante-capitular07.png"
                  alt="Restaurante Capitular en Centro Cultural Quinta Soledad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/restaurante-capitular/ccqs_restaurante-capitular02.png"
                    alt="Comedor colonial y arcos en Restaurante Capitular"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/restaurante-capitular/ccqs_restaurante-capitular05.png"
                    alt="Detalles de mesa y arquitectura en Capitular"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CAFETERÍA LOS ESTABLOS: CAFÉ Y TRADICIÓN */}
        <section id="los-establos" className="scroll-mt-24 pt-8 border-t border-cantera-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/cafeteria-los-establos/ccqs_cafeteria_losestablos01.png"
                  alt="Cafetería Los Establos en Centro Cultural Quinta Soledad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/cafeteria-los-establos/ccqs_cafeteria_losestablos07.png"
                    alt="Mesas al aire libre y jardín en Los Establos"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/cafeteria-los-establos/ccqs_cafeteria_losestablos08.png"
                    alt="Rincón cálido de café y panadería en Los Establos"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Coffee className="w-3.5 h-3.5 text-gold-600" />
                Café y Tradición
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Cafetería Los Establos
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Sabores de pueblo, memoria y origen
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                <p>
                  <strong>Los Establos</strong> nace en la parte más sencilla y auténtica de Centro Cultural Quinta Soledad: la zona posterior de la antigua hacienda, donde la vida transcurría cerca de la tierra, los animales, el trabajo diario y la comunidad.
                </p>
                <p>
                  Su nombre nos recuerda que toda gran historia también se construye desde lo cotidiano. Desde las mañanas que comienzan temprano, el aroma del café recién preparado, el pan sobre la mesa y las conversaciones tranquilas entre quienes comparten un mismo camino.
                </p>
                <p>
                  Inspirada en la vida de pueblo y en nuestras raíces, la cafetería conserva una esencia cálida, cercana y sin pretensiones. Es un lugar para hacer una pausa, disfrutar sabores tradicionales y reconectar con aquello que nos hace sentir en casa.
                </p>
                <div className="italic text-charcoal-900 border-l-2 border-gold-500 pl-4 py-2 bg-cantera-100/70 rounded-r-lg font-serif">
                  &quot;Sabores de pueblo, memoria y origen.&quot;
                </div>
              </div>
              <p className="text-[11px] text-olive-800 font-medium bg-olive-50 p-3 rounded-lg border border-olive-200/50">
                🐾 Espacio Pet Friendly habilitado: tus mascotas son bienvenidas en el área de mesas y jardines exteriores.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.losEstablos}
                  text="Consultar Los Establos"
                  variant="gold"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. RESTAURANTE LA MAL QUERIDA: COCINA DE BARRIO */}
        <section id="la-mal-querida" className="scroll-mt-24 pt-8 border-t border-cantera-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Flame className="w-3.5 h-3.5 text-gold-600" />
                Cocina de Barrio
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Restaurante La Mal Querida
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Cocina de Barrio · Sencillo, cálido y sin pretensiones
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                <p>
                  <strong>La Mal Querida</strong> es un restaurante sencillo, cálido y sin pretensiones, inspirado en la vida cotidiana del pueblo y en esos lugares donde se come rico, se conversa sin prisa y siempre se recibe con cercanía.
                </p>
                <p>
                  Ubicado dentro de la cafetería de Centro Cultural Quinta Soledad, su cocina celebra los sabores de siempre: recetas mexicanas, ingredientes familiares y platillos generosos que evocan fondas, mercados y mesas compartidas.
                </p>
                <p>
                  Aquí no buscamos complicar lo sencillo. La Mal Querida es comida honesta, ambiente relajado y hospitalidad genuina.
                </p>
              </div>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.laMalQuerida}
                  text="Reservar Mesa en La Mal Querida"
                  variant="gold"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_restaurante_lamalquerida06.jpg"
                  alt="Restaurante La Mal Querida en Centro Cultural Quinta Soledad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_platillos_destacados15.jpg"
                    alt="Platillos tradicionales en La Mal Querida"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_restaurante_lamalquerida12.jpeg"
                    alt="Atmósfera bohemia y acogedora en La Mal Querida"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BAR ALPESTRE: MIXOLOGÍA HISTÓRICA */}
        <section id="bar-alpestre" className="scroll-mt-24 pt-8 border-t border-cantera-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-3 order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 group photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/bar-alpestre/ccqs_bar_alpestre01.png"
                  alt="Atmósfera íntima en Bar Alpestre Speakeasy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/bar-alpestre/ccqs_bar_alpestre02.png"
                    alt="Barra de madera y cristalería histórica en Bar Alpestre"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden border border-cantera-300 photo-zoomable">
                  <Image
                    src="/images/nuestros-espacios/bar-alpestre/ccqs_bar_alpestre04.png"
                    alt="Mixología botánica y destilados artesanales en Bar Alpestre"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 text-gold-400 border border-gold-500/30 text-[10px] font-cinzel tracking-widest uppercase">
                <Moon className="w-3.5 h-3.5 text-gold-400" />
                Mixología Histórica
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Bar Alpestre
              </h2>
              <p className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                Mixología Histórica · Inspirado en una antigua tradición marista
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                <p>
                  <strong>Bar Alpestre</strong> nace inspirado en una antigua tradición marista: el conocimiento de las hierbas, el cuidado en cada preparación y el valor de compartir una bebida después de una jornada de trabajo, reflexión o convivencia.
                </p>
                <p>
                  Su nombre recuerda aquel destilado creado en el Hermitage a partir de una cuidadosa combinación de hierbas aromáticas, cuyo secreto fue conservado y transmitido de generación en generación.
                </p>
                <p>
                  Inspirado en esta historia, Bar Alpestre es un espacio cálido y tradicional, donde cada bebida se prepara con intención. Hierbas, frutos, especias y destilados se encuentran para crear sabores que evocan naturaleza, memoria y hospitalidad.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <WhatsAppButton
                  message={WA_MESSAGES.alpestre}
                  text="Reservar en Bar Alpestre"
                  variant="gold"
                />
                <WhatsAppButton
                  message={WA_MESSAGES.tallerMixologia}
                  text="Talleres de Mixología"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. GRAN BUFFET DE FIN DE SEMANA */}
        <section id="buffet" className="scroll-mt-24 bg-cantera-100/80 p-6 sm:p-12 rounded-3xl border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Calendar className="w-3.5 h-3.5 text-gold-600" />
                Sábados & Domingos
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Gran Buffet de Fin de Semana
              </h2>
              <div className="flex items-center gap-2 text-gold-800 text-[11px] font-cinzel tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Disponible de 09:00 am a 05:00 pm en los jardines</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Cada fin de semana los jardines de Quinta Soledad se llenan de aromas, música suave y alegría. Nuestro tradicional buffet es una invitación a disfrutar sin prisa: cocina mexicana preparada al momento, estaciones de antojitos, cortes, guisados de fiesta, fruta fresca, panadería y postres artesanales.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.buffet}
                  text="Reservar Lugares para Buffet"
                  variant="gold"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gold-500/25 photo-zoomable">
                <Image
                  src="/images/nuestros-espacios/restaurante-la-mal-querida/ccqs_platillos_destacados15.jpg"
                  alt="Platillos mexicanos tradicionales del Gran Buffet de Fin de Semana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. CURADURÍA DE VINOS MEXICANOS & CATAS */}
        <section id="vinos" className="scroll-mt-24 bg-cantera-100/80 p-6 sm:p-12 rounded-3xl border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gold-500/20 photo-zoomable">
                <Image
                  src="/images/nuestros-momentos/cena-maridaje/ccqs_cena-maridaje01.jpg"
                  alt="Cena maridaje y catas de vinos en Quinta Soledad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase">
                <Wine className="w-3.5 h-3.5 text-gold-600" />
                Selección Artesanal
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 leading-tight">
                Curaduría de Vinos Mexicanos
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Una selección cuidadosamente curada de etiquetas independientes y bodegas boutique de los valles vinícolas de México: Valle de Guadalupe, Querétaro, Guanajuato y Coahuila.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans font-light">
                Ofrecemos catas guiadas por sommeliers, maridajes sensoriales con platillos de nuestra cocina y eventos privados para apasionados del buen vino.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.catasVino}
                  text="Consultar Catas Guiadas de Vino"
                  variant="gold"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
