import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import path from './tailwind-default.config.js'
// import confg  from './tailwind.config.js'

// https://vite.dev/config/
export default defineConfig({
  content : [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        affff: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
  },
  variants: {},
  plugins: [react() ,tailwindcss()],
})
