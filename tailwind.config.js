/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}", 
    "./src/components/**/*.{html,js,jsx,tsx}", // Исправленный путь
    "./src/pages/**/*.{html,js,jsx,tsx}" // Исправленный путь
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // primary: "#297bff", // Добавляем кастомный цвет с именем "primary"
        gray: '#a4a4a4'
      },
      backgroundColor: {
        primary: "#151316", // Добавляем кастомный цвет с именем "primary"
      },
      backgroundImage: {
        buttonGradient: "linear-gradient(99deg, #9c3fe4 0%, #c65647 100%)",
      },
      boxShadow: {
        // custom: "0 2px 6px 0 rgba(178, 178, 178, 0.2)", // Ваше значение
      },

    },
  },
  plugins: [],
}
