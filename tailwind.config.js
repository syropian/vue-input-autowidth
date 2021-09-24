module.exports = {
  mode: 'jit',
  purge: ['./{demo,sandbox}/**/*.{ts,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
