import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Analytics } from "@vercel/analytics/next";
import { SITE_METADATA, getOrganizationSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: "Centro Cultural Quinta Soledad | Hotel Boutique, Arte & Eventos en Tlalpan",
    template: "%s | Centro Cultural Quinta Soledad",
  },
  description: SITE_METADATA.description,
  keywords: [
    "Centro Cultural Quinta Soledad",
    "Hotel Boutique Tlalpan",
    "Utopía Hotel Boutique",
    "Hotel Express Hermitage",
    "Hospedaje Zona de Hospitales Tlalpan",
    "Restaurante Capitular",
    "Bar Alpestre Tlalpan",
    "Salones para eventos en Tlalpan",
    "Bodas boutique CDMX",
    "Casona porfiriana eventos",
    "Temazcal Tlalpan",
    "Grupo Orgánico Hoteles Boutique",
    "Pet friendly Tlalpan",
    "Eventos empresariales OTAM",
  ],
  authors: [{ name: "Grupo Orgánico Hoteles Boutique", url: "https://www.gohb.com.mx/" }],
  creator: "Centro Cultural Quinta Soledad",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_METADATA.siteUrl,
    title: "Centro Cultural Quinta Soledad | Explora, Conecta y Disfruta",
    description: SITE_METADATA.description,
    siteName: "Centro Cultural Quinta Soledad",
    images: [
      {
        url: "/quinta-soledad.png",
        width: 1200,
        height: 630,
        alt: "Centro Cultural Quinta Soledad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro Cultural Quinta Soledad",
    description: SITE_METADATA.description,
    images: ["/quinta-soledad.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_METADATA.siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

import GlobalImageLightbox from "@/components/GlobalImageLightbox";

// Modo fuera de servicio temporal (cambiar a false para reactivar el sitio completo)
const IS_OUT_OF_SERVICE = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationSchema();

  return (
    <html lang="es-MX" className="scroll-smooth bg-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased min-h-screen ${IS_OUT_OF_SERVICE ? "bg-black text-white overflow-hidden" : "bg-cantera-50 text-charcoal-900 flex flex-col font-sans selection:bg-gold-500 selection:text-charcoal-950"}`}>
        {IS_OUT_OF_SERVICE ? (
          <>
            <div
              className="fixed inset-0 z-[999999] bg-[#030407] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
              role="alert"
              aria-live="polite"
            >
              {/* Degradado tecnológico negro de fondo con iluminación radial profunda */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#131722_0%,_#090b10_45%,_#030407_85%,_#000000_100%)]" />

              {/* Halo sutil de luz tecnológica azulada/cian muy tenue */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-cyan-900/15 via-blue-950/20 to-indigo-950/15 rounded-full blur-[140px] pointer-events-none" />

              {/* Retícula / microgrid tecnológica con máscara radial */}
              <div
                className="absolute inset-0 opacity-[0.14] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                  maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 95%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 95%)",
                }}
              />

              {/* Contenido en primer plano */}
              <div className="relative z-10 flex flex-col items-center max-w-xl px-4">
                {/* Indicador de estado */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6 shadow-2xl">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                    Mantenimiento en curso
                  </span>
                </div>

                {/* Título principal con degradado metálico */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 leading-tight">
                  Sitio web fuera de servicio
                </h1>

                {/* Línea divisoria luminosa tecnológica */}
                <div className="w-28 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent my-6" />

                <p className="text-xs sm:text-sm text-zinc-500 font-mono tracking-wider">
                  Agradecemos tu comprensión. Volveremos pronto.
                </p>
              </div>
            </div>
            <div className="hidden" aria-hidden="true">
              {children}
            </div>
          </>
        ) : (
          <>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
            <GlobalImageLightbox />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
