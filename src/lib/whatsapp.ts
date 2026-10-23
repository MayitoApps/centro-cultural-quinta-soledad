export const WHATSAPP_PHONE = "525574555091";
export const WHATSAPP_DISPLAY = "+52 55 7455 5091";

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export const WA_MESSAGES = {
  general: "Hola, me gustaría recibir informes y atención personalizada sobre Centro Cultural Quinta Soledad.",
  
  // Hoteles
  utopia: "Hola, me gustaría solicitar informes y reservar en Utopía Hotel Boutique ($1,392.00 MXN por noche).",
  hermitageQueen: "Hola, me gustaría consultar disponibilidad y reservar la habitación Hermitage Queen ($928.00 MXN por noche) en Hotel Express Hermitage.",
  hermitageKing: "Hola, me gustaría consultar disponibilidad y reservar la habitación Hermitage KING ($1,044.00 MXN por noche) en Hotel Express Hermitage.",
  hermitageSencilla: "Hola, me gustaría consultar disponibilidad y reservar la habitación Hermitage Queen ($928.00 MXN por noche) en Hotel Express Hermitage.",
  hermitageDoble: "Hola, me gustaría consultar disponibilidad y reservar la habitación Hermitage KING ($1,044.00 MXN por noche) en Hotel Express Hermitage.",
  hospitales: "Hola, me gustaría solicitar informes sobre las tarifas preferenciales de hospedaje para pacientes y familiares que acuden a la zona de hospitales en Tlalpan.",
  
  // Gastronomía & Mixología
  capitular: "Hola, me gustaría reservar una mesa en el Restaurante Capitular de Quinta Soledad.",
  laMalQuerida: "Hola, me gustaría reservar una mesa en el Restaurante La Mal Querida de Quinta Soledad.",
  buffet: "Hola, me gustaría consultar disponibilidad y reservar lugares para el Buffet de Fin de Semana en los jardines de Quinta Soledad.",
  losEstablos: "Hola, me gustaría informes sobre la cafetería, panadería y vivero Los Establos.",
  alpestre: "Hola, me gustaría reservar en el Speakeasy Bar Alpestre y conocer su menú de mixología de autor.",
  catasVino: "Hola, me gustaría informes sobre las catas guiadas de vinos mexicanos y destilados en Quinta Soledad.",
  tallerMixologia: "Hola, me gustaría inscribirme en un taller de mixología en el Bar Alpestre.",
  
  // Eventos & Salones
  eventosGeneral: "Hola, me interesa cotizar un evento en Centro Cultural Quinta Soledad.",
  salonPierreDamian: "Hola, me interesa cotizar el Auditorio Pierre Damian (hasta 100 personas) para un evento.",
  salonGuadalupe: "Hola, me interesa cotizar el Salón Guadalupe (hasta 50 personas) para una celebración.",
  salonConcilio: "Hola, me gustaría informes y cotización para el Salón Concilio (hasta 45 personas).",
  salonMinisterio: "Hola, me interesa cotizar el Salón Ministerio (hasta 40 personas).",
  salonOval: "Hola, me interesa cotizar el Salón Oval (hasta 35 personas).",
  salonCapitular: "Hola, me interesa cotizar el Salón Capitular (hasta 30 personas) para una reunión o comida privada.",
  salonLaValla: "Hola, me interesa cotizar el Salón La Valla (hasta 16 personas) para una reunión íntima.",
  salonBasilio: "Hola, me gustaría cotizar el Salón Basilio (hasta 12 personas).",
  capilla: "Hola, me gustaría recibir informes y cotización para celebrar una ceremonia religiosa o misa en la Capilla Consagrada de Quinta Soledad.",
  otamEmpresarial: "Hola, me gustaría ponerme en contacto con OTAM para diseñar una experiencia de integración corporativa, team building y wellness.",
  
  // Momentos & Experiencias
  cenasRomanticas: "Hola, me gustaría recibir informes y reservar una cena romántica (4 o 6 tiempos) o pedida de mano en Quinta Soledad.",
  talleresCocina: "Hola, me gustaría información sobre los talleres de cocina (pizza, sushi) y cenas maridaje.",
  temazcal: "Hola, me gustaría consultar fechas y disponibilidad para la experiencia de Temazcal ancestral y bienestar en Quinta Soledad.",
  origenSpa: "Hola, me gustaría informes sobre las experiencias de bienestar, masajes y spa en Centro Cultural Quinta Soledad.",
};
