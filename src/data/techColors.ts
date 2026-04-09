export const techColors: Record<string, { bg: string; text: string; border: string }> = {
  'Git':          { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-300 dark:border-orange-700' },
  'React':        { bg: 'bg-cyan-100 dark:bg-cyan-900/30',    text: 'text-cyan-700 dark:text-cyan-300',     border: 'border-cyan-300 dark:border-cyan-700' },
  'Js':           { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300', border: 'border-yellow-300 dark:border-yellow-700' },
  'TypeScript':   { bg: 'bg-blue-100 dark:bg-blue-900/30',    text: 'text-blue-700 dark:text-blue-300',     border: 'border-blue-300 dark:border-blue-700' },
  'Next.js':      { bg: 'bg-gray-100 dark:bg-gray-700/50',    text: 'text-gray-800 dark:text-gray-200',     border: 'border-gray-400 dark:border-gray-500' },
  'Next':         { bg: 'bg-gray-100 dark:bg-gray-700/50',    text: 'text-gray-800 dark:text-gray-200',     border: 'border-gray-400 dark:border-gray-500' },
  'Node.js':      { bg: 'bg-green-100 dark:bg-green-900/30',  text: 'text-green-700 dark:text-green-300',   border: 'border-green-300 dark:border-green-700' },
  'Tailwind CSS': { bg: 'bg-sky-100 dark:bg-sky-900/30',      text: 'text-sky-700 dark:text-sky-300',       border: 'border-sky-300 dark:border-sky-700' },
  'CSS':          { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-300 dark:border-indigo-700' },
  'MongoDB':      { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-300 dark:border-emerald-700' },
  'Supabase':     { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-300 dark:border-emerald-700' },
  'Tanstack':     { bg: 'bg-red-100 dark:bg-red-900/30',      text: 'text-red-700 dark:text-red-300',       border: 'border-red-300 dark:border-red-700' },
  'Recharts':     { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-300 dark:border-violet-700' },
  'three':        { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', text: 'text-fuchsia-700 dark:text-fuchsia-300', border: 'border-fuchsia-300 dark:border-fuchsia-700' },
  'Vite':         { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-300 dark:border-purple-700' },
  'leaflet':      { bg: 'bg-lime-100 dark:bg-lime-900/30',    text: 'text-lime-700 dark:text-lime-300',     border: 'border-lime-300 dark:border-lime-700' },
}

const defaultColor = { bg: 'bg-gray-100 dark:bg-gray-700/40', text: 'text-gray-700 dark:text-gray-300', border: 'border-gray-300 dark:border-gray-600' }

const colorCache = new Map<string, { bg: string; text: string; border: string }>()

export function getTechColor(tech: string) {
  if (colorCache.has(tech)) {
    return colorCache.get(tech)!
  }
  const color = techColors[tech] || defaultColor
  colorCache.set(tech, color)
  return color
}
