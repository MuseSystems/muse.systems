/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "layouts/**/*.html",
      "content/**/*.html",
      "themes/musetheme/layouts/**/*.html",
      "themes/musetheme/config.toml",
      "themes/musetheme/content/**/*.html",
      "themes/musetheme/assets/js/search.js"
    ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            }
          ]
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
