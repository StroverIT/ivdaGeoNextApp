module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
  
      'md': {'min': '768px'},
      // => @media (min-width: 768px ) { ... }
  
      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px ) { ... }
  
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
  
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
