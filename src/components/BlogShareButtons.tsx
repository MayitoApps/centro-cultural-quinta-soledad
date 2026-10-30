"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle } from "lucide-react";

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

export default function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Te recomiendo este artículo de Centro Cultural Quinta Soledad: "${title}"\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={shareWhatsApp}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-cantera-100 hover:bg-gold-500/10 text-charcoal-700 hover:text-charcoal-900 text-xs font-sans transition-colors"
        title="Compartir por WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-cantera-100 hover:bg-gold-500/10 text-charcoal-700 hover:text-charcoal-900 text-xs font-sans transition-colors"
        title="Copiar enlace"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-gold-700 font-medium">¡Copiado!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-charcoal-500" />
            <span className="hidden sm:inline">Copiar enlace</span>
          </>
        )}
      </button>
    </div>
  );
}

