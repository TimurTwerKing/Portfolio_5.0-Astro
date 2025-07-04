/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',     // Móviles modernos
        'tablet': '768px',     // Tablets
        'laptop': '1366px',    // Laptops estándar
        'fhd': '1920px',       // Full HD
        'qhd': '2560px',       // QHD (2K, 1440)
        'uhd': '3840px',       // Ultra HD (4K, 2160p)
      }
    },
  },
  plugins: [],
} 