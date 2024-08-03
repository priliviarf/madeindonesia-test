/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#645aa0",
          light: "#dcd2eb",
          hover: "#574b9f",
          active: "#7c67ea",
          disabled: "#c7baeb",
        },
        secondary: {
          DEFAULT: "#e0dceb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
