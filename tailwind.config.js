/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        '16': 'repeat(16, minmax(4, 6rem))',

        // Complex site-specific row configuration
        'layout': '200px minmax(7rem, auto) 100px',
    },
  },
  plugins: [],
}
}