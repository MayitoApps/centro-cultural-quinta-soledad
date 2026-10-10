import React from "react";
import { ExternalLink, Compass } from "lucide-react";

export default function GrupoOrganicoSection() {
  return (
    <section className="py-16 md:py-20 bg-charcoal-950 text-cantera-50 relative overflow-hidden border-b border-gold-500/20">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-cinzel tracking-widest uppercase">
            <Compass className="w-3 h-3" />
            Hospitalidad con Alma
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cinzel tracking-wider text-cantera-50 uppercase leading-snug">
            DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Cinematic Video Player */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 mb-12 bg-charcoal-900">
          <iframe
            src="https://www.youtube-nocookie.com/embed/r2tnnrp-G6Y?rel=0&modestbranding=1&playsinline=1&controls=1&showinfo=0&iv_load_policy=3"
            title="Universo de Grupo Orgánico Hoteles Boutique"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Text Description */}
        <div className="max-w-2xl mx-auto text-center space-y-4 text-cantera-200 font-sans leading-relaxed text-xs sm:text-sm font-light">
          <p className="text-base sm:text-lg font-serif text-gold-300 italic">
            Un universo de destinos, experiencias y momentos inolvidables.
          </p>

          <p>
            Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
          </p>

          <p>
            Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
          </p>

          <div className="py-1 space-y-1 text-gold-400 font-cinzel tracking-wider text-[11px] uppercase">
            <p>Cada destino tiene su propia esencia.</p>
            <p>Cada espacio, una historia por vivir.</p>
            <p>Cada experiencia, un momento para recordar.</p>
          </div>

          <p className="text-cantera-100 font-medium text-sm pt-1">
            Todo forma parte del Universo de Grupo Orgánico.
          </p>

          {/* Button to Grupo Orgánico */}
          <div className="pt-4">
            <a
              href="https://www.gohb.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center gap-2 px-6 py-2.5 text-[10px] tracking-widest shadow-md"
            >
              <span>Conoce Grupo Orgánico Hoteles Boutique</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
