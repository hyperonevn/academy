import React from 'react'

export const HeaderBadge: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/70 dark:bg-gray-800/70 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs border border-gray-300/50 dark:border-gray-700 shadow-sm z-50 backdrop-blur-sm transition-colors duration-300">
      <span className="text-gray-600 dark:text-gray-300">Powered by</span>
      <a
        href="https://hyperonevn.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-0.5 font-bold text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
      >
        <span className="bg-gradient-to-r from-[#00B8FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
          HYPER
        </span>
        ONE
      </a>
      <span className="hidden sm:inline text-gray-500 dark:text-gray-400 font-medium">
        · AI for Humanity
      </span>
    </div>
  )
}
