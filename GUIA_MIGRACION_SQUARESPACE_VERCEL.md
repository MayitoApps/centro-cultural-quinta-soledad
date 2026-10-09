# Guía Paso a Paso: Migración de Squarespace a Vercel con Cero Pérdida de SEO
## Centro Cultural Quinta Soledad (`centroculturalquintasoledad.com`)

Esta guía técnica detalla el procedimiento para publicar el nuevo sitio web en Vercel y conectar el dominio que actualmente reside en Squarespace, garantizando la preservación total del posicionamiento orgánico en Google y la activación de Vercel Analytics.

---

### Paso 1: Despliegue en Vercel (GitHub / Vercel CLI)

1. **Subir el proyecto a GitHub / GitLab**:
   - Crea un repositorio privado o público e inicializa git en la carpeta del proyecto:
     ```bash
     git init
     git add .
     git commit -m "feat: nuevo sitio web premium Centro Cultural Quinta Soledad"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/centro-cultural-quinta-soledad.git
     git push -u origin main
     ```
2. **Importar en Vercel**:
   - Ingresa a [vercel.com](https://vercel.com/) con tu cuenta.
   - Haz clic en **"Add New..."** -> **"Project"**.
   - Selecciona el repositorio que acabas de subir.
   - Vercel detectará automáticamente **Next.js**. No necesitas modificar variables de entorno en el build.
   - Haz clic en **"Deploy"**.
   - Vercel te asignará una URL temporal (ej: `centro-cultural-quinta-soledad.vercel.app`).

3. **Activar Vercel Analytics**:
   - En el panel de control de tu proyecto en Vercel, ve a la pestaña **"Analytics"**.
   - Haz clic en **"Enable Analytics"** (Web Analytics y Speed Insights ya están integrados en el código mediante `@vercel/analytics`).

---

### Paso 2: Conexión del Dominio en Vercel

1. En el proyecto en Vercel, ve a **Settings** -> **Domains**.
2. Agrega los dos dominios:
   - `centroculturalquintasoledad.com`
   - `www.centroculturalquintasoledad.com` (Vercel te ofrecerá redirigir uno al otro automáticamente; se recomienda que `centroculturalquintasoledad.com` redirija a `www.centroculturalquintasoledad.com` o viceversa según el histórico de Squarespace. En Squarespace el canónico actual es `www.centroculturalquintasoledad.com`).
3. Vercel te mostrará los registros DNS requeridos:
   - **Registro A**:
     - Host: `@`
     - Valor: `76.76.21.21`
   - **Registro CNAME**:
     - Host: `www`
     - Valor: `cname.vercel-dns.com`

---

### Paso 3: Configuración de DNS en el Proveedor de Dominio

Si tu dominio fue comprado en Squarespace (Squarespace Domains / antiguo Google Domains):

1. Inicia sesión en tu cuenta de [Squarespace Domains](https://account.squarespace.com/domains).
2. Selecciona el dominio `centroculturalquintasoledad.com` y ve a **Configuración de DNS** (DNS Settings).
3. Elimina o desvincula los registros que apuntaban a las páginas web internas de Squarespace.
4. Añade los registros de Vercel:
   - **Tipo A**: Host `@` -> Valor `76.76.21.21`
   - **Tipo CNAME**: Host `www` -> Valor `cname.vercel-dns.com`
5. Guarda los cambios. La propagación DNS suele tardar entre 5 minutos y 2 horas. Vercel emitirá automáticamente el certificado SSL (HTTPS) gratuito de Let's Encrypt.

---

### Paso 4: Verificación de SEO & Google Search Console

Para asegurar que Google mantenga e impulse tu ranking:

1. **Estructura de URLs Idéntica**:
   - Todas las URLs que Google ya indexó existen de forma nativa en este nuevo proyecto:
     - `/`
     - `/quienes-somos`
     - `/nuestra-historia`
     - `/hoteles`
     - `/eventos`
     - `/nuestra-gastronomia`
     - `/nuestra-mixologia`
     - `/momentos`
     - `/comunidad`
     - `/contacto`
2. **Redirecciones 301 Automáticas**:
   - La ruta antigua `/hospitalidad` se redirige de forma permanente (HTTP 301) a `/hoteles` en `next.config.mjs`, por lo que ningún enlace roto afectará tu SEO.
3. **Enviar Nuevo Sitemap a Google Search Console**:
   - Entra a [Google Search Console](https://search.google.com/search-console).
   - Ve a **Sitemaps**.
   - Envía la URL: `https://www.centroculturalquintasoledad.com/sitemap.xml`.
   - Google rastreará de inmediato todas las páginas, descubriendo los nuevos esquemas JSON-LD enriquecidos para Hoteles, Restaurantes y Salones de Eventos.

---

### Paso 5: Optimización para Motores de Búsqueda de IA (GEO)

El sitio cuenta con configuración nativa en `src/app/robots.ts` permitiendo el rastreo de:
- **GPTBot** (OpenAI / ChatGPT Search)
- **ClaudeBot** (Anthropic Claude)
- **PerplexityBot** (Perplexity AI)
- **Google-Extended** (Google Gemini & AI Overviews)

Además, los datos estructurados multi-entidad en `src/lib/seo-schema.ts` le proporcionan a los modelos de lenguaje los datos exactos sobre ubicación, historia de Antonio Rivas Mercado, Porfirio Díaz, amenidades pet friendly, salones para bodas y tarifas preferenciales de hospitales en Tlalpan.
