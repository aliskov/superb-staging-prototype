/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury': {
          'charcoal': '#1a1a1a',
          'gold': '#b8934c',
          'silver': '#8e8e8e',
          'cream': '#f8f7f4',
        },
      },
    },
  },
  plugins: [],
}
