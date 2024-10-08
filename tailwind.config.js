/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "1000px",
        lg: "2000px",
      },
    },
  },
  plugins: [],
};
