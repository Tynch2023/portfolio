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
      "Tienda online con diseño moderno y responsivo. Incluye dashboard de aministración, modo oscuro y optimización SEO.",
    technologies: ["React", "Next", "MongoDB", "TypeScript", "Tailwind CSS"],
    image: "https://i.ibb.co/v6GM1rJf/2.png",
    demo: "https://next-e-commerce-olive.vercel.app/",
  },
  {
    title: "the wild oasis - Dashboard",
    description:
      "Aplicación de gestión de hoteleria, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo local.",
    technologies: [
      "React",
      "Tanstack",
      "TypeScript",
      "Node.js",
      "Supabase",
      "React-router-dom",
      "Recharts",
    ],
    image: "https://i.ibb.co/xTx1Zrx/3.png",
    demo: "https://the-wild-oasis-one-livid.vercel.app/",
  },
  {
    title: "The wild web",
    description:
      "Aplicación de gestión de tareas con funcionalidades de drag & drop, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo colaborativo.",
    technologies: [
      "React",
      "Next",
      "next-auth",
      "Supabase",
      "Tailwind CSS",
      "react-day-picker",
      "react-dom",
      "date-fns",
    ],
    image: "https://i.ibb.co/4ZbbXd26/4.png",
    demo: "https://the-wild-oasis-web-pi.vercel.app/",
  },
  {
    title: "3D-viewer",
    description:
      "Dashboard meteorológico interactivo que muestra pronósticos del tiempo en tiempo real. Incluye gráficos, mapas interactivos y alertas meteorológicas.",
    technologies: [
      "three",
      "React",
      "Vite",
      "TypeScript",
      "lucide-react",
      "react-dom",
    ],
    image: "https://i.ibb.co/4n86xpnV/8.png",
    demo: "https://3d-view-cad.netlify.app/",
  },
  {
    title: "Wheather-dashboard",
    description: "Dashboard con info climatologica",
    technologies: [
      "React",
      "leaflet",
      "recharts",
      "TypeScript",
      "OpenWeather API",
    ],
    image: "https://i.ibb.co/7tT4gZj9/6.png",
    demo: "https://wheather-dash.netlify.app/",
  },
  {
    title: "React-notes",
    description:
      "Aplicación de chat en tiempo real con salas múltiples, notificaciones push y cifrado de mensajes. Compatible con dispositivos móviles y desktop.",
    technologies: ["React", "Js", "Git-API", "Tailwind CSS", "CSS"],
    image: "https://i.ibb.co/WW0sK5V7/7.png",
    github: "https://github.com/Tynch2023/react-snippets-api",
    demo: "https://react-next-snippets.netlify.app/",
  },
];
