import { motion } from "framer-motion";

const About = () => {
  const techStack = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "Git",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      className="section-container bg-gray-50 dark:bg-gray-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">
          Conoce más sobre mi experiencia y habilidades
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Soy un desarrollador web apasionado por crear experiencias digitales
            modernas y funcionales. Mi enfoque se centra en escribir código
            limpio, mantenible y escalable, utilizando las últimas tecnologías y
            mejores prácticas de la industria.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Me especializo en el desarrollo frontend con React y TypeScript,
            pero también tengo experiencia trabajando con tecnologías backend y
            en la creación de aplicaciones full-stack. Siempre estoy aprendiendo
            nuevas tecnologías y mejorando mis habilidades para ofrecer
            soluciones de calidad.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Cuando no estoy programando, disfruto explorando nuevas
            herramientas, contribuyendo a proyectos open source y compartiendo
            conocimiento con la comunidad de desarrolladores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Stack Tecnológico
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-gray-800 dark:text-gray-200 font-semibold">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
