"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Bed, Utensils, GlassWater, Sparkles, Building2, Flame } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const QUICK_OPTIONS = [
  { label: "Utopía Hotel Boutique", icon: Bed, msg: WA_MESSAGES.utopia },
  { label: "Hotel Express Hermitage", icon: Bed, msg: WA_MESSAGES.hermitageSencilla },
  { label: "Restaurante La Mal Querida", icon: Flame, msg: WA_MESSAGES.laMalQuerida },
  { label: "Restaurante Capitular & Buffet", icon: Utensils, msg: WA_MESSAGES.capitular },
  { label: "Mixología - Bar Alpestre", icon: GlassWater, msg: WA_MESSAGES.alpestre },
  { label: "Cotizar Salón / Evento", icon: Building2, msg: WA_MESSAGES.salonPierreDamian },
  { label: "Temazcal & Experiencias", icon: Sparkles, msg: WA_MESSAGES.temazcal },
];

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Concierge Drawer */}
      {open && (
        <div className="mb-3 w-80 sm:w-96 bg-charcoal-900 border border-gold-500/40 rounded-2xl shadow-2xl p-5 text-cantera-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-cinzel font-semibold">
                Concierge Quinta Soledad
              </p>
              <p className="text-[11px] text-cantera-400">Atención personalizada en vivo</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-cantera-400 hover:text-cantera-100 hover:bg-charcoal-800 transition-colors"
              aria-label="Cerrar opciones"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-1.5 max-h-72 overflow-y-auto">
            <p className="text-[11px] text-cantera-300 font-sans">
              ¿Qué experiencia deseas reservar o consultar?
            </p>
            {QUICK_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={createWhatsAppLink(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-charcoal-850 hover:bg-gold-500/10 border border-charcoal-700 hover:border-gold-500/40 text-xs transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-gold-400 group-hover:text-gold-300 shrink-0" />
                  <span className="text-cantera-200 group-hover:text-cantera-50 flex-1 truncate">
                    {opt.label}
                  </span>
                  <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={14}
                      height={14}
                      className="object-contain"
                      style={{ width: 14, height: 14 }}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-charcoal-800 flex justify-between items-center text-[10px] text-cantera-400">
            <span>Tel: {WHATSAPP_DISPLAY}</span>
            <a
              href={createWhatsAppLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:underline flex items-center gap-1.5"
            >
              <span>Conversación Libre</span>
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={12}
                height={12}
                className="object-contain"
                style={{ width: 12, height: 12 }}
              />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button: Only WhatsApp circular button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-300 shrink-0 group relative cursor-pointer"
        aria-label="WhatsApp Centro Cultural Quinta Soledad"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className="object-contain"
            style={{ width: 24, height: 24 }}
            priority
          />
        </div>
      </button>
    </div>
  );
}
