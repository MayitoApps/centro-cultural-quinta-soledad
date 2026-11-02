"use client";

import React, { useState, useEffect, useCallback } from "react";

const POPUP_ID = "quinta-soledad";
const STORAGE_KEY = `org_popup_${POPUP_ID}`;

export default function NavidadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClose = useCallback(() => {
    setIsActive(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    // Trigger transition after render
    setTimeout(() => {
      setIsActive(true);
    }, 20);
  }, []);

  useEffect(() => {
    // Expose close function for global compatibility
    if (typeof window !== "undefined") {
      (window as unknown as { closeOrganicoPopup?: (id: string) => void }).closeOrganicoPopup = (id: string) => {
        if (id === POPUP_ID) {
          handleClose();
        }
      };
      (window as unknown as { openNavidadModal?: () => void }).openNavidadModal = () => {
        handleOpen();
      };
    }

    let alreadySeen = false;
    try {
      alreadySeen = Boolean(sessionStorage.getItem(STORAGE_KEY));
    } catch {
      alreadySeen = false;
    }

    if (!alreadySeen) {
      const timer = setTimeout(() => {
        handleOpen();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [handleClose, handleOpen]);

  // Handle ESC key and scroll lock
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

  if (!isOpen) return null;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,600&family=Outfit:wght@400;500;600;700&display=swap"
      />

      <div
        id={`popup-${POPUP_ID}`}
        className={`org-modal-overlay ${isActive ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="org-modal-box">
          <div className="org-modal-glow"></div>
          <button
            type="button"
            className="org-close-btn"
            onClick={handleClose}
            aria-label="Cerrar"
          >
            &times;
          </button>

          <div className="org-campaign-badge">
            <span>✨ Temporada Navidad &amp; Fin de Año 2026</span>
          </div>

          <div className="org-hotel-label">
            Centro Cultural Quinta Soledad &bull; Tlalpan Centro, CDMX
          </div>

          <h2 className="org-title">
            Diciembre nos reúne.
            <span className="org-title-italic">Los momentos hacen el resto.</span>
          </h2>

          <div className="org-gold-divider"></div>

          <div className="org-event-highlight">
            Cena de Gala de Fin de Año &amp; Nochebuena
          </div>
          <p className="org-desc">
            Despide el 2026 en el encanto virreinal de Tlalpan con banquete gourmet de 4 tiempos, dúo versátil, DJ en vivo y batucada de Año Nuevo.
          </p>

          <div className="org-dates-bar">
            <span>📅 <strong>Fechas:</strong> 24 y 31 de Diciembre</span>
            <span>&bull;</span>
            <span>🍾 <strong>Cupos Limitados</strong></span>
          </div>

          <a
            href="https://navidad2026.vercel.app/#quinta-soledad"
            target="_blank"
            rel="noopener noreferrer"
            className="org-cta-btn"
            onClick={handleClose}
          >
            Ver Menús y Reservar Mesa &rarr;
          </a>

          <div>
            <button
              type="button"
              className="org-dismiss-link"
              onClick={handleClose}
            >
              Continuar navegando en el sitio
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .org-modal-overlay {
          position: fixed; inset: 0; background: rgba(14, 21, 19, 0.86);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          z-index: 999999; display: flex; align-items: center; justify-content: center;
          padding: 18px; opacity: 0; transition: opacity 0.4s ease;
          font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .org-modal-overlay.active { opacity: 1; }
        .org-modal-box {
          position: relative; background: linear-gradient(160deg, #2D1018 0%, #172421 65%, #101917 100%);
          border: 1px solid rgba(215, 161, 92, 0.35); border-radius: 24px;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.8), 0 0 30px rgba(215, 161, 92, 0.2);
          max-width: 490px; width: 100%; padding: 34px 28px 28px; color: #f4f3ec;
          box-sizing: border-box; text-align: center; transform: scale(0.92) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .org-modal-overlay.active .org-modal-box { transform: scale(1) translateY(0); }
        .org-modal-glow {
          position: absolute; top: -65px; left: 50%; transform: translateX(-50%); width: 260px; height: 140px;
          background: radial-gradient(circle, rgba(215, 161, 92, 0.35) 0%, rgba(63, 21, 33, 0.5) 45%, transparent 75%);
          pointer-events: none;
        }
        .org-close-btn {
          position: absolute; top: 14px; right: 14px; width: 34px; height: 34px;
          border-radius: 50%; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(215, 161, 92, 0.25);
          color: #f4f3ec; font-size: 20px; line-height: 1; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease; z-index: 2;
        }
        .org-close-btn:hover { background: rgba(215, 161, 92, 0.25); border-color: #D7A15C; color: #F0D399; transform: rotate(90deg); }
        .org-campaign-badge {
          display: inline-flex; align-items: center; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          font-weight: 700; color: #F0D399; background: rgba(63, 21, 33, 0.8); border: 1px solid rgba(215, 161, 92, 0.4);
          padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .org-hotel-label { font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(240, 211, 153, 0.9); margin-bottom: 8px; font-weight: 600; }
        .org-title { font-family: "Cormorant Garamond", Georgia, serif; font-size: 30px; line-height: 1.15; font-weight: 400; color: #ffffff; margin: 0 0 4px; }
        .org-title-italic {
          display: block; font-style: italic; font-weight: 600;
          background: linear-gradient(135deg, #F0D399 0%, #D7A15C 50%, #B37D32 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: 2px;
        }
        .org-gold-divider { width: 70px; height: 1px; background: linear-gradient(90deg, transparent, rgba(215, 161, 92, 0.6), transparent); margin: 14px auto; }
        .org-event-highlight { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #F0D399; font-weight: 600; margin-bottom: 8px; }
        .org-desc { font-size: 14px; line-height: 1.55; color: rgba(244, 243, 236, 0.82); margin: 0 0 16px; }
        .org-dates-bar {
          display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 12px; color: #F0D399;
          background: rgba(18, 27, 24, 0.7); padding: 9px 14px; border-radius: 10px; border: 1px solid rgba(215, 161, 92, 0.25); margin-bottom: 22px;
        }
        .org-cta-btn {
          display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 15px 24px;
          background: linear-gradient(135deg, #F0D399 0%, #D7A15C 50%, #B37D32 100%); color: #172421 !important;
          font-size: 15px; font-weight: 700; letter-spacing: 0.04em; text-decoration: none !important; border-radius: 999px;
          box-shadow: 0 8px 24px rgba(215, 161, 92, 0.35); transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-sizing: border-box; cursor: pointer;
        }
        .org-cta-btn:hover { background: linear-gradient(135deg, #ffffff 0%, #F0D399 50%, #D7A15C 100%); box-shadow: 0 12px 30px rgba(215, 161, 92, 0.55); transform: translateY(-2px); color: #121c19 !important; }
        .org-dismiss-link { display: inline-block; margin-top: 14px; font-size: 12px; color: rgba(244, 243, 236, 0.55); text-decoration: underline; cursor: pointer; background: none; border: none; padding: 4px; }
        .org-dismiss-link:hover { color: #F0D399; }
        @media (max-width: 480px) {
          .org-modal-box { padding: 28px 20px 22px; border-radius: 20px; }
          .org-title { font-size: 26px; }
          .org-desc { font-size: 13px; }
        }
      `}} />
    </>
  );
}
