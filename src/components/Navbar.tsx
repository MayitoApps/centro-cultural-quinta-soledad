"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { createWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/hoteles", label: "Hoteles" },
  { href: "/nuestra-gastronomia", label: "Gastronomía & Mixología" },
  { href: "/eventos", label: "Eventos y Espacios" },
  { href: "/momentos", label: "Momentos" },
  { href: "/nuestra-historia", label: "Historia" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav-dark py-3 shadow-lg shadow-black/40 border-b border-gold-500/20"
          : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Compact Refined Logo (Blanco para contraste sobre fondo transparente/oscuro) */}
        <Link href="/" className="flex items-center group shrink-0 lg:w-[125px]">
          <div
            className="relative transition-transform duration-200 group-hover:scale-[1.03] shrink-0"
            style={{ width: "115px", height: "28px" }}
          >
            <Image
              src="/quinta-soledad-blanco.png"
              alt="Centro Cultural Quinta Soledad"
              fill
              sizes="120px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Centered Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-3.5 2xl:space-x-4 flex-1 mx-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9.5px] xl:text-[10.5px] font-cinzel tracking-wider uppercase transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? "text-gold-400 font-bold"
                    : "text-cantera-100/80 hover:text-gold-300 font-medium"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Estilo Orgánico Hotel Boutique) */}
        <div className="hidden lg:flex items-center justify-end shrink-0 lg:w-[125px]">
          <a
            href={createWhatsAppLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-cantera-50 hover:text-charcoal-950 text-[10px] uppercase font-cinzel tracking-wider font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(197,168,128,0.3)]"
          >
            <span>Reservar</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-md text-cantera-50 hover:text-gold-400 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal-950/98 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-cinzel tracking-wider uppercase py-2.5 border-b border-white/10 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-gold-400 font-bold"
                      : "text-cantera-100/80 hover:text-gold-300"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              text="Reservar por WhatsApp"
              variant="gold"
              className="w-full text-xs py-3"
            />
          </div>
          <div className="pt-2 text-center text-[10px] text-cantera-300/70 font-sans tracking-wide">
            Calle Moneda 15, Tlalpan Centro · Casona Histórica de 1870
          </div>
        </div>
      )}
    </header>
  );
}
