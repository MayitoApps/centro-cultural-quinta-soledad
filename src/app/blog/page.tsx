import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen, Compass, Trees, Landmark } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Crónicas de Tlalpan | Historias, Guías y Secretos de CDMX Sur",
  description: "Explora nuestras crónicas y guías sobre Tlalpan: qué hacer en el centro histórico, senderismo en el Bosque de Tlalpan y Fuentes Brotantes, arquitectura y leyendas de 1870.",
  alternates: {
    canonical: "https://www.centroculturalquintasoledad.com/blog",
  },
  openGraph: {
    title: "Blog & Crónicas de Tlalpan | Centro Cultural Quinta Soledad",
    description: "Guías locales, patrimonio novohispano, naturaleza y secretos del sur de la Ciudad de México narrados desde el corazón de Tlalpan.",
    url: "https://www.centroculturalquintasoledad.com/blog",
    siteName: "Centro Cultural Quinta Soledad",
    images: [
      {
        url: "https://www.centroculturalquintasoledad.com/images/blog/centro-historico-tlalpan.jpg",
        width: 1200,
        height: 630,
        alt: "Centro Histórico de Tlalpan - Fachada colonial y Plaza de la Constitución",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Crónicas de Tlalpan | Centro Cultural Quinta Soledad",
    description: "Guías locales, senderismo en el sur y las leyendas de las casonas históricas de Tlalpan.",
    images: ["https://www.centroculturalquintasoledad.com/images/blog/centro-historico-tlalpan.jpg"],
  },
};

export default function BlogIndexPage() {
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Naturaleza & Bienestar":
        return <Trees className="w-3.5 h-3.5 text-olive-600" />;
      case "Historia & Patrimonio":
        return <Landmark className="w-3.5 h-3.5 text-gold-700" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-gold-700" />;
    }
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog & Crónicas de Tlalpan",
    "url": "https://www.centroculturalquintasoledad.com/blog",
    "description": "Historias, guías de viaje, senderismo, arquitectura virreinal y leyendas del sur de la Ciudad de México.",
    "publisher": {
      "@type": "Organization",
      "name": "Centro Cultural Quinta Soledad",
      "url": "https://www.centroculturalquintasoledad.com",
      "logo": "https://www.centroculturalquintasoledad.com/quinta-soledad.png",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": BLOG_POSTS.map((post, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://www.centroculturalquintasoledad.com/blog/${post.slug}`,
        "name": post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="bg-cantera-50 text-charcoal-900 min-h-screen">
        {/* Header Hero Banner */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-charcoal-950 text-cantera-50 overflow-hidden border-b border-gold-500/20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog/casona-historica-tlalpan.jpg"
              alt="Casona señorial histórica y jardines centenarios en Tlalpan Centro"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-[11px] font-cinzel tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5 text-gold-400" />
              Crónicas, Rutas & Secretos
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cantera-50 tracking-tight leading-tight">
              Blog de Quinta Soledad
            </h1>
            <div className="gold-divider max-w-xs mx-auto my-3" />
            <p className="text-cantera-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
              Historias pausadas, paseos por calles empedradas, naturaleza viva y la magia de habitar el sur de la Ciudad de México con alma y calma.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20 space-y-16">
          {/* Featured Post Card */}
          {featuredPost && (
            <section className="group bg-white rounded-3xl overflow-hidden border border-gold-500/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] overflow-hidden">
                  <Image
                    src={featuredPost.heroImage}
                    alt={featuredPost.heroImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-cinzel tracking-widest uppercase text-gold-300 border border-gold-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Publicación Destacada
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 font-sans">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 text-[10px] font-cinzel uppercase font-semibold">
                        {getCategoryIcon(featuredPost.category)}
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-600" />
                        {featuredPost.readingTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        {featuredPost.publishedFormatted}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-950 leading-tight group-hover:text-gold-700 transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans font-light">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-cantera-200">
                    <span className="text-[11px] font-cinzel text-charcoal-600 uppercase tracking-wider">
                      Por {featuredPost.author.name}
                    </span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-cinzel tracking-wider uppercase font-semibold text-gold-700 hover:text-gold-800 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Leer Crónica</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Remaining Posts Grid */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold block">
                  Artículos & Guías
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-900 mt-1">
                  Crónicas del Sur de la Ciudad
                </h3>
              </div>
              <span className="text-xs text-charcoal-500 font-sans">
                {BLOG_POSTS.length} publicaciones disponibles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-3xl overflow-hidden border border-gold-500/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-charcoal-950/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30 flex items-center gap-1.5">
                      {getCategoryIcon(post.category)}
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-[11px] text-charcoal-500 font-sans">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-600" />
                          {post.readingTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gold-600" />
                          {post.publishedFormatted}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-serif text-charcoal-950 leading-snug group-hover:text-gold-700 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

                      <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-cantera-200 flex items-center justify-between">
                      <span className="text-[10px] font-cinzel text-charcoal-500 uppercase tracking-wider">
                        {post.author.role}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider uppercase font-semibold text-gold-700 hover:text-gold-800 transition-colors"
                      >
                        <span>Leer Más</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Invitation Banner */}
          <section className="bg-charcoal-950 text-cantera-50 rounded-3xl p-8 sm:p-12 border border-gold-500/30 text-center space-y-5 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <span className="text-[10px] font-cinzel tracking-widest text-gold-400 uppercase font-semibold">
                Centro Cultural Quinta Soledad
              </span>
              <h3 className="text-xl sm:text-3xl font-serif text-cantera-50">
                ¿Planeando una visita al sur de la Ciudad de México?
              </h3>
              <p className="text-xs sm:text-sm text-cantera-300 font-sans font-light leading-relaxed">
                Descubre un refugio de 1870 donde el arte, la gastronomía y la calma porfiriana se encuentran en Calle Moneda 15, Tlalpan Centro.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/hoteles"
                  className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
                >
                  Conoce Nuestros Hoteles Boutique
                </Link>
                <Link
                  href="/nuestra-gastronomia"
                  className="px-6 py-2.5 rounded-full border border-gold-500/40 hover:bg-white/10 text-cantera-100 font-cinzel text-xs uppercase tracking-wider font-medium transition-all"
                >
                  Explora Restaurantes & Bares
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

