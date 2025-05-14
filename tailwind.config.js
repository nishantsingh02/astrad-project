module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // make sure your files are included
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 30s linear infinite',
      }
    }
  },
  plugins: [],
}
