/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      // => @media (min-width: 320px)
      'mobile-xl': '480px',
      // => @media (min-width: 460px)
      sm: '640px',
      // => @media (min-width: 640px)
      md: '768px',
      // => @media (min-width: 768px)
      lg: '1024px',
      // => @media (min-width: 1024px)
      xl: '1280px',
      // => @media (min-width: 1280px)
      '2xl': '1536px',
      // => @media (min-width: 1536px)
    },

    extend: {
      colors: {
        primary: '#3b4144',
        slategray: '#828E9C',
        slategray2: '#838f9d',
        slategray3: '#5b6672',
        richblack: '#03202E',
        richblack2: '#00050a',
        richblack3: '#001523',
        richblack4: '#000e1a',
        richblack5: '#000710',
        richblack6: '#001a2a',
        blue: '#062536',
        darkcyan: '#048f7f',
        darkcyan2: '#0ec4a8',
        darkcyan3: '#014D4B',
        darkGreen: '#207039',
        green1: '#11562E',
        green2: '#1A7136',
        pinegreen: '#0d776b',
        huntergreen: '#135b2d',
        viridian1: '#0C8E7E',
        viridian2: '#16C3A6',
        viridian3: '#086B66',
        author: '#5c6875',
        red: '#FF4726',
        gold: '#C6AB3D',
        platinum: '#dfe1e2',
        gray: '#828E9C',
        gray1: '#A7AFB5',
        gray2: '#9fa4a8',
        gray3: '#4b5763',
      },
    },
    fontFamily: {
      bold: ['FontBold', 'sans-serif'],
      regular: ['FontRegular', 'sans-serif'],
    },
  },
  plugins: [],
};
