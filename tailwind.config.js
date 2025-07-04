/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Los breakpoints ahora se definen en CSS usando @theme
      // Los tamaños de fuente personalizados se pueden mantener aquí si es necesario
    },
  },
  plugins: [],
} 