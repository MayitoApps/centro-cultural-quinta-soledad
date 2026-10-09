import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createWhatsAppLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cantera-100 border-t border-gold-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-charcoal-800">
          {/* Col 1: Identidad & Historia */}
          <div className="space-y-5">
            <div className="relative w-44 h-12">
              <Image
                src="/quinta-soledad-blanco.png"
                alt="Centro Cultural Quinta Soledad"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-cantera-300 text-sm leading-relaxed font-sans font-light">
              Donde la historia porfiriana de 1870, la arquitectura neorrenacentista y la calidez de la hospitalidad mexicana se unen en el corazón del centro histórico de Tlalpan.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-gold-400 font-cinzel mb-1">
                Parte de la familia:
              </p>
              <a
                href="https://www.gohb.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cantera-100 hover:text-gold-300 transition-colors underline decoration-gold-500/40"
              >
                Grupo Orgánico Hoteles Boutique <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="pt-1">
              <a
                href="https://www.origencentroholisticoyspa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cantera-300 hover:text-gold-300 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 text-gold-400" />
                Origen Centro Holístico y Spa ↗
              </a>
            </div>
          </div>

          {/* Col 2: Navegación Editorial */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-cinzel font-semibold">
              Explora Quinta Soledad
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/hoteles" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Hoteles (Utopía & Hermitage)
                </Link>
              </li>
              <li>
                <Link href="/nuestra-gastronomia" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Gastronomía & Mixología (Capitular, La Mal Querida, Alpestre)
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Eventos y Espacios (Salones, Capilla & OTAM)
                </Link>
              </li>
              <li>
                <Link href="/momentos" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Momentos (Cenas Románticas & Eventos Sociales)
                </Link>
              </li>
              <li>
                <Link href="/nuestra-historia" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Nuestra Historia de 1870
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Quiénes Somos & Pet Friendly
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="text-cantera-300 hover:text-gold-300 transition-colors">
                  Comunidad Tlalpan & Guía Cultural
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios & Servicios */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-cinzel font-semibold">
              Horarios & Amenidades
            </h4>
            <div className="space-y-3 text-sm text-cantera-300 font-sans">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-cantera-100 font-medium">Horario de Servicio</p>
                  <p className="text-xs text-cantera-400">Domingo a Jueves: 9:00 am – 8:00 pm</p>
                  <p className="text-xs text-cantera-400">Viernes y Sábado: 9:00 am – 10:00 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-cantera-100 font-medium">Huéspedes & Visitantes</p>
                  <p className="text-xs text-cantera-400">Seguridad privada 24/7</p>
                  <p className="text-xs text-cantera-400">Estacionamiento sin costo para huéspedes</p>
                  <p className="text-xs text-cantera-400">Espacios Pet Friendly (Rotonda & Los Establos)</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={createWhatsAppLink(WA_MESSAGES.hospitales)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-gold-300 hover:text-gold-200 underline decoration-gold-500/50"
                >
                  Tarifas preferenciales: Zona de Hospitales Tlalpan ↗
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contacto Directo & Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-cinzel font-semibold">
              Ubicación & Concierge
            </h4>
            <div className="space-y-3 text-sm text-cantera-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cantera-300">
                  Calle Moneda 15, Tlalpan Centro I, Alcaldía Tlalpan, 14000 Ciudad de México, CDMX.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p>(55) 9691-0966 / (55) 9696-9073</p>
                  <p>(55) 5645-5347 / (55) 5573-7822</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:artes.grupoorganico@gmail.com"
                  className="text-xs text-cantera-300 hover:text-gold-300 transition-colors"
                >
                  artes.grupoorganico@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Directo */}
            <div className="pt-2">
              <WhatsAppButton
                message={WA_MESSAGES.general}
                text={`Concierge: ${WHATSAPP_DISPLAY}`}
                variant="gold"
                className="w-full text-xs py-2.5"
              />
            </div>

            {/* Redes Sociales */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://www.instagram.com/centroculturalquintasoledad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center text-cantera-300 hover:text-gold-300 hover:border-gold-400 transition-colors"
                aria-label="Instagram de Quinta Soledad"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/p/Quinta-Soledad-100076248199447/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center text-cantera-300 hover:text-gold-300 hover:border-gold-400 transition-colors"
                aria-label="Facebook de Quinta Soledad"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-cantera-400 gap-4">
          <p>
            © {new Date().getFullYear()} Centro Cultural Quinta Soledad. Todos los derechos reservados.
          </p>
          <p className="text-cantera-400/80">
            Un espacio con alma · Grupo Orgánico Hoteles Boutique · Ciudad de México
          </p>
        </div>
      </div>
    </footer>
  );
}
