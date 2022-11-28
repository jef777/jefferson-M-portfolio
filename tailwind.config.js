/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        ebonyClay: '#23283E',
        periwinkle: '#CDCDFF',
        abbey: '#4DB5FF',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        Comfortaa: ['Comfortaa', 'cursive'],
      },
      content: {},
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
