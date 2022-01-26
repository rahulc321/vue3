const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*.html', "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1280px',
      '2xl': '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          'tablet': '40px ',
          'DEFAULT': '20px ',
          'desktop': '40px',
          '2xl': '121px',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
      scale: {
        '-1': '-1',
      },
      backgroundImage: {
        login: `url('/assets/images/login_bg.jpg')`,
      },
      maxWidth: {
        'card': '272px',
        'card-tab': '390px',
        'card-desktop': '320px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      'dark-blue': '#003A9B',
      'light-blue': '#449BEC',
      'trail-dark': '#231D4F',
      'trail-tail': '#DCF6FF'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}