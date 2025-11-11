
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kirusa: {
          red: '#D81F26',
          redDark: '#A20000',
          redLight: '#FF4C53',
          yellow: '#FFDF01',
          grey: '#414141',
          lightGrey: '#F9F9F9',
        },
      },
      fontFamily: {
        heading: ['"Proxima Nova"', '"Arial Black"', 'sans-serif'],
        body: ['"Muli"', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        // Primary page background gradient
        'kirusa-gradient':
          'linear-gradient(135deg, #A20000 0%, #D81F26 50%, #FF4C53 100%)',

        // Optional accent gradient for hover or highlights
        'kirusa-accent':
          'linear-gradient(135deg, #D81F26 0%, #FF4C53 100%)',
      },
    },
  },
  plugins: [],
};
