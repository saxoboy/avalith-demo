const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Poppins', 'ui-sans-serif','sans-serif'],
    },
    textColor: {
      primary: colors.gray[900],
      secondary: colors.red[600],
      variant: colors.white
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      lineHeight: {
        'extra-loose': '4.5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
