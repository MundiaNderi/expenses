/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
      sm: '375px',
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
        redBalance: 'hsla(10, 79%, 64%, 1)'
      },
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        redhat: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
} 
}