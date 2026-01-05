export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "the wild oasis - Dashboard",
    description:
      "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo colaborativo.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://the-wild-oasis-one-livid.vercel.app/",
  },
  {
    title: "The wild web",
    description:
      "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo colaborativo.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://the-wild-oasis-web-pi.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico interactivo que muestra pronósticos del tiempo en tiempo real. Incluye gráficos, mapas interactivos y alertas meteorológicas.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Social Media Analytics",
    description:
      "Herramienta de análisis de redes sociales con visualizaciones de datos, métricas de engagement y reportes personalizables. Integración con múltiples plataformas.",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Sitio web de portafolio personal con diseño moderno y responsive. Incluye animaciones suaves, modo oscuro y optimización SEO.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Real-time Chat App",
    description:
      "Aplicación de chat en tiempo real con salas múltiples, notificaciones push y cifrado de mensajes. Compatible con dispositivos móviles y desktop.",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];
