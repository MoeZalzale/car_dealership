/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    extend: {
      colors: {
        main: "#0284c7"
      },
    },
  },
  plugins: [],
}
