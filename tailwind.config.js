const customColors = {
  'bg-color': 'hsl(200, 35%, 92%)',
  'primary': 'hsl(215, 80%, 33%)',
  'primary-lighter': 'hsl(215, 80%, 60%)',
  'secondary': 'hsl(358, 83%, 56%)',
  "dark": "hsl(0, 0%, 8%)",
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
      "color": customColors["bg-color"],
      'primary': customColors.primary,
      'primary-lighter': customColors["primary-lighter"],
      'secondary': customColors.secondary,
      'dark': customColors.dark,
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

