/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        ash: '#b2beb5',
        royalBlue: '#4169e1',
        greenYellow : '#e1b941'
      },
    },
  },
  plugins: [],
}

