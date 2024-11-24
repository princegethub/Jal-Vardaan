/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
       topheadercolor:"#d0e1fb"

      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'], // Add custom font here
        grover: ['"Irish Grover"', 'cursive'],

      },
    },
  },
  plugins: [],
}