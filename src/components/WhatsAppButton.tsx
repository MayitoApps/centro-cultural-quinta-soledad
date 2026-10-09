import React from "react";
import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  text: string;
  className?: string;
  variant?: "light" | "gold" | "dark" | "outline";
}

export default function WhatsAppButton({
  message,
  text,
  className = "",
  variant = "light",
}: WhatsAppButtonProps) {
  const url = createWhatsAppLink(message);

  let variantStyles = "bg-cantera-50 hover:bg-gold-400 text-charcoal-950 border border-charcoal-800/20 shadow-sm";
  if (variant === "gold") {
    variantStyles = "bg-gold-500 hover:bg-gold-400 text-charcoal-950 border border-gold-600 shadow-sm";
  } else if (variant === "dark") {
    variantStyles = "bg-cantera-100 hover:bg-gold-400 text-charcoal-950 border border-cantera-300 shadow-sm";
  } else if (variant === "outline") {
    variantStyles = "bg-transparent hover:bg-cantera-100 text-charcoal-900 border border-charcoal-900/40";
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-cinzel text-[11px] tracking-wider uppercase font-semibold transition-all duration-300 hover:shadow-md ${variantStyles} ${className}`}
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={16}
        height={16}
        className="w-4 h-4 object-contain shrink-0"
        style={{ width: 16, height: 16, maxWidth: 16, maxHeight: 16 }}
      />
      <span>{text}</span>
    </a>
  );
}
