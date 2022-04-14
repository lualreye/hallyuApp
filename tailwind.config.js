module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(280px, 560px))",
      },
      fontFamily: {
        junegull: ["junegull"],
        open: ['"Open Sans"'],
      },
      colors: {
        primary: "#87C7C9",
        secondary: "#FF98C9",
        textColor: "#4E6F71",
        offerColor: "#8D7DA3",
        yellow: "#FFD95F",
        lightPink: "#FFE0E8",
        background: "#F8FFFF",
        aquamarine: "#D4F1F0",
        hBlack: "#091212",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      inset: {
        "1/6": "16.5%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
