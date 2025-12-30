# Portafolio Web - Desarrollador

Un portafolio web moderno y profesional construido con React, Vite, Tailwind CSS y Framer Motion.

## 🚀 Características

- ⚡ **React + Vite** - Desarrollo rápido y optimizado
- 🎨 **Tailwind CSS** - Estilos modernos y responsive
- 🌙 **Modo Oscuro/Claro** - Con persistencia en localStorage
- ✨ **Framer Motion** - Animaciones suaves y profesionales
- 📧 **EmailJS** - Formulario de contacto sin backend
- 📱 **Completamente Responsive** - Optimizado para todos los dispositivos
- 🚀 **Listo para Producción** - Configurado para Vercel y Netlify

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd portfolio-tynch
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## ⚙️ Configuración

### EmailJS

Para habilitar el formulario de contacto, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla de email
4. Obtén tu Public Key
5. Actualiza las siguientes variables en `src/components/Contact.tsx`:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

### Personalización

- **Proyectos**: Edita `src/data/projects.ts` para agregar tus proyectos
- **Información Personal**: Modifica `src/components/About.tsx` y `src/components/Hero.tsx`
- **Colores**: Personaliza los colores en `tailwind.config.js`

## 🚀 Despliegue

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. ¡Listo! Tu portafolio estará en línea

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`
4. ¡Listo! Tu portafolio estará en línea

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

