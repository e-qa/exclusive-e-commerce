import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          xl: '2rem',
        },
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        primary: '#0088cc',
        secondary: '#222529',
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#D3D3D3',
          dark: '#A9A9A9',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
