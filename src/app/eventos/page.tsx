import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Users, Calendar, Briefcase, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos y Espacios en Tlalpan | Centro Cultural Quinta Soledad",
  description: "Celebra bodas, eventos sociales y corporativos en más de 12 salones históricos y jardines en Tlalpan. Auditorio Pierre Damian (100 pax), Capilla consagrada, Salón Oval, Ministerio, Guadalupe, Concilio, Capitular, La Valla y experiencias OTAM.",
};

const SALONES_DATA = [
  {
    name: "Auditorio Pierre Damian",
    capacity: "100 Personas",
    badge: "Auditorio & Salón Principal",
    desc: "Nuestro espacio insignia para grandes celebraciones, asambleas y congresos. Altos techos, versatilidad de montaje, iluminación majestuosa y acústica distinguida.",
    image: "/images/nuestros-espacios/auditorio-pierre-damian/ccqs_auditorio_pierredamian03.png",
    waMsg: WA_MESSAGES.salonPierreDamian,
  },
  {
    name: "Salón Guadalupe",
    capacity: "50 Personas",
    badge: "Luz Natural & Jardín",
    desc: "Combina la calidez de la naturaleza con la elegancia discreta de la casona. Entre flores, muros antiguos y luz cenital, cada reunión cobra un aire íntimo.",
    image: "/images/nuestros-espacios/salon-guadalupe/ccqs_salon_guadalupe01.png",
    waMsg: WA_MESSAGES.salonGuadalupe,
  },
  {
    name: "Salón Concilio",
    capacity: "45 Personas",
    badge: "Inspiración & Conferencias",
    desc: "Diseñado para inspirar ideas y compartir conocimiento. Perfecto para talleres ejecutivos, conferencias, ruedas de prensa o presentaciones.",
    image: "/images/nuestros-espacios/salon-concilio/ccqs_salon_concilio01.png",
    waMsg: WA_MESSAGES.salonConcilio,
  },
  {
    name: "Salón Ministerio",
    capacity: "40 Personas",
    badge: "Sobriedad & Propósito",
    desc: "Sobrio y funcional, diseñado para encuentros con propósito. Une la prestancia patrimonial de la casona con la tecnología que demandan las reuniones modernas.",
    image: "/images/nuestros-espacios/salon-ministerio/ccqs_salon_ministerio02.png",
    waMsg: WA_MESSAGES.salonMinisterio,
  },
  {
    name: "Salón Oval",
    capacity: "35 Personas",
    badge: "Contemporáneo & Versátil",
    desc: "Un salón que se adapta a cada historia. Destaca por sus acabados arquitectónicos contemporáneos integrados con la memoria patrimonial de la casona.",
    image: "/images/nuestros-espacios/salon-oval/ccqs_salon-oval05.png",
    waMsg: WA_MESSAGES.salonOval,
  },
  {
    name: "Salón Capitular",
    capacity: "30 Personas",
    badge: "Tradición & Memoria Histórica",
    desc: "Ubicado en un salón de origen porfiriano, conserva la memoria solemne de la Congregación Marista. Ideal para banquetes privados, sesiones de consejo y encuentros de honor.",
    image: "/images/nuestros-espacios/salon-capitular/ccqs_salon_capitular03.png",
    waMsg: WA_MESSAGES.salonCapitular,
  },
  {
    name: "Salón La Valla",
    capacity: "16 Personas",
    badge: "Intimidad & Calidez",
    desc: "Un espacio privado y encantador, donde la calidez se siente en cada detalle. Ideal para reuniones íntimas, comidas familiares o celebraciones discretas con la atmósfera perfecta para compartir.",
    image: "/images/nuestros-espacios/salon-la-valla/ccqs_salon_lavalla01.png",
    waMsg: WA_MESSAGES.salonLaValla,
  },
  {
    name: "Salón Basilio",
    capacity: "12 Personas",
    badge: "Exclusividad & Silencio",
    desc: "Pequeño espacio diseñado para la máxima confidencialidad. Mesas rodeadas de vegetación y luz suave para conversaciones significativas y sesiones directivas.",
    image: "/images/nuestros-espacios/salon-basilio/ccqs_salon-basilio01.png",
    waMsg: WA_MESSAGES.salonBasilio,
  },
];

export default function EventosPage() {
  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/eventos-sociales/bodas/ccqs_bodas01.jpg"
            alt="Eventos y Bodas en Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Celebraciones & Encuentros Memorables
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-cantera-50 tracking-tight leading-tight">
            Eventos y Espacios
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Más de 12 salones con alma, jardines arbolados, capilla centenaria y biblioteca. El escenario perfecto para bodas, bautizos, aniversarios y encuentros de negocios.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-24">
        {/* CATALOGO DE SALONES */}
        <section>
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-14">
            <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-700 font-semibold">
              Espacios a Tu Medida
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
              Nuestros Salones Patrimoniales
            </h2>
            <p className="text-charcoal-600 text-xs sm:text-sm font-light">
              Cada rincón de Quinta Soledad cuenta una historia donde la arquitectura porfiriana y el confort moderno se entrelazan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SALONES_DATA.map((salon) => (
              <div
                key={salon.name}
                className="bg-cantera-100/70 border border-gold-500/25 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold-500/60 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden photo-zoomable cursor-zoom-in">
                    <Image
                      src={salon.image}
                      alt={salon.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-charcoal-950/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30">
                      Capacidad: {salon.capacity}
                    </div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    <p className="text-[10px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                      {salon.badge}
                    </p>
                    <h3 className="text-lg font-serif text-charcoal-900">
                      {salon.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-sans font-light">
                      {salon.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <WhatsAppButton
                    message={salon.waMsg}
                    text="Cotizar Salón"
                    variant="gold"
                    className="w-full text-xs py-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* APARTADO EXCLUSIVO: CAPILLA CONSAGRADA */}
        <section className="bg-gradient-to-b from-cantera-100/90 to-cantera-50 border border-gold-500/35 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 text-[10px] font-cinzel tracking-widest uppercase border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Espacio Sagrado & Ceremonias Religiosas
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-charcoal-900 tracking-tight">
              Capilla Centenaria Consagrada
            </h2>
            <div className="gold-divider max-w-xs mx-auto my-3" />
            <p className="text-charcoal-700 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
              Un recinto sagrado preservado en el corazón de la hacienda. Con sus bancas históricas de madera labrada, altar consagrado y una iluminación natural de serena belleza, nuestra capilla ofrece un ambiente de recogimiento, solemnidad y emoción para bodas, misas de acción de gracias, bautizos, aniversarios y retiros espirituales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Características & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-serif text-charcoal-900">
                  Un Escenario Íntimo & Trascendente
                </h3>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  Celebrar en nuestra capilla es rodearse de historia viva. La armonía acústica, la calidez de la madera antigua y la cercanía inmediata con nuestros jardines arbolados permiten una transición natural y mágica hacia el banquete o recepción.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/75 border border-gold-500/20 shadow-sm">
                  <Users className="w-4 h-4 text-gold-700 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Capacidad para hasta 80 personas</h4>
                    <p className="text-[11px] text-charcoal-600 font-light">Bancas originales de madera con distribución tradicional para familiares y cortejo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/75 border border-gold-500/20 shadow-sm">
                  <Sparkles className="w-4 h-4 text-gold-700 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Recinto Consagrado</h4>
                    <p className="text-[11px] text-charcoal-600 font-light">Apta para ceremonias católicas, sacramentos nupciales, bautizos y bendiciones solemnes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/75 border border-gold-500/20 shadow-sm">
                  <HeartHandshake className="w-4 h-4 text-gold-700 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-charcoal-900">Conexión con Jardines & Salones</h4>
                    <p className="text-[11px] text-charcoal-600 font-light">Tus invitados caminan directamente hacia el cóctel de bienvenida o recepción sin traslados.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.capilla}
                  text="Cotizar Ceremonia en la Capilla"
                  variant="gold"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Right Column: Galería Fotográfica de la Capilla */}
            <div className="lg:col-span-7 space-y-4">
              {/* Foto Principal */}
              <div className="relative h-72 sm:h-84 md:h-96 w-full rounded-2xl overflow-hidden border border-gold-500/35 shadow-lg photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/nuestros-espacios/capilla/ccqs_capilla06.png"
                  alt="Altar principal y nave de la Capilla Consagrada en Quinta Soledad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-cinzel text-gold-300 border border-gold-500/30">
                  Altar Principal & Nave Central
                </div>
              </div>

              {/* Fotos complementarias */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-sm photo-zoomable cursor-zoom-in group">
                  <Image
                    src="/images/nuestros-espacios/capilla/ccqs_capilla08.png"
                    alt="Bancas históricas de madera y perspectiva de la Capilla"
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-sm photo-zoomable cursor-zoom-in group">
                  <Image
                    src="/images/nuestros-espacios/capilla/ccqs_capilla15.jpg"
                    alt="Detalles sacros y ornamentación de la Capilla"
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-sm photo-zoomable cursor-zoom-in group">
                  <Image
                    src="/images/eventos-sociales/bodas/ccqs_bodas02.jpg"
                    alt="Ceremonia nupcial en la Capilla de Quinta Soledad"
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVISIÓN OTAM EMPRESARIAL */}
        <section className="bg-charcoal-950 text-cantera-50 rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-2xl relative overflow-hidden space-y-8 sm:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-cinzel tracking-widest uppercase">
                <Briefcase className="w-3.5 h-3.5" />
                División Especializada en Empresas
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-cantera-50 leading-tight">
                Conoce OTAM: Experiencias de Alto Impacto Corporativo
              </h2>
              <p className="text-xs sm:text-sm text-cantera-300 font-sans leading-relaxed font-light">
                <strong>OTAM</strong> es la división especializada de Quinta Soledad en el diseño de vivencias transformadoras para empresas, marcas líderes y celebraciones institucionales.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-cantera-200">
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Team Building</span>
                </div>
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Wellness Laboral</span>
                </div>
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Cenas Capitulares</span>
                </div>
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Cultura & Arte</span>
                </div>
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Integración</span>
                </div>
                <div className="flex items-center gap-2 bg-charcoal-900 p-2 rounded-lg border border-charcoal-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>A la Medida</span>
                </div>
              </div>
              <div className="pt-2">
                <WhatsAppButton
                  message={WA_MESSAGES.otamEmpresarial}
                  text="Diseñar Experiencia Corporativa con OTAM"
                  variant="gold"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-gold-500/30 photo-zoomable cursor-zoom-in">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos01.jpeg"
                  alt="Eventos corporativos y conferencias con OTAM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Galería Integrada de Eventos Empresariales OTAM (8 Fotografías, sin título) */}
          <div className="pt-6 sm:pt-8 border-t border-charcoal-800/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos08.jpeg"
                  alt="Conferencias y proyecciones audiovisuales corporativas en Quinta Soledad"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos06.jpeg"
                  alt="Bienvenida y registro a convenciones empresariales en la casona"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos09.jpeg"
                  alt="Cenas capitulares y eventos institucionales de gala"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos14.jpeg"
                  alt="Dinámicas de team building e integración laboral en jardines centenarios"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos18.jpeg"
                  alt="Reuniones de consejo y sesiones de trabajo directivas en Quinta Soledad"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos20.jpeg"
                  alt="Montajes institucionales y convenciones corporativas"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos24.jpeg"
                  alt="Convivencia y networking profesional en espacios patrimoniales"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-500/25 shadow-md photo-zoomable cursor-zoom-in group">
                <Image
                  src="/images/eventos-empresariales/ccqs_eventos_corporativos17.jpeg"
                  alt="Experiencias empresariales y eventos al aire libre en jardines de Quinta Soledad"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
