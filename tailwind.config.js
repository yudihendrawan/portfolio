/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,php}'],
  theme: {
    extend: {
      colors:
      {
        primary : '#0ea5e9',
      },
      fontFamily:{
        inter : ['Inter'],
      },
    },
  },
  plugins: [],
}
