/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./web-src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DB954',
        background: '#000000',
        card: '#121212',
        text: '#FFFFFF',
        'text-secondary': '#B3B3B3',
        border: '#282828',
      },
    },
  },
  plugins: [],
}
