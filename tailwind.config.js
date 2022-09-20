/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,php}'],
  theme: {
    container:{
      center: true,
      padding: '12px'
    },
    extend: {
      colors:
      {
        primary : '#0ea5e9',
      },
      fontFamily:{
        inter : ['Inter'],
        dancing : ['Dancing Script'],
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
