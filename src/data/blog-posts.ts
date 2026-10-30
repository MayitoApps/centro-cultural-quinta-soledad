export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
  callout?: {
    type: "tip" | "quote" | "history";
    title?: string;
    text: string;
  };
  highlightList?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface HotelRecommendation {
  badge: string;
  title: string;
  subtitle: string;
  story: string[];
  hotelName: string;
  roomType: string;
  image: string;
  imageAlt: string;
  priceFormatted: string;
  priceNote: string;
  amenities: string[];
  bookingUrl: string;
  whatsappMessage: string;
  ctaText: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: "Guía & Turismo" | "Naturaleza & Bienestar" | "Historia & Patrimonio";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string; // ISO format
  publishedFormatted: string;
  updatedAt: string;
  readingTime: string;
  heroImage: string;
  heroImageAlt: string;
  excerpt: string;
  tableOfContents: { id: string; title: string }[];
  sections: BlogSection[];
  hotelRecommendation: HotelRecommendation;
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-hacer-en-tlalpan-centro-joyas-ocultas",
    title: "Qué hacer en Tlalpan Centro: 7 joyas ocultas que la mayoría de los turistas pasa por alto",
    subtitle: "Una caminata sosegada por el secreto mejor guardado del sur de la Ciudad de México: calles empedradas, cantera virreinal y jardines centenarios.",
    metaTitle: "Qué Hacer en Tlalpan Centro: 7 Joyas Ocultas y Guía Local CDMX",
    metaDescription: "Descubre qué hacer en Tlalpan Centro: quiosco porfiriano, Parroquia de San Agustín de 1532, Casa Frissac, Mercado de la Paz y callejones empedrados.",
    keywords: [
      "qué hacer en tlalpan centro",
      "tlalpan centro historico cdmx",
      "lugares para visitar en tlalpan",
      "turismo tlalpan cdmx",
      "san agustin de las cuevas",
      "casonas historicas de tlalpan",
      "parroquia de san agustin tlalpan",
      "mercado de la paz tlalpan",
      "fin de semana en tlalpan"
    ],
    category: "Guía & Turismo",
    author: {
      name: "Concierge Editorial",
      role: "Centro Cultural Quinta Soledad"
    },
    publishedAt: "2026-10-30T09:00:00.000Z",
    publishedFormatted: "30 de Octubre, 2026",
    updatedAt: "2026-10-30T09:00:00.000Z",
    readingTime: "7 min de lectura",
    heroImage: "/images/blog/centro-historico-tlalpan.jpg",
    heroImageAlt: "Fachada histórica de cantera con faroles y reloj en la Plaza de la Constitución de Tlalpan Centro",
    excerpt: "Lejos del bullicio urbano, el centro histórico de Tlalpan conserva la cadencia de un pueblo colonial detenido en el tiempo. Te compartimos 7 tesoros arquitectónicos y culturales para redescubrirlo a pie.",
    tableOfContents: [
      { id: "plaza-constitucion", title: "1. Plaza de la Constitución y su quiosco porfiriano" },
      { id: "parroquia-san-agustin", title: "2. Parroquia de San Agustín de las Cuevas: arte novohispano" },
      { id: "callejones-cantera", title: "3. Los callejones de cantera: Calle Moneda, Madero y Juárez" },
      { id: "casa-frissac", title: "4. Casa Frissac y la leyenda de Chucho el Roto" },
      { id: "mercado-de-la-paz", title: "5. Mercado de la Paz: el último mercado porfiriano vivo" },
      { id: "museo-historia", title: "6. Museo de Historia de Tlalpan y la primera estampilla postal" },
      { id: "jardines-secretos", title: "7. Portones de cedro y jardines interiores escondidos" },
      { id: "recomendacion-estancia", title: "La experiencia completa: hospedarte en una casona de 1870" }
    ],
    sections: [
      {
        id: "plaza-constitucion",
        title: "1. Plaza de la Constitución y su quiosco porfiriano de hierro fundido",
        paragraphs: [
          "Caminar por el corazón de Tlalpan es realizar una pausa instantánea al ritmo trepidante de la capital. La Plaza de la Constitución, flanqueada por laureles de la India y palmeras centenarias, conserva esa atmósfera provinciana de los antiguos pueblos del sur del Valle de México.",
          "En el centro de la plaza se yergue su quiosco octagonal de hierro forjado, traído a finales del siglo XIX durante el Porfiriato. Sentarse en una de sus bancas de herrería a primera hora de la mañana con un café de grano y observar a los libreros locales desplegar sus ediciones antiguas es uno de los rituales más apacibles que ofrece la Ciudad de México."
        ],
        callout: {
          type: "tip",
          title: "Consejo de Concierge",
          text: "Visita la plaza entre 9:00 y 11:00 am. La luz dorada se filtra entre las copas de los árboles proyectando sombras geométricas sobre el empedrado, ideal para fotografía de arquitectura."
        },
        image: {
          src: "/images/blog/kiosco-tlalpan-noche.jpg",
          alt: "Quiosco porfiriano iluminado con bancas clásicas en la Plaza de la Constitución de Tlalpan",
          caption: "El quiosco octagonal de hierro fundido en la Plaza de la Constitución de Tlalpan Centro."
        }
      },
      {
        id: "parroquia-san-agustin",
        title: "2. Parroquia de San Agustín de las Cuevas: cuatro siglos de arte novohispano",
        paragraphs: [
          "Fundada originalmente por frailes franciscanos en 1532 y posteriormente administrada por la orden dominica, la Parroquia de San Agustín de las Cuevas es el epicentro espiritual e histórico del barrio. Su fachada sobria esconde uno de los interiores más ricos del sur de la cuenca lacustre.",
          "Al cruzar su umbral de madera maciza, la vista es cautivada por sus retablos dorados de estilo barroco y churrigueresco, tallados en madera de cedro con baño de hoja de oro. Los lienzos del siglo XVII y XVIII que cuelgan en las capillas laterales narran pasajes bíblicos con una maestría lumínica que evoca el tenebrismo novohispano."
        ],
        highlightList: [
          "Retablo mayor de madera tallada en hoja de oro del siglo XVII.",
          "Pila bautismal monolítica labrada en una sola pieza de cantera.",
          "Claustro silencioso con arcadas de medio punto y jardineras de helechos autóctonos."
        ],
        image: {
          src: "/images/blog/parroquia-san-agustin-tlalpan.jpg",
          alt: "Fachada novohispana de la Parroquia de San Agustín de las Cuevas en Tlalpan Centro",
          caption: "La Parroquia de San Agustín de las Cuevas (1532), epicentro arquitectónico e histórico de Tlalpan Centro."
        }
      },
      {
        id: "callejones-cantera",
        title: "3. Los callejones de cantera: Calle Moneda, Madero y Juárez",
        paragraphs: [
          "La mayor parte de los visitantes permanece en la plaza central, ignorando que la verdadera alma de Tlalpan se recorre extraviándose por sus calles laterales. La Calle Moneda es uno de los pasajes mejor conservados del sur capitalino.",
          "Aquí no hay rascacielos ni anuncios de neón: los muros de piedra volcánica y cantera rosa se alternan con faroles de estilo clásico, portones claveteados y bugambilias púrpuras que desbordan los pretiles. Caminar por aquí al atardecer, cuando el aire de montaña comienza a enfriar la cantera calentada por el sol, es una experiencia casi cinematográfica."
        ],
        callout: {
          type: "history",
          title: "Dato Histórico",
          text: "En el siglo XIX, la Calle Moneda formaba parte del corredor aristocrático por el que transitaban carruajes que conectaban las huertas de Tlalpan con las calzadas virreinales hacia Coyoacán y San Ángel."
        }
      },
      {
        id: "casa-frissac",
        title: "4. Casa Frissac y la leyenda de Chucho el Roto",
        paragraphs: [
          "Ubicada en una de las esquinas de la plaza central, la majestuosa Casa Frissac data de finales del siglo XIX y fue residencia del banquero Jesús Pliego Frissac. Con su imponente escalinata de doble rampa y balcones señoriales, la propiedad es el escenario de una de las leyendas urbanas más populares de México: el romance secreto entre Jesús Arriaga ('Chucho el Roto') y Matilde Frissac.",
          "Hoy en día convertida en centro cultural, alberga exposiciones temporales de artes visuales, conferencias y recitales de música de cámara abiertos al público."
        ],
        image: {
          src: "/images/blog/casa-frissac-tlalpan.jpg",
          alt: "Fachada señorial de cantera rosa de Casa Frissac frente a la plaza de Tlalpan",
          caption: "La emblemática Casa Frissac en Tlalpan Centro, joya porfiriana ligada a la leyenda de Chucho el Roto."
        }
      },
      {
        id: "mercado-de-la-paz",
        title: "5. Mercado de la Paz: el último mercado porfiriano que sigue en pie",
        paragraphs: [
          "Inaugurado el 5 de mayo de 1900 durante el mandato de Porfirio Díaz, el Mercado de la Paz (o Mercado de Tlalpan) ostenta el título de ser el único inmueble de su tipo en la Ciudad de México que conserva intacta su estructura porfiriana original de ladrillo prensado y armaduras metálicas.",
          "Es una escala obligada para los amantes del sabor tradicional: tlacoyos de haba y frijol negro recién prensados al comal, aguas frescas de fruta de temporada y nieves artesanales batidas a mano en garrafas de madera, con sabores que van desde la tradicional guanábana y mamey hasta pétalos de rosa con mezcal."
        ],
        highlightList: [
          "Nieves artesanales de garrafa batidas al momento.",
          "Gorditas de chicharrón prensado y tlacoyos de maíz azul.",
          "Estructura metálica porfiriana de principios de siglo XX impecablemente preservada."
        ],
        image: {
          src: "/images/blog/mercado-la-paz-tlalpan.jpg",
          alt: "Mercado de la Paz de 1900 en Tlalpan Centro con fachada de ladrillo y arquería porfiriana",
          caption: "El Mercado de la Paz, fundado en 1900: el único mercado porfiriano original aún activo en la Ciudad de México."
        }
      },
      {
        id: "museo-historia",
        title: "6. Museo de Historia de Tlalpan: cuna de la correspondencia postal",
        paragraphs: [
          "Ubicado en la intersección de las calles Congreso y Morelos, este recinto fue sede de los poderes del Estado de México en 1827 cuando Tlalpan fue brevemente la capital estatal bajo el nombre de San Agustín de las Cuevas.",
          "En sus salas se exhibe la historia de cuando en 1856 se emitió aquí la primera estampilla postal de México, con la efigie de Miguel Hidalgo. Sus salas resguardan mobiliario de época, fotografías históricas y documentos fundacionales que explican cómo este rincón rural se convirtió en el polo cultural que es hoy."
        ]
      },
      {
        id: "jardines-secretos",
        title: "7. Portones de cedro y jardines interiores escondidos",
        paragraphs: [
          "La arquitectura de Tlalpan es de naturaleza introvertida: hacia la calle muestra muros macizos y postigos discretos, pero hacia el interior guarda oasis botánicos de una exuberancia inesperada. Detrás de los portones centenarios de las casonas descansan claustros con fuentes de cantera, fresnos centenarios, cedros gigantes y rotondas de jazmines.",
          "Estos espacios fueron concebidos para el recogimiento y la tertulia privada. El sonido del agua brotando de las fuentes de cantera atenúa cualquier vestigio del mundo exterior, creando microclimas donde la temperatura es un par de grados más fresca y el aire huele a tierra húmeda y azahares."
        ]
      }
    ],
    hotelRecommendation: {
      badge: "El Secreto Mejor Guardado de Tlalpan",
      title: "No te vayas con prisa: duerme dentro de una casona de 1870",
      subtitle: "Utopía Hotel Boutique · Centro Cultural Quinta Soledad",
      story: [
        "La mayoría de los visitantes comete el error de regresar con prisas a la ciudad para ganarle al tráfico vespertino de Insurgentes o Periférico. Al hacerlo, se pierden lo mejor: la noche serena de Tlalpan, cuando los faroles de hierro iluminan los callejones en silencio y el aire de montaña baja desde el Ajusco.",
        "Si quieres vivir Tlalpan como lo hacían los viajeros que buscaban las antiguas quintas de descanso, te sugerimos quedarte a dormir en Utopía Hotel Boutique, ubicado justo en el corazón del Centro Cultural Quinta Soledad, sobre la misma Calle Moneda 15.",
        "Aquí despiertas con el trino de los pájaros entre jardines centenarios, disfrutas de un desayuno continental incluido bajo los arcos de cantera y puedes degustar la cocina mexicana contemporánea de Restaurante Capitular o un cóctel de autor en el speakeasy Alpestre sin tener que salir a la calle."
      ],
      hotelName: "Utopía Hotel Boutique",
      roomType: "Suite Signature con Obras de Arte & Confort de Lujo",
      image: "/images/habitaciones/utopia/ccqs_utopia17.png",
      imageAlt: "Habitación Suite Signature de Utopía Hotel Boutique en Quinta Soledad Tlalpan",
      priceFormatted: "$1,392.00 MXN",
      priceNote: "Por noche · Impuestos y desayuno continental incluidos",
      amenities: [
        "Desayuno continental artesanal incluido",
        "Camas premium de alta gama con sábanas de algodón egipcio",
        "Batas de baño de felpa y amenidades botánicas",
        "Acceso directo a jardines centenarios y rotonda de lectura",
        "Seguridad privada 24/7 y estacionamiento sin costo para huéspedes",
        "Restaurante Capitular y Speakeasy Alpestre en el mismo recinto"
      ],
      bookingUrl: "https://booking.easy-rez.com/hotel-quinta-soledad/es/home",
      whatsappMessage: "¡Hola! Leí su artículo sobre qué hacer en Tlalpan Centro y me gustaría reservar una estancia en Utopía Hotel Boutique.",
      ctaText: "Consultar Disponibilidad de Habitación"
    },
    relatedSlugs: [
      "bosque-de-tlalpan-y-fuentes-brotantes-guia-naturaleza",
      "leyendas-y-secretos-de-las-casonas-de-tlalpan"
    ]
  },
  {
    slug: "bosque-de-tlalpan-y-fuentes-brotantes-guia-naturaleza",
    title: "El Bosque de Tlalpan y Fuentes Brotantes: Guía de naturaleza, senderismo y aire puro al sur de CDMX",
    subtitle: "Rutas entre encinos centenarios, manantiales vivos sobre roca volcánica del Xitle y el plan perfecto para oxigenar los sentidos sin salir de la ciudad.",
    metaTitle: "Bosque de Tlalpan y Fuentes Brotantes: Guía Senderismo y Naturaleza",
    metaDescription: "Guía completa del Bosque de Tlalpan y Parque Nacional Fuentes Brotantes: senderos, rutas para correr, manantiales, horarios y el mejor plan de desconexión.",
    keywords: [
      "bosque de tlalpan actividades",
      "senderismo bosque de tlalpan",
      "fuentes brotantes tlalpan",
      "parque nacional fuentes brotantes cdmx",
      "naturaleza al sur de cdmx",
      "lugares para correr tlalpan",
      "que hacer al aire libre cdmx",
      "escapada fin de semana naturaleza tlalpan",
      "reserva ecologica pedregal tlalpan"
    ],
    category: "Naturaleza & Bienestar",
    author: {
      name: "Concierge Editorial",
      role: "Centro Cultural Quinta Soledad"
    },
    publishedAt: "2026-10-30T09:15:00.000Z",
    publishedFormatted: "30 de Octubre, 2026",
    updatedAt: "2026-10-30T09:15:00.000Z",
    readingTime: "8 min de lectura",
    heroImage: "/images/blog/bosque-de-tlalpan-senderos.jpg",
    heroImageAlt: "Senderos arbolados y vegetación nativa en el Área Natural Protegida Bosque de Tlalpan",
    excerpt: "Dos reservas ecológicas incomparables conviven a minutos del centro de Tlalpan: el Bosque de Tlalpan y el Parque Nacional Fuentes Brotantes. Descubre cómo disfrutarlos al máximo y renovar tu energía.",
    tableOfContents: [
      { id: "oasis-pedregal", title: "1. Bosque de Tlalpan: 252 hectáreas sobre lava milenaria" },
      { id: "rutas-senderos", title: "2. Los 5 circuitos de senderismo y running" },
      { id: "fuentes-brotantes", title: "3. Parque Nacional Fuentes Brotantes: manantiales y leyendas" },
      { id: "fauna-flora", title: "4. Biodiversidad viva: qué animales y plantas observar" },
      { id: "consejos-visita", title: "5. Horarios, accesos y qué llevar a la ruta" },
      { id: "antojitos-locales", title: "6. Dónde recargar energía: gastronomía campestre" },
      { id: "recomendacion-hotel", title: "El cierre perfecto: spa, temazcal y descanso profundo" }
    ],
    sections: [
      {
        id: "oasis-pedregal",
        title: "1. Bosque de Tlalpan: 252 hectáreas sobre lava milenaria",
        paragraphs: [
          "Apenas cruzas los linderos del Bosque de Tlalpan, el bullicio metropolitano se extingue. Declarado Área Natural Protegida, este parque de 252 hectáreas descansa sobre el lecho de roca volcánica originado hace casi dos milenios tras la erupción del volcán Xitle.",
          "A diferencia de otros parques urbanos planos, aquí el relieve es quebrado y vigoroso: formaciones basálticas tapizadas de musgo, cañadas umbrías y tupidos bosques de encino, pino y matorral xerófilo. Es un enclave donde el aire tiene ese olor característico a resina fresca, tierra fértil y rocío matutino."
        ],
        callout: {
          type: "tip",
          title: "Aire puro garantizado",
          text: "Ubicado a más de 2,300 metros sobre el nivel del mar, el Bosque de Tlalpan funciona como el gran regulador térmico del sur de la ciudad, ofreciendo niveles de oxigenación óptimos antes del mediodía."
        }
      },
      {
        id: "rutas-senderos",
        title: "2. Los 5 circuitos de senderismo y running para cada ritmo",
        paragraphs: [
          "Tanto si buscas un trote aeróbico exigente como una caminata meditativa sin desniveles, el bosque cuenta con circuitos bien señalizados que se adaptan a cada condición física:",
          "La Pista de Arcilla (aproximadamente 886 metros) rodea la zona baja y es perfecta para corredores que cuidan el impacto en sus articulaciones. Para quienes buscan ganar altura, los senderos de montaña (Circuitos La Manzanita y El Tepehuate) ascienden suavemente entre los encinares hasta alcanzar miradores naturales que regalan vistas panorámicas del sur del Valle de México.",
          "Para una experiencia tranquila, la ruta interior de los Cedros permite caminar bajo copas tupidas que bloquean el sol incluso a mediodía, acompañados por el canto continuo de colibríes y carpinteros."
        ],
        highlightList: [
          "Circuito Plano de Arcilla: 886 metros de baja exigencia articular.",
          "Circuito La Manzanita: 1.5 km con desniveles moderados y suelo volcánico firme.",
          "Ruta Tepehuate: ascenso de 2.2 km recomendado para caminata deportiva y vista panorámica."
        ],
        image: {
          src: "/images/blog/fuentes-brotantes-parque.jpg",
          alt: "Árboles y caminos del Parque Nacional Fuentes Brotantes en Tlalpan",
          caption: "Senderos sombreados entre sauces y ahuehuetes en las estribaciones de la Sierra del Ajusco."
        }
      },
      {
        id: "fuentes-brotantes",
        title: "3. Parque Nacional Fuentes Brotantes: manantiales vivos y lago natural",
        paragraphs: [
          "A escasos 10 minutos del centro de Tlalpan se ubica una de las reservas forestales con mayor tradición hídrica de la capital: el Parque Nacional Fuentes Brotantes, decretado en 1936 por el presidente Lázaro Cárdenas para proteger los ojos de agua que brotan de las faldas de la Sierra del Ajusco.",
          "El gran protagonista del parque es su lago natural alimentado por manantiales cristalinos, donde conviven patos, gansos y peces bajo la sombra de sauces llorones y ahuehuetes. Los arroyos serpentean entre pequeños puentes rústicos de piedra, creando un paisaje bucólico que parece sacado de una pintura del siglo XIX."
        ],
        callout: {
          type: "history",
          title: "Historia Hídrica",
          text: "En la época colonial y decimonónica, los manantiales de Fuentes Brotantes alimentaban los acueductos que abastecían a las fábricas textiles de Tlalpan y a las huertas de las casonas señoriales."
        },
        image: {
          src: "/images/blog/fuentes-brotantes-lago.jpg",
          alt: "Lago natural con manantiales y patos en el Parque Nacional Fuentes Brotantes de Tlalpan",
          caption: "El lago natural de Fuentes Brotantes, oasis de agua dulce y calma en el sur de la Ciudad de México."
        }
      },
      {
        id: "fauna-flora",
        title: "4. Biodiversidad viva: qué observar durante tu caminata",
        paragraphs: [
          "El Pedregal de San Ángel y las estribaciones del Ajusco albergan una riqueza biológica sorprendente. En una sola mañana de caminata atenta es posible avistar cacomixtles norteños entre las hendiduras de la roca volcánica, ardillas de vientre rojo saltando entre las ramas y una fascinante variedad de aves rapaces y cantoras.",
          "En cuanto a flora, conviven especies endémicas adaptadas a la roca basáltica como el palo loco, siemprevivas, orquídeas terrestres y helechos de roca que resisten temporadas secas antes de reverdecer vigorosamente con las lluvias."
        ]
      },
      {
        id: "consejos-visita",
        title: "5. Consejos prácticos de visita para una mañana perfecta",
        paragraphs: [
          "Para disfrutar plenamente de ambas reservas, ten en cuenta las siguientes recomendaciones:",
          "Llega temprano: ambos parques abren sus accesos peatonales a las 6:00 am. Entre las 7:00 y las 9:30 am disfrutarás de una temperatura fresca (alrededor de 12-16 °C) y muy poca afluencia.",
          "Usa calzado de suela con dibujo o senderismo: la piedra volcánica puede ser resbaladiza si hay rocío matutino. Lleva una capa ligera de abrigo que puedas retirar al comenzar la caminata y un termo reutilizable para evitar generar residuos plásticos."
        ],
        highlightList: [
          "Horario ideal: 6:30 am a 10:30 am.",
          "Acceso gratuito en ambos parques.",
          "Uso obligatorio de correa si asistes con mascota en áreas permitidas de Fuentes Brotantes."
        ]
      },
      {
        id: "antojitos-locales",
        title: "6. Dónde recargar energía: gastronomía campestre y tradicional",
        paragraphs: [
          "Tras recorrer varios kilómetros entre los árboles, el apetito se despierta con fuerza. En las inmediaciones de Fuentes Brotantes encontrarás quioscos familiares donde señoras de la comunidad cocinan al comal de barro quesadillas de flor de calabaza, huitlacoche fresco, hongos de pino y cecina de Yecapixtla.",
          "Si prefieres un café de altura recién tostado y pan de masa madre en un entorno refinado, basta con dirigirte hacia Calle Moneda para disfrutar de las terrazas con jardín."
        ]
      }
    ],
    hotelRecommendation: {
      badge: "Plan de Fin de Semana Ecoturístico & Relax",
      title: "Convierte tu caminata en una escapada de bienestar absoluto",
      subtitle: "Hotel Express Hermitage & Origen Spa · Quinta Soledad",
      story: [
        "Después de una mañana de esfuerzo físico, respirar pino y recorrer senderos en la montaña, el cuerpo no pide regresar a lidiar con el tráfico urbano; pide descanso genuino, agua tibia y una comida reparadora.",
        "A sólo 8 minutos del bosque, en Centro Cultural Quinta Soledad, puedes complementar tu jornada al aire libre con una sesión de temazcal ancestral o un masaje descontracturante en Origen Centro Holístico y Spa.",
        "Para cerrar con broche de oro, hospédate en Hotel Express Hermitage: un alojamiento funcional, cómodo e impecable dentro del mismo complejo histórico, con camas Queen o King Size pensadas para un descanso profundo y tarifas sumamente accesibles. Despertarás renovado al día siguiente para desayunar en nuestros jardines."
      ],
      hotelName: "Hotel Express Hermitage",
      roomType: "Habitación Hermitage Queen / King",
      image: "/images/habitaciones/hermitage-doble/ccq_shermitage-doble03.png",
      imageAlt: "Habitación confortable de Hotel Express Hermitage en Quinta Soledad Tlalpan",
      priceFormatted: "Desde $928.00 MXN",
      priceNote: "Por noche · Habitación Queen / King con impuestos incluidos",
      amenities: [
        "Camas de descanso ergonómico Queen o King Size",
        "Smart TV con conexión satelital",
        "Conexión WiFi de alta velocidad en toda la propiedad",
        "Ubicación estratégica a minutos de Bosque de Tlalpan y Fuentes Brotantes",
        "Estacionamiento privado vigilado 24 horas",
        "Acceso directo a Origen Spa, Temazcal y Cafetería Los Establos"
      ],
      bookingUrl: "https://booking.easy-rez.com/hotel-quinta-soledad/es/home",
      whatsappMessage: "¡Hola! Leí su guía sobre el Bosque de Tlalpan y me gustaría información y reserva para una estancia en Hotel Express Hermitage.",
      ctaText: "Ver Tarifas y Reservar Habitación"
    },
    relatedSlugs: [
      "que-hacer-en-tlalpan-centro-joyas-ocultas",
      "leyendas-y-secretos-de-las-casonas-de-tlalpan"
    ]
  },
  {
    slug: "leyendas-y-secretos-de-las-casonas-de-tlalpan",
    title: "Leyendas y secretos de las casonas de Tlalpan: de retiros aristocráticos a refugios de paz",
    subtitle: "Muros de 1870, arquerías de cantera, tertulias a la luz de las velas y la historia viva que inspiró a cronistas y artistas durante generaciones.",
    metaTitle: "Leyendas y Casonas Históricas de Tlalpan: Secretos de 1870",
    metaDescription: "Descubre los secretos y leyendas de las casonas históricas de Tlalpan: retiros porfirianos de descanso, arquitectura de cantera rosa y pasajes ocultos.",
    keywords: [
      "casonas historicas de tlalpan",
      "leyendas de tlalpan cdmx",
      "historia de tlalpan san agustin de las cuevas",
      "casonas porfirianas tlalpan",
      "arquitectura colonial cdmx sur",
      "quintas de recreo porfiriato",
      "centro cultural quinta soledad historia",
      "mitos y leyendas sur cdmx"
    ],
    category: "Historia & Patrimonio",
    author: {
      name: "Concierge Editorial",
      role: "Centro Cultural Quinta Soledad"
    },
    publishedAt: "2026-10-30T09:30:00.000Z",
    publishedFormatted: "30 de Octubre, 2026",
    updatedAt: "2026-10-30T09:30:00.000Z",
    readingTime: "8 min de lectura",
    heroImage: "/images/blog/casona-historica-tlalpan.jpg",
    heroImageAlt: "Casona señorial histórica del siglo XIX con arcos de cantera y jardines en Tlalpan Centro",
    excerpt: "Durante el siglo XIX, Tlalpan era la villa predilecta de la élite mexicana para escapar del mundanal ruido. Conoce los misterios, pasadizos y detalles constructivos de sus quintas históricas.",
    tableOfContents: [
      { id: "villas-verano", title: "1. Las 'Quintas de Recreo': el escape de la aristocracia decimonónica" },
      { id: "arquitectura-cantera", title: "2. Muros de 60 cm y cantera rosa: el secreto del confort térmico" },
      { id: "leyendas-tuneles", title: "3. La leyenda de los túneles secretos y el tesoro de los arrieros" },
      { id: "refugios-conventuales", title: "4. De residencias señoriales a conventos de clausura y oración" },
      { id: "renacer-cultural", title: "5. El renacer cultural: preservar el patrimonio con vida cotidiana" },
      { id: "dormir-historia", title: "Vive la historia desde adentro: una noche en una casona de 1870" }
    ],
    sections: [
      {
        id: "villas-verano",
        title: "1. Las 'Quintas de Recreo': el escape de la aristocracia decimonónica",
        paragraphs: [
          "Durante la mayor parte del siglo XIX y hasta bien entrado el Porfiriato, la Ciudad de México era una urbe densa, húmeda y frecuentemente azotada por tolvaneras lacustres y fiebres. Para las familias acomodadas, intelectuales, diplomáticos y altos funcionarios, Tlalpan —conocido antes como San Agustín de las Cuevas— representaba el paraíso terrenal.",
          "Su altitud privilegiada, su suelo volcánico filtrante y los vientos frescos que descendían de la serranía generaban un microclima seco y saludable. Así nacieron las 'quintas de recreo': residencias campestres rodeadas de huertas de perales, manzanos y duraznos, donde la vida transcurría entre tertulias literarias, paseos a caballo y copiosas sobremesas dominicales."
        ],
        callout: {
          type: "history",
          title: "Visitantes Ilustres",
          text: "Desde cronistas virreinales como Guillermo Prieto hasta intelectuales y poetas de la talla de Manuel Payno escribieron páginas memorables inspiradas en las ferias campestres y la quietud señorial de Tlalpan."
        }
      },
      {
        id: "arquitectura-cantera",
        title: "2. Muros de 60 cm y cantera rosa: el secreto de su confort",
        paragraphs: [
          "La solidez con la que fueron erigidas estas residencias sorprende aún hoy a ingenieros y arquitectos contemporáneos. Muros dobles de mampostería combinada con roca basáltica local y cantera rosa tallada alcanzan espesores de hasta 60 y 80 centímetros.",
          "Esta técnica no sólo respondía a propósitos defensivos y estructurales frente a movimientos telúricos: constituía un sofisticado sistema de climatización pasiva. Durante el día, los gruesos muros absorben el calor exterior manteniendo los salones frescos; por la noche, liberan lentamente esa energía térmica, creando estancias cálidas y acogedoras.",
          "A ello se suman las techumbres de viguería de pino y encino tratadas con ceras naturales, arquerías neorrenacentistas de medio punto y claraboyas que bañan los pasillos con una luz suave y difusa."
        ],
        highlightList: [
          "Muros térmicos pasivos de hasta 80 cm de roca volcánica y cantera.",
          "Vigas de madera centenarias que sostienen techos de más de 4 metros de altura.",
          "Patios centrales porticados diseñados para captar luz solar y recolectar agua de lluvia."
        ],
        image: {
          src: "/images/blog/casa-frissac-tlalpan.jpg",
          alt: "Arquitectura señorial de cantera en casona de Tlalpan Centro",
          caption: "Cantera labrada y ventanales señoriales: el testimonio de las quintas de recreo del siglo XIX en Tlalpan."
        }
      },
      {
        id: "leyendas-tuneles",
        title: "3. La leyenda de los túneles secretos y el tesoro de los arrieros",
        paragraphs: [
          "Ningún barrio novohispano estaría completo sin sus leyendas orales, y Tlalpan cuenta con algunas de las más cautivadoras de México. Una de las más extendidas entre los vecinos veteranos relata la existencia de una red de pasadizos subterráneos que conectaba las casonas señoriales de Calle Moneda con la Parroquia de San Agustín y el antiguo Convento de San Pedro de Alcántara.",
          "Se dice que estos túneles fueron utilizados durante las turbulencias de la Guerra de Reforma y la Revolución Mexicana para salvaguardar cálices dorados, archivos parroquiales y a personajes perseguidos.",
          "Otra leyenda entrañable habla de las 'campanas silenciosas' de San Agustín: según la tradición local, en noches despejadas de luna llena, el viento de la medianoche reproduce un tenue tañido cristalino que recuerda los tiempos en que las quintas avisaban a los campesinos el fin de la jornada de cosecha."
        ],
        callout: {
          type: "quote",
          title: "Voz de la Crónica Local",
          text: "«En Tlalpan la piedra no está muerta; guarda el eco de los pasos de quienes buscaron en su silencio el remedio a las fatigas del mundo»."
        },
        image: {
          src: "/images/blog/altar-san-agustin-tlalpan.jpg",
          alt: "Retablo barroco de la Parroquia de San Agustín de las Cuevas en Tlalpan",
          caption: "Retablo dorado de San Agustín de las Cuevas, custodio de las leyendas coloniales del sur de la ciudad."
        }
      },
      {
        id: "refugios-conventuales",
        title: "4. De residencias señoriales a conventos de clausura y oración",
        paragraphs: [
          "A mediados del siglo XX, el crecimiento acelerado de la mancha urbana amenazaba con devorar las antiguas quintas de Tlalpan, tal como ocurrió en otras zonas del centro de la capital. Paradójicamente, lo que salvó a muchas de estas propiedades de ser fraccionadas fue su adquisición por órdenes religiosas.",
          "Propiedades emblemáticas como Quinta Soledad pasaron a manos de congregaciones como los Misioneros del Espíritu Santo, quienes durante décadas las utilizaron como casas de ejercicios espirituales, formación sacerdotal y retiro contemplativo. Gracias a este celoso cuidado, los claustros, las capillas consagradas y los jardines de árboles frutales sobrevivieron intactos, libres de remodelaciones invasivas."
        ]
      },
      {
        id: "renacer-cultural",
        title: "5. El renacer cultural: preservar el patrimonio con vida cotidiana",
        paragraphs: [
          "En las últimas décadas, estos recintos han vivido una magnífica metamorfosis: en lugar de convertirse en museos inertes con cordones de terciopelo que impiden tocar las cosas, han abierto sus portones para convertirse en espacios vivos.",
          "Hoy albergan talleres de artes plásticas, presentaciones de libros, bodas bajo magnolias centenarias y restaurantes donde la gastronomía mexicana se honra con ingredientes frescos y recetas heredadas. La historia se disfruta tocándola, caminando sus pisos de barro cocido y brindando bajo sus bóvedas."
        ]
      }
    ],
    hotelRecommendation: {
      badge: "Una Experiencia que Pocos Hoteles Pueden Ofrecer",
      title: "No leas la historia desde afuera: duerme dentro de una casona viva",
      subtitle: "Utopía Hotel Boutique & Hotel Hermitage · Quinta Soledad",
      story: [
        "Admirar las fachadas de cantera de Tlalpan mientras caminas por la banqueta es hermoso, pero pasar la noche resguardado tras sus muros de piedra volcánica de 1870 es algo que recordarás para siempre.",
        "En Centro Cultural Quinta Soledad (ubicado en Calle Moneda 15), la historia no es un catálogo de fotos viejas: es la madera crujiendo suavemente bajo tus pasos, el perfume a jazmín que entra por la ventana y la majestuosidad de dormir en una suite de techos altos con todas las comodidades del siglo XXI.",
        "Ya sea que elijas la sofisticación íntima de Utopía Hotel Boutique o la practicidad acogedora de Hotel Express Hermitage, tu estadía incluye acceso libre a los jardines centenarios, el claustro neorrenacentista y la posibilidad de cenar a la luz de las velas en Restaurante Capitular. Una vivencia auténtica, sin pretensiones y con profunda alma mexicana."
      ],
      hotelName: "Utopía Hotel Boutique",
      roomType: "Suites Históricas con Arte Contemporáneo Integrado",
      image: "/images/habitaciones/utopia/ccqs_utopia01.png",
      imageAlt: "Suite boutique con techos altos y diseño artístico en Quinta Soledad",
      priceFormatted: "$1,392.00 MXN",
      priceNote: "Suite Signature Utopía con desayuno continental · Hermitage desde $928.00 MXN",
      amenities: [
        "Inmueble patrimonial de 1870 catalogado con arquitectura original",
        "Habitaciones únicas con curaduría artística personalizada",
        "Desayuno continental servido en terraza o jardín",
        "Tranquilidad acústica absoluta garantizada por muros de 80 cm",
        "Seguridad privada 24/7 y estacionamiento incluido",
        "Reserva en línea inmediata o atención personalizada por Concierge"
      ],
      bookingUrl: "https://booking.easy-rez.com/hotel-quinta-soledad/es/home",
      whatsappMessage: "¡Hola! Leí su artículo sobre las casonas históricas de Tlalpan y me interesa reservar una noche en Utopía Hotel Boutique.",
      ctaText: "Reservar Noche Histórica en Easy-Rez"
    },
    relatedSlugs: [
      "que-hacer-en-tlalpan-centro-joyas-ocultas",
      "bosque-de-tlalpan-y-fuentes-brotantes-guia-naturaleza"
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
