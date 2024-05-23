/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'450px',
        md:'700px',
        lg:'1024px',
        xl:'1440px'
  
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      keyframes: {
        rotateCube: {
          '0%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(90deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '75%': { transform: 'rotateY(270deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateCube: 'rotateCube 10s infinite linear',
        lineMove: 'lineMove 4s linear infinite',
        
      },
    },
  },
  plugins: [],
}