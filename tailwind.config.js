module.exports = {
  mode: 'jit',
  purge: ['./{demo,sandbox}/**/*.{ts,vue,html}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        dark: {
          css: {
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            p: {
              color: theme('colors.gray.400'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
