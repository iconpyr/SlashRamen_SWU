/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'machineBody': '#f9f6ef',
        'tea': {  DEFAULT: '#C0B9AA',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#F4F3F0',  300: '#E3E0D9',  400: '#D1CCC1',  500: '#C0B9AA',  600: '#A89E8A',  700: '#8F846A',  800: '#6F6652',  900: '#4F493B',  950: '#3F3A2F'},
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
};
