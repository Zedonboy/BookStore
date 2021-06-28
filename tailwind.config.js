module.exports = {
  mode: "jit",
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink-bg': '#f6e8de',
        'grey': "#363c4a"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
