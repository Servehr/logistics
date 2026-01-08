/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
        colors: {
           CompanyRed: '#dc0000',
          //  NavHoverr: '#f0ecec',
           NavHoverr: '#144e80',
           SubNavHover: 'white',
          //  SubNavHoverr: '#052a4a',
           SubNavHoverr: '#144e80',
           Botin: '#327cb4',
           BackGnd: '#f9e4c942',
           Futer: '#043055',
           FuterBottom: '#f472b6',
           PaginationButton: '#144e80',
           RoleColor: '#9d3b00',
          //  RoleNavColor: '#9d3b00'
          RoleNavColor: '#f82686',
          BottomDiv: '#380061 ',
          TrasParentBG: '#1f1b1b8f',
          CompanyBlue: '#380061'
        },
        fontFamily: {
          Montserrat: "Montserrat"
        },
        margin: {
          'loginTop': '-45px',
        }
    },
    variants: {
      fill: ['hover', 'focus', 'bg'], 
    },
  },
  plugins: [require('tailwind-scrollbar') ],
}

