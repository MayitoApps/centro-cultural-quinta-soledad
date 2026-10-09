"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-2.5 shadow-sm"
          : "bg-cantera-50/95 py-3 border-b border-cantera-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Compact Refined Logo */}
        <Link href="/" className="flex items-center group shrink-0 lg:w-[100px]">
          <div
            className="relative transition-transform duration-200 group-hover:scale-[1.02] shrink-0"
            style={{ width: "100px", height: "25px" }}
          >
            <Image
              src="/quinta-soledad.png"
              alt="Centro Cultural Quinta Soledad"
              fill
              sizes="100px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Centered Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-2.5 xl:space-x-4 flex-1 mx-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] xl:text-[10px] font-cinzel tracking-wider uppercase transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? "text-gold-700 font-bold"
                    : "text-charcoal-800 hover:text-gold-700 font-medium"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Spacer for Desktop to balance Logo and guarantee perfect center alignment */}
        <div className="hidden lg:block w-[100px] shrink-0" aria-hidden="true" />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-md text-charcoal-900 hover:text-gold-700 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-cantera-50 border-b border-gold-500/20 px-6 py-5 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-cinzel tracking-wider uppercase py-2 border-b border-cantera-200/50 ${
                    isActive ? "text-gold-700 font-bold" : "text-charcoal-800 hover:text-gold-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 text-center text-[10px] text-charcoal-500 font-sans">
            Calle Moneda 15, Tlalpan Centro · Casona Histórica de 1870
          </div>
        </div>
      )}
    </header>
  );
}
