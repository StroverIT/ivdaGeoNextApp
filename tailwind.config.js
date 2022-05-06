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
    colors: {
      'bg-color': 'hsl(200, 35%, 92%)',
      'primary-color': 'hsl(215, 80%, 33%)',
      'secondary-color': 'hsl(358, 83%, 56%)',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}

// $primary-color: hsl(215, 80%, 33%);
// $sec-color: hsl(358, 83%, 56%);
// $background-color: hsl(200, 35%, 92%);
// $white-color: hsl(210, 30%, 92%);
// $blue-color:hsl(203, 76%, 48%);
// $red-color: hsl(344, 92%, 58%);
// $orange-color: hsl(33, 89%, 52%);
// $green-color: hsl(92, 50%, 54%);
// $gray-color: hsl(0, 0%, 96%);