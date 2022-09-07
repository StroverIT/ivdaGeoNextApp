const customColors = {
  "bg-color": "#f3f3f3",
  primary: "hsl(215, 80%, 33%)",
  "primary-second": "hsl(215, 80%, 25%)",
  "primary-lighter": "hsl(215, 80%, 60%)",
  "primary-trans": "hsl(215, 80%, 60%, 100%)",
  "primary-0": "hsl(215, 80%, 60%, 15%)",
  secondary: "hsl(358, 83%, 56%)",
  dark: {
    DEFAULT: "hsl(0, 0%, 8%)",
    400: "#686868",
  },
  white: "hsl(0, 0%, 100%)",
  "white-lighter-trans": "hsl(0, 0%, 100%, 30%)",
  blue: "hsl(203, 76%, 48%)",
  orange: "hsl(33, 89%, 52%)",
  green: "hsl(92, 50%, 54%)",
  gray: {
    DEFAULT: "hsl(0, 0%, 85%)",
    100: "#fafafa",

    150: "#ededed",
    200: "#a1a1aa",
    250: "#5a5a5a",
    300: "#f6f6f6",
    350: "#6e6e6e",

    400: "#eee",
    450: "#6f6f6f",
    bord: "#dfdfdf",
    darker: "hsl(0, 0%, 50%)",
  },
  grayBg: "#f0f0f0",
  transparent: "transparent",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { min: "350px" },
      sm: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      smToLg: { min: "640px", max: "1024px" },
      lg: { min: "1024px" },
      "max-lg": { max: "1024px" },
      smToXl: { min: "640px", max: "1280px" },

      xl: { min: "1280px" },

      "2xl": { min: "1536px" },
    },
    colors: customColors,
    backgroundColor: (theme) => ({
      ...theme("colors"),

      color: customColors["bg-color"],
      primary: customColors.primary,
      "primary-lighter": customColors["primary-lighter"],
      "primary-trans": customColors["primary-trans"],
      secondary: customColors.secondary,
      dark: customColors.dark,
      white: customColors.white,
      blue: customColors.blue,
      orange: customColors.orange,
      green: customColors.green,
      gray: customColors.gray,
      "gray-darker": customColors["gray-darker"],
      transparent: customColors.transparent,
    }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "min(100% - 2rem, 1300px);",
        },
      });
    },
  ],
};
