/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/images/Rectangle 1.png')",
        'sajek-image': "url('./assets/images/Sajek.png')",
        'sreemongol-image': "url('./assets/images/Sreemongol.png')",
        'sundorbon-image': "url('./assets/images/sundorbon.png')",
      },
      colors: {
        'guru-color': '#F9A51A',
      },
    },
  },
  plugins: [],
}
