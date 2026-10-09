"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Sparkles } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
}

export default function GlobalImageLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Close lightbox
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsZoomed(false);
  }, []);

  // Previous image
  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  // Next image
  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  // Helper to extract clean original high-res src from Next.js image url
  const extractCleanSrc = (rawSrc: string): string => {
    try {
      if (rawSrc.includes("/_next/image")) {
        const urlObj = new URL(rawSrc, window.location.origin);
        const original = urlObj.searchParams.get("url");
        if (original) return decodeURIComponent(original);
      }
    } catch {
      // fallback
    }
    return rawSrc;
  };

  // Global document click delegator
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find if clicked element is an <img> or inside a zoomable container
      const img = target.tagName === "IMG" ? (target as HTMLImageElement) : target.closest("img");
      if (!img) return;

      // Exclude navigation, headers, and small UI icons
      if (img.closest("header") || img.closest("nav")) return;
      if (img.closest("[data-no-lightbox]") || img.classList.contains("no-lightbox")) return;

      // Filter out small icons (e.g., whatsapp button icon, tiny avatars)
      const rect = img.getBoundingClientRect();
      if (rect.width < 45 || rect.height < 45) return;
      if (img.naturalWidth > 0 && img.naturalWidth < 45) return;

      const rawSrc = img.currentSrc || img.src;
      if (!rawSrc) return;

      // Prevent navigation if the image is wrapped in a link
      e.preventDefault();
      e.stopPropagation();

      const clickedSrc = extractCleanSrc(rawSrc);

      // Collect all eligible content images on the current page for gallery navigation
      const allPageImgs = Array.from(document.querySelectorAll<HTMLImageElement>("img")).filter((el) => {
        if (el.closest("header") || el.closest("nav")) return false;
        if (el.closest("[data-no-lightbox]") || el.classList.contains("no-lightbox")) return false;
        const r = el.getBoundingClientRect();
        return r.width >= 45 && r.height >= 45 && (el.naturalWidth >= 45 || el.naturalWidth === 0);
      });

      const uniqueList: LightboxImage[] = [];
      const seenSrcs = new Set<string>();

      allPageImgs.forEach((el) => {
        const s = extractCleanSrc(el.currentSrc || el.src);
        if (s && !seenSrcs.has(s)) {
          seenSrcs.add(s);
          uniqueList.push({
            src: s,
            alt: el.alt || "Fotografía de Centro Cultural Quinta Soledad",
            title: el.title || el.alt || undefined,
          });
        }
      });

      // Find current clicked index in unique list
      let foundIndex = uniqueList.findIndex((item) => item.src === clickedSrc || clickedSrc.includes(item.src) || item.src.includes(clickedSrc));
      if (foundIndex === -1) {
        uniqueList.unshift({
          src: clickedSrc,
          alt: img.alt || "Fotografía de Centro Cultural Quinta Soledad",
        });
        foundIndex = 0;
      }

      setImages(uniqueList);
      setCurrentIndex(foundIndex);
      setIsZoomed(false);
      setIsOpen(true);
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-charcoal-950/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotografía en pantalla completa"
    >
      {/* TOP BAR */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gold-500/20 bg-charcoal-950/70 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-gold-400 font-cinzel text-xs tracking-wider uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Centro Cultural Quinta Soledad</span>
            <span className="sm:hidden">Quinta Soledad</span>
          </div>
          <span className="text-cantera-400 text-xs font-cinzel">|</span>
          <span className="text-cantera-300 text-xs font-cinzel tracking-widest">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom toggle button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full text-cantera-200 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
            title={isZoomed ? "Reducir tamaño" : "Ampliar zoom"}
            aria-label={isZoomed ? "Reducir zoom" : "Ampliar zoom"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="p-2 rounded-full text-cantera-100 hover:text-gold-400 hover:bg-gold-500/20 transition-all border border-gold-500/30"
            title="Cerrar visor (Esc)"
            aria-label="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* CENTER IMAGE DISPLAY */}
      <div
        className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden cursor-zoom-out"
        onClick={(e) => {
          // If clicked the background (not the image itself), close
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        {/* Previous Image Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3.5 rounded-full bg-charcoal-900/80 hover:bg-gold-500 text-cantera-100 hover:text-charcoal-950 border border-gold-500/30 shadow-2xl transition-all duration-200 hover:scale-105"
            aria-label="Fotografía anterior"
            title="Fotografía anterior (Tecla ←)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Main Photograph */}
        <div
          className={`relative transition-all duration-300 max-w-[92vw] max-h-[78vh] flex items-center justify-center ${
            isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[76vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-gold-500/30 select-none animate-in zoom-in-95 duration-200"
          />
        </div>

        {/* Next Image Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3.5 rounded-full bg-charcoal-900/80 hover:bg-gold-500 text-cantera-100 hover:text-charcoal-950 border border-gold-500/30 shadow-2xl transition-all duration-200 hover:scale-105"
            aria-label="Siguiente fotografía"
            title="Siguiente fotografía (Tecla →)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* BOTTOM CAPTION & CONTROLS */}
      <footer className="px-4 sm:px-6 py-3.5 border-t border-gold-500/20 bg-charcoal-950/80 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-cantera-100 font-serif italic max-w-3xl truncate">
          &quot;{currentImage.alt}&quot;
        </p>
        <div className="flex items-center gap-3 text-[10px] text-cantera-400 font-cinzel tracking-wider uppercase">
          <span className="hidden md:inline">Usa las teclas ← → para navegar</span>
          <span>·</span>
          <span>Esc o clic para cerrar</span>
        </div>
      </footer>
    </div>
  );
}
