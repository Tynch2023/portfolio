import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-2 py-1 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </motion.button>
  )
}

export default LanguageToggle
