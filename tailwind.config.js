module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "375px",
        desktop: "1440px",
      },

      colors: {
        primary: {
          "Light-cyan": "hsl(193, 38%, 86%)",
          "Neo-Green": "hsl(150, 100%, 66%)",
        },

        neutral: {
          "Grayish-blue": "hsl(217, 19%, 38%)",
          "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
          "Dark-Blue": "hsl(218, 23%, 16%)",
        },
      },

      fontSize: {
        quote: "28px",
      },

      fontFamily: {
        main: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
