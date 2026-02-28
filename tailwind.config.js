export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',/*#4640DE*/ 
        secondary: '#26A4FF',
        'dark-navy': '#202430',
        'body-gray': '#515B6F',
        'surface-light': '#F8F8FD',
      },
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        subheading: ['Epilogue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      borderRadius: {
        'xl': '12px',
      }
    },
  },
  plugins: [],
}

