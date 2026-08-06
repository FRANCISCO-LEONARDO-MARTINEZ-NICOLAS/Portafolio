/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lienzo / Fondos
        dark: '#0f172a',
        card: '#1e293b',
        // Neones (Acentos Mágicos)
        neonCyan: '#22d3ee',
        neonPurple: '#c084fc',
        neonEmerald: '#34d399',
        // Textos
        pearl: '#f1f5f9',
        steel: '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
