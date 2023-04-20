/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      white: '#ffffff',
      'primary-color': '#FFBD59',
      'gray-color': '#AAA2A2'
    },
    extend: {
      backgroundImage: {
        'background-login': "url('/public/images/background-login.webp')"
      }
    },
    fontFamily: {
      'league-gothic': ['League Gothic', 'sans-serif'],
      'maven-pro': ['Maven Pro', 'sans-serif']
    }
  },
  plugins: []
}
