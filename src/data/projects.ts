export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  responsiveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce",
    description:
      "Tienda online con diseño moderno y responsive. Incluye dashboard de aministración, modo oscuro y optimización SEO.",
    technologies: ["React", "Next", "MongoDB", "TypeScript", "Tailwind CSS"],
    image: "https://i.ibb.co/v6GM1rJf/2.png",
    demo: "https://next-e-commerce-olive.vercel.app/",
  },
  {
    title: "the wild oasis - Dashboard",
    description:
      "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo colaborativo.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "https://i.ibb.co/xTx1Zrx/3.png",
    demo: "https://the-wild-oasis-one-livid.vercel.app/",
  },
  {
    title: "The wild web",
    description:
      "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo colaborativo.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: "https://i.ibb.co/4ZbbXd26/4.png",
    demo: "https://the-wild-oasis-web-pi.vercel.app/",
  },
  {
    title: "3D-viewer",
    description:
      "Dashboard meteorológico interactivo que muestra pronósticos del tiempo en tiempo real. Incluye gráficos, mapas interactivos y alertas meteorológicas.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    image: "https://i.ibb.co/4n86xpnV/8.png",
    demo: "https://3d-view-cad.netlify.app/",
  },
  {
    title: "Wheather-dashboard",
    description:
      "Herramienta de análisis de redes sociales con visualizaciones de datos, métricas de engagement y reportes personalizables. Integración con múltiples plataformas.",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "https://i.ibb.co/7tT4gZj9/6.png",
    demo: "https://wheather-dash.netlify.app/",
  },
  {
    title: "Real-notes",
    description:
      "Aplicación de chat en tiempo real con salas múltiples, notificaciones push y cifrado de mensajes. Compatible con dispositivos móviles y desktop.",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    image: "https://i.ibb.co/WW0sK5V7/7.png",
    github: "https://github.com/Tynch2023/react-snippets-api",
    demo: "https://demo.example.com",
  },
];
