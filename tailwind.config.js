/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        lightLavender: "hsl(241, 100%, 89%)",
        slateBlue: "hsl(252, 100%, 67%)",
        royalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk"],
      },
    },
  },
  plugins: [],
};
