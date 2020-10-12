const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          a: {
            color: theme('colors.purple.600'),
            '&:hover': {
              color: theme('colors.purple.800'),
            },
          },
        },
      },
    }),
    extend: {
      // fontFamily: {
      //   sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  variants: {},
  purge: {
    content: [
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
  ]},
  plugins: [require("@tailwindcss/typography")],
};
