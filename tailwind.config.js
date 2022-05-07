const customColors = {
  'bg-color': 'hsl(200, 35%, 92%)',
  'primary-color': 'hsl(215, 80%, 33%)',
  'secondary-color': 'hsl(358, 83%, 56%)',
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }
  
      'md': {'min': '768px'},
  
      'lg': {'min': '1024px'},
  
      'xl': {'min': '1280px'},
  
      '2xl': {'min': '1536px'},
    },
    colors: customColors,
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': customColors["primary-color"],
      'secondary': customColors["secondary-color"],
      'danger': '#e3342f',
     }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    function ({addComponents}){
      addComponents({
        ".container": {
        width:  "min(100% - 2rem, 1200px);",

        }
      })
    }
  ],
}

