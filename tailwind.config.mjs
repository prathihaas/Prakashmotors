/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nhBlue: '#001489',
        nhBlueDark: '#000E5C',
        nhYellow: '#FFD100',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}