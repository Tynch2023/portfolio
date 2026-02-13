export interface Project {
  title: string;
  description: string;
  descriptionKey: string;
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
      "Tienda online con diseño moderno y responsivo, carrito de compras. Incluye dashboard de aministración para crear, editar y borrar nuevos productos, modo oscuro y optimización SEO.",
    descriptionKey: 'project.ecommerce.desc',
    technologies: ["React", "Next", "MongoDB", "TypeScript", "Tailwind CSS"],
    image: "https://i.ibb.co/v6GM1rJf/2.png",
    demo: "https://next-e-commerce-olive.vercel.app/",
  },
  {
    title: "the wild oasis - Dashboard",
    description:
      "Aplicación de gestión de hoteleria, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo local.",
    descriptionKey: 'project.oasis-dashboard.desc',
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
      "Landing page para que los futuros inquilinos puedan hacer sus recerbas de cabañas",
    descriptionKey: 'project.oasis-web.desc',
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
      "Visor de archivos 3D en formato STL, usa la libreria Three para generar el modelo en el navegador",
    descriptionKey: 'project.3d-viewer.desc',
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
    descriptionKey: 'project.weather.desc',
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
      "Aplicacion para guarar ejemplos de codigo de react que guarda los datos en un repo publico de Git",
    descriptionKey: 'project.react-notes.desc',
    technologies: ["React", "Js", "Git-API", "Tailwind CSS", "CSS"],
    image: "https://i.ibb.co/WW0sK5V7/7.png",
    github: "https://github.com/Tynch2023/react-snippets-api",
    demo: "https://react-next-snippets.netlify.app/",
  },
];
