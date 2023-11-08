/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        primary: '#dbf9f4',
        dark: '#383941',
        secondary: '#93B1A6',
        page: '#2E2F39'
      },
      screens: {
        '2xl': '1328px',
      }
    }
  },
  plugins: [],
}

