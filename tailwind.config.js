/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./carson/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // strategy 'class': solo afecta a elementos con clases form-* (form-input, etc.)
    // y no cambia el estilo base de los formularios en las demás páginas.
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}
