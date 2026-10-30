import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Check,
  Compass,
  Trees,
  Landmark,
  Lightbulb,
  Quote,
  History,
  Bed,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import BlogShareButtons from "@/components/BlogShareButtons";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Centro Cultural Quinta Soledad",
    };
  }

  const postUrl = `https://www.centroculturalquintasoledad.com/blog/${post.slug}`;
  const imageUrl = `https://www.centroculturalquintasoledad.com${post.heroImage}`;

  return {
    title: `${post.metaTitle} | Centro Cultural Quinta Soledad`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      siteName: "Centro Cultural Quinta Soledad",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
      locale: "es_MX",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Centro Cultural Quinta Soledad"],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://www.centroculturalquintasoledad.com/blog/${post.slug}`;
  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is typeof post => Boolean(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": postUrl,
        },
        "headline": post.title,
        "description": post.metaDescription,
        "inLanguage": "es-MX",
        "mainEntityOfPage": postUrl,
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt,
        "articleSection": post.category,
        "keywords": post.keywords.join(", "),
        "image": {
          "@type": "ImageObject",
          "url": `https://www.centroculturalquintasoledad.com${post.heroImage}`,
          "caption": post.heroImageAlt,
        },
        "author": {
          "@type": "Organization",
          "name": post.author.name,
          "url": "https://www.centroculturalquintasoledad.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Centro Cultural Quinta Soledad",
          "url": "https://www.centroculturalquintasoledad.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.centroculturalquintasoledad.com/quinta-soledad.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.centroculturalquintasoledad.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.centroculturalquintasoledad.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": postUrl,
          },
        ],
      },
    ],
  };

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-cantera-50 text-charcoal-900 min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="pt-24 sm:pt-28 pb-4 bg-charcoal-950 border-b border-gold-500/20">
          <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-1.5 text-[10.5px] sm:text-xs font-cinzel tracking-wider text-cantera-300/80 overflow-x-auto whitespace-nowrap py-1"
            >
              <Link href="/" className="hover:text-gold-300 transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3 h-3 text-gold-500/50 shrink-0" />
              <Link href="/blog" className="hover:text-gold-300 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3 h-3 text-gold-500/50 shrink-0" />
              <span className="text-gold-400 font-semibold truncate max-w-[220px] sm:max-w-md">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="relative py-12 sm:py-16 bg-charcoal-950 text-cantera-50 border-b border-gold-500/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-[10.5px] font-cinzel tracking-widest uppercase">
              {getCategoryIcon(post.category)}
              {post.category}
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-cantera-50 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-cantera-200 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              {post.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-cantera-300/80 font-sans border-t border-white/10 pt-4">
              <span className="text-cantera-100 font-medium">
                {post.author.name}
              </span>
              <span className="hidden sm:inline text-gold-500/40">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                {post.publishedFormatted}
              </span>
              <span className="hidden sm:inline text-gold-500/40">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image Container */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 -mt-8 sm:-mt-12 relative z-20">
          <figure className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30 bg-charcoal-900">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </figure>
          <figcaption className="text-center text-[11px] text-charcoal-500 mt-2.5 font-sans italic">
            {post.heroImageAlt}
          </figcaption>
        </div>

        {/* Main Article Body & Sidebar */}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
            {/* Sticky Sidebar on Desktop */}
            <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              {/* Table of Contents */}
              <div className="lg:sticky lg:top-28 bg-white p-6 sm:p-7 rounded-3xl border border-gold-500/30 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-cantera-200 pb-3">
                  <h3 className="text-xs uppercase tracking-widest text-gold-700 font-cinzel font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    Índice de Contenido
                  </h3>
                  <span className="text-[10px] text-charcoal-400 font-sans">
                    {post.tableOfContents.length} temas
                  </span>
                </div>

                <nav aria-label="Secciones del artículo">
                  <ul className="space-y-2 text-xs font-sans">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block py-1 text-charcoal-600 hover:text-gold-700 transition-colors leading-snug"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Share Box */}
                <div className="pt-3 border-t border-cantera-200 flex items-center justify-between">
                  <span className="text-[11px] font-cinzel text-charcoal-500 uppercase tracking-wider">
                    Compartir
                  </span>
                  <BlogShareButtons title={post.title} url={postUrl} />
                </div>

                {/* Quick Concierge Info Box */}
                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-cantera-100 border border-gold-500/20 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-cinzel text-charcoal-900 font-semibold uppercase">
                      <MapPin className="w-3.5 h-3.5 text-gold-600" />
                      Visita Quinta Soledad
                    </div>
                    <p className="text-[11px] text-charcoal-600 font-sans leading-relaxed">
                      Calle Moneda 15, Tlalpan Centro. Casona de 1870 con hoteles boutique, restaurante, jardines y spa.
                    </p>
                    <WhatsAppButton
                      message={post.hotelRecommendation.whatsappMessage}
                      text="Escribir a Concierge"
                      variant="gold"
                      className="w-full text-[11px] py-2"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
              {/* Excerpt Lead Paragraph */}
              <div className="p-6 sm:p-8 rounded-3xl bg-cantera-100/80 border border-gold-500/30">
                <p className="text-base sm:text-lg font-serif text-charcoal-900 leading-relaxed italic">
                  &ldquo;{post.excerpt}&rdquo;
                </p>
              </div>

              {/* Dynamic Sections */}
              <div className="space-y-12 sm:space-y-16">
                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-5"
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-950 leading-tight">
                      {section.title}
                    </h2>

                    <div className="space-y-4 text-xs sm:text-sm md:text-base text-charcoal-700 leading-relaxed font-sans font-light">
                      {section.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Section Callout if present */}
                    {section.callout && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-gold-500 border-y border-r border-gold-500/20 shadow-sm space-y-2 my-6">
                        <div className="flex items-center gap-2 text-xs font-cinzel tracking-wider uppercase font-semibold text-gold-800">
                          {section.callout.type === "tip" && <Lightbulb className="w-4 h-4 text-gold-600" />}
                          {section.callout.type === "quote" && <Quote className="w-4 h-4 text-gold-600" />}
                          {section.callout.type === "history" && <History className="w-4 h-4 text-gold-600" />}
                          <span>{section.callout.title || "Nota de Interés"}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-800 font-sans italic leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Section Highlights List */}
                    {section.highlightList && (
                      <div className="bg-cantera-100/60 p-5 rounded-2xl border border-gold-500/20 space-y-2.5 my-4">
                        <span className="text-[11px] font-cinzel tracking-widest uppercase text-charcoal-900 font-semibold block">
                          Puntos Clave:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700 font-sans">
                          {section.highlightList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Section Image */}
                    {section.image && (
                      <figure className="my-6 space-y-2">
                        <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-gold-500/20">
                          <Image
                            src={section.image.src}
                            alt={section.image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 800px"
                            className="object-cover"
                          />
                        </div>
                        {section.image.caption && (
                          <figcaption className="text-center text-[11px] text-charcoal-500 italic font-sans">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </section>
                ))}
              </div>

              {/* NATURAL HOTEL RECOMMENDATION (EL FINAL NATURAL Y ELEGANTE) */}
              <section
                id={post.tableOfContents[post.tableOfContents.length - 1].id}
                className="scroll-mt-28 bg-gradient-to-b from-charcoal-950 to-charcoal-900 text-cantera-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-500/30 shadow-2xl space-y-8"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[10.5px] font-cinzel tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    {post.hotelRecommendation.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-cantera-50 leading-tight">
                    {post.hotelRecommendation.title}
                  </h3>
                  <p className="text-xs font-cinzel tracking-widest text-gold-400 uppercase font-medium">
                    {post.hotelRecommendation.subtitle}
                  </p>
                </div>

                {/* Storytelling natural */}
                <div className="space-y-4 text-xs sm:text-sm text-cantera-200 font-sans font-light leading-relaxed border-l-2 border-gold-500/40 pl-4 sm:pl-6">
                  {post.hotelRecommendation.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Hotel Card Showcase */}
                <div className="bg-charcoal-900/90 rounded-2xl border border-gold-500/30 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative h-56 sm:h-64 w-full rounded-xl overflow-hidden shadow-md border border-gold-500/20">
                    <Image
                      src={post.hotelRecommendation.image}
                      alt={post.hotelRecommendation.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-charcoal-950/90 px-2.5 py-1 rounded-full text-[9.5px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30">
                      Casona de 1870
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-serif text-cantera-50">
                        {post.hotelRecommendation.hotelName}
                      </h4>
                      <p className="text-xs text-gold-400 font-cinzel tracking-wider">
                        {post.hotelRecommendation.roomType}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-serif font-bold text-gold-300">
                        {post.hotelRecommendation.priceFormatted}
                      </span>
                      <span className="text-[11px] text-cantera-300/80 font-sans">
                        {post.hotelRecommendation.priceNote}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-cantera-200 font-sans">
                      {post.hotelRecommendation.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={post.hotelRecommendation.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all shadow-md active:scale-[0.98]"
                      >
                        <span>{post.hotelRecommendation.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <WhatsAppButton
                        message={post.hotelRecommendation.whatsappMessage}
                        text="Consultar por WhatsApp"
                        variant="gold"
                        className="text-xs py-2.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center text-[11px] text-cantera-400 font-sans">
                  Ubicación: Calle Moneda 15, Tlalpan Centro · A unos pasos de la Plaza de la Constitución y a minutos de Bosque de Tlalpan.
                </div>
              </section>

              {/* Bottom Share & Back */}
              <div className="pt-6 border-t border-cantera-200 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-cinzel tracking-wider uppercase font-semibold text-charcoal-700 hover:text-gold-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver a todas las crónicas</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-cinzel text-charcoal-500 uppercase tracking-wider">
                    ¿Te gustó este artículo?
                  </span>
                  <BlogShareButtons title={post.title} url={postUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-cantera-100/60 border-t border-gold-500/20 py-16">
            <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
              <div className="text-center space-y-2">
                <span className="text-[11px] font-cinzel tracking-widest text-gold-700 uppercase font-semibold">
                  Continúa Leyendo
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-charcoal-900">
                  Otras Crónicas de Tlalpan que te Pueden Interesar
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="group bg-white rounded-3xl overflow-hidden border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.heroImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider text-gold-300 border border-gold-500/30">
                        {related.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[11px] text-charcoal-500 font-sans flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold-600" />
                          {related.readingTime}
                        </span>
                        <h4 className="text-base sm:text-lg font-serif text-charcoal-950 leading-snug group-hover:text-gold-700 transition-colors">
                          <Link href={`/blog/${related.slug}`}>
                            {related.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-charcoal-600 font-sans font-light line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-cantera-200">
                        <Link
                          href={`/blog/${related.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider uppercase font-semibold text-gold-700 hover:text-gold-800 transition-colors"
                        >
                          <span>Leer crónica</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

