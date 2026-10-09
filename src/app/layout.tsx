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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationSchema();

  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cantera-50 text-charcoal-900 antialiased min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-charcoal-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <GlobalImageLightbox />
        <Analytics />
      </body>
    </html>
  );
}
