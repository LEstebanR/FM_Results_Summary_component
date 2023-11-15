/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightLavender: "hsl(241, 100%, 89%)",
        slateBlue: "hsl(252, 100%, 67%)",
        royalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        lightRed: "hsl(0, 100%, 67%)",
        orangeYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk"],
      },
      textColor: {
        lightRed: "hsl(0, 100%, 67%)",
        orangeYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
      backgroundColor: {
        lightRed: "hsl(0, 100%, 67%, 0.1)",
        orangeYellow: "hsl(39, 100%, 56%, 0.1)",
        greenTeal: "hsl(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsl(234, 85%, 45%, 0.1)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
