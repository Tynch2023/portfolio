import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // IMPORTANTE: El usuario debe configurar estas variables con sus credenciales de EmailJS
  // Puede obtenerlas desde https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setStatusMessage('Enviando mensaje...')

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setStatusMessage('Por favor, completa todos los campos')
      return
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setStatusMessage('Por favor, ingresa un email válido')
      return
    }

    try {
      // Verificar si las credenciales están configuradas
      if (
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error(
          'Por favor, configura las credenciales de EmailJS en el componente Contact.tsx'
        )
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setStatusMessage('¡Mensaje enviado con éxito! Te responderé pronto.')
      setFormData({ name: '', email: '', message: '' })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
        setStatusMessage('')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setStatusMessage(
        'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente por email.'
      )
    }
  }

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
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${
                status === 'success'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                  : status === 'error'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
              }`}
            >
              {statusMessage}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

