import type { OnboardingModule } from "../types/onboarding-flow";

export const ONBOARDING_MODULES: OnboardingModule[] = [
  {
    id: "institucion",
    order: 1,
    title: "Conoce tu institución",
    description:
      "Antes de comenzar tus clases es importante conocer los recursos y servicios disponibles para ti.",
    closingMessage:
      "Ahora conoces los aspectos fundamentales de tu institución. Sabes dónde encontrar información importante y cómo acceder a apoyo cuando lo necesites.",
    duration: "3 minutos",
    preview: [
      "Misión institucional y valores",
      "Apoyos disponibles para estudiantes",
      "Canales de ayuda oficiales",
    ],
    items: [
      {
        id: "i1-1",
        title: "Carta de bienvenida del rector",
        description: "Conoce el mensaje de bienvenida y los compromisos de tu institución.",
        type: "document",
        seen: false,
      },
      {
        id: "i1-2",
        title: "Misión y valores institucionales",
        description: "Descubre los principios que guían la experiencia universitaria.",
        type: "info",
        seen: false,
      },
      {
        id: "i1-3",
        title: "Carnet digital estudiantil",
        description: "Tu identificación oficial dentro de la institución.",
        type: "document",
        seen: false,
      },
    ],
    status: "available",
  },
  {
    id: "plataformas",
    order: 2,
    title: "Descubre tus plataformas",
    description:
      "Aprende a utilizar las herramientas digitales que serán parte de tu día a día académico.",
    closingMessage:
      "Ya conoces las plataformas que usarás durante tu carrera. Podrás acceder a tus cursos, comunicarte con tus docentes y gestionar tu información académica.",
    duration: "5 minutos",
    preview: [
      "Sistema académico y registro de notas",
      "Correo institucional oficial",
      "Campus virtual y biblioteca digital",
    ],
    items: [
      {
        id: "i2-1",
        title: "Sistema académico",
        description: "Tu portal para revisar notas, horarios e inscripción de cursos.",
        type: "info",
        seen: false,
      },
      {
        id: "i2-2",
        title: "Correo institucional",
        description: "Comunicación oficial entre estudiantes, docentes y administración.",
        type: "document",
        seen: false,
      },
      {
        id: "i2-3",
        title: "Campus virtual",
        description: "Accede a material de cursos, biblioteca digital y recursos de aprendizaje.",
        type: "info",
        seen: false,
      },
    ],
    status: "locked",
  },
  {
    id: "procesos",
    order: 3,
    title: "Entiende tus procesos",
    description:
      "Comprende los procesos clave que guiarán tu trayectoria académica desde el primer día.",
    closingMessage:
      "Ahora entiendes cómo funciona la dinámica académica. Podrás planificar mejor tu carrera y evitar contratiempos durante el año.",
    duration: "4 minutos",
    preview: [
      "Calendario académico del año",
      "Cómo funciona la matrícula",
      "Sistema de calificaciones",
    ],
    items: [
      {
        id: "i3-1",
        title: "Calendario académico",
        description: "Fechas importantes del año: inicio de clases, evaluaciones y vacaciones.",
        type: "document",
        seen: false,
      },
      {
        id: "i3-2",
        title: "Proceso de matrícula",
        description: "Aprende cómo inscribir tus cursos cada semestre.",
        type: "info",
        seen: false,
      },
      {
        id: "i3-3",
        title: "Sistema de calificaciones",
        description: "Comprende cómo se evalúa tu desempeño y cómo se calcula tu promedio.",
        type: "info",
        seen: false,
      },
    ],
    status: "locked",
  },
  {
    id: "campus",
    order: 4,
    title: "Explora tu campus",
    description:
      "Aprende a orientarte en las instalaciones y descubre los espacios más útiles para tu vida universitaria.",
    closingMessage:
      "Ya conoces el campus y sus espacios más importantes. Podrás moverte con confianza y aprovechar todos los recursos disponibles.",
    duration: "4 minutos",
    preview: [
      "Mapa interactivo del campus",
      "Biblioteca y salas de estudio",
      "Servicios estudiantiles presenciales",
    ],
    items: [
      {
        id: "i4-1",
        title: "Mapa del campus",
        description: "Conoce la ubicación de cada edificio, sala y servicio.",
        type: "map",
        seen: false,
      },
      {
        id: "i4-2",
        title: "Biblioteca y sala de estudio",
        description: "Recursos de aprendizaje disponibles para todos los estudiantes.",
        type: "document",
        seen: false,
      },
      {
        id: "i4-3",
        title: "Servicios estudiantiles",
        description: "Dónde encontrar apoyo administrativo y atención presencial.",
        type: "info",
        seen: false,
      },
    ],
    status: "locked",
  },
  {
    id: "apoyo",
    order: 5,
    title: "Encuentra apoyo",
    description:
      "Descubre todos los servicios disponibles para acompañarte durante tu carrera universitaria.",
    closingMessage:
      "Ahora sabes que no estás solo. Tienes servicios de apoyo académico, emocional y vocacional disponibles cuando los necesites.",
    duration: "3 minutos",
    preview: [
      "Orientación y consejería estudiantil",
      "Programa de tutorías académicas",
      "Servicios de bienestar y salud",
    ],
    items: [
      {
        id: "i5-1",
        title: "Centro de orientación",
        description: "Consejería estudiantil para apoyo emocional y orientación vocacional.",
        type: "info",
        seen: false,
      },
      {
        id: "i5-2",
        title: "Programa de tutorías",
        description: "Acompañamiento académico personalizado para mejorar tu desempeño.",
        type: "document",
        seen: false,
      },
      {
        id: "i5-3",
        title: "Servicios de bienestar",
        description: "Apoyo integral para tu salud física, mental y bienestar general.",
        type: "info",
        seen: false,
      },
    ],
    status: "locked",
  },
  {
    id: "perfil",
    order: 6,
    title: "¡Ya estás listo!",
    description:
      "Finaliza personalizando tu perfil estudiantil para comenzar tu experiencia completa en Neztep.",
    closingMessage:
      "¡Felicitaciones! Has completado tu recorrido de bienvenida. Neztep te acompañará durante toda tu trayectoria universitaria.",
    duration: "2 minutos",
    preview: [
      "Personaliza tu foto de perfil",
      "Completa tu información académica",
      "Configura tus notificaciones",
    ],
    items: [
      {
        id: "i6-1",
        title: "Foto de perfil",
        description: "Agrega una imagen para personalizar tu experiencia.",
        type: "document",
        seen: false,
      },
      {
        id: "i6-2",
        title: "Información académica",
        description: "Completa tus datos de carrera, sede y año de ingreso.",
        type: "info",
        seen: false,
      },
      {
        id: "i6-3",
        title: "Preferencias de notificación",
        description: "Decide cómo y cuándo quieres recibir alertas de Neztep.",
        type: "info",
        seen: false,
      },
    ],
    status: "locked",
  },
];
