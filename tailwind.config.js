/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '2rem',
        xl: '4.5rem',
        '2xl': '7.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

