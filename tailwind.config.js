// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1A2238',
        'accent-orange': '#FF652F',
        'light-text': '#F7F7F7', // Or a slightly off-white
      },
    },
  },
  plugins: [],
}