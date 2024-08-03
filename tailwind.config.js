/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#645aa0",
          light: "#dcd2eb",
        },
        secondary: {
          DEFAULT: "#f0aaa5",
        },
      },
    },
  },
  plugins: [],
};
