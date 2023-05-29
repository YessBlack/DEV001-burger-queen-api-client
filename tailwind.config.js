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
      'gray-color': 'rgb(184, 182, 182)',
      'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      'border-input': '#f4e98f',
      'button-primary-color': '#73C089',
      'button-secondary-color': '#FF8540',
      'button-tertiary-color': '#FC4F2D'
    },
    extend: {
      backgroundImage: {
        'background-login': "url('/public/images/background-login.webp')"
      },
      gridTemplateColumns: {
        '2-menu': '2fr 1fr'
      }
    },
    fontFamily: {
      'league-gothic': ['League Gothic', 'sans-serif'],
      'maven-pro': ['Maven Pro', 'sans-serif']
    }
  },
  plugins: []
}
