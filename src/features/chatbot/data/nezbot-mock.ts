export interface ContextualAction {
  label: string;
  href: string;
}

export interface MockBotResponse {
  content: string;
  listItems?: string[];
  action?: ContextualAction;
}

export const SUGGESTED_QUESTIONS = [
  "¿Dónde puedo imprimir?",
  "¿Cómo obtengo mi carnet?",
  "¿Dónde está bienestar?",
  "¿Cómo realizo una solicitud?",
  "¿Cuándo comienza la inscripción?",
  "¿Dónde encuentro ayuda académica?",
];

const RESPONSE_MATCHERS: Array<{ keywords: string[]; response: MockBotResponse }> = [
  {
    keywords: ["imprimir", "impresion", "impresora"],
    response: {
      content: "Puedes imprimir en:",
      listItems: ["Biblioteca", "Laboratorio 3", "Edificio Central"],
      action: { label: "Ver en Campus", href: "/campus" },
    },
  },
  {
    keywords: ["carnet", "credencial", "carne", "tarjeta estudiantil"],
    response: {
      content:
        "Puedes solicitarlo en Secretaría Académica. Necesitarás tu número de matrícula y una foto reciente.",
      action: { label: "Abrir Centro de Información", href: "/resources" },
    },
  },
  {
    keywords: ["bienestar", "salud mental", "psicologia", "apoyo emocional", "servicios de apoyo"],
    response: {
      content:
        "El área de Bienestar Estudiantil se encuentra en el Edificio E, primer piso. Atiende de lunes a viernes de 08:00 a 17:00.",
      action: { label: "Ver en Campus", href: "/campus" },
    },
  },
  {
    keywords: ["integracion", "onboarding", "pasos pendientes", "proximos pasos"],
    response: {
      content: "Tienes pasos pendientes en tu proceso de integración.",
      action: { label: "Continuar onboarding", href: "/onboarding" },
    },
  },
  {
    keywords: ["inscripcion", "matricula", "inscribir", "registrar"],
    response: {
      content:
        "Las fechas y procedimientos de inscripción están publicados en el Centro de Información.",
      action: { label: "Abrir Centro de Información", href: "/resources" },
    },
  },
  {
    keywords: ["solicitud", "tramite", "tramites", "certificado", "documento", "carta"],
    response: {
      content:
        "Puedes encontrar formularios y procedimientos para trámites académicos en el Centro de Información.",
      action: { label: "Abrir Centro de Información", href: "/resources" },
    },
  },
  {
    keywords: ["ayuda academica", "tutoria", "tutor", "apoyo academico"],
    response: {
      content:
        "El centro de apoyo académico está disponible en el Edificio B. También puedes encontrar recursos y guías en línea.",
      action: { label: "Abrir Centro de Información", href: "/resources" },
    },
  },
  {
    keywords: ["beneficio", "beneficios", "descuento", "descuentos"],
    response: {
      content:
        "Los beneficios estudiantiles disponibles están publicados en el Centro de Información.",
      action: { label: "Abrir Centro de Información", href: "/resources" },
    },
  },
  {
    keywords: ["horario", "horarios", "atencion", "abre", "cierra"],
    response: {
      content: "Los horarios de atención de cada edificio y servicio están disponibles en el mapa del campus.",
      action: { label: "Ver en Campus", href: "/campus" },
    },
  },
  {
    keywords: ["ubicacion", "ubicaciones", "edificio", "oficina", "mapa", "donde queda", "donde esta"],
    response: {
      content:
        "Puedes explorar el mapa del campus para encontrar edificios, oficinas y espacios importantes.",
      action: { label: "Explorar Campus", href: "/campus" },
    },
  },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function getMockResponse(text: string): MockBotResponse | null {
  const normalized = normalize(text);
  for (const { keywords, response } of RESPONSE_MATCHERS) {
    const matched = keywords.some((kw) => normalized.includes(normalize(kw)));
    if (matched) return response;
  }
  return null;
}
