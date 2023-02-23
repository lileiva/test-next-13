/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",

    // Or if using `src` directory:
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
