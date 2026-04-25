/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-warm': '#FF6B35',
        'brand-gold': '#F7931E',
        'brand-cream': '#FFF8F0',
        'brand-dark': '#1F1410',
        'brand-accent': '#FF4757',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#FF6B35',
              foreground: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#F7931E',
              foreground: '#FFFFFF',
            },
          },
        },
      },
    }),
  ],
}
