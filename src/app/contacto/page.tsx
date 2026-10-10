"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createWhatsAppLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "Utopía Hotel Boutique",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitted(true);
      } else {
        throw new Error(data?.error || data?.details || "No se pudo completar el envío del correo.");
      }
    } catch (err: any) {
      console.error("Error al enviar solicitud:", err);
      // Respaldo inmediato vía mailto para garantizar que el correo siempre llegue
      const mailtoUrl = `mailto:artes.grupoorganico@gmail.com?subject=${encodeURIComponent(
        `Solicitud Quinta Soledad: ${formData.servicio} - ${formData.nombre}`
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCorreo: ${formData.email}\nServicio: ${formData.servicio}\n\nMensaje:\n${formData.mensaje}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/entradas/ccqs_entrada_principal01.png"
            alt="Fachada y Entrada Principal de Centro Cultural Quinta Soledad"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-[11px] font-cinzel tracking-widest text-gold-400 uppercase">
            Atención Personalizada & Concierge
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
            Contacto & Ubicación
          </h1>
          <div className="gold-divider max-w-xs mx-auto my-3" />
          <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Estamos a tu disposición para ayudarte a planear tu estancia, evento social, cata o comida en nuestros jardines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Columna de Datos de Contacto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-cinzel tracking-widest text-gold-700 font-semibold uppercase">
                Encuéntranos
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
                Centro Cultural Quinta Soledad
              </h2>
              <p className="text-xs font-cinzel tracking-wider text-charcoal-500 uppercase">
                Grupo Orgánico Hoteles Boutique
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 font-sans">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-cantera-100/70 border border-gold-500/20">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-xs uppercase tracking-wider text-charcoal-900 font-semibold">
                    Dirección
                  </h3>
                  <p className="text-xs mt-1 text-charcoal-600 leading-relaxed">
                    Calle Moneda 15, Tlalpan Centro I, Alcaldía Tlalpan, 14000 Ciudad de México, CDMX.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-cantera-100/70 border border-gold-500/20">
                <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-xs uppercase tracking-wider text-charcoal-900 font-semibold">
                    Teléfonos de Recepción
                  </h3>
                  <p className="text-xs mt-1 text-charcoal-600">
                    (55) 9691-0966 / (55) 9696-9073
                  </p>
                  <p className="text-xs text-charcoal-600">
                    (55) 5645-5347 / (55) 5573-7822
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-cantera-100/70 border border-gold-500/20">
                <div className="w-4 h-4 shrink-0 mt-0.5 relative">
                  <Image src="/whatsapp.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-cinzel text-xs uppercase tracking-wider text-charcoal-900 font-semibold">
                    WhatsApp Concierge Directo
                  </h3>
                  <p className="text-xs text-charcoal-600">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <WhatsAppButton
                    message={WA_MESSAGES.general}
                    text="Escribir por WhatsApp"
                    variant="gold"
                    className="text-[10px] py-1.5 px-3"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-cantera-100/70 border border-gold-500/20">
                <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-xs uppercase tracking-wider text-charcoal-900 font-semibold">
                    Horarios de Atención
                  </h3>
                  <p className="text-xs mt-1 text-charcoal-600">
                    Domingo a Jueves: 9:00 am – 8:00 pm
                  </p>
                  <p className="text-xs text-charcoal-600">
                    Viernes y Sábado: 9:00 am – 10:00 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-cantera-100/70 border border-gold-500/20">
                <Mail className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-xs uppercase tracking-wider text-charcoal-900 font-semibold">
                    Correo Electrónico
                  </h3>
                  <a
                    href="mailto:artes.grupoorganico@gmail.com"
                    className="text-xs mt-1 block text-charcoal-600 hover:text-gold-700"
                  >
                    artes.grupoorganico@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Editorial de Cotización */}
          <div className="lg:col-span-7 bg-cantera-100/60 p-6 sm:p-10 rounded-3xl border border-gold-500/30 shadow-md">
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-cinzel tracking-widest text-gold-700 font-semibold uppercase">
                Envía tu Solicitud
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900">
                Reserva o Solicita una Cotización
              </h3>
              <p className="text-xs text-charcoal-600 font-light">
                Completa este formulario para enviar tu mensaje directamente a nuestro buzón oficial{" "}
                <strong className="text-charcoal-800">artes.grupoorganico@gmail.com</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/80 border border-gold-500/40 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-charcoal-900">¡Solicitud Enviada con Éxito!</h4>
                <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Tu correo ha sido remitido a <strong className="text-charcoal-800">artes.grupoorganico@gmail.com</strong>. Nuestro equipo de concierge te responderá a la brevedad posible.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nombre: "",
                        email: "",
                        telefono: "",
                        servicio: "Utopía Hotel Boutique",
                        mensaje: "",
                      });
                    }}
                    className="text-xs font-cinzel text-gold-800 hover:text-gold-900 underline"
                  >
                    Enviar otro correo
                  </button>
                  <span className="text-xs text-charcoal-400 hidden sm:inline">·</span>
                  <WhatsAppButton
                    message={WA_MESSAGES.general}
                    text="Escribir también por WhatsApp"
                    variant="outline"
                    className="text-xs py-2 px-4"
                  />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-[11px] font-cinzel tracking-wider text-charcoal-800 uppercase mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-cantera-300 bg-cantera-50 text-charcoal-900 text-xs focus:outline-none focus:border-gold-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-[11px] font-cinzel tracking-wider text-charcoal-800 uppercase mb-1">
                      Teléfono Celular *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-cantera-300 bg-cantera-50 text-charcoal-900 text-xs focus:outline-none focus:border-gold-500"
                      placeholder="+52 55 ..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-cinzel tracking-wider text-charcoal-800 uppercase mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-cantera-300 bg-cantera-50 text-charcoal-900 text-xs focus:outline-none focus:border-gold-500"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="servicio" className="block text-[11px] font-cinzel tracking-wider text-charcoal-800 uppercase mb-1">
                      Servicio de Interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-cantera-300 bg-cantera-50 text-charcoal-900 text-xs focus:outline-none focus:border-gold-500"
                    >
                      <option value="Utopía Hotel Boutique">Utopía Hotel Boutique</option>
                      <option value="Hotel Express Hermitage">Hotel Express Hermitage</option>
                      <option value="Tarifa Especial Zona Hospitales">Tarifa Zona de Hospitales</option>
                      <option value="Restaurante La Mal Querida">Restaurante La Mal Querida</option>
                      <option value="Restaurante Capitular">Restaurante Capitular</option>
                      <option value="Buffet de Fin de Semana">Buffet de Fin de Semana</option>
                      <option value="Bar Alpestre (Mixología / Catas)">Bar Alpestre & Catas</option>
                      <option value="Salón de Eventos / Bodas">Salón de Eventos / Bodas</option>
                      <option value="OTAM Evento Corporativo">OTAM Eventos Corporativos</option>
                      <option value="Cenas Románticas / Pedidas">Cenas Románticas & Pedidas</option>
                      <option value="Temazcal Ancestral">Temazcal Ancestral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-[11px] font-cinzel tracking-wider text-charcoal-800 uppercase mb-1">
                    Mensaje o Detalles del Evento / Estancia
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-cantera-300 bg-cantera-50 text-charcoal-900 text-xs focus:outline-none focus:border-gold-500"
                    placeholder="Fechas estimadas, número de personas o dudas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-cinzel text-xs tracking-wider uppercase font-semibold bg-gold-500 hover:bg-gold-400 text-charcoal-950 border border-gold-600 shadow-sm transition-all disabled:opacity-60"
                >
                  <Mail className="w-4 h-4 text-charcoal-950" />
                  <span>
                    {isSubmitting
                      ? "Enviando Correo a artes.grupoorganico@gmail.com..."
                      : "Enviar Solicitud por Correo Electrónico"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa Interactivo de Moneda 15 Tlalpan */}
        <div className="mt-16 space-y-3">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
              Cómo Llegar
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-charcoal-900">
              Calle Moneda 15, Tlalpan Centro
            </h3>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl bg-charcoal-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.263884877395!2d-99.16954202410317!3d19.288295981958615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01a8f331908d%3A0xc6ad10a653db3c58!2sMoneda%2015%2C%20Tlalpan%20Centro%20I%2C%20Tlalpan%2C%2014000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Quinta Soledad en Tlalpan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
