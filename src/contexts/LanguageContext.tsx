import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Web Developer',
    'hero.subtitle': 'Creating modern and functional digital experiences',
    'hero.description': 'Specialized in React, Next and modern web ecosystem technologies',
    'hero.cta': 'View Projects',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my most recent and featured projects on [Vercel, Netlify, Supabase, MongoDB Cloud]',

    // Project descriptions
    'project.ecommerce.desc': 'Online store with modern and responsive design, shopping cart. Includes admin dashboard to create, edit and delete products, dark mode and SEO optimization.',
    'project.oasis-dashboard.desc': 'Hotel management application, advanced filters, and real-time synchronization. Designed for local work teams.',
    'project.oasis-web.desc': 'Landing page for future guests to make their cabin reservations.',
    'project.3d-viewer.desc': '3D file viewer in STL format, uses the Three library to render the model in the browser.',
    'project.weather.desc': 'Dashboard with weather information.',
    'project.react-notes.desc': 'Application to save React code examples that stores data in a public Git repo.',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about my experience and skills',
    'about.p1': 'I am a full-stack developer focused on building modern, scalable, and product-oriented web applications. I mainly work with TypeScript and JavaScript, using Node.js, Express and MongoDB (Mongoose) on the backend, where I implement secure authentication, robust validations and well-structured architectures.',
    'about.p2': 'On the frontend I develop with React and Next.js, prioritizing reusable components, performance and good design practices. I have experience in cloud deployment, external service integration and database optimization, always focused on efficiency, maintainability and code quality in production environments.',
    'about.techStack': 'Tech Stack',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Have a project in mind? Let's talk!",
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.sending': 'Sending...',
    'contact.send': 'Send message',
    'contact.sendingMsg': 'Sending message...',
    'contact.successMsg': 'Message sent successfully!',
    'contact.errorMsg': 'Error sending message. Please try again.',
    'contact.errorFields': 'Please fill in all fields',
    'contact.errorEmail': 'Invalid email',
  },
  es: {
    // Navbar
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Desarrollador Web',
    'hero.subtitle': 'Creando experiencias digitales modernas y funcionales',
    'hero.description': 'Especializado en React, Next y tecnologías modernas del ecosistema web',
    'hero.cta': 'Ver Proyectos',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una selección de mis proyectos más recientes y destacados en [Vercel, Netlify, Supabase, MongoDB Cloud]',

    // Project descriptions
    'project.ecommerce.desc': 'Tienda online con diseño moderno y responsivo, carrito de compras. Incluye dashboard de aministración para crear, editar y borrar nuevos productos, modo oscuro y optimización SEO.',
    'project.oasis-dashboard.desc': 'Aplicación de gestión de hoteleria, filtros avanzados, y sincronización en tiempo real. Diseñada para equipos de trabajo local.',
    'project.oasis-web.desc': 'Landing page para que los futuros inquilinos puedan hacer sus recerbas de cabañas',
    'project.3d-viewer.desc': 'Visor de archivos 3D en formato STL, usa la libreria Three para generar el modelo en el navegador',
    'project.weather.desc': 'Dashboard con info climatologica',
    'project.react-notes.desc': 'Aplicacion para guarar ejemplos de codigo de react que guarda los datos en un repo publico de Git',

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Conoce más sobre mi experiencia y habilidades',
    'about.p1': 'Soy desarrollador full-stack con enfoque en la construcción de aplicaciones web modernas, escalables y orientadas a producto. Trabajo principalmente con TypeScript y JavaScript, utilizando Node.js, Express y MongoDB (Mongoose) en el backend, donde implemento autenticación segura, validaciones robustas y arquitecturas bien estructuradas.',
    'about.p2': 'En el frontend desarrollo con React y Next.js, priorizando componentes reutilizables, rendimiento y buenas prácticas de diseño. Tengo experiencia en despliegue en entornos cloud, integración de servicios externos y optimización de bases de datos, siempre con foco en eficiencia, mantenibilidad y calidad de código en entornos productivos.',
    'about.techStack': 'Stack Tecnológico',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.sending': 'Enviando...',
    'contact.send': 'Enviar mensaje',
    'contact.sendingMsg': 'Enviando mensaje...',
    'contact.successMsg': '¡Mensaje enviado con éxito!',
    'contact.errorMsg': 'Error al enviar el mensaje. Intenta nuevamente.',
    'contact.errorFields': 'Por favor, completa todos los campos',
    'contact.errorEmail': 'Email inválido',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang') as Language
    return saved || 'en'
  })

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('lang', next)
      return next
    })
  }

  const t = (key: string) => translations[lang][key] || key

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
