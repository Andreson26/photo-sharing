/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     /* colors: {
        light: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        dark: {
          100: '#333333',
          200: '#424242',
          300: '#616161',
          400: '#757575',
          500: '#9e9e9e',
          600: '#bdbdbd',
          700: '#e0e0e0',
          800: '#eeeeee',
          900: '#f5f5f5',
        },
      },*/
    },
  },
  variants: {},
  plugins: [],
}
//In this example, two color palettes are defined in the colors section of the configuration file: light and dark. These color palettes contain different shades of gray and are used to set the background colors in the Header component.

//That's it!





