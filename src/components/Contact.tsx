import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Enviando mensaje...");

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Por favor, completa todos los campos");
      return;
    }

    // Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setStatusMessage("Email inválido");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setStatusMessage("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage("Error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Nombre */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700"
              placeholder="tu@email.com"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
              required
            />
          </div>

          {/* Estado */}
          {statusMessage && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm ${
                status === "success"
                  ? "bg-green-100 text-green-800"
                  : status === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 rounded-lg bg-primary-600 text-white font-semibold disabled:opacity-50"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
