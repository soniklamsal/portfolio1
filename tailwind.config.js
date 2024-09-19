/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  // This specifies the files where Tailwind CSS will be used
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",      // Custom primary color
        secondaryColor: "#091e21",    // Custom secondary color
        smallTextColor: "#193256",    // Custom text color
        headerColor: '#201919'
      },
    },
  },
  plugins: [],
}
