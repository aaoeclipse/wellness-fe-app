/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        fdark: "#3D3AB0",
        flight: "#4B47FC",
        base: "#E9FC3A",
        sdark: "#B01790",
        slight: "#FC2DD1"

      }
    },
  },
  plugins: [require('@tailwindcss/forms'),
],
}

