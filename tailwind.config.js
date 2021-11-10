module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '0.8': '10px',
        '1.1': '13px'
      },
      width: {
        '1': '458px',
        '2': '1130px'
      },
      colors: {
        mainColor: '#212121',
        btnBlue: '#24599C',
        btnGrey: "#E9EEF5",
        labelColor: '#48525F',
        linkColor: '#24599C',
        greenColor: '#3BC38E',
        yellowColor: '#E19F27',
        boxBgColor: '#F9FAFB',
        boxGrey: '#9FA6B1',
      },
      fontFamily: {
        'mainFont': ['Almarai', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
