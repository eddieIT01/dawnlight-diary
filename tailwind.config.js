/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: '#8B5C2A', // brown like wood
        sunlight: '#FFD600', // bright yellow
        nature: '#14532D', // dark green
      },
    },
  },
  plugins: [],
};
