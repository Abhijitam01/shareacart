/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        'bg-primary': '#000000',
        'bg-secondary': '#2E2E2E',
      }
    },
  },
  plugins: [],
}
