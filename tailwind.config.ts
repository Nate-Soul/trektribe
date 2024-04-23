import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        "primary-50": "#5dc9ff",
        "primary-100": "#48c2ff",
        "primary-200": "#1fb4ff",
        "primary-300": "#00a3f6",
        "primary-400": "#0088cd",
        "primary-500": "#006da4",
        "primary-600": "#00486c",
        "primary-700": "#002b34",
        "primary-800": "#000000",
        "primary-900": "#000000",
        "primary-950": "#000000",
        "secondary-500": "#072448",
        "light-300": "#C3C3C3",
        "light-400": "#D1D3D4",
        "light-500": "#E8E8E8",
        "light-600": "#a3a3a4",
        "light-700": "#969899",
        "dark-300": "#3A4B60",
        "dark-500": "#474747"
      },
      fontFamily: {
        alvenir: ['var(--font-alvenir)'],
        bellefair: ['var(--font-bellefair)'],
      },
      boxShadow: {
        'custom': '0 0 4px 0 rgba(195, 166, 160, .60)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
      },
    },
  },
  plugins: [],
};
export default config;
