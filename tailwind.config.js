/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        softRed: 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        darkBrown: 'hsl(25, 47%, 15%)',
        mediumBrown: 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        paleOrange: 'hsl(33, 100%, 98%)',
        redBalance: 'hsla(10, 79%, 64%, 1)',
        hrCream: 'hsla(27, 66%, 92%, 1)',
        mediumBrown: 'hsla(27, 10%, 52%, 1)'
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
} 
}