/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    padding: {
      main: "40px",
    },
    extend: {
      backgroundColor: {
        "bg-brown-main-50": "#8B7D6B",
      },
      colors: {
        "color-cray-200": "#409EFF",
      },
    },
  },
  plugins: [],
}

