export const SITE_METADATA = {
  title: "Centro Cultural Quinta Soledad | Hotel Boutique, Arte & Eventos en Tlalpan",
  description: "Casona histórica de 1870 en Tlalpan, CDMX. Hotel boutique Utopía & Express Hermitage, alta gastronomía mexicana, bar speakeasy Alpestre, más de 12 salones para eventos y temazcal ancestral.",
  siteUrl: "https://www.centroculturalquintasoledad.com",
  ogImage: "https://www.centroculturalquintasoledad.com/quinta-soledad.png",
  address: {
    streetAddress: "Calle Moneda 15",
    addressLocality: "Tlalpan Centro I, Tlalpan",
    addressRegion: "Ciudad de México",
    postalCode: "14000",
    addressCountry: "MX",
  },
  geo: {
    latitude: 19.2882,
    longitude: -99.1673,
  },
  telephones: ["+52 55 9691 0966", "+52 55 9696 9073", "+52 55 7455 5091"],
  openingHours: [
    "Mo-Th 09:00-20:00",
    "Fr-Sa 09:00-22:00",
    "Su 09:00-20:00",
  ],
  sameAs: [
    "https://www.instagram.com/centroculturalquintasoledad/",
    "https://www.facebook.com/p/Quinta-Soledad-100076248199447/",
    "https://www.gohb.com.mx/",
  ],
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Hotel", "CivicStructure", "EventVenue"],
        "@id": `${SITE_METADATA.siteUrl}/#organization`,
        "name": "Centro Cultural Quinta Soledad",
        "url": SITE_METADATA.siteUrl,
        "logo": `${SITE_METADATA.siteUrl}/quinta-soledad.png`,
        "image": `${SITE_METADATA.siteUrl}/quinta-soledad.png`,
        "description": SITE_METADATA.description,
        "telephone": "+52 55 7455 5091",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_METADATA.address.streetAddress,
          "addressLocality": SITE_METADATA.address.addressLocality,
          "addressRegion": SITE_METADATA.address.addressRegion,
          "postalCode": SITE_METADATA.address.postalCode,
          "addressCountry": "MX",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SITE_METADATA.geo.latitude,
          "longitude": SITE_METADATA.geo.longitude,
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "Grupo Orgánico Hoteles Boutique",
          "url": "https://www.gohb.com.mx/",
        },
        "sameAs": SITE_METADATA.sameAs,
        "priceRange": "$$$",
        "currenciesAccepted": "MXN, USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Guest Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Speakeasy Cocktail Bar", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Traditional Temazcal", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Over 12 Historic Event Halls", "value": true },
        ],
      },
      {
        "@type": "Restaurant",
        "@id": `${SITE_METADATA.siteUrl}/#lamalquerida`,
        "name": "Restaurante La Mal Querida",
        "url": `${SITE_METADATA.siteUrl}/nuestra-gastronomia#la-mal-querida`,
        "servesCuisine": "Traditional Mexican",
        "priceRange": "$$",
        "telephone": "+52 55 7455 5091",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_METADATA.address.streetAddress,
          "addressLocality": SITE_METADATA.address.addressLocality,
          "addressRegion": SITE_METADATA.address.addressRegion,
          "postalCode": SITE_METADATA.address.postalCode,
          "addressCountry": "MX",
        },
      },
      {
        "@type": "Restaurant",
        "@id": `${SITE_METADATA.siteUrl}/#restaurant`,
        "name": "Restaurante Capitular",
        "url": `${SITE_METADATA.siteUrl}/nuestra-gastronomia#capitular`,
        "servesCuisine": "Mexican Contemporary",
        "priceRange": "$$",
        "telephone": "+52 55 7455 5091",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_METADATA.address.streetAddress,
          "addressLocality": SITE_METADATA.address.addressLocality,
          "addressRegion": SITE_METADATA.address.addressRegion,
          "postalCode": SITE_METADATA.address.postalCode,
          "addressCountry": "MX",
        },
      },
      {
        "@type": "BarOrPub",
        "@id": `${SITE_METADATA.siteUrl}/#bar`,
        "name": "Bar Alpestre Speakeasy",
        "url": `${SITE_METADATA.siteUrl}/nuestra-gastronomia#bar-alpestre`,
        "telephone": "+52 55 7455 5091",
      }
    ],
  };
}
