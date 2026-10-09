import React from "react";
import { Sparkles, ExternalLink } from "lucide-react";

export default function OrigenSpaSection() {
  return (
    <section className="py-16 bg-cantera-100 border-y border-gold-500/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cantera-50 border border-gold-500/30 rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-cinzel tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Bienestar & Rituales de Sanación
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
              Origen Centro Holístico y Spa
            </h3>
            <p className="text-sm sm:text-base text-charcoal-700 font-sans leading-relaxed">
              En Centro Cultural Quinta Soledad contamos con los servicios y rituales de sanación de <strong>Origen Centro Holístico y Spa</strong>. Descubre un espacio creado para reconectar con tu esencia a través de masajes holísticos, terapias corporales y bienestar integral.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.origencentroholisticoyspa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline inline-flex items-center gap-2 text-xs px-6 py-3.5 tracking-widest whitespace-nowrap"
            >
              <span>Conoce Origen Spa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
