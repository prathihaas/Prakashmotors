/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

// Brand tokens mirror src/styles/tokens.css.
// Source of truth: computed styles on agriculture.newholland.com/en/india (Aug 2026).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nh: {
          navy: '#00205B',
          navyDeep: '#001640',
          navyInk: '#000D26',
          blue: '#003E85',
          yellow: '#F1B514',
          yellowDeep: '#D29C07',
          red: '#E20026',
        },
        ink: '#101820',
        muted: '#55606B',
        muted2: '#7B858F',
        paper: '#FFFFFF',
        paper2: '#F4F5F7',
        paper3: '#E9EBEF',
        rule: '#DCDEE2',
        ruleStrong: '#B9BEC6',
        wa: '#25D366',
        waDeep: '#1DA851',

        // Legacy aliases — pages not yet migrated keep compiling, but now
        // render the correct New Holland values instead of the old off-brand ones.
        nhBlue: '#00205B',
        nhBlueDark: '#001640',
        nhYellow: '#F1B514',
      },
      fontFamily: {
        sans: ['Lato', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Lato', 'Segoe UI', 'system-ui', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'Lato', 'sans-serif'],
      },
      borderRadius: {
        // New Holland is square. Nothing rounds except status dots.
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '999px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
        button: '0.06em',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        in: 'cubic-bezier(0.5, 0, 0.9, 0.4)',
        'in-out': 'cubic-bezier(0.6, 0, 0.2, 1)',
      },
    },
  },
  plugins: [typography],
}
