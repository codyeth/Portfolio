import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // RGB channel format so Tailwind opacity modifiers work (e.g. bg-stroke/50)
        bg:      'rgb(var(--bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        text:    'rgb(var(--text-rgb) / <alpha-value>)',
        muted:   'rgb(var(--muted-rgb) / <alpha-value>)',
        accent:  'rgb(var(--accent-rgb) / <alpha-value>)',
        stroke:  'rgb(var(--stroke-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
