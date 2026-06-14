import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { readFileSync } from "fs";

// Lee las variables de entorno manualmente
const env = readFileSync(".env.local", "utf-8")
  .split("\n")
  .reduce((acc, line) => {
    const [key, ...val] = line.split("=");
    if (key && val.length) acc[key.trim()] = val.join("=").trim().replace(/^"|"$/g, "");
    return acc;
  }, {});

initializeApp({
  credential: cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

const db = getFirestore();

async function seed() {
  console.log("🌱 Iniciando seed de Firestore...");

  const institutionId = "inst-demo-001";
  const institutionRef = db.collection("institutions").doc(institutionId);

  // ══════════════════════════════════════════
  // 1. INSTITUCIÓN
  // ══════════════════════════════════════════
  await institutionRef.set({
    institutionId,
    name: "Universidad Demo",
    type: "universidad",
    status: "active",
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  console.log("✅ Institution creada");

  // ══════════════════════════════════════════
  // 2. SEDES (subcolección campuses)
  // ══════════════════════════════════════════
  const campuses = [
    { id: "campus-001", name: "Sede Central", address: "Av. Principal 1234", status: "active" },
    { id: "campus-002", name: "Sede Norte", address: "Calle Norte 567", status: "active" },
  ];

  for (const campus of campuses) {
    await institutionRef.collection("campuses").doc(campus.id).set({
      ...campus,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ Campuses creados");

  // ══════════════════════════════════════════
  // 3. CARRERAS (subcolección careers)
  // ══════════════════════════════════════════
  const careers = [
    { id: "career-001", name: "Ingeniería en Informática", campusId: "campus-001", status: "active" },
    { id: "career-002", name: "Ingeniería Civil", campusId: "campus-001", status: "active" },
    { id: "career-003", name: "Psicología", campusId: "campus-002", status: "active" },
    { id: "career-004", name: "Administración de Empresas", campusId: "campus-002", status: "active" },
  ];

  for (const career of careers) {
    await institutionRef.collection("careers").doc(career.id).set({
      ...career,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ Careers creadas");

  // ══════════════════════════════════════════
  // 4. ONBOARDING STEPS
  // ══════════════════════════════════════════
  const steps = [
    {
      id: "step-001",
      title: "Bienvenida a la Universidad",
      description: "Conoce tu nueva casa y todo lo que tenemos para ti.",
      order: 1,
      category: "bienvenida",
      isRequired: true,
      status: "active",
    },
    {
      id: "step-002",
      title: "Tu carrera y malla curricular",
      description: "Entiende cómo está organizada tu carrera y qué materias cursarás.",
      order: 2,
      category: "académico",
      isRequired: true,
      status: "active",
    },
    {
      id: "step-003",
      title: "Servicios estudiantiles",
      description: "Descubre todos los servicios disponibles para ti como estudiante.",
      order: 3,
      category: "servicios",
      isRequired: true,
      status: "active",
    },
    {
      id: "step-004",
      title: "Plataformas digitales",
      description: "Aprende a usar el correo institucional, el portal académico y más.",
      order: 4,
      category: "digital",
      isRequired: true,
      status: "active",
    },
    {
      id: "step-005",
      title: "Conoce tu campus",
      description: "Ubica las salas, servicios y espacios más importantes.",
      order: 5,
      category: "campus",
      isRequired: false,
      status: "active",
    },
  ];

  for (const step of steps) {
    await institutionRef.collection("onboardingSteps").doc(step.id).set({
      ...step,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ Onboarding steps creados");

  // ══════════════════════════════════════════
  // 5. CONTENIDO INSTITUCIONAL
  // ══════════════════════════════════════════
  const content = [
    {
      id: "content-001",
      title: "Reglamento Estudiantil",
      description: "Normas y reglamentos que rigen la vida académica.",
      category: "reglamentos",
      contentType: "documento",
      url: "https://universidad-demo.cl/reglamento",
      isActive: true,
    },
    {
      id: "content-002",
      title: "Calendario Académico 2025",
      description: "Fechas importantes del semestre: clases, exámenes y feriados.",
      category: "académico",
      contentType: "documento",
      url: "https://universidad-demo.cl/calendario",
      isActive: true,
    },
    {
      id: "content-003",
      title: "Portal del Estudiante",
      description: "Accede a tus notas, horarios e inscripción de ramos.",
      category: "digital",
      contentType: "enlace",
      url: "https://portal.universidad-demo.cl",
      isActive: true,
    },
    {
      id: "content-004",
      title: "Correo Institucional",
      description: "Cómo activar y usar tu correo @universidad-demo.cl",
      category: "digital",
      contentType: "guía",
      url: "https://universidad-demo.cl/correo",
      isActive: true,
    },
    {
      id: "content-005",
      title: "Becas y Beneficios",
      description: "Información sobre becas, créditos y beneficios disponibles.",
      category: "beneficios",
      contentType: "documento",
      url: "https://universidad-demo.cl/becas",
      isActive: true,
    },
  ];

  for (const item of content) {
    await institutionRef.collection("institutionalContent").doc(item.id).set({
      ...item,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ Institutional content creado");

  // ══════════════════════════════════════════
  // 6. FAQ CHATBOT
  // ══════════════════════════════════════════
  const faqs = [
    {
      id: "faq-001",
      question: "¿Cómo activo mi correo institucional?",
      answer: "Ingresa a correo.universidad-demo.cl con tu RUT como usuario y tu fecha de nacimiento como contraseña inicial (DDMMAAAA). Al ingresar por primera vez, el sistema te pedirá cambiarla.",
      category: "digital",
      keywords: ["correo", "email", "institucional", "activar"],
      isActive: true,
    },
    {
      id: "faq-002",
      question: "¿Dónde veo mis horarios de clases?",
      answer: "Tus horarios están disponibles en el Portal del Estudiante, en la sección 'Mi Horario'. Accede con tu RUT y contraseña institucional.",
      category: "académico",
      keywords: ["horario", "clases", "portal", "ramos"],
      isActive: true,
    },
    {
      id: "faq-003",
      question: "¿Cómo llego a la biblioteca?",
      answer: "La biblioteca está ubicada en el Edificio B, piso 1. Está abierta de lunes a viernes de 8:00 a 20:00 y los sábados de 9:00 a 14:00.",
      category: "campus",
      keywords: ["biblioteca", "libros", "ubicación", "horario"],
      isActive: true,
    },
    {
      id: "faq-004",
      question: "¿Qué hago si tengo problemas con mi matrícula?",
      answer: "Dirígete a la Dirección de Registro Académico, ubicada en el Edificio A, oficina 101. También puedes escribir a matricula@universidad-demo.cl o llamar al interno 1234.",
      category: "administrativo",
      keywords: ["matrícula", "inscripción", "registro", "problema"],
      isActive: true,
    },
    {
      id: "faq-005",
      question: "¿Cómo postulo a una beca?",
      answer: "Las postulaciones a becas se realizan a través del Portal del Estudiante en la sección 'Beneficios'. El período de postulación es durante las primeras 3 semanas de cada semestre.",
      category: "beneficios",
      keywords: ["beca", "beneficio", "postular", "ayuda económica"],
      isActive: true,
    },
    {
      id: "faq-006",
      question: "¿Existe psicólogo o apoyo en salud mental?",
      answer: "Sí, contamos con el Centro de Apoyo Estudiantil (CAE) que ofrece atención psicológica gratuita. Puedes agendar hora en el Edificio C, oficina 205 o al interno 5678.",
      category: "bienestar",
      keywords: ["psicólogo", "salud mental", "apoyo", "bienestar"],
      isActive: true,
    },
    {
      id: "faq-007",
      question: "¿Dónde puedo almorzar en el campus?",
      answer: "El casino estudiantil está en el Edificio D, piso 1. También hay un café en la Biblioteca. Los estudiantes con beca de alimentación pueden comer gratis presentando su credencial.",
      category: "campus",
      keywords: ["casino", "almuerzo", "comida", "café"],
      isActive: true,
    },
    {
      id: "faq-008",
      question: "¿Cómo obtengo mi credencial estudiantil?",
      answer: "Dirígete a la oficina de Registro Académico con tu cédula de identidad y comprobante de matrícula. La credencial se entrega en 3 días hábiles.",
      category: "administrativo",
      keywords: ["credencial", "carnet", "estudiante", "identificación"],
      isActive: true,
    },
  ];

  for (const faq of faqs) {
    await institutionRef.collection("faqChatbot").doc(faq.id).set({
      ...faq,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ FAQ Chatbot creado");

  // ══════════════════════════════════════════
  // 7. POINTS OF INTEREST
  // ══════════════════════════════════════════
  const points = [
    {
      id: "poi-001",
      name: "Biblioteca Central",
      description: "Acceso a libros, computadores y salas de estudio.",
      category: "académico",
      building: "Edificio B",
      floor: "Piso 1",
      latitude: -33.4569,
      longitude: -70.6483,
      isActive: true,
    },
    {
      id: "poi-002",
      name: "Registro Académico",
      description: "Trámites de matrícula, certificados y documentos académicos.",
      category: "administrativo",
      building: "Edificio A",
      floor: "Piso 1, Oficina 101",
      latitude: -33.4571,
      longitude: -70.6480,
      isActive: true,
    },
    {
      id: "poi-003",
      name: "Casino Estudiantil",
      description: "Servicio de alimentación para estudiantes.",
      category: "servicios",
      building: "Edificio D",
      floor: "Piso 1",
      latitude: -33.4574,
      longitude: -70.6478,
      isActive: true,
    },
    {
      id: "poi-004",
      name: "Centro de Apoyo Estudiantil",
      description: "Atención psicológica, orientación vocacional y apoyo académico.",
      category: "bienestar",
      building: "Edificio C",
      floor: "Piso 2, Oficina 205",
      latitude: -33.4567,
      longitude: -70.6486,
      isActive: true,
    },
    {
      id: "poi-005",
      name: "Dirección de Finanzas",
      description: "Pagos de arancel, becas y beneficios económicos.",
      category: "administrativo",
      building: "Edificio A",
      floor: "Piso 2, Oficina 210",
      latitude: -33.4571,
      longitude: -70.6480,
      isActive: true,
    },
  ];

  for (const point of points) {
    await institutionRef.collection("pointsOfInterest").doc(point.id).set({
      ...point,
      institutionId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log("✅ Points of interest creados");

  console.log("\n🎉 Seed completado exitosamente.");
  console.log(`\n📌 institutionId para usar en el registro: inst-demo-001`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Error en seed:", err);
  process.exit(1);
});