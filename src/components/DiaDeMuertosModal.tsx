"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ArrowRight, Flame, Sparkles, Utensils, MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const POPUP_STORAGE_KEY = "gohb_seen_ccqs_ddm";
const OPEN_DELAY_MS = 1300;

export default function DiaDeMuertosModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const handleOpen = useCallback(() => {
    setIsRendered(true);
    // Double RAF / small timeout to allow CSS transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsRendered(false);
    }, 320);

    try {
      sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  }, []);

  // Keyboard and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  // Expose global opener & check session storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { openDiaDeMuertosModal?: () => void }).openDiaDeMuertosModal = () => {
        handleOpen();
      };
    }

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(POPUP_STORAGE_KEY) === "true";
    } catch {
      alreadySeen = false;
    }

    if (!alreadySeen) {
      const timer = setTimeout(() => {
        handleOpen();
      }, OPEN_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [handleOpen]);

  if (!isRendered) return null;

  const ddmWhatsAppMessage =
    "Hola, vi los eventos de Día de Muertos 2026 en el Centro Cultural Quinta Soledad y me gustaría recibir más detalles y reservar.";

  return (
    <div
      id="gohb-modal-ccqs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ddm-modal-title"
      className={`fixed inset-0 z-[9999999] flex items-center justify-center p-3 sm:p-5 transition-all duration-300 ease-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop con desenfoque cálido */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#0c0907]/85 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
        aria-hidden="true"
      />

      {/* Contenedor Modal de Lujo */}
      <div
        className={`relative z-10 w-full max-w-[540px] max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#161210] border border-[#d9822b]/50 p-6 sm:p-8 text-[#f5ebe1] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_45px_rgba(217,130,43,0.25)] transition-all duration-300 ease-out transform ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#d9822b #1a1512",
        }}
      >
        {/* Resplandor decorativo de cempasúchil en la parte superior */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-[radial-gradient(ellipse_at_top,rgba(217,130,43,0.3)_0%,rgba(184,74,41,0.12)_50%,transparent_80%)] rounded-t-3xl"
          aria-hidden="true"
        />

        {/* Botón de Cerrar */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/5 hover:bg-[#d9822b] border border-[#d9822b]/40 text-[#f5ebe1] hover:text-[#161210] flex items-center justify-center transition-all duration-200 hover:rotate-90 hover:scale-105"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado */}
        <div className="relative text-center mb-6 pt-1">
          {/* Badge festivo con fuego y cempasúchil */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d9822b]/15 border border-[#d9822b]/50 text-[#f59e42] text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.15em] mb-3 shadow-[0_0_15px_rgba(217,130,43,0.2)]">
            <Flame className="w-3.5 h-3.5 text-[#f59e42] animate-pulse" />
            <span>Día de Muertos 2026 · Tlalpan Centro</span>
          </div>

          <h2
            id="ddm-modal-title"
            className="font-cinzel text-xl sm:text-2xl md:text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fbd59a] to-[#d9822b] leading-tight mb-2 tracking-wide drop-shadow-sm"
          >
            Recordar es volver a encontrarnos
          </h2>
          <p className="text-xs sm:text-[13.5px] text-[#bcaaa0] font-sans leading-relaxed max-w-md mx-auto">
            La memoria viva entre cantera colonial y aromas de otoño en el corazón de Tlalpan.
          </p>
        </div>

        {/* Lista de Eventos Clave */}
        <div className="space-y-2.5 mb-6">
          {/* Evento 1 */}
          <div className="group relative bg-[#231b17]/80 hover:bg-[#2c221d] border border-[#b84a29]/30 hover:border-[#d9822b]/70 border-l-[3.5px] border-l-[#d9822b] rounded-xl p-3.5 sm:p-4 text-left transition-all duration-200 hover:translate-x-1 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#f59e42] uppercase">
                31 de Octubre · 7:00 PM · $1,700 MXN
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#d9822b]/70 group-hover:text-[#f59e42] transition-colors shrink-0" />
            </div>
            <h3 className="font-cinzel text-sm sm:text-[15px] font-bold text-[#f5ebe1] mb-1 group-hover:text-white transition-colors">
              Cena de Gala &quot;La Ofrenda&quot;
            </h3>
            <p className="text-[11.5px] sm:text-xs text-[#b8a99e] font-sans leading-relaxed">
              Banquete capitular de 5 tiempos a la luz de las velas con maridaje de vinos mexicanos y mezcales ancestrales.
            </p>
          </div>

          {/* Evento 2 */}
          <div className="group relative bg-[#231b17]/80 hover:bg-[#2c221d] border border-[#b84a29]/30 hover:border-[#d9822b]/70 border-l-[3.5px] border-l-[#d9822b] rounded-xl p-3.5 sm:p-4 text-left transition-all duration-200 hover:translate-x-1 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#f59e42] uppercase">
                27 Oct – 2 Nov · Entrada Gratuita
              </span>
              <Flame className="w-3.5 h-3.5 text-[#d9822b]/70 group-hover:text-[#f59e42] transition-colors shrink-0" />
            </div>
            <h3 className="font-cinzel text-sm sm:text-[15px] font-bold text-[#f5ebe1] mb-1 group-hover:text-white transition-colors">
              Altar Monumental Comunitario
            </h3>
            <p className="text-[11.5px] sm:text-xs text-[#b8a99e] font-sans leading-relaxed">
              Entrada libre en el claustro colonial. Trae la foto de tu ser querido; veladoras y muro de dedicatorias disponibles.
            </p>
          </div>

          {/* Evento 3 */}
          <div className="group relative bg-[#231b17]/80 hover:bg-[#2c221d] border border-[#b84a29]/30 hover:border-[#d9822b]/70 border-l-[3.5px] border-l-[#d9822b] rounded-xl p-3.5 sm:p-4 text-left transition-all duration-200 hover:translate-x-1 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#f59e42] uppercase">
                Octubre y Noviembre · Restaurante
              </span>
              <Utensils className="w-3.5 h-3.5 text-[#d9822b]/70 group-hover:text-[#f59e42] transition-colors shrink-0" />
            </div>
            <h3 className="font-cinzel text-sm sm:text-[15px] font-bold text-[#f5ebe1] mb-1 group-hover:text-white transition-colors">
              Menú de Temporada Otoñal
            </h3>
            <p className="text-[11.5px] sm:text-xs text-[#b8a99e] font-sans leading-relaxed">
              Cocina mexicana de autor, pan de muerto horneado diariamente en casa y coctelería temática con flor de cempasúchil.
            </p>
          </div>
        </div>

        {/* Acciones & Botones */}
        <div className="space-y-2.5 text-center">
          {/* Botón Principal CTA */}
          <a
            id="gohb-cta-ccqs"
            href="https://dia-de-muertos-gohb.vercel.app/ccqs"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full py-3.5 px-6 rounded-xl font-cinzel text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#d9822b] via-[#e26b1d] to-[#b84a29] hover:from-[#e58d34] hover:to-[#c6522e] flex items-center justify-center gap-2 shadow-[0_6px_22px_rgba(217,130,43,0.45)] hover:shadow-[0_8px_30px_rgba(217,130,43,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Ver Programa y Reservar Quinta Soledad</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Botón Secundario: WhatsApp Inmediato */}
          <a
            href={createWhatsAppLink(ddmWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-sans text-[#d5c4a6] hover:text-white bg-white/5 hover:bg-white/10 border border-[#d9822b]/25 hover:border-[#d9822b]/50 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>¿Tienes dudas? Pregunta directo por WhatsApp</span>
          </a>

          <p className="text-[10.5px] text-[#9c8d82] font-sans pt-1">
            Cena capitular con cupo limitado · Altar abierto a todo el público
          </p>
        </div>
      </div>
    </div>
  );
}
