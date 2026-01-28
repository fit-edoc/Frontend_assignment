/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{

        head:["head","serif"],
        royal:["royal","serif"],
        cursy:["cursy","serif"]
      }
    },
  },
  plugins: [],
}

