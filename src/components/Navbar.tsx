"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, BookOpen, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

interface NavChild {
  href: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  href?: string;
  label: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/hoteles", label: "Hoteles" },
  { href: "/nuestra-gastronomia", label: "Gastronomía & Mixología" },
  { href: "/eventos", label: "Eventos y Espacios" },
  { href: "/momentos", label: "Momentos" },
  { href: "/nuestra-historia", label: "Historia" },
  {
    label: "Quiénes Somos",
    children: [
      {
        href: "/quienes-somos",
        label: "¿Quiénes Somos?",
        description: "Manifiesto, ubicación & pet friendly",
        icon: Compass,
      },
      {
        href: "/blog",
        label: "Blog",
        description: "Crónicas, guías & secretos de Tlalpan",
        icon: BookOpen,
      },
    ],
  },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDesktopDropdownOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav-dark py-3.5 shadow-lg shadow-black/40 border-b border-gold-500/20"
          : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5 sm:py-6 border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
        {/* Left Column: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="group flex items-center shrink-0 relative z-10">
            <div className="relative w-[80px] h-[19px] sm:w-[92px] sm:h-[21px] shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/quinta-soledad-blanco.png"
                alt="Centro Cultural Quinta Soledad"
                fill
                sizes="95px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center Column: Navegación de escritorio con Dropdown */}
        <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3.5 2xl:gap-5 shrink-0">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const isChildActive = item.children.some(
                (child) => pathname === child.href || (child.href === "/blog" && pathname.startsWith("/blog"))
              );

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                    aria-expanded={desktopDropdownOpen}
                    className={`inline-flex items-center gap-1 text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] font-cinzel tracking-wider uppercase transition-colors whitespace-nowrap py-1.5 relative group ${
                      isChildActive || desktopDropdownOpen
                        ? "text-gold-400 font-bold"
                        : "text-cantera-100/80 hover:text-gold-300 font-medium"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        desktopDropdownOpen ? "rotate-180 text-gold-400" : "text-cantera-200/70 group-hover:text-gold-300"
                      }`}
                    />
                    {isChildActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {desktopDropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-64 p-2 rounded-2xl bg-charcoal-950/98 backdrop-blur-2xl border border-gold-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] space-y-1">
                        {item.children.map((child) => {
                          const isActive =
                            pathname === child.href ||
                            (child.href === "/blog" && pathname.startsWith("/blog"));
                          const Icon = child.icon;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                                isActive
                                  ? "bg-gold-500/15 border border-gold-500/30 text-gold-300"
                                  : "hover:bg-white/5 border border-transparent text-cantera-100/90 hover:text-gold-300"
                              }`}
                            >
                              {Icon && (
                                <div
                                  className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${
                                    isActive
                                      ? "bg-gold-500 text-charcoal-950"
                                      : "bg-white/5 text-gold-400 group-hover:bg-gold-500/20"
                                  }`}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-cinzel tracking-wider uppercase font-semibold">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-[10px] text-cantera-300/70 font-sans font-light leading-snug mt-0.5">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`text-[9.5px] xl:text-[10.5px] 2xl:text-[11.5px] font-cinzel tracking-wider uppercase transition-colors whitespace-nowrap py-1.5 relative ${
                  isActive
                    ? "text-gold-400 font-bold"
                    : "text-cantera-100/80 hover:text-gold-300 font-medium"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Column: CTA Reservar & Hamburguesa Móvil */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500 text-cantera-50 hover:text-charcoal-950 text-[10.5px] uppercase font-cinzel tracking-wider font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(197,168,128,0.3)]"
          >
            <span>Reservar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-cantera-50 hover:text-gold-400 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal-950/98 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                const isChildActive = item.children.some(
                  (child) => pathname === child.href || (child.href === "/blog" && pathname.startsWith("/blog"))
                );

                return (
                  <div key={item.label} className="border-b border-white/10 py-1">
                    <button
                      type="button"
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className={`w-full text-xs font-cinzel tracking-wider uppercase py-2.5 transition-colors flex items-center justify-between ${
                        isChildActive ? "text-gold-400 font-bold" : "text-cantera-100/80 hover:text-gold-300"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {isChildActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileSubmenuOpen ? "rotate-180 text-gold-400" : "text-cantera-300/70"
                        }`}
                      />
                    </button>

                    {/* Submenu Móvil */}
                    {mobileSubmenuOpen && (
                      <div className="pl-3 pb-2 space-y-1.5 border-l-2 border-gold-500/40 ml-2 animate-in fade-in slide-in-from-top-1 duration-200">
                        {item.children.map((child) => {
                          const isActive =
                            pathname === child.href ||
                            (child.href === "/blog" && pathname.startsWith("/blog"));
                          const Icon = child.icon;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-colors ${
                                isActive
                                  ? "bg-gold-500/20 text-gold-300 font-bold"
                                  : "text-cantera-200/80 hover:text-gold-300 hover:bg-white/5"
                              }`}
                            >
                              {Icon && <Icon className="w-3.5 h-3.5 text-gold-400" />}
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`text-xs font-cinzel tracking-wider uppercase py-2.5 border-b border-white/10 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-gold-400 font-bold"
                      : "text-cantera-100/80 hover:text-gold-300"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold-500/40 bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs uppercase font-cinzel tracking-wider font-semibold transition-all duration-300 shadow-sm active:scale-[0.98]"
            >
              <span>Reservar</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-center text-[10px] text-cantera-300/70 font-sans tracking-wide">
            Calle Moneda 15, Tlalpan Centro · Casona Histórica de 1870
          </div>
        </div>
      )}
    </header>
  );
}
